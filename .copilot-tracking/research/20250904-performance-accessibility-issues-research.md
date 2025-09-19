<!-- markdownlint-disable-file -->

# Task Research Notes: Performance & Accessibility Issues Remediation

## Research Executed

### Issue Analysis from Console Logs

- **FOUC Warning**: "Layout was forced before the page was fully loaded. If stylesheets are not yet loaded this may cause a flash of unstyled content."
- **Will-Change Memory Issue**: "Will-change memory consumption is too high. Budget limit is the document surface area multiplied by 3 (460332 px). Occurrences of will-change over the budget will be ignored."
- **Accessibility Issues**: Heading hierarchy skips levels
- **Mobile Issues**: 19 touch targets smaller than 44px
- **Performance Metrics**: Load time 886ms, DOM Ready 257ms

### File Analysis

- `/docs/assets/main.scss`
  - Found 2 `will-change: transform` declarations at lines 3915 and 3921
  - Touch targets already have 44px minimum size declarations but implementation appears incomplete
  - Heading hierarchy fix comment found at line 814
  - CSS file is 3900+ lines causing performance issues

### Code Search Results

- `will-change` usage found in SCSS and performance optimization files
- Touch target declarations exist but may not be properly applied to all interactive elements
- Flash of Unstyled Content prevention logic exists in performance optimizations

### External Research

- #fetch:"https://developer.mozilla.org/en-US/docs/Web/CSS/will-change"
  - Will-change should be used sparingly and removed after animation completes
  - Using will-change in stylesheets keeps optimizations active longer than needed
  - Proper pattern is to add/remove via JavaScript during animations
- #fetch:"https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path"
  - CSS is render-blocking and must be fully parsed before rendering
  - Large CSS files delay first contentful paint
  - Recommend splitting critical/non-critical CSS

### GitHub Repository Research

- #githubRepo:"GoogleChrome/lighthouse" touch targets 44px mobile accessibility minimum size
  - Lighthouse target-size audit requires minimum 24px x 24px touch targets
  - Modern accessibility standards recommend 44px x 44px minimum
  - Touch targets need sufficient spacing between interactive elements
  - Found extensive examples of touch target handling in Lighthouse codebase

### Project Conventions

- Standards referenced: Performance optimization, accessibility (WCAG 2.1 AA), responsive design
- Instructions followed: Test strategy requirements, quality characteristics from ISO 25010

## Key Discoveries

### Project Structure

- Monolithic CSS architecture with single 3900+ line SCSS file causing performance bottlenecks
- Existing performance optimization and validation scripts in `_includes/` directory
- CSS-in-JS performance monitoring already implemented but not addressing core issues

### Implementation Patterns

- Will-change declarations applied globally in CSS rather than dynamically via JavaScript
- Touch target minimum sizes declared but not consistently applied across all interactive elements
- FOUC prevention exists but may be compromised by large CSS bundle size

### Critical CSS Implementation Analysis

```scss
/* Current monolithic structure (3900+ lines) */
docs/assets/main.scss
  - Global variables and resets
  - Hero banner styles
  - DORA metrics visualization
  - Meeting-specific components
  - Responsive breakpoints
  - Performance optimizations
  - All interactive elements

/* Proposed modular critical extraction */
docs/_sass/
├── _tokens.scss           // Design tokens & CSS variables
├── abstracts/
│   ├── _mixins.scss      // Responsive & utility mixins
│   └── _functions.scss   // SCSS helper functions
├── base/
│   ├── _reset.scss       // Normalize & base styles
│   └── _typography.scss  // Heading hierarchy fixes
├── components/
│   ├── _hero.scss        // Above-fold hero banner (CRITICAL)
│   ├── _navigation.scss  // Header navigation (CRITICAL)
│   ├── _cards.scss       // Metric cards & content cards
│   ├── _buttons.scss     // Touch-target compliant buttons
│   └── _grids.scss       // Layout grid systems
├── layout/
│   ├── _header.scss      // Site header (CRITICAL)
│   └── _footer.scss      // Site footer (DEFERRED)
└── pages/
    ├── _home.scss        // Homepage-specific (MIXED)
    └── _meetings.scss    // Meeting pages (DEFERRED)
```

### Jekyll Critical CSS Integration Pattern

```html
<!-- In _layouts/default.html HEAD -->
<style>
  {{ "/assets/critical.css" | relative_url | asset_content }}
</style>

<!-- Deferred non-critical styles -->
<link
  rel="preload"
  href="{{ '/assets/main.css' | relative_url }}"
  as="style"
  onload="this.onload=null;this.rel='stylesheet'"
/>
<noscript>
  <link rel="stylesheet" href="{{ '/assets/main.css' | relative_url }}" />
</noscript>
```

### Will-Change Dynamic Control Implementation

```javascript
// Replace static CSS declarations with event-driven control
function optimizeAnimations() {
  const interactiveElements = document.querySelectorAll(
    '.timeline-node, .metric-card, .hero-banner'
  );

  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.style.willChange = 'transform';
    });

    element.addEventListener('mouseleave', () => {
      element.style.willChange = 'auto';
    });

    element.addEventListener('animationend', () => {
      element.style.willChange = 'auto';
    });
  });
}
```

### Touch Target Implementation Analysis

```scss
/* Current implementation (incomplete coverage) */
button,
.btn,
input[type='checkbox'],
input[type='radio'] {
  min-width: 48px;
  min-height: 48px;
}

/* Missing coverage for custom interactive elements */
.timeline-node,
.metric-card,
.ai-tool {
  /* No explicit touch target sizing */
}
```

### Performance Optimization Patterns

```javascript
// Existing dynamic will-change pattern in performance-optimizations.html
function optimizeAnimations() {
  // Use CSS containment for animated elements
  const animatedElements = document.querySelectorAll(
    '.trophy-svg, .mastery-fill'
  );
  animatedElements.forEach(function (element) {
    element.style.contain = 'layout style paint';
  });
}
```

### Technical Requirements

- **Critical CSS Extraction**: Separate above-the-fold styles from full stylesheet
- **Will-Change Optimization**: Remove static declarations, implement dynamic JavaScript control
- **Touch Target Compliance**: Ensure all interactive elements meet 44px minimum standard
- **Heading Hierarchy Fix**: Audit and correct heading level structure
- **CSS Architecture**: Split monolithic SCSS into component-based modules

## Recommended Approach

**Integrated Critical Rendering Path Optimization with CSS Architecture Modernization:**

### Phase 1: Critical CSS Extraction & Infrastructure Setup

1. **Design Token System Implementation**

   - Create `_sass/_tokens.scss` with comprehensive color, spacing, typography scales
   - Establish CSS custom properties for runtime theming capability
   - Replace hardcoded values with token references throughout codebase

2. **SCSS Architecture Reorganization (7-1-lite)**

   - Implement modular structure: `abstracts/`, `base/`, `components/`, `layout/`, `pages/`, `themes/`
   - Extract critical above-the-fold styles (<14KB inline)
   - Split main.scss into load-prioritized modules

3. **Critical Rendering Path Setup**
   - Inline critical CSS in `<head>` for immediate above-fold rendering
   - Defer non-critical styles using `media="print"` switching to `media="all"`
   - Implement progressive CSS loading strategy

### Phase 2: Performance Optimization & Component Extraction

4. **Will-Change Memory Management**

   - Remove static `will-change: transform` declarations from SCSS
   - Implement JavaScript-controlled will-change during animations only
   - Add automatic cleanup with `will-change: auto` post-animation

5. **Component Deduplication & Utilities**

   - Extract repeated patterns (cards, grids, hero, headers) into reusable components
   - Replace inline styles with utility classes and semantic components
   - Create responsive mixins with centralized breakpoint management

6. **Touch Target Accessibility Compliance**
   - Ensure all interactive elements meet 44px minimum standard
   - Implement consistent 24px minimum spacing between targets
   - Add touch-action optimization for mobile performance

### Phase 3: Quality Assurance & Automation

7. **Code Quality & Linting Infrastructure**

   - Add Stylelint with SCSS-specific rules and property ordering
   - Integrate Prettier for consistent formatting
   - Establish CI/CD checks for style compliance

8. **Accessibility & Testing Framework**
   - Fix heading hierarchy violations with semantic progression
   - Implement visual regression testing for component changes
   - Add automated accessibility validation in build pipeline

## Implementation Guidance

- **Objectives**: <2s load time, WCAG 2.1 AA compliance, 44px touch targets, <150KB total CSS
- **Key Tasks**:
  1. Design token system with CSS custom properties for theming
  2. Critical CSS extraction targeting <14KB inline above-fold styles
  3. SCSS 7-1-lite architecture with component-based modules
  4. Dynamic will-change management via JavaScript event handlers
  5. Touch target audit ensuring 44px minimum with 24px spacing
  6. Heading hierarchy semantic progression (h1→h2→h3) validation
  7. Stylelint integration with SCSS rules and automated CI checks
- **Dependencies**:
  - Jekyll build process modifications for critical CSS generation
  - JavaScript enhancement scripts for dynamic performance optimizations
  - Visual regression testing framework for component validation
  - Accessibility audit pipeline integration
- **Success Criteria**:
  - Zero FOUC warnings during page load
  - Will-change memory consumption within browser budget limits
  - All interactive elements meet 44px touch target standards
  - Semantic heading hierarchy with no level skipping
  - Total CSS bundle reduction from 3900+ lines to modular <150KB output
  - Lighthouse Performance score >90, Accessibility score 100
  - Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
