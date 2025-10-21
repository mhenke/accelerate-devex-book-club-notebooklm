module.exports = {
  content: [
    'docs/_site/**/*.html',
    'docs/_site/**/*.js'
  ],
  css: [
    'docs/_site/assets/main.css'
  ],
  safelist: {
    standard: [
      // Meeting themes
      /^meeting-theme--/,
      /^theme-/,
      // State classes
      /^is-/,
      /^has-/,
      /^active/,
      // Accessibility
      /^sr-only/,
      /^visually-hidden/,
      /^skip-/,
      // Pseudo-classes
      /^hover:/,
      /^focus:/,
      /^focus-visible/,
      // Utility classes that might be added dynamically
      /^mt-/,
      /^mb-/,
      /^ml-/,
      /^mr-/,
      /^p-/,
      /^text-/,
    ],
    deep: [
      /^fa-/,   // Font Awesome icons
      /^fas/,
      /^far/,
      /^fab/,
    ],
    greedy: [
      /data-/,
      /aria-/,
    ]
  },
  keyframes: true,
  fontFace: true,
  variables: true,
  // Don't remove these important selectors
  rejected: true,
  rejectedCss: true
};

