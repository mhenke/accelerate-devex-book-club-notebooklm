# CSS Refactoring Plan

This document outlines the plan to refactor the CSS codebase to improve maintainability, scalability, and consistency.

## Guiding Principles: Material Design

The following Material Design principles will guide the refactoring process:

*   **Mobile First & Responsiveness:** All components will be designed for mobile first and adapt gracefully to different screen sizes.
*   **Elevation & Shadows:** Subtle shadows will be used to indicate hierarchy and interactivity (e.g., clickable cards).
*   **Clear Typography:** A consistent and readable font family will be used throughout the site.
*   **Color Palette:** A primary and secondary color palette will be defined, with accent colors for key actions. The meeting pages will have their own color themes (blue, teal, yellow, and purple), and the entire page will follow this theme with its own primary, secondary, and appropriate accent colors.
*   **Consistent Icons:** A unified set of icons will be used.
*   **Whitespace:** Ample whitespace will be used to reduce clutter and improve readability.

## Phase 1: Foundational Cleanup & Standardization

1.  **Remove Inline Styles:** Systematically remove all inline `style` attributes and `<style>` blocks from the codebase.
2.  **Introduce Utility Classes:** Replace the removed inline styles with a consistent set of utility classes for common properties like spacing, colors, and typography.
3.  **Linting:** Run the CSS linter (`npm run test:css`) after this phase to ensure the cleanup doesn't introduce new issues.

## Phase 2: SCSS Architecture & Responsive Layout

1.  **Adopt BEM Naming Convention:** Implement the Block, Element, Modifier (BEM) naming convention for all new and refactored CSS to create a more structured and readable stylesheet.
2.  **Modularize SCSS:** Break down the monolithic `main.scss` into smaller, component-based partials (e.g., `_buttons.scss`, `_cards.scss`) under the `docs/_sass/components/` directory.
3.  **Centralize Design Tokens:** Consolidate all colors, fonts, spacing, and shadow definitions into a central `_tokens.scss` file to serve as the single source of truth for all styling.
4.  **Implement Responsive Grid Layouts:**
    *   Create a flexible grid system using CSS Grid.
    *   For the "What You’ll Learn", "Resources", and "What Continuous Delivery Practices" sections, implement a grid that displays **4 cards per row on large screens, 2 on medium screens, and 1 on small screens.**
    *   For the "Discussion Questions" and "Action Items for Next Meeting" sections, implement a grid that displays **3 cards per row on large screens and 1 on small screens.**
    *   Use media queries to define the breakpoints for these layout changes, ensuring a mobile-first approach.

## Phase 3: Theming and Dynamic Styling

1.  **CSS Custom Properties for Theming:** Use CSS custom properties (variables) to create a robust theming system for the meeting pages. This will allow for dynamic color changes based on the meeting's theme without duplicating CSS.
2.  **Refactor Meeting Page Templates:** Update the Jekyll templates to apply the correct theme based on the page's front matter.
3.  **Implement Themed Navigation:** Apply the color-coded next/previous buttons to the bottom navigation, using the established theme colors.

## Phase 4: Documentation and Enforcement

1.  **Create a CSS Style Guide:** Create a new document that outlines the CSS architecture, naming conventions, and usage guidelines for the design tokens, utility classes, and grid system.
2.  **Update Stylelint Rules:** Enhance the `.stylelintrc.json` configuration to enforce the new BEM naming convention and other best practices.
3.  **Full Test Suite Execution:** After all refactoring is complete, run the entire test suite (`npm test`) to ensure that the changes have not introduced any regressions.