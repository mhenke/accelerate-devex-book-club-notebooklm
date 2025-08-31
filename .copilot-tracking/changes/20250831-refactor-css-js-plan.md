<!-- markdownlint-disable-file -->

# Task Plan: Refactor Inline CSS/JS into Central SCSS/JS Files

## Objectives

- Move all inline CSS to `docs/assets/main.scss`.
- Move all inline JS to `docs/assets/main.js`.
- Ensure maintainability and consistency across meeting pages.

## Key Tasks

1. Identify all inline CSS/JS in meeting and resource Markdown files.
2. Migrate CSS to SCSS, using classes for targeting.
3. Migrate JS to central JS file, modularizing functions.
4. Update Markdown files to reference central assets.
5. Test for visual and functional consistency.

## Dependencies

- Existing SCSS file: `docs/assets/main.scss`
- New JS file: `docs/assets/main.js` (to be created)

## Success Criteria

- No inline CSS/JS remains in Markdown files.
- All styles and scripts are loaded from central assets.
- Visual and interactive elements work as before.
