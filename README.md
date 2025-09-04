# Accelerate DevEx Book Club

A structured Jekyll-based GitHub Pages site and resource hub for a DevOps book club focused on "Accelerate" 
by Nicole Forsgren, Jez Humble, and Gene Kim. All visuals and content are AI-generated or curated for 
podcasts, video, and learning materials.

---

## 🚀 Project Name and Description

**Accelerate DevEx Book Club**  
A resource hub and interactive site for learning and implementing high-performing DevOps practices, 
organized around the "Accelerate" book. Features meeting guides, AI-generated podcasts/videos, and 
practical activities.

---

## 🛠️ Technology Stack

- **Jekyll** (static site generator, GitHub Pages)
- **SCSS/CSS/HTML/SVG/JavaScript** (web-native visuals, responsive design)
- **Markdown** (content, guides, prompts)
- **Font Libraries**: Google Fonts (Roboto, Inter, Poppins), Font Awesome (via CDN)
- **No backend/server code**; all logic is client-side or static

---

## 🏗️ Project Architecture

- **docs/**: Main Jekyll site with layouts, assets, and meeting pages
  - **_meetings/**: Four interactive meeting pages with corrected chapter mappings
  - **_layouts/**: Jekyll layouts (default, meeting, resource)
  - **assets/**: SCSS stylesheets with modern design system
- **resources/**: Comprehensive resource collection
  - **plan/**: Updated book club plan with corrected chapter mappings and NotebookLM prompts
  - **meetings/**: Individual meeting guides and AI generation prompts
  - **activities/**: Discussion practices and between-meeting activities
  - **assessments/**: DORA metrics and culture assessment worksheets
  - **templates/**: Meeting notes and retrospective formats
- **All visuals**: Implemented with CSS/SVG/HTML/JavaScript, not static images

---

## 🚦 Getting Started

1. Clone the repository:

   ```sh
   git clone https://github.com/mhenke/accelerate-devex-book-club-notebooklm.git
   ```

2. Edit SCSS in `docs/assets/main.scss` (YAML front matter required)
3. Push changes to GitHub; Jekyll auto-compiles and deploys via GitHub Pages
4. Access the site at:  
   `https://mhenke.github.io/accelerate-devex-book-club-notebooklm/`

---

## 📁 Project Structure

```text
accelerate-devex-book-club-notebooklm/
├── README.md
├── CLAUDE.md
├── book-club-guide.md
├── docs/                          # Main Jekyll site
│   ├── index.md                   # Homepage with hero banner
│   ├── _config.yml               # Jekyll configuration
│   ├── _meetings/                # Four interactive meeting pages
│   │   ├── meeting-1.md          # Week 1: Chapters 1-3 (Foundation)
│   │   ├── meeting-2.md          # Week 3: Chapters 4-6 (Technical Excellence)
│   │   ├── meeting-3.md          # Week 5: Chapters 7-10 (Management)
│   │   └── meeting-4.md          # Week 7: Chapters 11,16 (Leadership)
│   ├── _layouts/                 # Jekyll layouts
│   └── assets/                   # SCSS stylesheets
├── resources/                     # Comprehensive resource collection
│   ├── plan/                     # Updated book club plan
│   │   ├── plan.md              # Corrected chapter mappings
│   │   ├── audio.md             # NotebookLM podcast prompts
│   │   └── video.md             # NotebookLM video prompts
│   ├── meetings/                 # Individual meeting resources
│   ├── activities/               # Discussion practices
│   ├── assessments/              # DORA metrics worksheets
│   └── templates/                # Meeting notes templates
└── .github/                      # GitHub configuration
    └── copilot-instructions.md   # Visual design guidance
```

---

## ✨ Key Features

- **Four structured meetings** with corrected chapter mappings aligned to book content
- **Interactive learning checkpoints** with radio buttons and research-backed feedback
- **Visual concept sections**: DORA metrics, Westrum culture types, CD principles, lean practices
- **AI-generated content prompts** for NotebookLM podcasts and videos
- **Comprehensive resources**: assessments, templates, activities, and discussion guides
- **24 capabilities framework** integration for practical DevOps transformation
- **Responsive design** with meeting-specific color themes and modern web technologies
- **Biweekly structure** (Weeks 1, 3, 5, 7) supporting progressive learning

---

## 🔄 Development Workflow

- Edit content and styles in Markdown and SCSS files
- Use semantic HTML and ARIA for accessibility
- Responsive design required for all components
- No build scripts; rely on Jekyll/GitHub Pages for compilation
- Branching: Standard GitHub flow (feature branches, PRs)

---

## 🧑‍💻 Coding Standards

- All visuals: CSS/SVG/HTML/JS (no static images except fallback)
- Use color palette and font guidelines for branding
- Semantic HTML and ARIA for accessibility
- Responsive, maintainable SCSS (see `docs/assets/main.scss`)
- AI-generated content is clearly marked and attributed

---

## 💻 Local Development

### Starting the Jekyll Server

1. **Install dependencies:**

   ```bash
   cd docs
   bundle install --path vendor/bundle
   ```

2. **Start the development server:**

   ```bash
   cd docs
   bundle exec jekyll serve --port 4000
   ```

3. **Access the site locally:**
   - Site URL: `http://127.0.0.1:4000/accelerate-devex-book-club-notebooklm/`
   - Meeting pages: `http://127.0.0.1:4000/accelerate-devex-book-club-notebooklm/meetings/meeting-1/`

### Building the Site

```bash
cd docs
bundle exec jekyll build
```

## 🧪 Testing

### HTML Validation with HTML Proofer

**Start Jekyll server first**, then run HTML Proofer:

```bash
# Recommended command for testing against live server
cd docs
bundle exec htmlproofer _site \
  --disable-external=true \
  --enforce-https=false \
  --swap-urls "^/accelerate-devex-book-club-notebooklm:http://127.0.0.1:4000/accelerate-devex-book-club-notebooklm"
```

**Alternative npm test commands** (from root directory):

```bash
npm run test:html    # HTML validation with html-validate
npm run test:links   # Link checking with hyperlink
npm run test:css     # CSS linting with stylelint
npm run test         # Full test suite
```

### Playwright End-to-End Tests

```bash
cd tests
npm test            # Run all Playwright tests
npm run test:ui     # Run with UI mode
npm run test:report # View test report
```

### Test Results Summary

- **HTML Proofer**: Validates internal links, images, and HTML structure
- **Playwright**: Tests interactive components, accessibility, and cross-browser functionality
- **Manual testing**: Visual validation and responsive design checks

---

## 🤝 Contributing

Contributions welcome for:

- New meeting formats or session guides
- Additional AI-generated content prompts
- Improved accessibility and design
- See code exemplars and instructions in `.github/copilot-instructions.md`

---

## 📄 License

MIT License (see LICENSE file)

---

## 📚 References & Links

- [Updated Book Club Plan](resources/plan/plan.md) - Corrected chapter mappings and learning objectives
- [Interactive Site](https://mhenke.github.io/accelerate-devex-book-club-notebooklm/)
- [Meeting Pages](docs/_meetings/) - Four interactive meeting pages
- [NotebookLM Prompts](resources/plan/) - AI generation prompts for audio and video
- [Assessment Tools](resources/assessments/) - DORA metrics and culture worksheets
- [SCSS Main Stylesheet](docs/assets/main.scss)

---
