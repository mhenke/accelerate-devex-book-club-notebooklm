/**
 * Material Design 3 Compact Podcast Playlist with Shared Player
 * Manages shared audio player and playlist item interactions
 *
 * Three-State Rotation:
 * 1. Idle: Play button
 * 2. Playing: Animated equalizer (replaces button)
 * 3. Paused: Pause button
 * 4. Resume: Back to equalizer
 *
 * Features:
 * - Single shared player for all episodes
 * - Click-to-play list items
 * - Visual state rotation: play → equalizer → pause → equalizer
 * - Keyboard navigation support
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
    const nowPlayingText = document.getElementById('now-playing-text');
    const podcastItems = document.querySelectorAll('.podcast-item[data-src]');

    if (!sharedPlayer || !podcastItems.length) {
      return; // No playlist on this page
    }

    // Preset first episode as current (already loaded in HTML)
    currentItem = podcastItems[0];

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
     * Handle play/pause toggle with three states
     */
    function handlePlayPause(src, title, item) {
      // If clicking same item that's currently active
      if (currentItem === item) {
        if (!sharedPlayer.paused) {
          // State: Playing → Paused
          // Show pause button, hide equalizer
          sharedPlayer.pause();
          item.classList.add('paused');
          item.classList.add('playing'); // Keep playing class for pause button
        } else {
          // State: Paused → Playing (resume)
          // Show equalizer again, hide pause button
          sharedPlayer.play();
          item.classList.remove('paused');
        }
        return;
      }

      // Load and play new track
      // State: Idle → Playing
      // Show equalizer
      loadTrack(src, title, item);
      sharedPlayer.play();
    }

    // Shared player event listeners
    sharedPlayer.addEventListener('play', function () {
      if (currentItem) {
        activateItem(currentItem);
        // Show equalizer (remove paused state)
        currentItem.classList.remove('paused');
      } else {
        // User played from audio controls without clicking episode
        // Activate first episode
        currentItem = podcastItems[0];
        activateItem(currentItem);
      }
    });

    sharedPlayer.addEventListener('pause', function () {
      if (currentItem) {
        // Show pause button (add paused state)
        currentItem.classList.add('paused');
      }
    });

    sharedPlayer.addEventListener('ended', function () {
      // Deactivate current item
      if (currentItem) {
        deactivateItem(currentItem);
      }

      // Optional: Auto-play next episode
      // autoPlayNext(podcastItems);
    });

    /**
     * Load a track into the shared player
     */
    function loadTrack(src, title, item) {
      // Update player source
      sharedPlayerSource.src = src;
      sharedPlayer.load();

      // Update "Now Playing" label
      if (nowPlayingText) {
        nowPlayingText.textContent = title;
      }

      // Deactivate previous item
      if (currentItem && currentItem !== item) {
        deactivateItem(currentItem);
      }

      // Set new current item
      currentItem = item;
    }

    /**
     * Activate a playlist item (show as playing)
     */
    function activateItem(item) {
      item.classList.add('playing');
      item.classList.remove('paused'); // Ensure we show equalizer, not pause button
      item.setAttribute('aria-current', 'true');
    }

    /**
     * Deactivate a playlist item
     */
    function deactivateItem(item) {
      item.classList.remove('playing');
      item.classList.remove('paused');
      item.setAttribute('aria-current', 'false');
    }

    /**
     * Auto-play next episode in playlist (optional feature)
     */
    function autoPlayNext(items) {
      if (!currentItem) {
        return;
      }

      const currentIndex = Array.from(items).indexOf(currentItem);
      const nextIndex = currentIndex + 1;

      if (nextIndex < items.length) {
        const nextItem = items[nextIndex];
        const src = nextItem.getAttribute('data-src');
        const title = nextItem.getAttribute('data-title');

        loadTrack(src, title, nextItem);
        sharedPlayer.play();
      }
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPodcastPlaylist);
  } else {
    initPodcastPlaylist();
  }
})();
