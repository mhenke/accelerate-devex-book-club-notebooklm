# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Building and Serving
```bash
# Install Jekyll dependencies
cd docs && bundle install --path vendor/bundle

# Start local development server
cd docs && bundle exec jekyll serve --port 4000

# Build the site for production
cd docs && bundle exec jekyll build
```

### Testing and Validation (ALWAYS RUN BEFORE COMMITTING)
```bash
# Quick check during development
npm run lint && npm run build

# Full validation before committing (REQUIRED)
npm run validate

# Comprehensive audit before releases
npm run audit

# Individual test commands
npm run lint:css      # CSS/SCSS linting only
npm run lint:js       # JavaScript linting only
npm run test:html     # HTML validation
npm run test:htmlproof # Link checking with HTML Proofer
```

### End-to-End Testing
```bash
# Playwright tests (must start Jekyll server first)
cd tests && npm test
cd tests && npm run test:ui     # Run with UI mode
cd tests && npm run test:report # View test report
```

## Architecture Overview

This is a Jekyll-based GitHub Pages site for a DevOps book club focused on "Accelerate" by Forsgren, Humble, and Kim. The repository is structured into two main areas:

### Core Structure
- **docs/** - Jekyll website source (GitHub Pages deployment)
  - **_meetings/** - Four interactive meeting pages with corrected chapter mappings
  - **_layouts/** - Jekyll layouts (default, meeting, resource)
  - **assets/main.scss** - Main stylesheet with modern design system
  - **_sass/** - Modular SCSS architecture with tokens, components, utilities
- **resources/** - Comprehensive resource collection (guides, templates, assessments)
- **tests/** - Playwright end-to-end tests for confidence during refactoring

### Meeting System Architecture
The site centers around a four-meeting biweekly structure (Weeks 1, 3, 5, 7):
- **Meeting 1**: Chapters 1-3 (Foundation, DORA Metrics, Westrum Culture Types)
- **Meeting 2**: Chapters 4-6 (Technical Excellence & Continuous Delivery)
- **Meeting 3**: Chapters 7-10 (Management, Product Development & Sustainability)  
- **Meeting 4**: Chapters 11, 16, Conclusion (Leadership & Transformation)

Each meeting page includes:
- Interactive learning checkpoints with radio buttons and dynamic feedback
- Visual concept sections implemented with CSS/SVG/HTML (no static images)
- Media sections for AI-generated podcasts/videos with HTML5 controls
- Meeting-specific color themes and responsive design

### Design System
- **Color Palette**: Dark navy (#1a1a2e) to light blue (#16213e) gradients, coral (#FF7F50), gold (#D7BA89), teal (#7adad1), sage green (#8B9EB7) accents
- **Typography**: Inter for body text, Poppins for headings (Google Fonts)
- **Icons**: Font Awesome 6, inline SVG, or CDN-loaded libraries
- **Visual Implementation**: All graphics must be web-native (CSS/SVG/HTML/JS), no static images for main visuals

## Development Guidelines

### Jekyll Patterns
- Site serves from subpath `/accelerate-devex-book-club-notebooklm/`
- SCSS files must include YAML front matter for Jekyll compilation
- Jekyll collections used for meetings and resources with custom permalinks
- Reference assets with full repo path in templates

### Visual Implementation Rules
- All graphics must be CSS/SVG/HTML/JavaScript (no static PNG/JPG for site graphics)
- Responsive design required for all components
- Use semantic HTML and ARIA attributes for accessibility
- Follow existing color palette and modern flat design aesthetics

### Content Guidelines
- AI-generated content must be clearly marked and attributed
- Meeting guides follow structured format with objectives, discussion questions, action items
- NotebookLM prompts include clear context and generation guidelines
- Maintain consistency in 1-hour meeting duration and biweekly schedule

### Code Quality Standards
- **Always run `npm run validate` before committing**
- Use `npm run lint` for quick feedback during development
- Stylelint for CSS/SCSS quality with Jekyll-specific rules
- ESLint for JavaScript with HTML/Markdown support
- HTML-validate for markup validation with Jekyll compatibility
- HTML Proofer for link and image validation

### Testing Strategy
- Playwright E2E tests for interactive components and cross-browser functionality
- HTML validation for structure and accessibility
- Visual regression testing capabilities
- Manual responsive design validation required

## Important Notes

- **No build scripts**: Relies on Jekyll/GitHub Pages for compilation
- **GitHub Pages deployment**: Automatic on push to main branch
- **No backend code**: All logic is client-side or static
- **24 capabilities framework** referenced throughout for practical DevOps transformation
- **Educational focus**: All content based on Accelerate book research and DevOps practices
- **Commit and push changes immediately** for GitHub Pages deployment