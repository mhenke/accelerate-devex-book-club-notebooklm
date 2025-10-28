# Accelerate DevEx Book Club — NotebookLM Resources

Concise repo README generated from the project's Copilot/agent instructions and repository layout.

## Project name and description
o
- Project: Accelerate DevEx Book Club (site and resource hub)
- Purpose: A Jekyll-based GitHub Pages site and resource hub for a DevOps book club focused on the book "Accelerate". The repo contains meeting materials, AI prompts (NotebookLM/Claude), SCSS-based visuals, and tooling to build, lint, and validate the site.

## Technology stack

- Jekyll (Ruby) — site generator (contents live under `docs/`)
- Node.js tooling for linting/test tasks (npm scripts in `package.json`)
- SCSS for styles (compiled by Jekyll)
- Playwright for tests (in `tests/`)
- Other tools referenced: stylelint, eslint, purgecss, html-validate, htmlproofer

## Project architecture (high-level)

- Static site (Jekyll) with content in `docs/`.
- Styles in `docs/_sass/` and `docs/assets/main.scss` (tokens in `_tokens.scss`).
- AI prompts, meeting content and resources in `resources/` and `planning/`.
- Media handled locally in `media/` and uploaded to S3 for production assets.

## Getting started

Prerequisites:

- Ruby + Bundler (for Jekyll)
- Node.js + npm

Quick commands (run from repo root):

```bash
# Start local dev server (uses Jekyll in docs/)
npm run serve

# Build the site
npm run build

# Lint (CSS/JS)
npm run lint

# Full validation (build + lint + tests)
npm run validate
```

If you need to update media durations (used in meeting pages):

```bash
# install dependencies then
node extract-durations.js
```

## Project structure (short)

- `docs/` — Jekyll site source (pages, layouts, Sass, assets)
- `resources/` — AI prompts, meeting notes, planning materials
- `media/` — local media used for generating durations (not committed)
- `scripts/`, `tests/` — build helpers and tests
- top-level helper files: `extract-durations.js`, `package.json`, `purgecss.config.cjs`

See `docs/_layouts/`, `docs/_sass/`, and `resources/meetings/` for primary content editing locations.

## Key features

- Structured meeting materials and prompts for NotebookLM / Claude
- CSS/SVG-first visuals and infographics (no static images required)
- Strong validation and linting pipeline (lint, build, html validation, accessibility checks)

## Development workflow

- Edit content under `docs/` and `resources/`.
- Use `npm run serve` during development (serves Jekyll from `docs/`).
- Always run `npm run lint` and `npm run validate` before committing.

## Coding standards & conventions

- Visuals built with SCSS/CSS and inline SVG — no primary static images.
- SCSS tokens live in `docs/_sass/abstracts/_tokens.scss`.
- SCSS partials placed under `docs/assets/` must include YAML front matter for Jekyll compilation.
- Accessibility and semantic HTML are required for interactive components.

## Testing

- HTML validation: `npm run test` and `npm run test:htmlproof`.
- Playwright tests live under `tests/` (`npm test` in `tests/`).
- Quick developer checks: `npm run lint && npm run build`.

## Contributing

- Follow the dev workflow: lint & validate before committing.
- Add meeting prompts under `resources/meetings/meeting-X/notebooklm/prompt.md` following existing structure.
- For visual changes, edit tokens in `_tokens.scss` and run the build & lint steps to verify.

## License

This repository includes a `LICENSE` file — please refer to it for license details.

## Helpful links

- Docs folder (site source): `docs/`
- Copilot/AI agent guidance: `.github/copilot-instructions.md`
- Scripts & helpers: `extract-durations.js`, `scripts/`, `purgecss.config.cjs`

---

If you'd like this README expanded (badges, diagrams, more detailed contributor guide, or an examples section), tell me which parts to expand and I will update it.
