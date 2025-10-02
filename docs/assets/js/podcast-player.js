/**
 * Material Design 3 Podcast Playlist Component
 * Manages play/pause state and animated equalizer indicators
 *
 * USAGE:
 *
 * 1. Create podcast data in _data/meetingX_podcasts.yml:
 *    - id: brief
 *      title: "Episode Title"
 *      subtitle: "Episode Description"
 *      type: brief|deep-dive|critique
 *      duration: "15:30"
 *      audio_url: "https://..."
 *
 * 2. Include the component in your meeting page:
 *    {% include podcast-playlist.html episodes=site.data.meeting1_podcasts %}
 *
 * 3. Add script at bottom of page:
 *    <script src="{{ '/assets/js/podcast-player.js' | relative_url }}"></script>
 *
 * That's it! The component is fully self-contained and reusable.
 */

(function () {
  'use strict';

  /**
   * Initialize podcast player functionality
   */
  function initPodcastPlayer() {
    const podcastItems = document.querySelectorAll('.podcast-item');

    if (!podcastItems.length) {
      return; // No podcast items on this page
    }

    podcastItems.forEach((item) => {
      const audio = item.querySelector('audio');
      if (!audio) {
        return;
      }

      // Play event - activate this item, deactivate others
      audio.addEventListener('play', function () {
        activatePodcastItem(item);
      });

      // Pause event - optionally deactivate
      audio.addEventListener('pause', function () {
        // Keep visual state on pause (user can resume)
        // Only deactivate when ended or another podcast starts
      });

      // Ended event - deactivate when finished
      audio.addEventListener('ended', function () {
        deactivatePodcastItem(item);
      });

      // Keyboard navigation - click item to play/pause
      item.addEventListener('click', function (e) {
        // Don't trigger if clicking directly on audio controls
        if (e.target.tagName === 'AUDIO' || e.target.closest('audio')) {
          return;
        }

        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      });

      // Keyboard support - Enter/Space to play/pause
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
          }
        }
      });
    });
  }

  /**
   * Activate a podcast item (show as playing)
   * @param {HTMLElement} activeItem - The podcast item to activate
   */
  function activatePodcastItem(activeItem) {
    // Deactivate all other items first
    document.querySelectorAll('.podcast-item').forEach((item) => {
      if (item !== activeItem) {
        deactivatePodcastItem(item);
        // Pause other audio players
        const otherAudio = item.querySelector('audio');
        if (otherAudio && !otherAudio.paused) {
          otherAudio.pause();
        }
      }
    });

    // Activate this item
    activeItem.classList.add('playing');
    activeItem.setAttribute('aria-current', 'true');

    const playingIndicator = activeItem.querySelector('.playing-indicator');
    if (playingIndicator) {
      playingIndicator.hidden = false;
    }
  }

  /**
   * Deactivate a podcast item (remove playing state)
   * @param {HTMLElement} item - The podcast item to deactivate
   */
  function deactivatePodcastItem(item) {
    item.classList.remove('playing');
    item.setAttribute('aria-current', 'false');

    const playingIndicator = item.querySelector('.playing-indicator');
    if (playingIndicator) {
      playingIndicator.hidden = true;
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPodcastPlayer);
  } else {
    initPodcastPlayer();
  }
})();
