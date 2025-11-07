# Gemini Code Assistant Context

This document provides context for the Gemini code assistant to understand the Accelerate DevEx Book Club project.

## Project Overview

This is a Jekyll-based static site and resource hub for a book club focused on "Accelerate" by Nicole Forsgren, Jez Humble, and Gene Kim. The project aims to teach and apply high-performing DevOps practices using the 24-capabilities framework and DORA metrics.

The main technologies used are:

*   **Jekyll:** A static site generator used to build the website.
*   **SCSS:** For styling the website.
*   **JavaScript:** For interactive elements on the website.
*   **Node.js:** For dependency management and scripting.

The project is structured as follows:

*   `docs/`: Contains the Jekyll site source code, including pages, layouts, assets, and meeting notes.
*   `resources/`: Contains AI prompts, meeting plans, assessments, and other resources for the book club.
*   `scripts/`: Contains utility scripts for tasks like extracting media durations.
*   `tests/`: Contains Playwright tests for the website.

## Building and Running

The following commands are used to build, run, and test the project:

*   **`npm run serve`**: Starts the Jekyll development server.
*   **`npm run build`**: Builds the Jekyll site.
*   **`npm run build:production`**: Builds the Jekyll site and purges unused CSS.
*   **`npm run lint`**: Lints the CSS and JavaScript files.
*   **`npm run test`**: Runs the test suite, which includes HTML validation and link checking.
*   **`npm run validate`**: A comprehensive command that builds the site, lints the code, and runs the tests.

To run the project locally, you can use the following commands:

```bash
cd docs
bundle install --path vendor/bundle
bundle exec jekyll serve --port 4000
```

Then open `http://127.0.0.1:4000/accelerate-devex-book-club-notebooklm/` in your browser.

## Development Conventions

*   Content should be edited in the `docs/` and `resources/` directories.
*   Global styles and tokens can be modified in `docs/_sass/abstracts/_tokens.scss`.
*   SCSS partials in `docs/assets/` require YAML front matter for Jekyll compilation.
*   Prefer CSS/SVG for graphics to ensure accessibility and responsiveness.
*   When adding meeting media: update both meeting markdown (`docs/_meetings/meeting-X.md`) AND `docs/_data/supplementary_media.yml` in the corresponding `meeting_N` section (week number, not meeting number). Maintain podcast order: brief, deep dive, debate, critique.
*   Run `npm run validate` before submitting a pull request.
