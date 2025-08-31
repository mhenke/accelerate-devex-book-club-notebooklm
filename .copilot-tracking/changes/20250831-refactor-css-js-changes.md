<!-- markdownlint-disable-file -->
# Release Changes: Refactor Inline CSS/JS into Central SCSS/JS Files

**Related Plan**: 20250831-refactor-css-js-plan.md
**Implementation Date**: 2025-08-31

## Summary

Refactoring all inline CSS and JavaScript from meeting Markdown files into central asset files for better maintainability and consistency.

## Changes

### Added

- docs/assets/main.js - Central JavaScript file containing all meeting interactivity functionality

### Modified

- docs/assets/main.scss - Added meeting-specific styles extracted from inline styles
- docs/_layouts/default.html - Added script tag to load central JavaScript file
- docs/_meetings/meeting-1.md - Removed inline CSS/JS, replaced with comments referencing central assets

### Removed
