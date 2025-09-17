---
goal: Refactor SCSS for Deduplication and Centralization of Presentational Logic
version: 1.0
date_created: 2025-09-07
last_updated: 2025-09-07
owner: DevEx Book Club Team
status: "Planned"
tags:
  [
    refactor,
    scss,
    maintainability,
    accessibility,
    design-tokens,
    utility-classes,
  ]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This plan aims to refactor all presentational logic in the codebase to use centralized, deduplicated SCSS partials, utility classes, and shared mixins. All inline styles and `<style>` tags will be removed from markup files, and all styling will be managed via SCSS for maintainability, accessibility, and separation of concerns.

## 1. Requirements & Constraints

- **REQ-001**: Remove all inline `style` attributes and `<style>` tags from all component includes, layouts, markdown, and docs files (including missed cases from initial audit)
- **REQ-002**: Centralize all presentational logic in SCSS partials and utility classes
- **REQ-003**: Use design tokens and CSS custom properties for dynamic values (colors, spacing, gradients, widths)
- **REQ-004**: Maintain accessibility (WCAG 2.2 AA) and performance best practices
- **SEC-001**: No sensitive data or logic in presentational code
- **CON-001**: Must not break existing build or deployment pipeline
- **GUD-001**: Follow modular SCSS architecture (7-1 pattern)
- **PAT-001**: Use utility classes and shared mixins for all reusable logic

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Audit and Remove Inline Styles and `<style>` Tags

| Task     | Description                                                                                                                                             | Completed | Date |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---- |
| TASK-001 | Audit all component includes, layouts, markdown, and docs for `<style>` blocks and inline `style=` attributes (manual review required for missed cases) |           |      |
| TASK-002 | Remove all inline styles and `<style>` tags from component includes, replacing with utility classes and semantic markup                                 |           |      |
| TASK-003 | Move all presentational logic from component includes to dedicated SCSS partials                                                                        |           |      |

### Implementation Phase 2

- GOAL-002: Refactor and Centralize SCSS Logic

| Task     | Description                                                  | Completed | Date |
| -------- | ------------------------------------------------------------ | --------- | ---- |
| TASK-004 | Refactor SCSS partials to use shared mixins and placeholders |           |      |
| TASK-005 | Centralize all utility classes in `_helpers.scss`            |           |      |
| TASK-006 | Validate with lint/build/test and accessibility tools        |           |      |

## 3. Alternatives

- **ALT-001**: Leave inline styles and `<style>` tags in place (rejected for maintainability and accessibility)
- **ALT-002**: Use CSS-in-JS or scoped styles (not compatible with Jekyll/GitHub Pages static site architecture)

## 4. Dependencies

- **DEP-001**: Jekyll/GitHub Pages build pipeline
- **DEP-002**: Existing design tokens and shared mixins

## 5. Files

- **FILE-001**: All includes, layouts, markdown, and docs files containing inline styles or `<style>` tags
- **FILE-002**: `/docs/_sass/base/_helpers.scss` (utility classes)
- **FILE-003**: `/docs/_sass/abstracts/_mixins.scss` (shared mixins)
- **FILE-004**: All component SCSS partials in `/docs/_sass/components/`

## 6. Testing

- **TEST-001**: Run `npm run lint` and `npm run validate` to ensure code quality and build success
- **TEST-002**: Validate accessibility with Accessibility Insights and WCAG 2.2 AA tools
- **TEST-003**: Manual review of rendered site for correct styling and no inline styles

## 7. Risks & Assumptions

- **RISK-001**: Potential for broken styles if inline logic is not fully migrated
- **ASSUMPTION-001**: All presentational logic can be expressed via SCSS and utility classes

## 8. Related Specifications / Further Reading

- [Task Research: SCSS Deduplication & Centralization](.copilot-tracking/research/20250907-scss-deduplication-centralization-research.md)
- [CSS Tricks: Keeping CSS DRY](https://css-tricks.com/keeping-css-dry/)
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
