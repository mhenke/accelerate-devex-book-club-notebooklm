# Accelerate DevEx Book Club

A structured Jekyll-based GitHub Pages site and resource hub for a DevEx (Developer Experience) book club focused on "Accelerate"
by Nicole Forsgren, Jez Humble, and Gene Kim. All visuals and content are AI-generated or curated for
podcasts, video, and learning materials.

---

## 🚀 Project Name and Description

**Accelerate DevEx Book Club**
A resource hub and interactive site for learning and implementing high-performing developer experience (DevEx) practices,
organized around the "Accelerate" book. Features meeting guides, AI-generated podcasts/videos, and
practical activities.

---

## 🛠️ Technology Stack

- **Jekyll** (static site generator, GitHub Pages)
- **SCSS/CSS/HTML/SVG/JavaScript** (web-native visuals, responsive design)
- **Markdown** (content, guides, prompts)
- **Font Libraries**: Google Fonts (Roboto, Inter, Poppins), Font Awesome (via CDN)
- **No backend/server code**; all logic is client-side or static

---

## 🏗️ Project Architecture

- **docs/**: Main Jekyll site with layouts, assets, and meeting pages
  - **\_meetings/**: Four interactive meeting pages with corrected chapter mappings
  - **\_layouts/**: Jekyll layouts (default, meeting, resource)
  - **assets/**: SCSS stylesheets with modern design system
- **resources/**: Comprehensive resource collection
  - **plan/**: Updated book club plan with corrected chapter mappings and NotebookLM prompts
  - **meetings/**: Individual meeting guides and AI generation prompts
  - **activities/**: Discussion practices and between-meeting activities
  - **assessments/**: DORA metrics and culture assessment worksheets
  - **templates/**: Meeting notes and retrospective formats
- **All visuals**: Implemented with CSS/SVG/HTML/JavaScript, not static images

---

## 🚦 Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/mhenke/accelerate-devex-book-club-notebooklm.git
   ```
# Accelerate DevEx Book Club

Concise, useful README for the Jekyll site and resource hub built around the book "Accelerate" (Forsgren, Humble, Kim).

This repository contains a static site (Jekyll) with meeting guides, AI-generated prompts and media workflows, assessments, and reusable UI/CSS components used for an interactive, accessibility-minded book club experience.

Key goals:
- Teach and apply high-performing DevEx practices using the 24-capabilities framework and DORA metrics.
- Provide meeting materials, notebook prompts (NotebookLM), and podcast/video-ready content.
- Ship responsive, accessible visuals built with SCSS + SVG (no primary static images).

Contents at a glance
- `docs/` — Jekyll site source (pages, layouts, assets, and `_meetings/` content).
- `resources/` — AI prompts, meeting plans, assessments, and templates.
- `assets/` and `docs/_sass/` — styles and design tokens (`_tokens.scss`).
- `media/` — local media used to compute durations (not committed to repo).
- `scripts/` — helpers (e.g., `extract-durations.js`).

Quick start (local)
1. Install Ruby + Bundler and Node.js/npm.
2. From repo root, install site gems and start Jekyll dev server:

```bash
# in zsh
cd docs
bundle install --path vendor/bundle
bundle exec jekyll serve --port 4000
```

Open: http://127.0.0.1:4000/accelerate-devex-book-club-notebooklm/

Common npm scripts (run from repo root)
- npm run serve       # runs Jekyll local server via npm script
- npm run build       # build site (Jekyll)
- npm run build:production  # build + optimize CSS (PurgeCSS)
- npm run lint        # run ESLint + Stylelint
- npm run validate    # full pipeline: build + lint + tests

Editing & conventions
- Edit content in `docs/` and `resources/` (meeting prompts live in `resources/meetings/`).
- SCSS tokens live in `docs/_sass/abstracts/_tokens.scss` — change tokens for global palette/spacing.
- All SCSS partials in `docs/assets/` must include YAML front matter so Jekyll compiles them.
- Visuals: prefer CSS/SVG for hero, infographics, and badges (no primary raster images).
- Accessibility: use semantic HTML and ARIA landmarks; all landmarks should have non-empty accessible names.

Testing & validation
- Quick: `npm run lint && npm run build` — fast feedback during development.
- Full validation (recommended before commits): `npm run validate` — runs build, linters, and tests.
- HTML validation: `npm run test:html` or `bundle exec htmlproofer _site` after running the server.
- Playwright E2E tests live in `tests/` (run via `npm test` inside `tests/`).

Media tooling
- To update media durations used in meeting pages:

```bash
node extract-durations.js
```

Notes for maintainers
- Keep interactive scripts accessible: avoid browser `confirm()` and prefer managed dialogs with focus management.
- When changing layout/partials, edit source under `docs/_layouts/` (do not edit `docs/_site/` directly).
- Use the design tokens and meeting theme classes (`.meeting-theme--N`) for consistent theming.

Contributing
- Follow standard GitHub flow: feature branches and PRs.
- Run `npm run validate` before creating a PR to ensure build and lint pass.

License
- Creative Commons Attribution 4.0 International (CC BY 4.0). See `LICENSE`.

Useful links
- Site source: `docs/`
- Meeting prompts & AI tools: `resources/`
- SCSS entry: `docs/assets/main.scss`
- Copilot/agent guidance: `.github/copilot-instructions.md`

If you'd like this tightened further (one-page quick-start only) or expanded with contributor checklists and example PR templates, tell me which direction and I will adjust.

