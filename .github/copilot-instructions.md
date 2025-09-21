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
