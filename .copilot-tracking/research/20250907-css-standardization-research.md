<!-- markdownlint-disable-file -->

# Task Research Notes: CSS Standardization & Reusable Blocks Implementation Plan

## Research Executed

### File Analysis

- Inline styles and Font Awesome icons are heavily used in HTML and Markdown files, especially in meeting pages and info blocks.
- Common blocks (cards, alerts, info, metric-card, meeting-hero, etc.) are present in `_includes`, `_layouts`, and `_sass`.
- CSS variables (custom properties) are already used in `_sass/layout/` and grid files, following best practices for global variables via `:root`.

### Code Search Results

- `style=|<style>|</style>|class="fas fa-|class='fas fa-|<i class="fas fa-|<i class='fas fa-` found in many HTML/Markdown files (meeting pages, info blocks, navigation, etc.).
- Common block patterns (card, alert, info, meeting) found in `_includes/performance-optimizations.html`, `_layouts/meeting.html`, and `_sass/layout/`.
- CSS variables and reusable classes are present, but not consistently applied.

### External Research

- #fetch:https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
  - Best practice: Define custom properties (variables) in `:root` for global scope, use `var(--property)` for reusability, and avoid repetition.
  - Use fallback values with `var()` and consider `@property` for type/inheritance control.
- #fetch:https://css-tricks.com/adding-icons-to-headings/
  - (404, no content)
- #fetch:https://web.dev/css-reusability/
  - (404, no content)

### Project Conventions

- Standards referenced: `_sass/layout/`, `_sass/grid/`, `_includes/`, `_layouts/` for CSS variable and block usage.
- Instructions followed: Remove inline styles, use variables, standardize blocks, and ensure consistency.

## Key Discoveries

### Project Structure

- Meeting pages and info blocks use similar structures but duplicate code and styles.
- CSS variables are defined in `_sass/layout/` and `_sass/grid/`, but not all blocks use them.
- Font Awesome icons are used directly in HTML, especially in headings and lists.

### Implementation Patterns

- Inline styles are used for backgrounds, colors, borders, and widths—should be replaced with CSS classes and variables.
- Common blocks (cards, alerts, info) are defined in `_includes` and `_layouts`, but not all pages use them consistently.
- CSS variables are defined in `:root` and reused via `var(--property)`, following MDN best practices.

### Complete Examples

```css
:root {
  --main-bg-color: #fff;
  --accent-coral: #ff7f50;
  --border-radius: 8px;
  --container-max-width: 1200px;
  --spacing-md: 16px;
  --text-white: #fff;
}
.card {
  background: var(--main-bg-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
}
.meeting-title {
  color: var(--accent-coral);
}
```

### API and Schema Documentation

- [MDN: Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

### Configuration Examples

```scss
:root {
  --main-bg-color: #fff;
  --accent-coral: #ff7f50;
  --border-radius: 8px;
}
.card {
  background: var(--main-bg-color);
  border-radius: var(--border-radius);
}
```

### Technical Requirements

- Remove all inline styles from HTML/Markdown files.
- Refactor blocks to use CSS classes and variables.
- Standardize icon usage in headings: use direct HTML for Font Awesome (for accessibility and simplicity).
- Refactor common blocks (cards, alerts, info) into reusable includes and CSS classes.
- Use existing variables and add new ones only if needed.
- Ensure all pages use standardized blocks and styles.

## Recommended Approach

- **Remove all inline styles**: Replace with CSS classes using variables defined in `:root`.
- **Standardize icon usage**: Use direct HTML `<i class="fas fa-icon"></i>` in headings for accessibility and simplicity. Avoid pseudo-elements for icons in headings, as direct HTML is more maintainable and accessible.
- **Refactor common blocks**: Move repeated structures (cards, alerts, info) into Jekyll includes and apply reusable CSS classes. Ensure all pages use these includes and classes.
- **Expand and use CSS variables**: Define all colors, spacing, and border-radius in `:root` and reference via `var(--property)`.
- **Audit and update all pages**: Ensure consistency in block usage, icon placement, and variable application.

## Implementation Guidance

- **Objectives**: Clean up CSS, remove inline styles, standardize blocks and icon usage, use variables, and ensure consistency.
- **Key Tasks**:
  1. Audit and remove all inline styles from HTML/Markdown files.
  2. Refactor blocks (cards, alerts, info) into Jekyll includes and reusable CSS classes.
  3. Standardize icon usage in headings with direct HTML `<i class="fas fa-icon"></i>`.
  4. Expand CSS variables in `:root` and update all blocks to use them.
  5. Update all pages to use standardized blocks and styles.
- **Dependencies**: Font Awesome, Jekyll includes, existing CSS variable definitions.
- **Success Criteria**: No inline styles remain, all blocks use reusable includes and CSS classes, icons are consistent and accessible, and all styles use variables.
