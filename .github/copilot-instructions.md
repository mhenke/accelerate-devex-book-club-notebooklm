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
- Color palette:
  - Dark navy blue (#1a1a2e), light blue (#16213e), blue (#2196F3), green (#4CAF50), orange (#FF9800), red (#F44336), light gray, white
- All visuals must have a professional, modern look: flat design, subtle shadows, clean typography, and clear color contrast
- Example: The DORA Metrics Infographic is a CSS grid with SVG icons, colored cards, and animated hover effects
- Hero Banner: Gradient background, left-aligned bold text, circuit board SVG overlay, rocket/upward arrow icon, DORA metric icons
- All diagrams and badges should use web-native technologies and be responsive

## Developer Workflow

- Edit SCSS in `docs/assets/main.scss` (must have YAML front matter)
- Jekyll auto-compiles SCSS to `/assets/main.css` on build
- Site is served from `/accelerate-devex-book-club-notebooklm/` (project pages)
- Reference assets with the full repo path (e.g., `/accelerate-devex-book-club-notebooklm/assets/main.css`)
- No build scripts; rely on Jekyll/GitHub Pages for compilation

## Patterns & Conventions

- All visuals are web-native (SVG/CSS/HTML/JS)
- Meeting guides and prompts are markdown-based
- AI-generated content is clearly marked and attributed
- Use semantic HTML and ARIA for accessibility
- Responsive design is required for all components
- Use color palette and font guidelines for consistent branding

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
