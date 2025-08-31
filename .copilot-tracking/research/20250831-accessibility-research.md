<!-- markdownlint-disable-file -->

# Research: Accessibility Audit and Improvements

## Tool Usage Documentation

- Interactive elements (radio buttons, feedback areas) use basic HTML/JS.
- Some ARIA labels present, but not consistent across all components.
- Keyboard navigation not fully implemented for all interactive elements.

## Code Examples & Specifications

- Example of ARIA label:
  ```html
  <button aria-label="Submit Feedback">Send</button>
  ```
- Example of keyboard navigation:
  ```js
  element.addEventListener('keydown', function(e) { ... });
  ```
- Best practice: All interactive elements should have ARIA labels and support keyboard navigation.

## Project Structure Analysis

- Interactive elements in: `docs/_meetings/meeting-*.md`, `resources/meetings/meeting-*/meeting.md`
- SCSS: `docs/assets/main.scss`
- JS: To be centralized in `docs/assets/main.js`

## External Source Research

- [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN: Keyboard Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [WebAIM: Accessibility Checklist](https://webaim.org/standards/wcag/checklist)

## Implementation Guidance

- Audit all interactive elements for ARIA labeling and keyboard support.
- Add missing ARIA attributes and tabindex as needed.
- Test with screen readers and keyboard-only navigation.
