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
  - `_meetings/` - Four meeting pages (meeting-1.md to meeting-4.md) with interactive elements
  - `assets/main.scss` - Main stylesheet with modern design system
  - `_config.yml` - Jekyll configuration
- `resources/` - Comprehensive resource collection including:
  - `plan/` - Updated book club plan with corrected chapter mappings
  - `meetings/` - Individual meeting guides and NotebookLM prompts
  - `activities/` - Discussion practices and between-meeting activities
  - `assessments/` - DORA metrics and culture assessment worksheets
  - `templates/` - Meeting notes and retrospective formats

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
- **Always commit and push after making changes** for deployment

### Testing and Validation Commands

**IMPORTANT**: Always run validation before committing changes to ensure code quality.

#### Quick Local Check (Recommended for development)

```bash
npm run lint && npm run build
```

Runs all linters (CSS, JS, Markdown) and builds the site - catches most issues quickly (~5-10 seconds).

#### Full Local Validation (Before committing)

```bash
npm run validate
```

Complete pipeline: build + test including linting, HTML validation, and accessibility checks.

#### Comprehensive Audit (Before releases)

```bash
npm run audit
```

Runs build + jekyll-audit for full performance, accessibility, SEO, and link validation.

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

## Collections and Navigation

### Jekyll Collections

- **\_meetings collection:** Four structured meetings with corrected chapter mappings:
  - Meeting 1 (Week 1): Chapters 1-3 - Foundation, DORA Metrics, Westrum Culture Types
  - Meeting 2 (Week 3): Chapters 4-6 - Technical Excellence & Continuous Delivery
  - Meeting 3 (Week 5): Chapters 7-10 - Management, Product Development & Sustainability
  - Meeting 4 (Week 7): Chapters 11, 16, Conclusion - Leadership & Transformation
  - Each has layout: meeting, title, subtitle, chapters, duration, dora_color
  - Contains interactive learning checkpoints with radio buttons and dynamic feedback
  - Media sections with HTML5 audio/video controls and generation instructions
- **\_resources collection:** Additional educational materials and templates
- Navigation configured in `_config.yml` with header_pages

### Meeting Page Structure

All meeting pages follow consistent format:

- Media sections (video first, then podcast) with HTML5 controls
- Visual concept sections with interactive elements:
  - Meeting 1: DORA metrics cards, Westrum culture types, speed vs stability myth-busting
  - Meeting 2: Continuous delivery principles, culture transformation flow, CD core principles
  - Meeting 3: Lean management practices, WIP visualization, dependency mapping
  - Meeting 4: Transformational leadership, ING case study practices
- Interactive Learning Checkpoints with radio buttons, feedback areas, and research-backed content
- Discussion questions aligned with book club plan learning objectives
- Action items that bridge between meetings and support progressive learning
- Custom CSS styling with meeting-specific color themes and responsive design

## Important Notes

- **No build scripts:** Relies on Jekyll/GitHub Pages for compilation
- **Site serves from subpath:** `/accelerate-devex-book-club-notebooklm/`
- **Updated plan available** in `resources/plan/plan.md` with corrected chapter mappings and learning objectives
- **NotebookLM prompts** in `resources/plan/audio.md` and `resources/plan/video.md` for AI-generated content
- **All content is educational** focused on DevOps practices and organizational transformation based on Accelerate research
- **Four-meeting structure** with biweekly cadence (Weeks 1, 3, 5, 7) covering foundation, technical practices, management, and leadership
- **24 capabilities framework** referenced throughout for practical transformation guidance
- **Interactive elements** use JavaScript for dynamic feedback based on Accelerate book research findings
- **Commit and push changes immediately** for GitHub Pages deployment

## Recent Updates

- Corrected all meeting chapter mappings to align with updated book club plan
- Added Westrum's Organizational Culture Types section to Meeting 1
- Updated discussion questions and action items across all meetings
- Enhanced interactive learning checkpoints with research-backed feedback
- Improved UX with consistent spacing, fonts, and responsive design
- Fixed action items formatting to display on separate rows

## Research & Planning Workflow

All major codebase changes (refactoring, features, upgrades) must follow this standardized workflow:

### Typical Workflow Sequence

1. **Task Researcher**: Research and document the current state of the codebase. Identify pain points, technical debt, and problematic patterns. Summarize findings with links to code sections.
2. **Tech Debt Remediation Plan**: Outline a remediation plan based on research. Prioritize issues by impact/effort, recommend refactoring strategies, and specify dependencies/blockers.
3. **Planner (High-Level Milestones)**: Create a milestone plan with key phases, timelines, and responsible roles. Note integration points with other teams/systems.
4. **update-implementation-plan**: Update an existing implementation plan file with new or updated requirements to provide new features, refactoring, design, architecture, or infrastructure. Output must be machine-readable, deterministic, and structured for autonomous execution by other AI systems or humans. All implementation plans must strictly follow the `/update-implementation-plan.prompt.md` template and validation rules.
5. **Implementation Plan (Detailed Steps)**: Write a step-by-step plan with atomic tasks, code standards, accessibility, performance, and testing requirements. Provide clear instructions for contributors.

All implementation plans must use the `/update-implementation-plan.prompt.md` template for machine-readable, deterministic, and executable output. See that file for required structure and compliance rules.
