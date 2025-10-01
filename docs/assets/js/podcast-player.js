/**
 * Podcast Playlist Player
 * Simple, clean state management for compact playlist
 */

(function () {
  'use strict';

  let currentTrack = null;

  function init() {
    const player = document.getElementById('shared-player');
    const playerSource = document.getElementById('shared-player-source');
    const nowPlayingTitle = document.getElementById('now-playing-title');
    const nowPlayingTime = document.getElementById('now-playing-time');
    const playlistContainer = document.querySelector('.playlist-player');
    const tracks = document.querySelectorAll('.podcast-item[data-src]');

    if (!player || !tracks.length) {
      return;
    }

    // Load first track by default
    loadTrack(tracks[0]);

    // Add click handlers to all tracks
    tracks.forEach((track) => {
      const playBtn = track.querySelector('.play-btn');
      const src = track.getAttribute('data-src');
      const title = track.getAttribute('data-title');

      // Click on play button
      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          handlePlayPause(track, src, title);
        });
      }

      // Click on track row
      track.addEventListener('click', () => {
        handlePlayPause(track, src, title);
      });

      // Keyboard support
      track.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePlayPause(track, src, title);
        }
      });
    });

    // Handle play/pause toggle
    function handlePlayPause(track, src, title) {
      // Same track - toggle play/pause
      if (currentTrack === track) {
        if (player.paused) {
          player.play();
        } else {
          player.pause();
        }
        return;
      }

      // Different track - load and play
      loadTrack(track, src, title);
      player.play();
    }

    // Load track into player
    function loadTrack(track, src, title) {
      // Clear previous track
      if (currentTrack) {
        currentTrack.classList.remove('is-playing');
      }

      // Set new track
      currentTrack = track;

      // Update player source if provided
      if (src) {
        playerSource.src = src;
        player.load();
      }

      // Update Now Playing display
      const trackTitle = title || track.getAttribute('data-title');
      const duration = track.getAttribute('data-duration');

      if (nowPlayingTitle) {
        nowPlayingTitle.textContent = trackTitle;
      }

      if (nowPlayingTime && duration) {
        nowPlayingTime.textContent = `0:00 / ${duration}`;
      }
    }

    // Player event: Play
    player.addEventListener('play', () => {
      if (playlistContainer) {
        playlistContainer.classList.add('is-playing');
      }
      if (currentTrack) {
        currentTrack.classList.add('is-playing');
      }
    });

    // Player event: Pause
    player.addEventListener('pause', () => {
      if (playlistContainer) {
        playlistContainer.classList.remove('is-playing');
      }
      if (currentTrack) {
        currentTrack.classList.remove('is-playing');
      }
    });

    // Player event: Ended
    player.addEventListener('ended', () => {
      if (playlistContainer) {
        playlistContainer.classList.remove('is-playing');
      }
      if (currentTrack) {
        currentTrack.classList.remove('is-playing');
      }
    });

    // Update time display
    player.addEventListener('timeupdate', () => {
      if (!nowPlayingTime) {return;}

      const current = formatTime(player.currentTime);
      const total = player.duration && !isNaN(player.duration)
        ? formatTime(player.duration)
        : currentTrack?.getAttribute('data-duration') || '0:00';

      nowPlayingTime.textContent = `${current} / ${total}`;
    });

    // Update duration when metadata loads
    player.addEventListener('loadedmetadata', () => {
      if (!nowPlayingTime) {return;}

      const current = formatTime(player.currentTime);
      const total = formatTime(player.duration);

      nowPlayingTime.textContent = `${current} / ${total}`;
    });

    // Format seconds to M:SS or H:MM:SS
    function formatTime(seconds) {
      if (!seconds || isNaN(seconds)) {return '0:00';}

      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);

      if (h > 0) {
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
      }
      return `${m}:${s.toString().padStart(2, '0')}`;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
