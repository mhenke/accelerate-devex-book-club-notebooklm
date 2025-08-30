# Repository Analysis: accelerate-devex-book-club-notebooklm

## Overview

A Jekyll-based GitHub Pages site and resource hub for a DevOps book club focused on "Accelerate". The project provides interactive meeting guides, AI-generated podcasts/videos, and practical activities for learning and implementing high-performing DevOps practices. All visuals are web-native (CSS/SVG/HTML/JS), with no static PNG/JPG images.

## Architecture

- **docs/**: Main Jekyll site (layouts, assets, content)
  - `_config.yml`: Jekyll and site configuration
  - `_meetings/`: Markdown files for each meeting session
  - `_layouts/`: HTML layouts for site and meetings
  - `assets/`: SCSS/CSS, images (SVG/HTML), and main styles
- **meeting-resources/**: Guides and materials for each book club session
- **notebooklm-prompts/**: Prompts for AI-generated podcasts/videos
- **book-club-materials/**: Supporting resources and activities
- **resources/**: Templates, assessments, extensions, and meeting folders
- **.github/**: Copilot instructions, prompts, and implementation standards

## Key Components

- **Meeting Guides**: Markdown-based, session-specific guides and prompts
- **Main Stylesheet**: SCSS file for all site visuals and responsive design
- **Layouts**: Jekyll HTML templates for site and meeting pages
- **AI Prompts**: NotebookLM and Claude prompts for podcast/video generation
- **Resource Cards/Infographics**: CSS/SVG/HTML-based, fully responsive

## Technologies Used

- Jekyll (static site generator)
- SCSS/CSS/HTML/SVG/JavaScript (web-native visuals)
- Markdown (content, guides, prompts)
- Google Fonts, Font Awesome (via CDN)
- GitHub Pages (hosting and deployment)

## Data Flow

- Content authored in Markdown, organized by meeting/session
- SCSS compiled to CSS for site styling
- Jekyll builds static site from layouts, markdown, and assets
- AI-generated content integrated via markdown prompts and guides
- No backend/server code; all logic is client-side or static

## Team and Ownership

- Maintained by mhenke and contributors (see git shortlog)
- Coding standards and workflow defined in `.github/copilot-instructions.md`
- Open to community contributions for new guides, prompts, and accessibility improvements
