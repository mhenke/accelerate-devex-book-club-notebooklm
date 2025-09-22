# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Jekyll-based GitHub Pages site** and resource hub for a DevOps book club focused on "Accelerate: The Science of Lean Software and DevOps" by Nicole Forsgren, Jez Humble, and Gene Kim. The repository contains:

- **Jekyll website** (docs/) for GitHub Pages deployment
- **Meeting guides and resources** for structured book club sessions 
- **NotebookLM prompts** for AI-generated supplementary content (podcasts/videos)
- **Educational materials** organized around the book's core themes

All visuals are implemented using **web-native technologies** (SCSS, CSS, SVG, HTML, JavaScript) - no static PNG/JPG images for site graphics.

## High-Level Architecture

### Content Organization
- `docs/` - Main Jekyll website source files
  - `index.md` - Homepage with hero banner, DORA metrics, meeting overview
  - `_layouts/` - Jekyll layouts (default, meeting, resource)
  - `assets/main.scss` - Main stylesheet with modern design system
  - `_config.yml` - Jekyll configuration
- `meeting-resources/` - Session guides for each book club meeting
- `notebooklm-prompts/` - AI content generation prompts and guidelines
- `book-club-materials/` - Supporting activities and discussion guides

### Design System
- **Color palette:** Dark navy blue (#1a1a2e) to light blue (#16213e) gradients for headers
- **Accent colors:** Coral (#FF7F50), Gold (#D7BA89), Teal (#7adad1), Sage Green (#8B9EB7)
- **Typography:** Google Fonts - Inter for body text, Poppins for headings
- **Icons:** Font Awesome 6, inline SVG, or CDN-loaded icon libraries
- **Visual components:** DORA metrics cards, timeline visuals, culture transformation diagrams

## Common Development Tasks

### Building and Serving
This is a standard Jekyll site served by GitHub Pages:
- **Local development:** `bundle exec jekyll serve` (if Jekyll/Ruby installed)
- **GitHub Pages deployment:** Automatic on push to main branch
- **Asset compilation:** Jekyll auto-compiles SCSS to CSS with proper asset paths

### Styling and Visual Updates
- Edit SCSS in `docs/assets/main.scss` (must include YAML front matter)
- Use CSS/SVG/HTML for all graphics - avoid static images
- Reference assets with full repo path: `/accelerate-devex-book-club-notebooklm/assets/main.css`
- Follow existing color palette and responsive design patterns

### Content Updates
- Meeting content in `meeting-resources/` using Markdown
- AI generation prompts in `notebooklm-prompts/` for podcasts and videos
- Website pages in `docs/` following Jekyll conventions
- All content should be clearly attributed when AI-generated

## Code Conventions

### Visual Implementation Rules
- **All graphics must be web-native:** CSS/SVG/HTML/JavaScript only
- **No static images** for main site visuals (only for complex/fallback cases)
- **Responsive design required** for all components
- **Accessibility:** Use semantic HTML and ARIA attributes
- **Modern aesthetics:** Flat design, subtle shadows, clean typography, clear color contrast

### Jekyll Patterns
- Use Jekyll collections for meetings and resources
- Follow existing layout patterns in `_layouts/`
- Maintain YAML front matter in SCSS files for compilation
- Use Jekyll's asset pipeline for proper path resolution

### Content Guidelines
- Meeting guides follow structured format with objectives, discussion questions, action items
- NotebookLM prompts include clear context and generation guidelines
- All AI-generated content should be clearly marked and attributed
- Maintain consistency in meeting duration (1 hour) and biweekly schedule

## Important Notes

- **No build scripts:** Relies on Jekyll/GitHub Pages for compilation
- **Site serves from subpath:** `/accelerate-devex-book-club-notebooklm/`
- **Copilot instructions available** in `.github/copilot-instructions.md` with detailed visual guidance
- **All content is educational** focused on DevOps practices and organizational transformation
- **Four-meeting structure** covering DORA metrics, culture, architecture, and leadership themes