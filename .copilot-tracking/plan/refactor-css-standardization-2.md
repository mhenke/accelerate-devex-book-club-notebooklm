goal: CSS Standardization and Reusable Block Implementation
date_created: 2025-09-06

goal: Refactor and Standardize CSS, Blocks, and Icon Usage Across All Pages
version: 1.1
date_created: 2025-09-07
last_updated: 2025-09-07
owner: mhenke
status: 'Planned'
tags: [refactor, css, accessibility, performance, jekyll, blocks, icons]


# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This implementation plan refines and updates the CSS standardization and reusable blocks strategy for the DevEx Book Club site. It incorporates new findings from codebase audits, accessibility requirements, and performance goals. The plan ensures all steps are actionable, accessible, and aligned with project objectives.


## 1. Requirements & Constraints
- **REQ-001**: Remove all inline styles from HTML/Markdown files.
- **REQ-002**: Refactor all duplicated blocks (cards, alerts, info, meeting-hero, metric-card) into Jekyll includes and reusable CSS classes.
- **REQ-003**: Standardize icon usage in headings and lists using direct HTML `<i class="fas fa-icon"></i>` for accessibility.
- **REQ-004**: Expand and use CSS variables in `:root` for all styling properties (colors, spacing, borders).
- **REQ-005**: Ensure all pages use standardized blocks, icon placement, and variable application.
- **SEC-001**: All changes must meet WCAG 2.2 AA accessibility standards.
- **PER-001**: CSS must be optimized for performance (minified, no unused rules).
- **CON-001**: No inline styles or hardcoded values allowed in final codebase.
- **GUD-001**: Use semantic HTML and ARIA roles for all blocks.
- **PAT-001**: Use Jekyll includes for reusable blocks.

## 2. Implementation Steps

### Implementation Phase 1
- GOAL-001: Remove all inline styles and replace with CSS classes using variables.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Audit all HTML/Markdown for inline styles |  |  |
| TASK-002 | Replace inline styles with CSS classes using variables from `:root` |  |  |
| TASK-003 | Validate with CSS linter and accessibility checker |  |  |

### Implementation Phase 2
- GOAL-002: Refactor duplicated blocks into Jekyll includes and reusable CSS classes.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-004 | Identify all duplicated block patterns (cards, alerts, info, meeting-hero, metric-card) |  |  |
| TASK-005 | Move markup to Jekyll includes and create reusable CSS classes |  |  |
| TASK-006 | Update all pages to use includes/classes |  |  |
| TASK-007 | Validate accessibility and semantic markup |  |  |

### Implementation Phase 3
- GOAL-003: Standardize icon usage and expand CSS variables.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-008 | Audit headings/lists for icon usage |  |  |
| TASK-009 | Replace inconsistent icons with `<i class="fas fa-icon"></i>` |  |  |
| TASK-010 | Document icon usage standards |  |  |
| TASK-011 | Expand variables in `:root` and refactor blocks to use them |  |  |
| TASK-012 | Remove hardcoded values |  |  |
| TASK-013 | Validate color contrast and responsive spacing |  |  |

### Implementation Phase 4
- GOAL-004: Audit and update all pages for consistency, accessibility, and performance.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-014 | Review all pages for consistency in block usage, icon placement, and variable application |  |  |
| TASK-015 | Run accessibility and performance audits (Lighthouse, Accessibility Insights) |  |  |
| TASK-016 | Fix any remaining issues |  |  |

## 3. Alternatives
- **ALT-001**: Use CSS pseudo-elements for icons in headings (not chosen for accessibility and maintainability).
- **ALT-002**: Keep duplicated blocks in each page (not chosen due to maintainability and code bloat).

## 4. Dependencies
- **DEP-001**: Font Awesome for icons
- **DEP-002**: Jekyll includes and layouts
- **DEP-003**: CSS linter, accessibility checker, performance audit tools

## 5. Files
- **FILE-001**: All HTML/Markdown files in `docs/` and `_meetings/`
- **FILE-002**: `_includes/performance-optimizations.html`, `_layouts/meeting.html`, `_sass/layout/`, `_sass/grid/`
- **FILE-003**: Main CSS/SCSS files (`assets/main.scss`)

## 6. Testing
- **TEST-001**: Run CSS and HTML linters
- **TEST-002**: Validate accessibility with automated tools and manual review
- **TEST-003**: Test performance with Lighthouse or similar
- **TEST-004**: Confirm all pages render correctly and consistently

## 7. Risks & Assumptions
- **RISK-001**: Refactoring may introduce regressions in page layout or accessibility
- **RISK-002**: Incomplete replacement of inline styles or duplicated blocks
- **ASSUMPTION-001**: All engineers have access to required tools and documentation

## 8. Related Specifications / Further Reading
- [MDN: Using CSS custom properties (variables)](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Jekyll Includes Documentation](https://jekyllrb.com/docs/includes/)

## 3. Alternatives

- **ALT-001**: Use only inline styles for quick fixes (not chosen due to maintainability issues)
- **ALT-002**: Use multiple icon patterns (not chosen for consistency)

## 4. Dependencies

- **DEP-001**: Jekyll, SCSS, Markdownlint, Stylelint, Playwright
- **DEP-002**: Accessibility and performance standards

## 5. Files

- **FILE-001**: docs/assets/main.scss (main stylesheet)
- **FILE-002**: docs/\_layouts/meeting.html (meeting page layout)
- **FILE-003**: docs/\_meetings/ (individual meeting pages)
- **FILE-004**: README.md (documentation)

## 6. Testing

- **TEST-001**: Run `npm run lint:css` for CSS linting
- **TEST-002**: Run `npm run lint:md` for Markdown linting
- **TEST-003**: Run Playwright visual regression tests
- **TEST-004**: Validate accessibility with Accessibility Insights

## 7. Risks & Assumptions

- **RISK-001**: Refactoring may introduce visual regressions
- **RISK-002**: Incomplete removal of inline styles
- **ASSUMPTION-001**: Existing variables and classes are sufficient for standardization

## 8. Related Specifications / Further Reading

- [CSS Standardization Plan](.copilot-tracking/plans/20250906-css-standardization-plan.instructions.md)
- [CSS Standardization Details](.copilot-tracking/details/20250906-css-standardization-details.md)
- [Accessibility Insights](https://accessibilityinsights.io/)
- [Performance Optimization Instructions](vscode-userdata:/home/mhenke/.config/Code/User/prompts/performance-optimization.instructions.md)
- [Security and OWASP Instructions](vscode-userdata:/home/mhenke/.config/Code/User/prompts/security-and-owasp.instructions.md)
