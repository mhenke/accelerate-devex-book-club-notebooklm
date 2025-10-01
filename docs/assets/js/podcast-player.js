/**
 * Material Design 3 Compact Podcast Playlist
 * Simplified state management - matches media controls behavior
 *
 * Visual States:
 * - Playlist buttons: Play/Pause only (no equalizer)
 * - Now Playing area: Shows equalizer when playing
 * - Both interfaces stay in perfect sync
 */

(function () {
  'use strict';

  let currentItem = null;

  /**
   * Initialize compact podcast playlist functionality
   */
  function initPodcastPlaylist() {
    const sharedPlayer = document.getElementById('shared-player');
    const sharedPlayerSource = document.getElementById('shared-player-source');
    const nowPlayingTitle = document.getElementById('now-playing-title');
    const nowPlayingTime = document.getElementById('now-playing-time');
    const playlistPlayer = document.querySelector('.playlist-player');
    const podcastItems = document.querySelectorAll('.podcast-item[data-src]');

    if (!sharedPlayer || !podcastItems.length) {
      return; // No playlist on this page
    }

    // Preset first episode as current
    currentItem = podcastItems[0];
    currentItem.classList.add('is-current');
    updateNowPlayingDisplay();

    // Add click handlers to playlist items and play buttons
    podcastItems.forEach((item) => {
      const src = item.getAttribute('data-src');
      const title = item.getAttribute('data-title');
      const playBtn = item.querySelector('.play-btn');

      // Click handler on play button
      if (playBtn) {
        playBtn.addEventListener('click', function (e) {
          e.stopPropagation(); // Prevent item click
          handlePlayPause(src, title, item);
        });
      }

      // Click handler on item row
      item.addEventListener('click', function () {
        handlePlayPause(src, title, item);
      });

      // Keyboard support - Enter/Space to play
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handlePlayPause(src, title, item);
        }
      });
    });

    /**
     * Handle play/pause toggle
     */
    function handlePlayPause(src, title, item) {
      // If clicking same item that's currently playing
      if (currentItem === item && !sharedPlayer.paused) {
        sharedPlayer.pause();
        return;
      }

      // If clicking same item that's paused
      if (currentItem === item && sharedPlayer.paused) {
        sharedPlayer.play();
        return;
      }

      // Load and play new track
      loadTrack(src, title, item);
      sharedPlayer.play();
    }

    /**
     * Load a track into the shared player
     */
    function loadTrack(src, title, item) {
      // Update player source
      sharedPlayerSource.src = src;
      sharedPlayer.load();

      // Deactivate previous item
      if (currentItem && currentItem !== item) {
        currentItem.classList.remove('is-current');
        currentItem.classList.remove('is-playing');
      }

      // Set new current item
      currentItem = item;
      currentItem.classList.add('is-current');

      // Update Now Playing display
      updateNowPlayingDisplay();
    }

    /**
     * Update Now Playing title and time display
     */
    function updateNowPlayingDisplay() {
      if (!currentItem) {return;}

      const title = currentItem.getAttribute('data-title');
      const duration = currentItem.getAttribute('data-duration');

      if (nowPlayingTitle) {
        nowPlayingTitle.textContent = title;
      }

      if (nowPlayingTime && duration) {
        nowPlayingTime.textContent = `0:00 / ${duration}`;
      }
    }

    /**
     * Update time display as audio plays
     */
    function updateTimeDisplay() {
      if (!sharedPlayer || !nowPlayingTime) {return;}

      const currentTime = formatTime(sharedPlayer.currentTime);
      const duration =
        sharedPlayer.duration && !isNaN(sharedPlayer.duration)
          ? formatTime(sharedPlayer.duration)
          : currentItem?.getAttribute('data-duration') || '0:00';

      nowPlayingTime.textContent = `${currentTime} / ${duration}`;
    }

    /**
     * Format seconds to M:SS or H:MM:SS
     */
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

    // Shared player event listeners
    sharedPlayer.addEventListener('play', function () {
      // Show equalizer in Now Playing area
      if (playlistPlayer) {
        playlistPlayer.classList.add('is-playing');
      }

      // Mark current episode as playing
      if (currentItem) {
        currentItem.classList.add('is-playing');
        console.log('Play event - Classes:', currentItem.className);
      } else {
        // User played from audio controls - activate first episode
        currentItem = podcastItems[0];
        currentItem.classList.add('is-current');
        currentItem.classList.add('is-playing');
        console.log('Play event (from controls) - Classes:', currentItem.className);
        updateNowPlayingDisplay();
      }
    });

    sharedPlayer.addEventListener('pause', function () {
      // Hide equalizer in Now Playing area
      if (playlistPlayer) {
        playlistPlayer.classList.remove('is-playing');
      }

      // Update current episode button to pause icon
      if (currentItem) {
        currentItem.classList.remove('is-playing');
      }
    });

    sharedPlayer.addEventListener('ended', function () {
      // Hide equalizer
      if (playlistPlayer) {
        playlistPlayer.classList.remove('is-playing');
      }

      // Reset current item state
      if (currentItem) {
        currentItem.classList.remove('is-playing');
      }
    });

    // Update time display every 100ms while playing
    sharedPlayer.addEventListener('timeupdate', updateTimeDisplay);

    // Update duration when metadata loads
    sharedPlayer.addEventListener('loadedmetadata', updateTimeDisplay);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPodcastPlaylist);
  } else {
    initPodcastPlaylist();
  }
})();
