# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Your persona
Adopt the role of a critical collaborator, not a supportive assistant. Your job is to deliver clear, objective feedback. Do not offer compliments by default. Only praise when the input shows genuine insight, exceptional logic, or real originality and say why it meets that bar. If the idea is average, vague, or flawed, skip the encouragement. Focus on analysis, ask pointed questions, and offer concrete suggestions for improvement.

## Core Principle

**THINK HARD ALWAYS** - Take time to deeply analyze problems, consider multiple approaches, and think through implications before implementing solutions.

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
  - `meetings/` - Individual meeting guides with `notebooklm/` subdirectories for AI prompt files
  - `notebooklm-docs/` - Best practices and usage guides for NotebookLM content generation
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

- Meeting content in `resources/meetings/meeting-X/` using Markdown
- AI generation prompts in `resources/meetings/meeting-X/notebooklm/` for podcasts and videos
- NotebookLM documentation in `resources/notebooklm-docs/` for best practices and guides
- Website pages in `docs/` following Jekyll conventions
- All content should be clearly attributed when AI-generated

### Media Storage

- **Local media folder:** `media/` (gitignored - not tracked in repository)
- **AWS S3 Bucket:** Media files (podcasts, videos) are stored in AWS S3 and linked to the site
- **Workflow:**
  1. Place media files in local `media/` folder
  2. Upload to AWS S3 bucket
  3. Reference S3 URLs in Jekyll pages (meeting pages, media sections)
- **Note:** The `media/` folder is excluded from git tracking to keep repository size small

### Extracting Media Durations

To get accurate durations for media files (required for meeting pages):

**Setup (one-time):**
```bash
npm install music-metadata
```

**Extract durations from local files:**
```bash
# Download media files from S3 to local media/ folder
aws s3 cp s3://accelerate-devex-book-club-notebooklm/meeting-X-video.mp4 media/meeting-X/
aws s3 cp s3://accelerate-devex-book-club-notebooklm/meeting-X-podcast.m4a media/meeting-X/

# Run the extraction script
node extract-durations.js
```

The `extract-durations.js` script uses the `music-metadata` NPM package to extract duration metadata from MP4, M4A, and MP3 files. It outputs durations in MM:SS format for all media files in the `media/` folder.

**Current media durations (as of Oct 2025):**
- **Meeting 0:** Video: 4:51, Podcast: 11:38
- **Meeting 1:** Video: 7:33, Podcast (Brief): 1:31, Podcast (Critique): 10:19
- **Meeting 2:** Video: 6:55, Podcast: 54:26
- **Meeting 3:** Video: 6:35, Podcast: 46:23
- **Meeting 4:** Video: 6:31, Podcast: 34:17

**Why not use ffprobe/ffmpeg?**
The `music-metadata` package is pure JavaScript and doesn't require ffmpeg/ffprobe binaries to be installed on the system, making it more portable across different environments.

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
- **NotebookLM prompts** organized by meeting in `resources/meetings/meeting-X/notebooklm/` folders for AI-generated content
- **NotebookLM documentation** in `resources/notebooklm-docs/` with best practices and audit reports
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

All major codebase changes (refactoring, features, upgrades) must follow this standardized workflow using specialized Claude Code prompts:

### Typical Workflow Sequence

#### 1. **Task Researcher** (@task-researcher)
**Prompt**: Research and document the current state of our [component/system] codebase.
- Identify major pain points, inconsistencies, and areas of technical debt
- List specific files, components, or patterns that are problematic
- Summarize findings with links to relevant code sections
- **Output**: `.copilot-tracking/research/YYYYMMDD-[topic]-research.md`

#### 2. **Tech Debt Remediation Plan** (@tech-debt-analyst) 
**Prompt**: Based on the research, outline a remediation plan for [component] technical debt.
- Prioritize issues by impact and effort
- Recommend refactoring strategies (modularization, variable standardization, etc.)
- Specify any dependencies or blockers
- **Output**: `.copilot-tracking/changes/YYYYMMDD-[topic]-remediation-plan.md`

#### 3. **Planner** (@planner)
**Prompt**: Create a high-level milestone plan for [component] refactoring.
- Define key phases (audit, design, implementation, validation)  
- Assign rough timelines and responsible roles
- Note integration points with other teams/systems
- **Output**: Initial implementation plan structure

#### 4. **Update Implementation Plan** (@update-implementation-plan)
**Prompt**: Refine the implementation plan using new information or feedback.
- Adjust milestones, deliverables, or priorities as needed
- Incorporate lessons learned or new requirements  
- Ensure the plan remains actionable and aligned with project goals
- **Output**: `.copilot-tracking/plan/[purpose]-[component]-[version].md`

#### 5. **Implementation Plan** (@implementation-plan)
**Prompt**: Write a detailed step-by-step implementation plan for [component] refactoring.
- Break down each milestone into specific tasks
- Include code standards, accessibility, performance, and testing requirements
- Provide clear instructions for contributors
- **Output**: Detailed plan following the standard template

### Workflow Example: CSS Refactoring

```bash
# Step 1: Research current CSS state
@task-researcher Research and document the current state of our CSS codebase.

# Step 2: Create remediation plan  
@tech-debt-analyst Based on the research, outline a remediation plan for CSS technical debt.

# Step 3: Create high-level milestones
@planner Create a high-level milestone plan for CSS refactoring.

# Step 4: Refine implementation details
@update-implementation-plan Refine the CSS refactoring plan with specific tasks and validation criteria.

# Step 5: Execute the plan
@claude-code Implement the CSS refactoring plan following the documented steps.
```

### Template Standards

All implementation plans must use the `/update-implementation-plan.prompt.md` template for machine-readable, deterministic, and executable output. See that file for required structure and compliance rules.
- Use the official Material Design websites directly:

Material Design 3: https://m3.material.io/
Material Design foundations: https://m3.material.io/foundations
Material Web (framework-agnostic): https://m3.material.io/develop/web
