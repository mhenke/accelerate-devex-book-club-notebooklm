<!-- markdownlint-disable-file -->

# Research: Create Reusable JS Modules for Feedback/Interactivity

## Tool Usage Documentation

- JS for feedback areas and interactivity is currently inline in Markdown files.
- No central JS file or modular structure.

## Code Examples & Specifications

- Example of feedback JS:
  ```js
  function handleFeedback() { ... }
  ```
- Best practice: Create modular JS functions and export/import as needed. Use ES6 modules if supported by Jekyll build.

## Project Structure Analysis

- JS: To be centralized in `docs/assets/main.js`
- Feedback/interactivity logic in: `docs/_meetings/meeting-*.md`, `resources/meetings/meeting-*/meeting.md`

## External Source Research

- [MDN: JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Jekyll Docs: Assets](https://jekyllrb.com/docs/assets/)

## Implementation Guidance

- Move all feedback/interactivity JS to `main.js`.
- Structure code as reusable functions/modules.
- Reference JS in Markdown via Jekyll asset paths.
- Test for functionality after refactor.
