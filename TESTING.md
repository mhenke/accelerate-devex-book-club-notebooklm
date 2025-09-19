# Testing Guide for Accelerate DevEx Book Club

This testing suite provides comprehensive validation for the Jekyll-based DevOps book club site with interactive 
HTML, SCSS, and JavaScript components.

## Quick Start

```bash
# Install dependencies
npm install
cd docs && bundle install && cd ..

# Run all tests
npm test

# Run specific test categories
npm run test:html      # HTML validation
npm run test:css       # SCSS/CSS linting
npm run test:js        # JavaScript linting
npm run test:a11y      # Accessibility testing
npm run test:visual    # Visual regression testing
npm run test:interactive # Interactive component testing
```

## Test Categories

### 1. **HTML Validation** (`html-validate`)

- **Purpose**: Validates HTML structure, semantics, and accessibility
- **Scope**: All generated HTML files in `_site/`
- **Key Checks**:
  - Valid DOCTYPE declarations
  - Proper element nesting
  - Required attributes
  - Accessibility attributes (alt text, labels)
  - No duplicate IDs

### 2. **CSS/SCSS Validation** (`stylelint`)

- **Purpose**: Ensures consistent CSS/SCSS code quality
- **Scope**: `docs/assets/main.scss`, embedded CSS in HTML/Markdown
- **Key Rules**:
  - Color consistency (hex format, case)
  - No duplicate properties
  - Proper nesting depth (max 4 levels)
  - SCSS variable naming conventions
  - Media query validation

### 3. **JavaScript Linting** (`eslint`)

- **Purpose**: Validates JavaScript code in embedded script tags
- **Scope**: JavaScript in `.html` and `.md` files
- **Key Rules**:
  - No unused variables
  - Prefer const/let over var
  - No eval() or dangerous functions
  - Consistent code style

### 4. **Interactive Component Testing** (`playwright`)

- **Purpose**: End-to-end testing of interactive features
- **Scope**: All meeting pages with assessments, sliders, forms
- **Test Coverage**:
  - Radio button functionality
  - Slider interactions
  - Dynamic feedback systems
  - Color theme consistency
  - Responsive design behavior
  - Keyboard accessibility

### 5. **Visual Regression Testing** (`playwright`)

- **Purpose**: Ensures visual consistency across changes
- **Scope**: Screenshots of all pages and components
- **Viewports Tested**: Mobile (375px), Tablet (768px), Desktop (1200px)
- **Browsers**: Chrome, Firefox, Safari, Mobile Safari

### 6. **Accessibility Testing** (`pa11y-ci`)

- **Purpose**: WCAG 2.1 compliance validation
- **Scope**: All site pages
- **Key Checks**:
  - Color contrast ratios
  - Keyboard navigation
  - Screen reader compatibility
  - Focus management
  - ARIA attributes

### 7. **Performance Testing** (`lighthouse-ci`)

- **Purpose**: Performance, SEO, and best practices validation
- **Metrics**:
  - Performance Score > 80%
  - Accessibility Score > 90%
  - Best Practices Score > 80%
  - SEO Score > 80%

## Specific Test Scenarios

### Interactive Assessment Components

```javascript
// Tests radio button interactions and feedback
test('DORA Performance Assessment', async ({ page }) => {
  await page.locator('input[name="dora-performance"][value="high"]').check();
  await expect(page.locator('#dora-feedback')).toContainText('High Performers');
});
```

### Color Theme Validation

```javascript
// Tests meeting-specific color themes
test('CSS Color Theme Consistency', async ({ page }) => {
  await page.goto('/meetings/meeting-1/');
  const hero = page.locator('.meeting-hero');
  await expect(hero).toHaveCSS('background', /rgb\(30, 58, 138\)/);
});
```

### Responsive Design Testing

```javascript
// Tests mobile layout behavior
test('Responsive Design - Mobile Layout', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  const heroSection = page.locator('.meeting-hero');
  await expect(heroSection).toHaveCSS('padding', '1rem');
});
```

## Running Tests in Development

### Local Development Workflow

```bash
# Start Jekyll development server
npm run serve

# Run tests in another terminal
npm run test:interactive  # Interactive component tests
npm run test:visual       # Visual regression tests
npm run test:a11y         # Accessibility tests
```

### Pre-Commit Testing

```bash
# Comprehensive validation before commit
npm run validate
```

### Continuous Integration

The GitHub Actions workflow (`.github/workflows/test-suite.yml`) runs:

1. Jekyll site build
2. HTML validation
3. CSS/SCSS validation
4. JavaScript linting
5. Accessibility testing
6. Performance auditing
7. Visual regression testing
8. Interactive component testing

## Configuration Files

| File                   | Purpose                          | Tools         |
| ---------------------- | -------------------------------- | ------------- |
| `package.json`         | Node.js dependencies and scripts | npm           |
| `docs/Gemfile`         | Ruby dependencies                | bundler       |
| `playwright.config.js` | E2E test configuration           | playwright    |
| `.stylelintrc.json`    | CSS/SCSS linting rules           | stylelint     |
| `.htmlvalidate.json`   | HTML validation rules            | html-validate |
| `.eslintrc.json`       | JavaScript linting rules         | eslint        |
| `.pa11yci.json`        | Accessibility test configuration | pa11y-ci      |
| `lighthouserc.json`    | Performance test configuration   | lighthouse-ci |

## Test Data and Fixtures

### Meeting Page Test Data

- **Meeting 1**: Blue theme, DORA assessments, deployment confidence
- **Meeting 2**: Teal theme, tool freedom slider, culture assessments
- **Meeting 3**: Amber theme, lean management, satisfaction factors
- **Meeting 4**: Purple theme, coaching questions, transformation readiness

### Expected Interactive Elements

- Radio button groups with visual feedback
- Range sliders with dynamic value display
- Checkbox groups with score calculation
- Hover states and transitions
- Mobile touch interactions

## Troubleshooting

### Common Issues

**Test Failures After CSS Changes**

```bash
# Update visual regression baselines
npx playwright test --update-snapshots
```

**JavaScript Errors in Browser**

```bash
# Check browser console in headed mode
npx playwright test --headed --debug
```

**Performance Test Failures**

```bash
# Run Lighthouse manually for debugging
npx lhci autorun --debug
```

**Accessibility Violations**

```bash
# Run pa11y on specific page for details
npx pa11y http://localhost:4000/accelerate-devex-book-club-notebooklm/meetings/meeting-1/
```

### Test Environment Setup

**Ruby/Jekyll Dependencies**

```bash
cd docs
bundle install
bundle exec jekyll serve --watch
```

**Node.js Dependencies**

```bash
npm install
```

**Browser Dependencies for Playwright**

```bash
npx playwright install
```

## Contributing to Tests

### Adding New Interactive Components

1. Add component test in `tests/interactive-components.spec.js`
2. Update visual regression tests in `tests/visual-regression.spec.js`
3. Verify accessibility compliance
4. Update performance benchmarks if needed

### Test Code Standards

- Use descriptive test names
- Include setup and teardown
- Assert both positive and negative cases
- Test cross-browser compatibility
- Include mobile/responsive scenarios

This testing framework ensures the Jekyll site maintains high quality, accessibility, and performance standards while supporting complex interactive learning components.
