# Assets Directory
*Accelerate DevEx Book Club Website Assets*

## Web-Native Implementation

This project uses **web-native technologies** (CSS, SCSS, SVG, HTML, JavaScript) for all visuals instead of static image files. This approach provides:

- **Better performance** - No image loading delays
- **Perfect scalability** - Vector graphics scale to any size
- **Accessibility** - Screen readers can interpret SVG elements
- **Consistency** - Exact color matching with design system
- **Maintainability** - Easy to modify via code

## Current Structure

```
docs/assets/
├── main.scss                    # Main stylesheet with all visuals
├── todo-css-interactive.md      # Implementation checklist
└── images/                      # Reserved for future complex images only
    └── README.md               # This file
```

## Implemented Web-Native Visuals

All visuals are implemented in `main.scss` using:

### Hero Banner
- **CSS gradient** background (dark navy to light navy)
- **SVG/CSS** subtle background pattern with DORA metric colors
- **Font Awesome** rocket icon positioned absolutely
- **Responsive** typography and spacing

### DORA Metrics
- **Inline SVG** icons with proper DORA metric colors:
  - Lead Time: Blue (#2196F3)
  - Deployment Frequency: Green (#4CAF50) 
  - Mean Time to Recovery: Orange (#FF9800)
  - Change Fail Rate: Red (#F44336)
- **CSS Grid** layout for metric cards
- **Hover animations** for interactivity

### Meeting Timeline
- **CSS flexbox** horizontal layout
- **Gradient line** connecting timeline nodes
- **Circular CSS** elements for meeting numbers
- **Color-coded** borders matching DORA metrics
- **Hover effects** with scale animations

### Culture Transformation Diagram
- **CSS boxes** with red→orange→green progression
- **SVG arrows** with hover animations
- **Inline SVG** icons for each culture type
- **Responsive** layout for mobile

### DevOps Practices Wheel
- **CSS/SVG** circular diagram with center hub
- **Positioned spokes** with custom CSS variables for rotation
- **Font Awesome** icons for each practice
- **Interactive hover** effects on spokes

### Design System Colors
```scss
:root {
  --header-dark-navy: #1a1a2e;
  --header-light-navy: #16213e;
  --accent-coral: #ff7f50;
  --accent-gold: #d7ba89;
  --accent-teal: #7adad1;
  --dora-blue: #2196f3;
  --dora-green: #4caf50;
  --dora-orange: #ff9800;
  --dora-red: #f44336;
}
```

## Why Web-Native?

1. **Performance**: No HTTP requests for images
2. **Scalability**: Vector graphics scale perfectly
3. **Maintainability**: Colors and styles centrally managed
4. **Accessibility**: Screen readers can interpret content
5. **Consistency**: Exact design system color matching