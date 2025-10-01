/**
 * Material Design 3 Compact Podcast Playlist with Shared Player
 * Manages shared audio player and playlist item interactions
 *
 * Features:
 * - Single shared player for all episodes
 * - Click-to-play list items
 * - Visual playing state with animated equalizer
 * - Keyboard navigation support
 * - Auto-advance to next episode (optional)
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
    const podcastItems = document.querySelectorAll('.podcast-item[data-src]');

    if (!sharedPlayer || !podcastItems.length) {
      return; // No playlist on this page
    }

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
      // If this item is already playing, pause it
      if (currentItem === item && !sharedPlayer.paused) {
        sharedPlayer.pause();
        return;
      }

      // Load and play this track
      loadTrack(src, title, item);
      sharedPlayer.play();
    }

    // Shared player event listeners
    sharedPlayer.addEventListener('play', function () {
      if (currentItem) {
        activateItem(currentItem);
      }
    });

    sharedPlayer.addEventListener('pause', function () {
      // Keep visual state (user can resume)
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
      item.setAttribute('aria-current', 'true');

      const playingIndicator = item.querySelector('.playing-indicator');
      if (playingIndicator) {
        playingIndicator.hidden = false;
      }
    }

    /**
     * Deactivate a playlist item
     */
    function deactivateItem(item) {
      item.classList.remove('playing');
      item.setAttribute('aria-current', 'false');

      const playingIndicator = item.querySelector('.playing-indicator');
      if (playingIndicator) {
        playingIndicator.hidden = true;
      }
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
