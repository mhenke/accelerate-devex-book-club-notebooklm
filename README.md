# Accelerate DevEx Book Club

A structured Jekyll-based GitHub Pages site and resource hub for a DevOps book club focused on "Accelerate" by Nicole Forsgren, Jez Humble, and Gene Kim. All visuals and content are AI-generated or curated for podcasts, video, and learning materials.

---

## 🚀 Project Name and Description

**Accelerate DevEx Book Club**  
A resource hub and interactive site for learning and implementing high-performing DevOps practices, organized around the "Accelerate" book. Features meeting guides, AI-generated podcasts/videos, and practical activities.

---

## 🛠️ Technology Stack

- **Jekyll** (static site generator, GitHub Pages)
- **SCSS/CSS/HTML/SVG/JavaScript** (web-native visuals, responsive design)
- **Markdown** (content, guides, prompts)
- **Font Libraries**: Google Fonts (Roboto, Inter, Poppins), Font Awesome (via CDN)
- **No backend/server code**; all logic is client-side or static

---

## 🏗️ Project Architecture

- **docs/**: Main Jekyll site (layouts, assets, content)
- **meeting-resources/**: Guides for each book club session
- **notebooklm-prompts/**: Prompts for AI-generated podcasts/videos
- **book-club-materials/**: Supporting resources and activities
- **All visuals**: Implemented with CSS/SVG/HTML, not static images

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

```
accelerate-devex-book-club-notebooklm/
├── README.md
├── book-club-guide.md
├── meeting-resources/
│   ├── meeting-1-guide.md
│   └── ...
├── book-club-materials/
│   ├── between-meetings.md
│   └── ...
├── notebooklm-prompts/
│   ├── meeting-*-podcast-prompt.md
│   └── ...
├── docs/
│   ├── index.md
│   ├── _config.yml
│   ├── _meetings/
│   ├── assets/
│   └── ...
└── resources/
    ├── meetings/
    └── ...
```

---

## ✨ Key Features

- Structured meeting guides and session materials
- AI-generated podcasts and video prompts
- DORA metrics infographic and interactive visuals
- Accessible, responsive design
- All content and visuals are web-native and modern

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

## 🧪 Testing

- Manual validation of site build and visual output
- Accessibility and responsive design checks
- No automated test suite (static site)

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

- [Book Club Guide](book-club-guide.md)
- [Interactive Site](https://mhenke.github.io/accelerate-devex-book-club-notebooklm/)
- [Meeting Resources](meeting-resources/)
- [AI Prompts](notebooklm-prompts/)
- [SCSS Main Stylesheet](docs/assets/main.scss)

---
