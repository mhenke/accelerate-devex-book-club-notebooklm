<!-- markdownlint-disable-file -->

# Task Research Notes: SCSS Deduplication & Centralization

## Research Executed

### File Analysis

- Modular SCSS architecture (7-1 pattern): abstracts, base, components, layout, minima.
- Utility classes grouped in `_helpers.scss` for spacing, alignment, color.
- Found >60 instances of inline `style` and `<style>` tags in includes, layouts, markdown, and docs.
- Common patterns: color, background, margin, font-size, gradients, width.

### Code Search Results

- Inline styles for dynamic colors (meeting colors, DORA metrics), gradients, progress bar widths.
- `<style>` tags for component-specific CSS, often duplicating logic in SCSS partials.
- SVG/HTML blocks in markdown use inline styles for color and font.

### External Research

- #fetch_webpage: [CSS Tricks: Keeping CSS DRY](https://css-tricks.com/keeping-css-dry/)
  - Move all presentational styles to SCSS partials.
  - Use utility classes and design tokens for color, spacing, layout.
  - Avoid inline styles for maintainability, accessibility, and separation of concerns.

### Project Conventions

- Utility classes for spacing, alignment, color, and layout.
- Shared mixins for card, button, grid, box-shadow.
- Design tokens for all color, spacing, and shadow values.

## Key Discoveries

### Project Structure

- Inline styles and `<style>` tags are used for presentational logic across includes, layouts, markdown, and docs.
- Utility classes and mixins exist but are not fully leveraged in all components.

### Implementation Patterns

- Inline styles for dynamic values (colors, gradients, widths) can be replaced with CSS custom properties and utility classes.
- `<style>` tags for component CSS should be moved to SCSS partials.
- Utility classes should be used for all spacing, alignment, and color logic.

### Complete Examples

```scss
// Example: Card using mixin
.card {
  @include card-base;
  &:hover {
    @include box-shadow(medium);
  }
}
```

```scss
// Example: Utility class
.mb-lg {
  margin-bottom: var(--spacing-lg);
}
```

### API and Schema Documentation

- No API/schema changes required; all changes are presentational.

### Configuration Examples

```scss
// Shared mixin for grid layouts
@mixin grid-layout($min: 280px, $gap: var(--spacing-lg)) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($min, 1fr));
  gap: $gap;
}
```

### Technical Requirements

- Move all presentational styles from inline and `<style>` tags to SCSS partials.
- Use utility classes and design tokens for all color, spacing, and layout logic.
- Maintain accessibility and WCAG 2.2 AA compliance.

## Recommended Approach

- Audit all files for inline styles and `<style>` tags.
- Move styles to SCSS partials and replace with utility/semantic classes.
- Use CSS custom properties for dynamic values.
- Refactor SCSS partials to use shared mixins/placeholders.
- Centralize all utility classes in `_helpers.scss`.
- Validate with lint/build/test and accessibility tools.

## Implementation Guidance

- **Objectives**: Eliminate style duplication, maximize reuse, enforce design tokens, maintain accessibility.
- **Key Tasks**: Audit, refactor, centralize, document, validate.
- **Dependencies**: Jekyll/GitHub Pages build pipeline, existing design tokens/mixins.
- **Success Criteria**: No inline styles or `<style>` tags for presentational logic; all styles reusable via SCSS classes/mixins; improved maintainability and accessibility.
