# Project Overview

This repository contains a Jekyll-based GitHub Pages site for a DevOps book club focused on the book "Accelerate" by Nicole Forsgren, Jez Humble, and Gene Kim. The site serves as a resource hub and interactive learning platform, featuring meeting guides, AI-generated content, and practical activities to help users understand and implement high-performing DevOps practices.

The project is built with Jekyll and uses a combination of SCSS, HTML, and JavaScript for the frontend. It leverages GitHub Pages for continuous deployment. The content is written in Markdown. The project also includes a comprehensive suite of tools for linting, testing, and quality assurance, including Stylelint, ESLint, HTML-Validate, Pa11y-CI, Lighthouse, and Playwright.

# Building and Running

## Local Development

To run the Jekyll site locally, follow these steps:

### Install dependencies

```bash
cd docs
bundle install --path vendor/bundle
```

### Start the development server

```bash
cd docs
bundle exec jekyll serve --port 4000
```

### Access the site

Open your browser and navigate to `http://127.0.0.1:4000/accelerate-devex-book-club-notebooklm/`

## Building for Production

To build the site for production, run the following command:

```bash
cd docs
bundle exec jekyll build
```

The production-ready files will be generated in the `docs/_site` directory.

# Testing

This project has a comprehensive test suite that includes linting, HTML validation, accessibility testing, and end-to-end testing with Playwright.

## Running the Full Test Suite

To run all tests, use the following command from the root directory:

```bash
npm test
```

## Individual Tests

You can also run individual tests:

- **HTML Validation:** `npm run test:html`
- **CSS Linting:** `npm run test:css`
- **Accessibility Testing:** `npm run test:a11y`
- **Playwright E2E Tests:** `cd tests && npm test`

# Development Conventions

- **Visuals:** All visuals are implemented using CSS, SVG, HTML, and JavaScript. Static images are avoided.
- **Styling:** The project uses a modern SCSS architecture with design tokens, utility classes, and reusable components. All styles are defined in `docs/assets/main.scss` and its partials in `docs/_sass/`.
- **Content:** All content is written in Markdown.
- **Accessibility:** The project follows accessibility best practices, including using semantic HTML and ARIA roles.
- **Branching:** The project follows the standard GitHub flow (feature branches, pull requests).
