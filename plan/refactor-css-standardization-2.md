---
goal: CSS Standardization and Reusable Block Implementation
version: 2.0
date_created: 2025-09-06
last_updated: 2025-09-06
owner: DevEx Book Club Team
status: 'In progress'
tags: [refactor, css, standardization, accessibility, performance]
---

# Introduction

![Status: In progress](https://img.shields.io/badge/status-In%20progress-yellow)

This plan aims to refactor and standardize CSS across the codebase, remove inline styles, and implement reusable blocks for meeting pages. The goal is to ensure consistent icon usage, leverage existing variables, and follow best practices for maintainability, accessibility, and performance.

## 1. Requirements & Constraints

## 1a. Icon Usage and Block Standardization

- All icon usage must follow a single, consistent pattern. Prefer CSS pseudo-elements for icons (e.g., `.icon-before` with `::before`), or a single `<i class="...">` pattern if required for compatibility.

| Task | Description | Completed | Date |
| TASK-001 | Audit all CSS, inline styles, and duplicated blocks | | |
| TASK-002 | Inventory existing variables and reusable classes | | |

### Implementation Phase 2

- GOAL-002: Refactor and standardize CSS, remove inline styles, and implement reusable blocks

#### Best Practice Example for Icon Consistency

```html
<h3 class="icon-before icon-times">Old Thinking</h3>
```

```scss
.icon-before.icon-times::before {
  content: '\f057'; // Unicode for FontAwesome times-circle
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
  margin-right: 0.5em;
  color: var(--accent-red, #f44336);
}
```

// Use variables for colors, spacing, and font-family. Do not hardcode values.

#### Best Practice Example for Reusable Block

```html
<div class="meeting-block">
  <h3 class="icon-before icon-times">Old Thinking</h3>
  <p>...</p>
</div>
```

```scss
.meeting-block {
  background: var(--block-bg, #fff);
  border-radius: var(--block-radius, 8px);
  box-shadow: var(--block-shadow, 0 2px 8px rgba(0, 0, 0, 0.05));
  padding: var(--block-padding, 1.5em);
  margin-bottom: var(--block-margin, 2em);
}
```

// All meeting pages must use .meeting-block and icon classes. No duplicated markup.
| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-003 | Remove inline styles and replace with standardized classes | | |
| TASK-004 | Refactor duplicated blocks into reusable classes/partials | | |
| TASK-005 | Standardize icon usage (CSS pseudo-elements or single pattern) | | |

### Implementation Phase 3

- GOAL-003: Update documentation and test for compliance

| Task     | Description                                             | Completed | Date |
| -------- | ------------------------------------------------------- | --------- | ---- |
| TASK-006 | Update documentation for new CSS standards and blocks   |           |      |
| TASK-007 | Run linting, accessibility, and visual regression tests |           |      |

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
