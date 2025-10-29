## Copilot / AI agent instructions — Accelerate DevEx Book Club (concise)

Purpose: give AI coding agents the exact, discoverable knowledge they need to be productive in this repo.

1) Big picture (what you'll edit)
- This is a Jekyll-based GitHub Pages site. Primary source lives in `docs/` (content, layouts, SCSS).
- Supporting resources and AI prompts live under `resources/` and `planning/`.

2) Where to make changes (quick map)
- Site pages & layouts: `docs/` (see `docs/_layouts/`, `docs/index.md`, `docs/_meetings/`).
- Styles: `docs/assets/main.scss` and `docs/_sass/` partials (tokens in `_tokens.scss`).
- AI prompts & meeting content: `resources/meetings/meeting-*/notebooklm/` and `resources/plan/`.
- Scripts and utilities: `extract-durations.js`, `scripts/purgecss.cjs`, `purgecss.config.cjs`.

3) Critical workflows and exact commands
- Local Jekyll dev server: `npm run serve` (runs `cd docs && bundle exec jekyll serve`).
- Build: `npm run build` (runs Jekyll build in `docs`).
- Lint: `npm run lint` (runs `stylelint` + `eslint`).
- Full validation (recommended before commits): `npm run validate` (build + lint + tests).
- HTML tests: `npm run test` and `npm run test:htmlproof` (uses `html-validate` and `htmlproofer`).
- CSS analysis/purge: `npm run analyze:css`, `npm run purgecss`.

4) Repo-specific conventions (do this, not generic advice)
- No static images for main visuals — implement banners/infographics using CSS/SVG.
- SCSS tokens centralized in `docs/_sass/abstracts/_tokens.scss`. Change tokens there for global palette/spacing.
- Meeting themes: apply `.meeting-theme--N` classes (see `_meeting-themes.scss`) for color overrides.
- All SCSS partials must include YAML front matter when placed under `docs/assets/` so Jekyll compiles them.
- **Podcast ordering convention**: Podcasts must always be ordered: (1) Brief, (2) Deep Dive, (3) Debate, (4) Critique. This creates a progressive learning journey from quick overview → in-depth exploration → structured discussion → critical analysis.
- **Podcast layout structure**: Type badge and duration must be on a separate row from the title, inside a `.podcast-meta` div within `.podcast-content`.

5) Media workflow (explicit example)
- Local media folder: `media/` (not committed). Workflow: drop files in `media/`, upload to S3, then reference S3 URLs in meeting pages.
- To update durations: install `music-metadata` then run `node extract-durations.js` (script reads `media/` and writes MM:SS durations used in `docs` pages).

6) Integration points & dependencies to be aware of
- Jekyll (Ruby) for site generation: `bundle` + `jekyll` in `docs/`.
- Node tools for linting and CSS optimization: `stylelint`, `eslint`, `purgecss`, `html-validate` (see `package.json` scripts).
- Tests: Playwright lives in `tests/` (run `npm test` in `tests`).

7) Examples of common edits
- Small style tweak: edit token in `_tokens.scss` -> `npm run build` -> `npm run lint` -> check `http://127.0.0.1:4000`.
- Add meeting prompt: create `resources/meetings/meeting-X/notebooklm/prompt.md`, follow existing folder structure, update `resources/plan/` index.

8) Files and locations to reference when answering questions
- `package.json` — exact npm scripts and devDependencies.
- `docs/_config.yml` — baseurl, collections, and Jekyll plugin configuration.
- `docs/assets/main.scss` and `docs/_sass/` — design tokens and component styles.
- `extract-durations.js` — how media durations are computed (uses `music-metadata`).

9) Safety and practical notes for agents
- Preserve accessibility (semantic HTML, ARIA) when modifying interactive components.
- Keep site pathing consistent with `baseurl` (/accelerate-devex-book-club-notebooklm). Use absolute paths when referencing built assets.
- Do not add large binary media to git — use `media/` local + S3 pattern used in this repo.

If anything in this concise guide is unclear or you want a specific example (e.g., how to add a new meeting page, or how to run Playwright tests), tell me which area to expand and I will iterate.
# Copilot Instructions for Accelerate DevEx Book Club

## Project Overview

- This is a Jekyll-based GitHub Pages site and resource hub for a DevOps book club focused on "Accelerate".
- All visuals are implemented using SCSS, CSS, SVG, HTML, and JavaScript—no static PNG/JPG images for site graphics.
- Content is organized for meetings, guides, and AI-generated materials (NotebookLM, Claude, Claude Code).
- All content and visuals are generated or curated by AI (Claude, Claude Code, NotebookLM) for podcasts, video, and learning materials.

## Key Directories & Files

- `docs/`: Main website source (Jekyll)
  - `index.md`: Homepage, contains hero banner, DORA metrics, and visual sections
  - `_layouts/`: Jekyll layouts (default, meeting)
  - `assets/main.scss`: Main stylesheet (SCSS, compiled by Jekyll)
  - `assets/images/`: Only for fallback/complex images, not for main visuals
- `meeting-resources/`: Guides for each book club session
- `notebooklm-prompts/`: Prompts and guidelines for AI-generated podcasts/videos
- `book-club-materials/`: Supporting resources and activities

## Visual Implementation & Design

- All graphics (banners, infographics, diagrams) must be implemented with CSS/SVG/HTML, not static images
- Use icon libraries (Heroicons, Feather Icons, Font Awesome) via SVG or CDN
- Use Google Fonts via `<link>` in HTML (Roboto, Inter, Poppins recommended)
- For backgrounds/patterns, use SVG or CSS gradients
  Color palette:
  - Dark navy blue (#1a1a2e), light blue (#16213e), blue (#2196F3), green (#4CAF50), orange (#FF9800), red (#F44336), light gray, white

### Color & Accent Guidance

For a header with a **dark navy blue (#1a1a2e) to light blue (#16213e) gradient**, pair it with accent and background colors like **white, silver, soft gray, coral, gold, or teal**. These choices create a clean, modern, and readable tech book club atmosphere without undermining warmth or approachability.

#### Recommended Accent Colors

- **Coral (#FF7F50)** adds vibrant energy to buttons or highlights, making the site lively.
- **Gold or Light Wood Tones (#D7BA89)** offer a sophisticated accent for calls to action or navigation.
- **Teal (#7adad1)** and **sage green (#8B9EB7)** complement blue gradients while feeling fresh and bookish.

#### Recommended Backgrounds

- **White (#FFFFFF)** or **off-white (#EFE9E7)** backgrounds maximize readability and contrast, letting deep blues shine.
- **Very light gray (#F5F5F5)** is excellent for main content areas to balance the dark header and infuse a calm, clean feel.

#### Sample Color Scheme Table

| Role            | Color Name         | Hex Code          |
| --------------- | ------------------ | ----------------- |
| Header Gradient | Dark Navy to Light | #1a1a2e → #16213e |
| Background      | White              | #FFFFFF           |
| Accent 1        | Coral              | #FF7F50           |
| Accent 2        | Gold/Wood Tone     | #D7BA89           |
| Accent 3        | Sage Green         | #8B9EB7           |

#### Design Tips

- Use navy gradients for headers and navigation for a sleek tech look.
- Balance with light backgrounds for page content—this ensures text is readable.
- Use coral, gold, or teal for buttons, links, and highlights to invite engagement and warmth.

Combining **deep blues** with clean backgrounds and warm, energetic accents creates a friendly, professional tech book club website that stands out.

References:
[1](https://piktochart.com/tips/dark-blue-color-palette)
[2](https://piktochart.com/tips/navy-blue-color-palette)
[3](https://www.figma.com/colors/navy-blue/)
[4](https://www.color-meanings.com/colors-that-go-with-navy-blue/)
[5](https://muffingroup.com/blog/blue-websites/)
[6](https://coolors.co/gradient-palette)
[7](https://colorhunt.co/palettes/gradient)
[8](https://coolors.co/palettes/popular/blue)
[9](https://cssgradient.io/shades-of-blue/)
[10](https://mycodelesswebsite.com/blue-color-palette/)
[11](https://blog.magezon.com/best-blue-websites-with-schemes-ecm/)
All visuals must have a professional, modern look: flat design, subtle shadows, clean typography, and clear color contrast
Example: The DORA Metrics Infographic is a CSS grid with SVG icons, colored cards, and animated hover effects
Hero Banner: Gradient background, left-aligned bold text, circuit board SVG overlay, rocket/upward arrow icon, DORA metric icons
All diagrams and badges should use web-native technologies and be responsive

## Developer Workflow & Testing

### Code Quality Commands (ALWAYS RUN BEFORE COMMITTING)

**IMPORTANT**: Always run validation before committing changes to ensure code quality.

#### Quick Local Check (During Development)

```bash
npm run lint && npm run build
```

- Runs all linters (CSS, JS, Markdown) and builds the site
- Catches most issues quickly (~5-10 seconds)
- Use this for fast feedback while coding

#### Full Local Validation (Before Committing)

```bash
npm run validate
```

- Complete pipeline: build + test including linting, HTML validation, accessibility checks
- **ALWAYS use this before every commit**

#### Comprehensive Audit (Before Releases)

```bash
npm run audit
```

- Runs build + jekyll-audit for full performance, accessibility, SEO, link validation
- Use before major releases or significant changes

#### Individual Test Commands

```bash
npm run lint          # All linters (fastest check)
npm run lint:css      # CSS/SCSS linting only
npm run lint:js       # JavaScript linting only
npm run lint:md       # Markdown linting only
npm run test:html     # HTML validation
npm run test:jekyll-audit  # Full audit suite
```

#### Recommended Testing Workflow

1. **During development**: `npm run lint` (fast feedback)
2. **Before committing**: `npm run validate` (full check)
3. **Before major releases**: `npm run audit` (comprehensive)

### Jekyll Development

- Edit SCSS in `docs/assets/main.scss` (must have YAML front matter)
- Jekyll auto-compiles SCSS to `/assets/main.css` on build
- Site is served from `/accelerate-devex-book-club-notebooklm/` (project pages)
- Reference assets with the full repo path (e.g., `/accelerate-devex-book-club-notebooklm/assets/main.css`)

### Quality Tools Integrated

- **Stylelint**: CSS/SCSS code quality with Jekyll-specific rules
- **ESLint**: JavaScript code quality with HTML/Markdown support
- **Markdownlint**: Markdown formatting and structure
- **HTML-validate**: HTML markup validation with Jekyll compatibility
- **Jekyll-audit**: Performance, accessibility, SEO auditing via @brennanbrown/jekyll-audit
- **HTML Proofer**: Link and image validation

## Patterns & Conventions

## Research & Planning Workflow

All major refactoring, feature, or upgrade work must follow the standardized workflow below. This ensures systematic, auditable, and AI-optimized planning and execution:

### Typical Workflow Sequence

1. **Task Researcher**: Research and document the current state of the codebase. Identify pain points, technical debt, and problematic patterns. Summarize findings with links to code sections.
2. **Tech Debt Remediation Plan**: Outline a remediation plan based on research. Prioritize issues by impact/effort, recommend refactoring strategies, and specify dependencies/blockers.
3. **Planner (High-Level Milestones)**: Create a milestone plan with key phases, timelines, and responsible roles. Note integration points with other teams/systems.
4. **update-implementation-plan**: Update an existing implementation plan file with new or updated requirements to provide new features, refactoring, design, architecture, or infrastructure. Output must be machine-readable, deterministic, and structured for autonomous execution by other AI systems or humans. All implementation plans must strictly follow the `/update-implementation-plan.prompt.md` template and validation rules.
5. **Implementation Plan (Detailed Steps)**: Write a step-by-step plan with atomic tasks, code standards, accessibility, performance, and testing requirements. Provide clear instructions for contributors.

All implementation plans must use the `/update-implementation-plan.prompt.md` template for machine-readable, deterministic, and executable output. See that file for required structure and compliance rules.

## Integration Points

- NotebookLM and Claude are used for generating podcast/video prompts and guides
- External icon/font libraries are loaded via CDN or inline SVG
- No backend/server code; all logic is client-side or static

## Example: DORA Metrics Infographic

- See `docs/index.md` and `docs/assets/main.scss` for CSS grid, SVG icons, color usage, and hover effects

## Troubleshooting

- If CSS is missing, check SCSS front matter and asset path in HTML
- For new visuals, prefer SVG/CSS over images; use images only for fallback/complex cases
- Ensure all visuals meet accessibility and responsive design requirements

---

For questions or unclear conventions, review `README.md` and meeting guides, or ask for clarification in this file.
