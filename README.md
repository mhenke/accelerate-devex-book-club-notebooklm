# Accelerate DevEx Book Club

Concise, actionable README for the Jekyll site and resource hub built around the book "Accelerate" (Forsgren, Humble, Kim).

What this repo is
- A Jekyll-based static site plus resources for an interactive DevEx book club: meeting guides, NotebookLM/AI prompts, podcasts/videos, assessments, and CSS/SVG-first visuals.

Key goals
- Teach and apply high-performing DevEx practices using the 24-capabilities framework and DORA metrics.
- Provide meeting materials, AI prompts, and podcast/video-ready content.
- Ship responsive, accessible visuals implemented with SCSS + SVG (avoid raster images for primary visuals).

Layout (high level)
- `docs/` — Jekyll site source (pages, layouts, assets, `_meetings/`).
- `resources/` — AI prompts, meeting plans, assessments, templates.
- `docs/_sass/` & `docs/assets/` — styles and tokens (`_tokens.scss`).
- `media/` — local media for computing durations (not committed).
- `scripts/` — utilities (e.g., `extract-durations.js`).

Quick start (local)
```bash
# in zsh, from repo root
cd docs
bundle install --path vendor/bundle
bundle exec jekyll serve --port 4000
# then open: http://127.0.0.1:4000/accelerate-devex-book-club-notebooklm/
```

Common npm scripts (from repo root)
- `npm run serve`          — start dev server (via npm script)
- `npm run build`          — build site
- `npm run build:production` — build + purge CSS
- `npm run lint`           — run ESLint + Stylelint
- `npm run validate`       — build + lint + tests

Editing & conventions
- Edit content under `docs/` and `resources/` (meeting prompts in `resources/meetings/`).
- Change tokens in `docs/_sass/abstracts/_tokens.scss` for global palette/spacing.
- SCSS partials in `docs/assets/` require YAML front matter for Jekyll compilation.
- Prefer CSS/SVG for graphics. Ensure landmarks have non-empty accessible names and interactive controls use explicit `type` attributes.

Testing & validation
- Quick check: `npm run lint && npm run build`.
- Full validation (recommended before PRs): `npm run validate`.
- HTML validation: `npm run test:html` or run `bundle exec htmlproofer _site` (after building/serving).
- Playwright tests: see `tests/` (run via `npm test` inside `tests/`).

Media tooling
- Update media durations with:
```bash
node extract-durations.js
```

Notes for maintainers
- Prefer accessible, script-driven dialogs over `confirm()`; manage focus and keyboard behavior.
- Edit source under `docs/_layouts/` and `docs/_includes/` (do not edit `docs/_site/` directly).
- Use meeting theme classes (`.meeting-theme--N`) for consistent theming.

Contributing
- Use feature branches and open PRs. Run `npm run validate` before submitting a PR.

License
- Creative Commons Attribution 4.0 International (CC BY 4.0). See `LICENSE`.

Useful links
- Site source: `docs/`
- Meeting prompts & AI tools: `resources/`
- SCSS main: `docs/assets/main.scss`
- Agent guidance: `.github/copilot-instructions.md`
- AI Tools Used: `AI_TOOLS.md`

- Live site: https://mhenke.github.io/accelerate-devex-book-club-notebooklm/

If you'd like this shortened further (one-line quick start) or expanded with a contributor checklist and PR template, tell me which and I'll update it.

