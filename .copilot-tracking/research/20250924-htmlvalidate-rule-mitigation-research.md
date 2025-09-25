# Task Research Notes: html-validate rule mitigation research

## Research Executed

### File Analysis

- `.htmlvalidate.json` (repo root)
  - Found existing configuration with many rules set to `warn` including `no-trailing-whitespace`, `valid-id`, `element-permitted-content`, `aria-label-misuse`, `form-dup-name` and others. This indicates the project already centralizes html-validate configuration.

### Code Search Results

- `no-trailing-whitespace`
  - Matched in linter output across many generated files in `docs/_site/*.html` (multiple lines reported as trailing whitespace in built HTML).
- `valid-id`
  - Matched in built files where heading-generated or feed-generated IDs begin with a digit (e.g. lines reporting "element id must begin with a letter").
- `element-permitted-content`
  - Many occurrences for `<style>` elements inside a `<div>` (Jekyll includes/inlines) and other content-model mismatches.
- `prefer-native-element`
  - Instances of `div role="main"` or similar usage reported.
- `aria-label-misuse`
  - Several occurrences where `aria-label` is present on elements for which this rule disallows it (hidden inputs or other non-labelable elements).
- `form-dup-name`
  - Duplicate form control name `readiness` flagged in meeting pages (likely repeated inputs/checkboxes or a templated form fragment).

### External Research

- #githubRepo:"html-validate/html-validate rules no-trailing-whitespace"
  - Official rule docs and recommendations for `no-trailing-whitespace` (explain rule intent and examples).
- #fetch:https://html-validate.org/rules/no-trailing-whitespace.html
  - Confirms trailing whitespace is a style rule; recommended to remove trailing spaces which produce noisy diffs.
- #fetch:https://html-validate.org/rules/valid-id.html
  - Details valid-id constraints and `relaxed` option (allow non-letter starts if needed).
- #fetch:https://html-validate.org/rules/element-permitted-content.html
  - Explains content model enforcement (e.g., `<style>` not allowed inside `<div>`).
- #fetch:https://html-validate.org/rules/prefer-native-element.html
  - Encourages native HTML elements over roles (e.g., `<main>` instead of `<div role=\"main\">`).
- #fetch:https://html-validate.org/rules/aria-label-misuse.html
  - Documents which elements may receive `aria-label` and why misuse can harm AT experience.
- #fetch:https://html-validate.org/rules/form-dup-name.html
  - Describes `form-dup-name` options: `allowArrayBrackets`, `allowCheckboxDefault`, and `shared` (controls allowed to share a name).

### Project Conventions

- Standards referenced: `html-validate:recommended` (used as `extends` in `.htmlvalidate.json`).
- Instructions followed: Keep validators configured in `.htmlvalidate.json` and run `npx html-validate "docs/_site/**/*.html"` after building with Jekyll.

## Key Discoveries

### 1) Trailing whitespace (`no-trailing-whitespace`)

- Source: appears in many generated HTML files in `docs/_site`. The trailing whitespace likely originates from either (a) template fragments appended with accidental spaces/newlines, or (b) Markdown hard-break syntax where authors used two spaces at end-of-line intentionally.
- Options: fix source (remove trailing spaces in templates/markdown) or silence rule in config (set to `off` or leave `warn`). Prefer fixing at source for maintainability.

### 2) IDs beginning with digits (`valid-id`)

- Source: generated IDs (from kramdown or feed generator) may start with numbers (e.g. dates or timestamp-based anchors). The `valid-id` rule by default enforces IDs to start with a letter.
- Options:
  - Fix generator templates so IDs are prefixed with a letter (e.g., `id=\"a123\"` or `id=\"section-123\"`).
  - Relax rule using `{"relaxed": true}` in `.htmlvalidate.json` to accept IDs that only meet HTML5 minimal requirements (non-empty, no whitespace).
  - Add `id-pattern` rule to enforce a safe project-wide pattern (recommended if you want consistency).
- Recommendation: Prefer fixing generator if feasible; otherwise adopt `id-pattern` (e.g., require starting letter or dash-prefixed) or temporarily set `relaxed:true` with a plan to clean up IDs later.

### 3) Disallowed content (`element-permitted-content`), e.g. `<style>` inside `<div>`

- Source: Jekyll includes or markdown fragments inserting `<style>` blocks inside content wrappers (e.g., per-component inline styles in includes). HTML5 doesn't permit `<style>` in arbitrary flow content; it should be in `<head>` or in allowed places.
- Options:
  - Move inline `<style>` blocks to site CSS (preferred) or to the page `<head>` via layout variables.
  - If the style is per-component and cannot be globalized, wrap it in a `<template>` or use `scoped` CSS strategies, but keep it out of plain `<div>` content.
  - As a last resort, suppress the rule for specific files using HTML-validate configuration `ignoreFiles` or inline `<!-- html-validate disable rule -->` comments around the fragment.
- Recommendation: Rework to remove `<style>` from content; improve includes to emit classes and put styles in `assets`.

### 4) `prefer-native-element` (roles vs native)

- Source: legacy or portable patterns using `div role=\"main\"` rather than `<main>` and similar.
- Options:
  - Update templates to use native elements (e.g., `<main>`, `<nav>`) instead of `role` on generic containers.
  - If using roles is intentional for compatibility, add rule exceptions (`include`/`exclude` mapping) in config.
- Recommendation: Replace roles with native elements in templates and includes.

### 5) `aria-label-misuse`

- Source: `aria-label` used on hidden inputs or elements with visible text; can also appear in generated snippet fragments.
- Options:
  - Remove `aria-label` where not appropriate, use `<label>` or `aria-labelledby` for composite controls.
  - For custom elements that intentionally accept `aria-label`, declare the attribute in custom element metadata (advanced) or add targeted config exceptions.
- Recommendation: Fix templates to use correct accessible labeling patterns; avoid broad config relaxations.

### 6) `form-dup-name` (duplicate `readiness`)

- Source: Duplicate `name=\"readiness\"` entries in meeting pages. Could be repeated checkboxes or multiple elements unintentionally reusing the same name.
- Options:
  - If intended as an array (multiple values), use `name=\"readiness[]\"` and keep `allowArrayBrackets: true` (default true).
  - If intended as multiple checkboxes that should share a name, ensure `shared` option includes `checkbox` (if you want to accept it) or make names unique.
  - For hidden-default + checkbox pairs, keep `allowCheckboxDefault: true` (default true) if that pattern is used.
- Recommendation: Inspect the form source; convert to `foo[]` if an array is intended, or make names unique/intent explicit.

## Recommended Approach (single selected approach)

Overall guiding principle: prefer fixing the source/templates so generated HTML is semantically correct and accessible. Use configuration adjustments only for documented, intentional patterns that cannot be refactored quickly.

1. Triage and fix templates/markdown where issues originate:

   - Remove trailing whitespace from templates and source Markdown. Run a simple script to strip trailing spaces from `.md` and Jekyll include files.
   - Move `<style>` blocks out of content and into `docs/assets/main.scss` or appropriate layout head injection.
   - Replace `div role=\"main\"` and other role-only patterns with native elements in layout and include files.
   - Fix `aria-label` usage: use `label` or `aria-labelledby`, and remove `aria-label` from hidden inputs.
   - Inspect forms with duplicate `readiness` names; convert to `readiness[]` if appropriate or ensure unique names.

2. For generator-driven id problems (IDs starting with digits):

   - Update the ID templates (liquid filters) to prefix IDs with a letter or use a transform when generating anchors.
   - If immediate fixes are not possible, set an intermediate configuration in `.htmlvalidate.json`:
     - Option A (temporary): `"valid-id": ["warn", {"relaxed": true}]` or set to `"off"` while migrating.
     - Option B (recommended long term): add `id-pattern` rule to require safe IDs and adjust generator to comply.

3. Use targeted config when refactoring is impractical:
   - Add inline `<!-- html-validate disable -->` around generated fragments where you accept the risk.
   - Use `ignoreFiles` in `.htmlvalidate.json` for specific pages only if they are intentionally different.

## Implementation Guidance

- Objectives: eliminate warnings by fixing source where possible, maintain accessibility and semantic correctness, and keep `html-validate` as a gate in CI.

- Key Tasks:

  1. Run `npm run build:jekyll` and `npx html-validate "docs/_site/**/*.html"` locally to reproduce warnings. (You already did this.)
  2. Find offending source locations: search for trailing spaces, inline `<style>` blocks, `div role=`, `aria-label` occurrences, and duplicate `name=\"readiness\"` in `docs/_meetings` and `_includes`.
  3. Apply fixes in source (examples below).
  4. Rebuild and re-run validator until green or until remaining items are intentional and documented.

- Dependencies:

  - Node with `html-validate` in devDependencies or use `npx html-validate`.
  - Jekyll build environment (Ruby, Bundler) to produce `docs/_site` for validation.

- Success Criteria:
  - `npx html-validate "docs/_site/**/*.html"` reports zero `element-permitted-content`, `aria-label-misuse`, and `form-dup-name` warnings after fixes.
  - `valid-id` warnings reduced to zero after generator/template fixes or acceptance of a documented config change.

## Concrete Examples & Commands

- Remove trailing whitespace from markdown and include files (dry-run + fix):

```bash
# dry-run: show files with trailing spaces
grep -RIn "[[:blank:]]$" docs | head

# remove trailing spaces in-place for markdown/includes
find docs -type f \( -name "*.md" -o -name "*.html" -o -name "*.liquid" \) -print0 \
  | xargs -0 sed -i 's/[[:space:]]\+$//'
```

- Fix generator for numeric IDs (Liquid example to prefix auto ids):

```liquid
{%- assign raw_id = page.title | slugify -%}
{%- if raw_id =~ "^[0-9]" -%}
  {%- assign safe_id = "s-" | append: raw_id -%}
{%- else -%}
  {%- assign safe_id = raw_id -%}
{%- endif -%}
<h2 id="{{ safe_id }}">{{ page.title }}</h2>
```

- Move inline `<style>` blocks out of includes:

  - Create a per-component SCSS partial under `docs/_sass/components/_component.scss` and import into `assets/main.scss`.
  - In include, add a class instead of inline `<style>`.

- Example `.htmlvalidate.json` snippet (conservative adjustments if you cannot change source immediately):

```json
{
  "extends": ["html-validate:recommended"],
  "rules": {
    "no-trailing-whitespace": "warn",
    "valid-id": ["warn", { "relaxed": true }],
    "element-permitted-content": "warn",
    "prefer-native-element": "warn",
    "aria-label-misuse": "warn",
    "form-dup-name": ["warn", { "allowArrayBrackets": true, "allowCheckboxDefault": true, "shared": ["radio"] }]
  }
}

*** End of file
```
