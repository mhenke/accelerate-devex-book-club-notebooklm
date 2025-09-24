---
applyTo: '.copilot-tracking/changes/20250924-htmlvalidate-rule-mitigation-changes.md'
---
<!-- markdownlint-disable-file -->
# Task Checklist: HTML Validate Rule Mitigation

## Overview
Trim html-validate warnings by triaging source templates, applying minimal generator fixes, and using targeted config changes when necessary.

## Objectives
- Eliminate actionable accessibility and content-model warnings from `npx html-validate "docs/_site/**/*.html"`.
- Make generator output (IDs, inline styles, form names) consistent with HTML5 and accessible patterns.
- Keep `html-validate` as a meaningful gate in CI with minimal false positives.

## Research Summary
### Project Files
- `.copilot-tracking/research/20250924-htmlvalidate-rule-mitigation-research.md` - primary research and findings (Lines 1-320)
- `.htmlvalidate.json` - current validator config (root)

### External References
- html-validate rule docs: `no-trailing-whitespace`, `valid-id`, `element-permitted-content`, `prefer-native-element`, `aria-label-misuse`, `form-dup-name` (see research file for direct links)

## Implementation Checklist
### [ ] Phase 1: Triage & Quick Fixes (low risk)
- [ ] Task 1.1: Scan source for trailing whitespace and remove it in templates and Markdown
  - Details: .copilot-tracking/details/20250924-htmlvalidate-rule-mitigation-details.md (Lines 40-110)
- [ ] Task 1.2: Identify inline `<style>` blocks inside page content and move to SCSS partials or layout head
  - Details: .copilot-tracking/details/20250924-htmlvalidate-rule-mitigation-details.md (Lines 110-170)
- [ ] Task 1.3: Find and fix obvious `aria-label` misuses and `div role="..."` patterns in includes/layouts
  - Details: .copilot-tracking/details/20250924-htmlvalidate-rule-mitigation-details.md (Lines 170-240)

### [ ] Phase 2: Generator & ID Corrections (medium risk)
- [ ] Task 2.1: Update Liquid templates to prefix numeric IDs or apply `slugify` transform that ensures leading letter
  - Details: .copilot-tracking/details/20250924-htmlvalidate-rule-mitigation-details.md (Lines 240-300)
- [ ] Task 2.2: Rebuild site and re-run `html-validate`, record remaining `valid-id` warnings
  - Details: .copilot-tracking/details/20250924-htmlvalidate-rule-mitigation-details.md (Lines 300-330)

### [ ] Phase 3: Form & Policy (higher-level decisions)
- [ ] Task 3.1: Inspect forms with duplicate `name="readiness"`; convert to `readiness[]` if intended, or make unique names
  - Details: .copilot-tracking/details/20250924-htmlvalidate-rule-mitigation-details.md (Lines 330-370)
- [ ] Task 3.2: If refactoring impractical, apply targeted `.htmlvalidate.json` adjustments and document rationale
  - Details: .copilot-tracking/details/20250924-htmlvalidate-rule-mitigation-details.md (Lines 370-420)

## Dependencies
- Local dev: Ruby + Bundler for Jekyll build; Node/npm for `html-validate` (or `npx` usage)
- Access to project layout and includes under `docs/_includes`, `docs/_layouts`, and `docs/_meetings`

## Success Criteria
- `npx html-validate "docs/_site/**/*.html"` returns zero `element-permitted-content`, `aria-label-misuse`, and `form-dup-name` warnings for fixed pages.
- `valid-id` warnings eliminated or explicitly documented and accepted via `id-pattern` or a measured `relaxed` config.

