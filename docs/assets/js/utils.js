/**
 * Utility Functions
 * Common helpers for copy-to-clipboard and other utilities
 */

(function () {
  'use strict';

  /**
   * Copy text to clipboard with visual feedback
   * @param {string} elementId - ID of input element to copy from
   * @param {HTMLElement} button - Button that triggered the copy (optional)
   */
  window.copyToClipboard = function(elementId, button) {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    button = button || event?.target?.closest('button');
    const originalContent = button?.innerHTML || '';

    // Select and copy
    element.select();
    navigator.clipboard.writeText(element.value).then(() => {
      // Show success feedback
      if (button) {
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
          button.innerHTML = originalContent;
        }, 2000);
      }
    }).catch(err => {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      if (document.execCommand) {
        document.execCommand('copy');
        if (button) {
          button.innerHTML = '<i class="fas fa-check"></i> Copied!';
          setTimeout(() => {
            button.innerHTML = originalContent;
          }, 2000);
        }
      }
    });
  };

})();
