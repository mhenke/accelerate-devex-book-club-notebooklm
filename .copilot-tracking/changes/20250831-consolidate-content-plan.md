<!-- markdownlint-disable-file -->

# Task Plan: Consolidate Duplicate Content into Shared Includes/Data Files

## Objectives

- Eliminate duplicate questions and action items.
- Use Jekyll includes/data files for shared content.

## Key Tasks

1. Identify duplicate content across meeting guides.
2. Move shared items to `_includes/` or `_data/`.
3. Reference shared content in Markdown using Jekyll syntax.
4. Test for correct rendering and DRY compliance.

## Dependencies

- Jekyll includes: `docs/_includes/` (to be created if missing)
- Jekyll data: `docs/_data/` (to be created if missing)
- Meeting/resource guides.

## Success Criteria

- No duplicate content remains in guides.
- Shared content is referenced via includes/data files.
- All guides render correctly.
