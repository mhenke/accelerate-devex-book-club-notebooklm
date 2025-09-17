---
goal: Refactor and standardize CSS for meeting pages and reusable components
version: 1.0
date_created: 2025-09-06
last_updated: 2025-09-06
owner: DevEx Book Club Team
status: 'In progress'
tags: [refactor, css, standardization, architecture, maintainability]
---

# Introduction

![Status: In progress](https://img.shields.io/badge/status-In%20progress-yellow)

This plan aims to refactor and standardize CSS across all meeting pages and reusable components. The goal is to:
- Eliminate all duplicated CSS and enforce variable usage for colors, spacing, and typography (validated by SCSS lint and code review)
- Remove 100% of inline styles from HTML and Markdown files (validated by search and lint)
- Standardize icon usage in headings and blocks: all icons must use a single, documented pattern (FontAwesome `<i>` or CSS pseudo-element), with no exceptions (validated by code search and visual review)
- Implement atomic, reusable blocks for all common meeting structures (cards, badges, headers, timelines, etc.), with no duplicated markup or styles (validated by code search and component inventory)
- Ensure all CSS follows best practices for simplicity, maintainability, accessibility (WCAG 2.2 AA), and performance (validated by audit tools and manual review)

## 1. Requirements & Constraints

- **REQ-001**: All CSS must use existing SCSS variables from the design token system.
- **REQ-002**: Remove all inline styles from HTML and Markdown files.
- **REQ-003**: Standardize icon usage in headings (choose either FontAwesome `<i>` or CSS pseudo-element, apply consistently).
- **REQ-004**: Refactor duplicated CSS into reusable SCSS partials (cards, badges, headers, etc.).
- **REQ-005**: All meeting pages must use standardized, reusable blocks for common structures.
- **REQ-006**: All new CSS must follow WCAG 2.2 AA accessibility and performance guidelines.
- **CON-001**: No breaking changes to existing layouts or color schemes.
- **CON-002**: Must use only existing variables unless new ones are justified and documented.
- **SEC-001**: No inline styles or unescaped user content in CSS selectors.
- **GUD-001**: Prefer simple, maintainable solutions over complex ones.
- **PAT-001**: Use BEM or modular SCSS component patterns for all new blocks.

## 2. Implementation Steps

### Implementation Phase 1
- GOAL-001: Audit and inventory all meeting-related CSS, markup, and icon usage.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Audit all meeting pages for duplicated CSS, inline styles, and icon usage. Completion: All instances documented in a shared inventory file. | | |
| TASK-002 | Inventory all existing SCSS variables and reusable components. Completion: Inventory file listing all variables and components. | | |
| TASK-003 | Document all current icon usage patterns in headings and blocks. Completion: Inventory file listing all icon usage patterns. | | |
| TASK-004 | Identify all common meeting structures (cards, badges, headers, timelines, etc.) for standardization. Completion: List of all structures to be standardized. | | |

### Implementation Phase 2
- GOAL-002: Refactor, standardize, and enforce variable usage and reusable blocks.

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-005 | Refactor all duplicated CSS into reusable SCSS partials for every common meeting block. Completion: No duplicated CSS remains (validated by code search and lint). | | |
| TASK-006 | Enforce variable usage for all colors, spacing, fonts, and meeting themes. Completion: All hardcoded values replaced with variables (validated by SCSS lint and code review). | | |
| TASK-007 | Standardize icon usage in headings and blocks. Completion: All icons use the chosen pattern, with documentation and code search validation. | | |
| TASK-008 | Remove all inline styles and replace with class-based or variable-driven styles. Completion: No inline styles remain (validated by search and lint). | | |
| TASK-009 | Implement atomic, reusable blocks for all common meeting structures. Completion: All blocks are reusable, with no duplicated markup/styles (validated by code search and component inventory). | | |
| TASK-010 | Update documentation to reflect new CSS standards, icon usage, and block patterns. Completion: Documentation updated and reviewed. | | |
| TASK-011 | Test all meeting pages for visual consistency, accessibility (WCAG 2.2 AA), and responsiveness. Completion: All tests pass, and manual review confirms compliance. | | |

## 3. Alternatives

- **ALT-001**: Continue with ad-hoc CSS and manual fixes (rejected: increases technical debt).
- **ALT-002**: Use a third-party CSS framework (rejected: would require major rewrite and break existing design).

## 4. Dependencies

- **DEP-001**: Existing SCSS variable definitions in `/docs/_sass/abstracts/_tokens.scss`.
- **DEP-002**: Existing reusable SCSS partials in `/docs/_sass/components/`.
- **DEP-003**: FontAwesome or equivalent icon library loaded via CDN.

## 5. Files

- **FILE-001**: `/docs/_sass/components/_meeting-content.scss` - meeting content styles
- **FILE-002**: `/docs/_sass/components/_meeting-layout.scss` - meeting layout styles
- **FILE-003**: `/docs/_sass/components/_icons.scss` - icon styles (to be standardized)
- **FILE-004**: `/docs/_sass/components/_headers.scss` - header and banner styles
- **FILE-005**: `/docs/_sass/abstracts/_tokens.scss` - design tokens and variables
- **FILE-006**: All meeting page Markdown/HTML files using inline styles or non-standard blocks

## 6. Testing

- **TEST-001**: Visual regression tests on all meeting pages
- **TEST-002**: SCSS linting for variable usage and modularity
- **TEST-003**: Automated tests for component reusability and icon consistency
- **TEST-004**: Manual review for removal of inline styles and duplicated CSS

## 7. Risks & Assumptions

- **RISK-001**: Refactoring may introduce visual regressions if not thoroughly tested
- **RISK-002**: Incomplete inventory may leave some duplication or inline styles
- **ASSUMPTION-001**: All existing variables are sufficient for standardization
- **ASSUMPTION-002**: FontAwesome or chosen icon library is available and loaded on all pages

## 8. Related Specifications / Further Reading

- [20250906-css-standardization-research.md](../.copilot-tracking/research/20250906-css-standardization-research.md)
- [WCAG 2.2 AA Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [CSS BEM Methodology](https://getbem.com/introduction/)
