# GitHub Copilot Instructions for Accelerate DevEx Book Club

**ALWAYS follow these instructions first and fallback to additional search and context gathering ONLY if the information in these instructions is incomplete or found to be in error.**

## Project Overview

This is a **Jekyll-based GitHub Pages site** and resource hub for a DevOps book club focused on "Accelerate" by Nicole Forsgren, Jez Humble, and Gene Kim. The repository contains:
- **Jekyll website** (docs/) for GitHub Pages deployment  
- **Meeting guides and resources** for structured book club sessions
- **AI-generated content prompts** for NotebookLM podcasts and videos
- **Educational materials** organized around DORA metrics and DevOps transformation

**All visuals are implemented using web-native technologies** (SCSS, CSS, SVG, HTML, JavaScript) - **no static PNG/JPG images for site graphics**.

## Working Effectively

### Bootstrap, Build, and Test the Repository

**CRITICAL: All commands have been validated to work. Build times are very fast (~1 second).**

```bash
# 1. Clone and navigate to the repository
git clone https://github.com/mhenke/accelerate-devex-book-club-notebooklm.git
cd accelerate-devex-book-club-notebooklm

# 2. Install Jekyll (if not available)
sudo apt-get update && sudo apt-get install -y jekyll bundler

# 3. Navigate to docs directory
cd docs

# 4. Build the site (FAST: ~1 second, no long timeout needed)
jekyll build
# Expected output: "done in 0.6-1.0 seconds"

# 5. Serve the site locally for development
jekyll serve --port 4000 --host 0.0.0.0 --incremental
# Access at: http://localhost:4000/accelerate-devex-book-club-notebooklm/
```

**IMPORTANT TIMING EXPECTATIONS:**
- `jekyll build` - Takes ~1 second. **NO NEED for long timeouts.**
- `jekyll serve` - Starts immediately, serves at specified port
- **NEVER CANCEL** - Not applicable here, builds are extremely fast

### Key Directories & Files

- `docs/`: Main Jekyll website source
  - `index.md`: Homepage with hero banner, DORA metrics, visual sections
  - `_config.yml`: Jekyll configuration and collections setup
  - `_layouts/`: Jekyll HTML layouts (default, meeting, resource)
  - `_meetings/`: Four interactive meeting pages (meeting-1.md to meeting-4.md)
  - `assets/main.scss`: **Main stylesheet (MUST have YAML front matter for compilation)**
  - `assets/images/`, `assets/media/`: Fallback images and media files
- `resources/`: Comprehensive resource collection
  - `plan/`: Updated book club plan with corrected chapter mappings
  - `meetings/`: Individual meeting guides and AI prompts  
  - `activities/`, `assessments/`, `templates/`: Supporting materials

## Development Workflow

### Building and Serving (Validated Commands)
This is a standard Jekyll site served by GitHub Pages:

```bash
# Build the site (FAST: ~1 second)
cd docs && jekyll build

# Serve for local development  
cd docs && jekyll serve --port 4000 --host 0.0.0.0 --incremental
# Site will be available at: http://localhost:4000/accelerate-devex-book-club-notebooklm/

# Build with profiling for performance analysis
cd docs && jekyll build --profile
```

**No build scripts or traditional test commands** - relies entirely on Jekyll/GitHub Pages for compilation.

### Styling and Visual Updates

```bash
# Edit SCSS in docs/assets/main.scss (MUST include YAML front matter)
# Jekyll auto-compiles SCSS to /assets/main.css on build
# Always test compilation after SCSS changes:
cd docs && jekyll build

# Check compiled CSS output:
ls -la docs/_site/assets/main.css
```

**CRITICAL SCSS Requirements:**
- `docs/assets/main.scss` **MUST have YAML front matter** (empty `---` lines at top)
- Reference assets with full repo path: `/accelerate-devex-book-club-notebooklm/assets/main.css`
- Jekyll auto-compiles SCSS to CSS with proper asset paths

### Content Updates

```bash
# Meeting content in docs/_meetings/ using Markdown
# AI generation prompts in resources/plan/ for podcasts and videos  
# Website pages in docs/ following Jekyll conventions
# Always commit and push after making changes for GitHub Pages deployment
```

## Validation

**CRITICAL: No automated test suite exists. Use manual validation approaches.**

### Always Run These Validation Steps After Changes:

1. **Build Validation:**
   ```bash
   cd docs && jekyll build
   # Must complete without errors in ~1 second
   ```

2. **SCSS Compilation Check:**
   ```bash
   # Verify CSS was generated:
   ls -la docs/_site/assets/main.css
   head -n 10 docs/_site/assets/main.css
   ```

3. **Local Serving Test:**
   ```bash
   cd docs && timeout 10 jekyll serve --port 4001 --host 0.0.0.0 --detach
   curl -s -o /dev/null -w "%{http_code}" http://localhost:4001/accelerate-devex-book-club-notebooklm/
   pkill -f jekyll
   # Should return HTTP 200
   ```

4. **Manual Validation Scenarios:**
   - **Homepage**: Verify hero banner, DORA metrics cards, navigation links work
   - **Meeting Pages**: Check interactive elements, radio buttons, responsive design
   - **Visual Elements**: Confirm web-native graphics (no broken images)
   - **Responsive Design**: Test mobile/tablet breakpoints (CSS media queries)

### Deployment Validation
- **GitHub Pages deployment**: Automatic on push to main branch
- **Always commit and push changes immediately** for deployment
- Site URL: `https://mhenke.github.io/accelerate-devex-book-club-notebooklm/`

## Visual Implementation & Design Standards

**MANDATORY: All graphics must be web-native technologies - NO static images for main site visuals.**

- All graphics (banners, infographics, diagrams) **MUST be implemented with CSS/SVG/HTML/JavaScript**
- Use icon libraries: Font Awesome (via CDN), inline SVG, or icon fonts
- Typography: Google Fonts via `<link>` in HTML (Inter, Poppins, Roboto)
- Backgrounds/patterns: SVG or CSS gradients only

### Color Palette & Design System

**Header Gradient:** Dark navy blue (#1a1a2e) to light blue (#16213e)
**Accent Colors:** Coral (#FF7F50), Gold (#D7BA89), Teal (#7adad1), Sage Green (#8B9EB7)
**Backgrounds:** White (#FFFFFF), off-white (#EFE9E7), light gray (#F5F5F5)
**DORA Metrics:** Blue (#2196F3), Green (#4CAF50), Orange (#FF9800), Red (#F44336)

**Design Requirements:**
- Professional, modern look: flat design, subtle shadows, clean typography
- Clear color contrast for accessibility  
- Semantic HTML and ARIA attributes required
- Responsive design required for all components
- Example: DORA Metrics Infographic uses CSS grid with SVG icons, colored cards, hover effects

## Common Development Tasks

### Content Structure
- **Four-meeting structure** with biweekly cadence (Weeks 1, 3, 5, 7)
- **Meeting 1 (Week 1)**: Chapters 1-3 - Foundation, DORA Metrics, Westrum Culture Types
- **Meeting 2 (Week 3)**: Chapters 4-6 - Technical Excellence & Continuous Delivery  
- **Meeting 3 (Week 5)**: Chapters 7-10 - Management, Product Development & Sustainability
- **Meeting 4 (Week 7)**: Chapters 11, 16, Conclusion - Leadership & Transformation

### Jekyll Collections & Navigation
```bash
# Jekyll collections configured in docs/_config.yml:
# - _meetings collection: Four structured meetings  
# - _resources collection: Additional educational materials
# - Navigation configured with header_pages
```

### AI-Generated Content Integration
- **NotebookLM prompts** in `resources/plan/audio.md` and `resources/plan/video.md`
- **All AI-generated content must be clearly marked and attributed**
- Meeting pages include media sections with HTML5 audio/video controls

## Troubleshooting

### Common Issues and Solutions

**CSS Missing/Not Loading:**
```bash
# Check SCSS front matter exists:
head -n 3 docs/assets/main.scss
# Should show:
# ---
# ---

# Verify asset path in HTML:
grep "main.css" docs/_site/index.html
# Should reference: /accelerate-devex-book-club-notebooklm/assets/main.css
```

**Jekyll Build Failures:**
```bash
# Run with trace for detailed error information:
cd docs && jekyll build --trace

# Check Jekyll configuration:
cd docs && jekyll doctor
```

**Missing Dependencies:**
```bash
# Install Jekyll if missing:
sudo apt-get update && sudo apt-get install -y jekyll bundler

# Check versions:
jekyll --version  # Should be 4.3.2+
ruby --version    # Should be 3.2.3+
```

**Site Not Serving Correctly:**
```bash
# Clean build and serve:
cd docs && rm -rf _site && jekyll build && jekyll serve --port 4000
```

## Patterns & Conventions

- **All visuals are web-native** (SVG/CSS/HTML/JS) - avoid static images except for fallback
- **Meeting guides and prompts are markdown-based** with YAML front matter
- **AI-generated content is clearly marked and attributed**
- **Use semantic HTML and ARIA for accessibility**
- **Responsive design is required for all components**
- **Use color palette and font guidelines for consistent branding**
- **Always commit and push after making changes** for GitHub Pages deployment

## Integration Points

- **NotebookLM and Claude** generate podcast/video prompts and guides
- **External icon/font libraries** loaded via CDN or inline SVG
- **No backend/server code** - all logic is client-side or static
- **GitHub Pages** handles automatic deployment on push to main branch

## Important Notes

- **No build scripts**: Relies on Jekyll/GitHub Pages for compilation
- **Site serves from subpath**: `/accelerate-devex-book-club-notebooklm/`
- **24 capabilities framework** referenced throughout for practical transformation guidance
- **Interactive elements** use JavaScript for dynamic feedback based on Accelerate book research
- **Four-meeting structure** supports progressive learning with corrected chapter mappings

---

**For questions or unclear conventions, review `README.md`, `CLAUDE.md`, and meeting guides, or ask for clarification.**
