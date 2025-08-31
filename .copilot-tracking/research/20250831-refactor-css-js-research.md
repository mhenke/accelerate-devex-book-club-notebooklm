<!-- markdownlint-disable-file -->

# Research: Refactor Inline CSS/JS into Central SCSS/JS Files

## Tool Usage Documentation

- Inline CSS/JS is present in meeting pages and some Markdown files.
- Central SCSS file: `docs/assets/main.scss` is used for most styles.
- No central JS file for reusable scripts; JS is embedded in Markdown.

## Code Examples & Specifications

- Example of inline CSS in meeting pages:
  ```html
  <style>
    .feedback-area {
      ...;
    }
  </style>
  ```
- Example of inline JS:
  ```html
  <script>
    function handleFeedback() { ... }
  </script>
  ```
- Best practice: Move all CSS to SCSS, all JS to a central JS file (e.g., `docs/assets/main.js`).

## Project Structure Analysis

- SCSS: `docs/assets/main.scss`
- JS: No central file; recommend `docs/assets/main.js`
- Meeting pages: `docs/_meetings/meeting-*.md`, `resources/meetings/meeting-*/meeting.md`

## External Source Research

- [MDN: Organizing CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)
- [MDN: Organizing JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Organizing)
- [Jekyll Docs: Assets](https://jekyllrb.com/docs/assets/)

## Implementation Guidance

- Move all inline CSS to SCSS file, using classes for targeting.
- Move all inline JS to a central JS file, using event listeners and modular functions.
- Reference assets in Markdown via Jekyll asset paths.
- Test for visual and functional consistency after refactor.
