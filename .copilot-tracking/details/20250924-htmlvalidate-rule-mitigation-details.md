<!-- markdownlint-disable-file -->
# Task Details: HTML Validate Rule Mitigation

## Research Reference
**Source Research**: #file:../research/20250924-htmlvalidate-rule-mitigation-research.md

## Phase 1: Triage & Quick Fixes

### Task 1.1: Remove trailing whitespace across templates and Markdown
Purpose: stop `no-trailing-whitespace` warnings from generated HTML.

- **Files**:
  - `docs/_includes/**/*` - includes that often append fragments
  - `docs/_meetings/**/*` - meeting pages where content is authored
  - `docs/*.md` - top-level markdown pages
- **Action**:
  - Run the search command to list offending files: `grep -RIn "[[:blank:]]$" docs | head` (see research lines 220-240)
  - Run the bulk fix command (safe to run in repo root):

```bash
find docs -type f \( -name "*.md" -o -name "*.html" -o -name "*.liquid" \) -print0 \
  | xargs -0 sed -i 's/[[:space:]]\+$//'
```

- **Success**:
  - No `no-trailing-whitespace` warnings in `docs/_site` after rebuild.

### Task 1.2: Move inline `<style>` out of content
Purpose: eliminate `element-permitted-content` warnings.

- **Files**:
  - `docs/_includes/*` and specific meeting pages flagged in linter output (see research lines 110-160)
- **Action**:
  - Identify inline `<style>` instances: `grep -RIn "<style" docs/_includes docs/_meetings | head`
  - For each found:
    - Extract rules into `docs/_sass/components/_<component>.scss` or `docs/assets/main.scss`.
    - Replace inline `<style>` with a class reference in the include and add that class to the SCSS partial.

- **Success**:
  - No `element-permitted-content` warnings for pages that were changed.

### Task 1.3: Fix `aria-label` misuse and role-only containers
Purpose: reduce `aria-label-misuse` and `prefer-native-element` warnings.

- **Files**:
  - `docs/_includes/*`, `docs/_layouts/*`
- **Action**:
  - Find uses: `grep -RIn "aria-label\|role=\"main\"" docs/_includes docs/_layouts | sed -n '1,200p'`
  - Replace `div role="main"` with `<main>` in layouts; convert `aria-label` to proper `<label>` or `aria-labelledby` where applicable.

- **Success**:
  - No `aria-label-misuse` or `prefer-native-element` warnings after rebuild for modified files.

## Phase 2: Generator & ID Corrections

### Task 2.1: Update Liquid templates to produce safe IDs
Purpose: eliminate `valid-id` warnings where IDs start with digits.

- **Files**:
  - Templates that generate anchors/IDs (likely in `_includes` or `_layouts` and feed templates under `docs/_data` or other feed generators)
- **Action**:
  - Add a small Liquid guard around slugify output to prefix numeric IDs (example in research lines 260-280).
  - Example patch: when producing `id="{{ page.title | slugify }}"`, replace with the `safe_id` pattern (prefix with `s-` if starting with digit).

- **Verification**:
  - Rebuild site and re-run `html-validate` to ensure `valid-id` warnings are resolved.

### Task 2.2: Rebuild and record results
- **Action**:
  - `cd docs && bundle exec jekyll build --incremental`
  - `npx html-validate "docs/_site/**/*.html"`
- **Files to update**: none (report results to `.copilot-tracking/changes/...`)

## Phase 3: Forms & Policy

### Task 3.1: Inspect and fix duplicate form names (readiness)
Purpose: fix `form-dup-name` warnings such as duplicate `readiness` on meeting pages.

- **Files**:
  - `docs/_meetings/meeting-4.md` and other meeting pages flagged in linter output (see research lines 320-340)
- **Action**:
  - Inspect forms around reported line numbers in the built `docs/_site` or source to determine intent.
  - If multiple checkboxes represent multiple values, change `name="readiness"` to `name="readiness[]"` in the source.
  - If names must be unique, assign unique suffixes or restructure the form.

- **Success**:
  - `form-dup-name` warnings eliminated for fixed pages.

### Task 3.2: Targeted `.htmlvalidate.json` adjustments (if needed)
- **Action**:
  - If a pattern is intentionally acceptable, add a documented exception in `.htmlvalidate.json`. Example conservative snippet (see research lines 340-370):

```json
{
  "rules": {
    "valid-id": ["warn", { "relaxed": true }],
    "form-dup-name": ["warn", { "allowArrayBrackets": true, "allowCheckboxDefault": true, "shared": ["radio"] }]
  }
}
```

- **Success**:
  - Documented exceptions exist and are limited in scope; changes are recorded in the changes tracking file.

## Dependencies
- Ruby + Bundler for Jekyll, Node for `html-validate` (or `npx` available)

## Success Criteria
- See plan file for success criteria and acceptance tests.

## File Operations (proposed edits)
- Update/Add:
  - `docs/_sass/components/_*.scss` - new partials where needed
  - `docs/_includes/*` - remove inline styles and update classes
  - `docs/_layouts/*` - use native elements where applicable
  - `docs/_meetings/*` - fix form names and trailing whitespace
  - `.htmlvalidate.json` - add targeted rule adjustments only if necessary (record rationale)

## Reporting
- Update `.copilot-tracking/changes/20250924-htmlvalidate-rule-mitigation-changes.md` with every change and its reason.

