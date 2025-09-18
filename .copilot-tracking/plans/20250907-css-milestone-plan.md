---
goal: Refactor and Standardize CSS Codebase for DevEx Book Club
version: 1.2
date_created: 2025-09-07
last_updated: 2025-09-07
owner: mhenke
status: 'Planned'
tags: [refactor, css, accessibility, performance, jekyll, blocks, icons]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This implementation plan refines the CSS refactoring milestones for the DevEx Book Club site, incorporating new requirements, lessons learned, and feedback. It ensures all steps are actionable, measurable, and aligned with project goals.

## Step-by-Step Implementation Plan

### Phase 1: Audit & Requirements Validation

| Task ID | Task Description                                                      | File(s) / Location(s)                                 | Validation Criteria                            | Contributor Instructions                         |
| ------- | --------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------ |
| AUD-001 | Audit all CSS/SCSS files for duplication, specificity, variable usage | docs/assets/main.scss, docs/\_sass/components/\*.scss | List of duplicated/conflicting styles produced | Document findings in .copilot-tracking/research/ |
| AUD-002 | Audit all HTML/Markdown for inline styles                             | docs/_.html, docs/_.md, docs/\_meetings/\*.md         | Inline styles identified and logged            | Use grep/search tools, log in research file      |
| AUD-003 | Validate requirements and constraints with stakeholders               | .copilot-tracking/plans/                              | Stakeholder sign-off recorded                  | Review requirements, confirm with team           |

### Phase 2: Design & Documentation

| Task ID | Task Description                                             | File(s) / Location(s)                          | Validation Criteria                        | Contributor Instructions                 |
| ------- | ------------------------------------------------------------ | ---------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| DSG-001 | Finalize CSS architecture (BEM/OOCSS/SMACSS) and document    | .copilot-tracking/docs/css-architecture.md     | Architecture doc published, team agreement | Follow chosen convention, reference doc  |
| DSG-002 | Expand and standardize CSS variables in `:root`              | docs/assets/main.scss                          | All colors, spacing, borders use variables | Refactor hardcoded values, use variables |
| DSG-003 | Document reusable blocks, variable usage, naming conventions | README.md, .copilot-tracking/docs/css-guide.md | Contributor guide updated                  | Add code samples, usage instructions     |

### Phase 3: Modularization & Refactoring

| Task ID | Task Description                                               | File(s) / Location(s)                          | Validation Criteria                                   | Contributor Instructions                    |
| ------- | -------------------------------------------------------------- | ---------------------------------------------- | ----------------------------------------------------- | ------------------------------------------- |
| MOD-001 | Split main.scss and partials into component-focused SCSS files | docs/\_sass/components/, docs/assets/main.scss | Each component has its own partial                    | Move styles, update imports in main.scss    |
| MOD-002 | Move design tokens and utility classes to dedicated partials   | docs/\_sass/abstracts/, docs/\_sass/base/      | Tokens/utilities in abstracts/base, not main.scss     | Refactor, update references throughout      |
| MOD-003 | Refactor duplicated styles and blocks into includes/classes    | docs/\_includes/, docs/\_sass/components/      | No duplicated styles, all blocks use includes/classes | Use Jekyll includes, update HTML/Markdown   |
| MOD-004 | Update all pages to use standardized blocks and variables      | docs/_.html, docs/_.md, docs/\_meetings/\*.md  | All pages use standardized blocks/variables           | Replace old markup, use documented patterns |
| MOD-005 | Remove inline styles from meeting pages and move to SCSS files, reducing duplication | docs/_meetings/*.md, docs/_sass/components/, docs/assets/main.scss | No inline styles in meeting pages, styles centralized in SCSS, duplication minimized | Audit meeting pages, refactor styles into SCSS, follow best practices |

### Phase 4: Accessibility, Performance, and Validation

| Task ID | Task Description                                 | File(s) / Location(s)               | Validation Criteria                            | Contributor Instructions                              |
| ------- | ------------------------------------------------ | ----------------------------------- | ---------------------------------------------- | ----------------------------------------------------- |
| VAL-001 | Run CSS/HTML linters and accessibility checker   | All CSS/HTML/Markdown               | No lint errors, accessibility issues flagged   | Use npm run lint:css, lint:md, Accessibility Insights |
| VAL-002 | Run Lighthouse and Accessibility Insights audits | Built site (\_site/)                | Performance score >90, accessibility score >90 | Use Lighthouse, Accessibility Insights                |
| VAL-003 | Team review and sign-off                         | .copilot-tracking/plans/, README.md | All contributors approve, checklist complete   | Review, test, confirm checklist                       |

## Code Standards

- Use CSS custom properties for all colors, spacing, borders.
- Follow chosen architecture (BEM/OOCSS/SMACSS) for naming.
- No inline styles or hardcoded values.
- Use semantic HTML and ARIA roles for all blocks.
- Modularize styles by component/function.

## Accessibility Requirements

- All changes must meet WCAG 2.2 AA standards.
- Validate color contrast, keyboard navigation, screen reader support.
- Use ARIA roles and labels where appropriate.

## Performance Requirements

- Minify CSS, remove unused rules.
- Optimize for load time and rendering.
- Test with Lighthouse, aim for performance score >90.

## Testing Requirements

- Run CSS/HTML/Markdown linters (npm run lint:css, lint:md).
- Validate accessibility with automated tools and manual review.
- Test performance with Lighthouse or similar.
- Confirm all pages render correctly and consistently.

## Contributor Instructions

- Read and follow the architecture and contributor guides.
- Use documented variables, blocks, and naming conventions.
- Refactor only in assigned files/components.
- Log findings and changes in .copilot-tracking/research/ and plans.
- Validate all changes with linters and accessibility tools before submitting.

## 1. Requirements & Constraints

- **REQ-001**: Remove all inline styles from HTML/Markdown files.
- **REQ-002**: Modularize CSS by component/function (metrics, cards, navigation, etc.).
- **REQ-003**: Standardize variable usage and naming conventions.
- **REQ-004**: Refactor duplicated styles and blocks into Jekyll includes and reusable CSS classes.
- **REQ-005**: Adopt and document a CSS architecture (BEM/OOCSS/SMACSS).
- **SEC-001**: Meet WCAG 2.2 AA accessibility standards.
- **PER-001**: Optimize CSS for performance (minified, no unused rules).
- **CON-001**: No inline styles or hardcoded values allowed in final codebase.
- **GUD-001**: Use semantic HTML and ARIA roles for all blocks.
- **PAT-001**: Use Jekyll includes for reusable blocks.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Complete codebase audit and requirements validation.

| Task     | Description                                                          | Completed | Date |
| -------- | -------------------------------------------------------------------- | --------- | ---- |
| TASK-001 | Audit all CSS/SCSS files for duplication, specificity, and variables |           |      |
| TASK-002 | Audit all HTML/Markdown for inline styles                            |           |      |
| TASK-003 | Validate requirements and constraints with stakeholders              |           |      |

### Implementation Phase 2

- GOAL-002: Design and document CSS architecture, conventions, and variable standards.

| Task     | Description                                                      | Completed | Date |
| -------- | ---------------------------------------------------------------- | --------- | ---- |
| TASK-004 | Finalize CSS architecture (BEM/OOCSS/SMACSS) and document        |           |      |
| TASK-005 | Expand and standardize CSS variables in `:root`                  |           |      |
| TASK-006 | Document reusable blocks, variable usage, and naming conventions |           |      |

### Implementation Phase 3

- GOAL-003: Modularize, refactor, and standardize CSS and blocks.

| Task     | Description                                                    | Completed | Date |
| -------- | -------------------------------------------------------------- | --------- | ---- |
| TASK-007 | Split main.scss and partials into component-focused SCSS files |           |      |
| TASK-008 | Move design tokens and utility classes to dedicated partials   |           |      |
| TASK-009 | Refactor duplicated styles and blocks into includes/classes    |           |      |
| TASK-010 | Update all pages to use standardized blocks and variables      |           |      |
| TASK-011 | Remove inline styles from meeting pages and move to SCSS files, reducing duplication |           |      |

### Implementation Phase 4

- GOAL-004: Validate accessibility, performance, and consistency.

| Task     | Description                                      | Completed | Date |
| -------- | ------------------------------------------------ | --------- | ---- |
| TASK-012 | Run CSS/HTML linters and accessibility checker   |           |      |
| TASK-013 | Run Lighthouse and Accessibility Insights audits |           |      |
| TASK-014 | Team review and sign-off                         |           |      |

## 3. Alternatives

- **ALT-001**: Use CSS pseudo-elements for icons in headings (not chosen for accessibility and maintainability).
- **ALT-002**: Keep duplicated blocks in each page (not chosen due to maintainability and code bloat).

## 4. Dependencies

- **DEP-001**: Font Awesome for icons
- **DEP-002**: Jekyll includes and layouts
- **DEP-003**: CSS linter, accessibility checker, performance audit tools
- **DEP-004**: Team alignment and documentation

## 5. Files

- **FILE-001**: docs/assets/main.scss (main stylesheet)
- **FILE-002**: docs/\_sass/components/\_metrics.scss (metrics components)
- **FILE-003**: docs/\_layouts/meeting.html (meeting page layout)
- **FILE-004**: docs/\_meetings/ (individual meeting pages)
- **FILE-005**: README.md (documentation)

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
- [Accessibility Insights](https://accessibilityinsights.io/)
- [Performance Optimization Instructions](vscode-userdata:/home/mhenke/.config/Code/User/prompts/performance-optimization.instructions.md)
