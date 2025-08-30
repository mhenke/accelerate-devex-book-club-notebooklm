# GitHub Pages Image Assets
*Accelerate DevEx Book Club Website Images*

## Directory Structure

```
docs/assets/images/
├── hero/
│   └── hero-banner.png          # 1200x400 - Main website header
├── infographics/
│   ├── dora-metrics.png         # 800x600 - Four DORA metrics visual
│   ├── meeting-timeline.png     # 1000x300 - 4-meeting progression
│   ├── culture-types.png        # 600x400 - Westrum culture typology
│   └── devops-practices.png     # 500x500 - Practices wheel diagram
├── icons/
│   ├── meeting-1-icon.png       # 100x100 - Foundation meeting
│   ├── meeting-2-icon.png       # 100x100 - Culture & CD meeting
│   ├── meeting-3-icon.png       # 100x100 - Architecture meeting
│   ├── meeting-4-icon.png       # 100x100 - Leadership meeting
│   └── ai-generated-badge.png   # 200x80 - AI transparency badge
├── books/
│   └── accelerate-book-display.png  # 400x500 - 3D book with CTA
├── backgrounds/
│   └── background-pattern.png   # 1920x1080 - Subtle tileable pattern
└── social/
    └── og-image.png            # 1200x630 - Social media preview
```

## Image Specifications

### Hero Banner (`hero/hero-banner.png`)
- **Dimensions:** 1200px x 400px
- **Background:** Dark navy (#1a1a2e) to light blue (#16213e) gradient
- **Content:** Main title, subtitle, circuit board pattern overlay
- **Usage:** Website header across all pages

### DORA Metrics Infographic (`infographics/dora-metrics.png`)
- **Dimensions:** 800px x 600px
- **Layout:** 2x2 grid with colored sections
- **Colors:** Blue, Green, Orange, Red for each metric
- **Usage:** Meeting 1 content and educational materials

### Meeting Timeline (`infographics/meeting-timeline.png`)
- **Dimensions:** 1000px x 300px
- **Layout:** Horizontal progression with 4 connected nodes
- **Colors:** Progressive blue gradient
- **Usage:** Homepage meeting schedule section

### Culture Types Diagram (`infographics/culture-types.png`)
- **Dimensions:** 600px x 400px
- **Layout:** Three connected transformation boxes
- **Colors:** Red → Yellow → Green progression
- **Usage:** Meeting 2 content and culture discussion

### DevOps Practices Wheel (`infographics/devops-practices.png`)
- **Dimensions:** 500x500px (square)
- **Layout:** Circular with center hub and radiating spokes
- **Colors:** Blue and green theme
- **Usage:** Technical practices overview

### Meeting Icons (`icons/meeting-*-icon.png`)
- **Dimensions:** 100px x 100px each
- **Style:** Flat design with circular backgrounds
- **Colors:** Blue, Green, Orange, Purple respectively
- **Usage:** Navigation, meeting cards, quick reference

### Book Display (`books/accelerate-book-display.png`)
- **Dimensions:** 400px x 500px
- **Content:** 3D book cover with purchase CTA
- **Background:** Clean gradient
- **Usage:** Resources section, reading requirements

### AI Attribution Badge (`icons/ai-generated-badge.png`)
- **Dimensions:** 200px x 80px
- **Purpose:** Transparency about AI-generated content
- **Style:** Professional badge format
- **Usage:** Footer or about sections

### Background Pattern (`backgrounds/background-pattern.png`)
- **Dimensions:** 1920px x 1080px (tileable)
- **Opacity:** 5-10% subtle pattern
- **Purpose:** Page background texture
- **Usage:** Body background via CSS

### Social Media Preview (`social/og-image.png`)
- **Dimensions:** 1200px x 630px
- **Purpose:** Open Graph/Twitter Card image
- **Content:** Title, description, key visuals
- **Usage:** Automatic social media previews

## Design Guidelines

### Color Palette
- **Primary Blue:** #0366d6
- **Dark Blue:** #032f62  
- **Light Blue:** #f1f8ff
- **Book Brown:** #8B4513
- **Book Cream:** #FFF8DC
- **Book Gold:** #DAA520
- **Success Green:** #28a745
- **Warning Orange:** #f66a0a
- **Danger Red:** #dc3545

### Typography
- **Headers:** Helvetica Neue, Arial, sans-serif
- **Body:** Georgia, Times New Roman, serif
- **Code:** Monaco, Courier New, monospace

### File Requirements
- **Format:** PNG for graphics with transparency, JPG for photos
- **Optimization:** Compress for web (<500KB each)
- **Accessibility:** Maintain sufficient color contrast
- **Responsive:** Consider mobile display

## Creation Tools Recommended

### Design Software
1. **Canva** - User-friendly templates
2. **Figma** - Professional tool, free tier
3. **Adobe Express** - Quick graphics
4. **GIMP** - Free Photoshop alternative

### Free Resources
- **Icons:** Heroicons, Feather Icons, Font Awesome
- **Fonts:** Google Fonts (Roboto, Inter, Poppins)
- **Images:** Unsplash, Pexels for stock imagery

## Implementation Notes

### CSS Integration
Images will be referenced in `docs/assets/css/style.scss`:
```scss
.hero-banner {
  background-image: url('{{ "/assets/images/hero/hero-banner.png" | relative_url }}');
}
```

### HTML Usage
```html
<img src="{{ '/assets/images/infographics/dora-metrics.png' | relative_url }}" 
     alt="DORA Metrics Explanation" 
     class="responsive-image">
```

### Jekyll Liquid Tags
```liquid
{% assign image_path = "/assets/images/icons/meeting-1-icon.png" | relative_url %}
<img src="{{ image_path }}" alt="Meeting 1 Icon">
```

All images should include proper alt text for accessibility and be optimized for both desktop and mobile viewing.