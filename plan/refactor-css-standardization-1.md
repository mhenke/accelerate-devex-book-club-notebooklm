---
goal: 'Refactor: Standardize meeting-page CSS, icons, and theme mapping'
version: 1.0
date_created: 2025-09-06
last_updated: 2025-09-06
owner: 'docs/frontend-team'
status: 'Planned'
tags: ['refactor', 'css', 'theming', 'accessibility', 'meeting-pages']
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This plan standardizes meeting-page CSS by reusing existing design tokens, centralizing icon styling, and mapping per-meeting token values to the runtime CSS variables expected by the meeting component. The plan is deterministic and contains atomic, machine-executable tasks with explicit file paths and verification steps.

## 1. Requirements & Constraints

- **REQ-001**: Reuse the canonical tokens declared in `docs/_sass/abstracts/_tokens.scss` (do not duplicate color values).
- **REQ-002**: Provide an `.icon` utility class and size modifiers; update markup in `docs/_meetings/*.md` to include `class="icon ..."` on existing Font Awesome elements.
- **REQ-003**: Create `.meeting-theme--N` classes that map token names like `--meeting-1-primary` to the runtime variables used by components (e.g., `--meeting-primary`).
- **REQ-004**: Import new partials into the project's main SCSS entry (`docs/_sass/main.scss`) without changing token names.
- **REQ-005**: Avoid large refactors of `_meeting-content.scss`; implement theme mapping so component rules remain stable.
- **SEC-001**: Do not hardcode secrets or external CDN keys in files; references to Font Awesome must be unchanged (use existing include method).
- **CON-001**: All modifications must pass a local Jekyll build (`bundle exec jekyll build`) and the repository's HTML/CSS validation commands (`npm run lint`, `npm run lint:md`, `npm run test:html`) where applicable.
- **GUD-001**: Maintain accessibility guidance: decorative icons must have `aria-hidden="true"` and meaningful icons must include accessible text (screen-reader-only span).
- **PAT-001**: Use small, composable, and testable tasks. Each task is atomic and scriptable.

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Add new SCSS partials for icons and meeting themes and wire them into `main.scss`.

| Task     | Description                                                                                                                                                                                                                                                                                                                          | Completed | Date |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ---- |
| TASK-001 | Create file `docs/_sass/components/_icons.scss` with `.icon`, `.icon--sm`, `.icon--lg`, and heading alignment rules.                                                                                                                                                                                                                 |           |      |
| TASK-002 | Create file `docs/_sass/components/_meeting-themes.scss` with `.meeting-theme--1`..`.meeting-theme--4` mapping runtime variables (`--meeting-primary`, `--meeting-bg`, `--meeting-border`, `--meeting-hover`, `--meeting-light`) to existing tokens (e.g., `var(--meeting-1-primary)`). Include exact variable mappings in the file. |           |      |
| TASK-003 | Update `docs/_sass/main.scss` to add `@import "components/_icons.scss";` and `@import "components/_meeting-themes.scss";` immediately after existing component imports.                                                                                                                                                              |           |      |
| TASK-004 | Run SCSS compile check: `cd docs && bundle exec jekyll build --incremental` and capture build output.                                                                                                                                                                                                                                |           |      |
| TASK-005 | Validate CSS/HTML: run `npm run lint` and `npm run test:html` from repo root and capture results.                                                                                                                                                                                                                                    |           |      |

### Implementation Phase 2

- GOAL-002: Migrate inline icon markup and remove inline styles from source files.

| Task     | Description                                                                                                                                                                                                                                                                                                                                                            | Completed | Date |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---- |
| TASK-006 | Create a dry-run script `scripts/migrate-add-icon-class.py` that scans `docs/_meetings/**/*.md` and reports lines containing `<i class="fas fa-` that do not already include `class="icon"`. The script writes a plan report to `migrations/migrate-add-icon-class-report.json`.                                                                                       |           |      |
| TASK-007 | Run the dry-run script and review `migrations/migrate-add-icon-class-report.json` to confirm all matches.                                                                                                                                                                                                                                                              |           |      |
| TASK-008 | If dry-run is approved, run the migration script with a backup mode that creates `backups/meetings-YYYYMMDD-HHMMSS/` and modifies the markdown files in-place to add `icon` to the `class` attribute (preserve other classes). Commit changes in a single commit with message `chore(css): add .icon utility to Font Awesome markup` and include the migration report. |           |      |
| TASK-009 | Search for `style="` occurrences in source files (exclude `_site`, `docs/_site`, `docs/vendor`) and create `migrations/inline-style-report.json` listing file, line number, and snippet for each match.                                                                                                                                                                |           |      |
| TASK-010 | For each `style="` match in source files, create a corresponding CSS rule in `_meeting-content.scss` or a new component partial, referencing tokens. Prioritize only editable source files (not generated vendor files). Record each replacement in `migrations/inline-style-replacements.json`.                                                                       |           |      |
| TASK-011 | Run Jekyll build + validations again (`bundle exec jekyll build && npm run test:html`).                                                                                                                                                                                                                                                                                |           |      |

### Implementation Phase 3

- GOAL-003: Cleanup, remove unnecessary `!important` usages in `_meeting-content.scss` and finalize accessibility checks.

| Task     | Description                                                                                                                                                                                                                                          | Completed | Date |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---- |
| TASK-012 | Create automated linter rule report for `!important` occurrences: `scripts/report-important-usage.sh` that outputs all files and line numbers.                                                                                                       |           |      |
| TASK-013 | Manually or programmatically remove `!important` where cascade and specificity suffice. Each removal must include an inline comment `/* REVIEW: removed !important - validated in build */` and be recorded in `migrations/important-removals.json`. |           |      |
| TASK-014 | Run accessibility tooling: `npm run validate` (project's validation script) and optionally `axe` or `Accessibility Insights` (if setup). Record final validation outputs in `validation/final-validation.log`.                                       |           |      |

## 3. Alternatives

- **ALT-001**: Inject icons via CSS pseudo-elements and keep markup unchanged. Rejected because the project uses inline Font Awesome classes extensively and pseudo-element approach complicates accessibility and SVG replacement scenarios.
- **ALT-002**: Rename runtime variables in `_meeting-content.scss` to match token names (e.g., change `--meeting-primary` to `--meeting-1-primary`). Rejected because it requires many component edits and risks regressions; mapping classes are safer and lower risk.

## 4. Dependencies

- **DEP-001**: `docs/_sass/abstracts/_tokens.scss` must remain the single source of truth for token values.
- **DEP-002**: Jekyll and Bundler installed in the environment for build verification (`bundle exec jekyll build`).
- **DEP-003**: Node toolchain for linting and HTML validation (`npm run lint`, `npm run test:html`).

## 5. Files

- **FILE-001**: `docs/_sass/components/_icons.scss` — new partial containing `.icon` utilities and heading alignment rules.
- **FILE-002**: `docs/_sass/components/_meeting-themes.scss` — new partial with `.meeting-theme--N` mappings to runtime `--meeting-*` variables.
- **FILE-003**: `docs/_sass/main.scss` — update imports to include new partials.
- **FILE-004**: `docs/_meetings/*.md` — markdown files to add `icon` class to Font Awesome `<i>` tags (migration script will update these).
- **FILE-005**: `scripts/migrate-add-icon-class.py` — dry-run and migration script (executable, creates backups and reports).
- **FILE-006**: `migrations/*.json` — reports created during migration (dry-run, replacements).
- **FILE-007**: `scripts/report-important-usage.sh` — reports `!important` usage for cleanup prioritization.

### Exact file contents and deterministic instructions (machine-executable)

1. `docs/_sass/components/_icons.scss` (create file with the exact contents below):

```scss
/* docs/_sass/components/_icons.scss - generated by plan/refactor-css-standardization-1.md */
/* Icon utilities for consistent spacing, sizing and accessibility */
:root {
  /* ensure spacing tokens are available here; tokens are defined in _tokens.scss */
}

.icon {
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  margin-right: var(--space-sm, 0.5rem);
  color: currentColor; /* inherit text color */
  font-style: normal; /* in case <i> has italic default */
}

.icon--sm {
  font-size: 0.85em;
}
.icon--lg {
  font-size: 1.35em;
}

/* Headings inside meeting content should align when icons are present */
.meeting-content h2,
.meeting-content h3,
.meeting-content h4 {
  display: flex;
  align-items: center;
  gap: var(--space-sm, 0.5rem);
}

/* Screen-reader helper when icon conveys meaning */
.sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0 0 0 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
```

2. `docs/_sass/components/_meeting-themes.scss` (create file with exact contents below). This file maps token variables to the runtime variables expected by components. Add entries for each meeting token present in `_tokens.scss` (example shows 1..4). Extend if more meetings exist.

```scss
/* docs/_sass/components/_meeting-themes.scss - generated by plan */

.meeting-theme--1 {
  --meeting-primary: var(--meeting-1-primary);
  --meeting-secondary: var(--meeting-1-secondary, var(--meeting-1-primary));
  --meeting-bg: var(--background-light, #ffffff);
  --meeting-light: rgba(255, 255, 255, 0.6);
  --meeting-hover: var(--meeting-1-hover, rgba(0, 0, 0, 0.06));
  --meeting-border: var(--border-light, rgba(0, 0, 0, 0.06));
}

.meeting-theme--2 {
  --meeting-primary: var(--meeting-2-primary);
  --meeting-secondary: var(--meeting-2-secondary, var(--meeting-2-primary));
  --meeting-bg: var(--background-light, #ffffff);
  --meeting-light: rgba(255, 255, 255, 0.6);
  --meeting-hover: var(--meeting-2-hover, rgba(0, 0, 0, 0.06));
  --meeting-border: var(--border-light, rgba(0, 0, 0, 0.06));
}

.meeting-theme--3 {
  --meeting-primary: var(--meeting-3-primary);
  --meeting-secondary: var(--meeting-3-secondary, var(--meeting-3-primary));
  --meeting-bg: var(--background-light, #ffffff);
  --meeting-light: rgba(255, 255, 255, 0.6);
  --meeting-hover: var(--meeting-3-hover, rgba(0, 0, 0, 0.06));
  --meeting-border: var(--border-light, rgba(0, 0, 0, 0.06));
}

.meeting-theme--4 {
  --meeting-primary: var(--meeting-4-primary);
  --meeting-secondary: var(--meeting-4-secondary, var(--meeting-4-primary));
  --meeting-bg: var(--background-light, #ffffff);
  --meeting-light: rgba(255, 255, 255, 0.6);
  --meeting-hover: var(--meeting-4-hover, rgba(0, 0, 0, 0.06));
  --meeting-border: var(--border-light, rgba(0, 0, 0, 0.06));
}
```

3. `docs/_sass/main.scss` deterministic insertion instruction:

- Locate the last `@import` statement that imports `components` partials in `docs/_sass/main.scss`.
- If a block like `// components` or a sequence of `@import "components/...";` exists, insert the two imports immediately after the last existing `@import "components/` line. If no components block exists, append the imports to the end of the file.

Exact lines to insert (two lines):

```scss
@import 'components/_icons.scss';
@import 'components/_meeting-themes.scss';
```

Implementation note: the insertion should preserve existing import ordering. If the project uses `@use` instead of `@import`, convert these lines to the same pattern used elsewhere.

4. `scripts/migrate-add-icon-class.py` (create exact script below). This script supports `--dry-run` and `--apply` and writes reports to `migrations/`.

```python
#!/usr/bin/env python3
"""
scripts/migrate-add-icon-class.py

Scans markdown files under docs/_meetings and docs/ for <i class="fas fa-..."> occurrences and reports
or optionally modifies the files to ensure the "icon" utility class is present.

Usage:
  python3 scripts/migrate-add-icon-class.py --dry-run
  python3 scripts/migrate-add-icon-class.py --apply
"""
import argparse
from pathlib import Path
import re
import json
from datetime import datetime

ROOT = Path(__file__).resolve().parents[1]
PATTERN = re.compile(r"<i\s+([^>]*?)class=\"([^"]*fas[^\"]*)\"([^>]*)>", re.IGNORECASE)

def scan_files(paths):
    results = []
    for p in paths:
        for f in Path(p).rglob('*.md'):
            text = f.read_text(encoding='utf-8')
            for m in PATTERN.finditer(text):
                classes = m.group(2)
                if 'icon' not in classes.split():
                    line_no = text.count('\n', 0, m.start()) + 1
                    snippet = text[m.start():m.end()]
                    results.append({'file': str(f.relative_to(ROOT)), 'line': line_no, 'snippet': snippet})
    return results

def apply_changes(items):
    backup_dir = ROOT / 'backups' / f"meetings-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    backup_dir.mkdir(parents=True, exist_ok=True)
    modified = []
    for item in items:
        fpath = ROOT / item['file']
        text = fpath.read_text(encoding='utf-8')
        new_text = PATTERN.sub(lambda m: add_icon_to_match(m), text)
        if new_text != text:
            # backup
            target_backup = backup_dir / item['file']
            target_backup.parent.mkdir(parents=True, exist_ok=True)
            target_backup.write_text(text, encoding='utf-8')
            fpath.write_text(new_text, encoding='utf-8')
            modified.append(str(item['file']))
    return modified

def add_icon_to_match(m):
    pre = m.group(1)
    classes = m.group(2)
    post = m.group(3)
    class_list = classes.split()
    if 'icon' not in class_list:
        class_list.insert(0, 'icon')
    new_classes = ' '.join(class_list)
    return f"<i {pre}class=\"{new_classes}\"{post}>"

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--dry-run', action='store_true')
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()

    paths = [ROOT / 'docs' / '_meetings', ROOT / 'docs']
    items = scan_files(paths)
    (ROOT / 'migrations').mkdir(exist_ok=True)
    report_file = ROOT / 'migrations' / 'migrate-add-icon-class-report.json'
    report = {'count': len(items), 'items': items}
    report_file.write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(f"Found {len(items)} candidate icons. Report written to {report_file}")

    if args.apply:
        modified = apply_changes(items)
        apply_report = ROOT / 'migrations' / 'migrate-add-icon-class-applied.json'
        apply_report.write_text(json.dumps({'modified': modified}, indent=2), encoding='utf-8')
        print(f"Modified {len(modified)} files. Backup stored.")

if __name__ == '__main__':
    main()
```

5. Deterministic validation commands (run after applying changes):

```bash
# Build site
cd /home/mhenke/Projects/accelerate-devex-book-club-notebooklm/docs && bundle exec jekyll build --incremental

# Run lint + HTML tests from repo root
cd /home/mhenke/Projects/accelerate-devex-book-club-notebooklm && npm run lint && npm run test:html

# Check migration report
cat migrations/migrate-add-icon-class-report.json | jq '.{count:.count}'
```

Notes: all created files should be committed in a single commit per phase and include the migration report and backups in the commit message body (but not the backup contents themselves). Ensure CI runs `npm run validate` after push.

## 6. Testing

- **TEST-001**: SCSS compile and Jekyll build
  - Command: `cd docs && bundle exec jekyll build` (exit code 0 required)
  - Validation: build log `docs/_site` exists and generated HTML files timestamp updated.
- **TEST-002**: CSS/HTML validation
  - Command: `npm run lint && npm run test:html`
  - Validation: no new errors and existing baseline not increased; saved in `validation/build-validation.log`.
- **TEST-003**: Migration dry-run correctness
  - Command: `python3 scripts/migrate-add-icon-class.py --dry-run`
  - Validation: `migrations/migrate-add-icon-class-report.json` lists all candidate changes and no files modified.
- **TEST-004**: Accessibility smoke test
  - Command: `npm run validate` (project validation) and `npx axe-cli docs/_site/index.html` if axe is configured.
  - Validation: No new critical accessibility errors; final report saved to `validation/final-accessibility.log`.

## 7. Risks & Assumptions

- **RISK-001**: Automated migration could mis-handle complex `class` attributes or unusual inline patterns. Mitigation: dry-run and create backups before in-place edits.
- **RISK-002**: Some inline `style` occurrences are generated by third-party vendor files and should not be modified. Mitigation: exclude vendor paths and `_site` in search patterns.
- **ASSUMPTION-001**: Font Awesome is included in the site globally and will continue to be available; we will not change how icons are loaded in this plan.
- **ASSUMPTION-002**: `_tokens.scss` contains `--meeting-N-primary` tokens for N in 1..4 (if more meetings exist the mapping file must be extended).

## 8. Related Specifications / Further Reading

- `/.copilot-tracking/research/20250906-css-standardization-research.md` — research notes and recommended SCSS snippets
- `docs/_sass/abstracts/_tokens.scss` — canonical token file
- Font Awesome docs: https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
- MDN: Using CSS custom properties: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
