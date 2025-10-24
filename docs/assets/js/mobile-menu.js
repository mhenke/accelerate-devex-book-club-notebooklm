/**
 * Mobile Hamburger Menu Toggle
 * Handles the mobile navigation menu open/close functionality
 */
(function () {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }

  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!hamburger || !mobileMenu) {
      return; // Exit if elements don't exist (e.g., on meeting pages)
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function () {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';

      // Toggle aria-expanded
      hamburger.setAttribute('aria-expanded', !isExpanded);

      // Toggle active class for styling
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');

      // Prevent body scroll when menu is open
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      const isClickInside = hamburger.contains(event.target) || mobileMenu.contains(event.target);

      if (!isClickInside && mobileMenu.classList.contains('active')) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileMenu.classList.contains('active')) {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        hamburger.focus(); // Return focus to hamburger button
      }
    });

    // Close menu when a nav link is clicked
    const mobileNavLinks = mobileMenu.querySelectorAll('.nav-item-mobile');
    mobileNavLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
})();
