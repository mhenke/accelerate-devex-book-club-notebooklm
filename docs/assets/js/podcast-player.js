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
    const currentTrackTitle = document.getElementById('current-track-title');
    const nowPlayingLabel = document.getElementById('now-playing-label');
    const podcastItems = document.querySelectorAll('.podcast-item[data-src]');

    if (!sharedPlayer || !podcastItems.length) {
      return; // No playlist on this page
    }

    // Initialize playing indicator visibility
    const nowPlayingIndicator = nowPlayingLabel?.querySelector('.playing-indicator');
    if (nowPlayingIndicator) {
      nowPlayingIndicator.style.display = 'none';
    }

    // Add click handlers to playlist items
    podcastItems.forEach((item) => {
      const src = item.getAttribute('data-src');
      const title = item.getAttribute('data-title');

      // Click handler - load and play
      item.addEventListener('click', function () {
        loadTrack(src, title, item);
        sharedPlayer.play();
      });

      // Keyboard support - Enter/Space to play
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          loadTrack(src, title, item);
          sharedPlayer.play();
        }
      });
    });

    // Shared player event listeners
    sharedPlayer.addEventListener('play', function () {
      if (currentItem) {
        activateItem(currentItem);
      }
      // Show now-playing indicator
      if (nowPlayingIndicator) {
        nowPlayingIndicator.style.display = 'flex';
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
      // Hide now-playing indicator
      if (nowPlayingIndicator) {
        nowPlayingIndicator.style.display = 'none';
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

      // Update now-playing label
      if (currentTrackTitle) {
        currentTrackTitle.textContent = title;
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
