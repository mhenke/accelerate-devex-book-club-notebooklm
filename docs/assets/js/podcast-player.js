/**
 * Podcast Playlist Player
 * Simple, clean state management for compact playlist
 * Includes media caching and prefetching
 */

(function () {
  'use strict';

  let currentTrack = null;

  // Media cache: store metadata and preload hints
  const mediaCache = {
    tracks: new Map(),
    prefetched: new Set(),

    // Store track info for quick lookup
    set(src, data) {
      this.tracks.set(src, { ...data, timestamp: Date.now() });
    },

    get(src) {
      return this.tracks.get(src);
    },

    // Prefetch audio (resource hint only, don't load into memory)
    prefetch(src) {
      if (this.prefetched.has(src)) {return;}

      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      link.as = 'audio';
      document.head.appendChild(link);
      this.prefetched.add(src);
    },

    // Preload next track in sequence
    preloadNext(currentIndex, allTracks) {
      if (currentIndex + 1 < allTracks.length) {
        const nextSrc = allTracks[currentIndex + 1].getAttribute('data-src');
        if (nextSrc) {this.prefetch(nextSrc);}
      }
    }
  };

  function init() {
    const player = document.getElementById('shared-player');
    const playerSource = document.getElementById('shared-player-source');
    const nowPlayingTitle = document.getElementById('now-playing-title');
    const playlistContainer = document.querySelector('.playlist-player');
    const tracks = document.querySelectorAll('.podcast-item[data-src]');

    if (!player || !tracks.length) {
      return;
    }

    // Prefetch all track URLs for better performance
    tracks.forEach((track, index) => {
      const src = track.getAttribute('data-src');
      const title = track.getAttribute('data-title');
      const duration = track.getAttribute('data-duration');

      // Cache metadata
      if (src) {
        mediaCache.set(src, { title, duration, index });

        // Prefetch audio resources (browser-controlled, non-blocking)
        mediaCache.prefetch(src);
      }
    });

    // Load first track by default
    loadTrack(tracks[0]);

    // Add click handlers to all tracks
    tracks.forEach((track, index) => {
      const playBtn = track.querySelector('.play-btn');
      const src = track.getAttribute('data-src');
      const title = track.getAttribute('data-title');

      // Click on play button
      if (playBtn) {
        playBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          handlePlayPause(track, src, title);
          mediaCache.preloadNext(index, tracks);
        });
      }

      // Click on track row
      track.addEventListener('click', () => {
        handlePlayPause(track, src, title);
        mediaCache.preloadNext(index, tracks);
      });

      // Keyboard support
      track.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePlayPause(track, src, title);
          mediaCache.preloadNext(index, tracks);
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
      // Clear previous track and reset its play icon
      if (currentTrack) {
        currentTrack.classList.remove('is-playing');
        updatePlayButtonIcon(currentTrack, false);
      }

      // Set new track
      currentTrack = track;

      // Update player source if provided
      if (src) {
        playerSource.src = src;
        player.load();
      }

      // Update Now Playing display (title only)
      const trackTitle = title || track.getAttribute('data-title');
      if (nowPlayingTitle) {
        nowPlayingTitle.textContent = trackTitle;
      }
    }

    // Update the play/pause icon inside a track's .play-btn
    function updatePlayButtonIcon(track, playing) {
      if (!track) { return; }
      const btn = track.querySelector('.play-btn');
      if (!btn) { return; }
      const em = btn.querySelector('em');
      const title = track.getAttribute('data-title') || '';

      if (playing) {
        // show pause
        if (em) {
          em.classList.remove('fa-play');
          em.classList.add('fa-pause');
        }
        btn.setAttribute('aria-label', `Pause ${title}`);
      } else {
        // show play
        if (em) {
          em.classList.remove('fa-pause');
          em.classList.add('fa-play');
        }
        btn.setAttribute('aria-label', `Play ${title}`);
      }
    }

    // Player event: Play
    player.addEventListener('play', () => {
      if (playlistContainer) {
        playlistContainer.classList.add('is-playing');
      }
      if (currentTrack) {
        currentTrack.classList.add('is-playing');
        updatePlayButtonIcon(currentTrack, true);
      }
    });

    // Player event: Pause
    player.addEventListener('pause', () => {
      if (playlistContainer) {
        playlistContainer.classList.remove('is-playing');
      }
      if (currentTrack) {
        currentTrack.classList.remove('is-playing');
        updatePlayButtonIcon(currentTrack, false);
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

    // Removed: time display and related event listeners (timeupdate, loadedmetadata)
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
