# Test Environment Configuration

## Local Development Testing
Run tests against your local Jekyll development server:

```bash
cd tests
npm install
npm run test
```

This will:
1. Start Jekyll dev server on localhost:4000
2. Run tests against local development version
3. Provide fast feedback for development

## Production Testing
Test against the live GitHub Pages site:

```bash
cd tests
CI=true npm run test
```

Or modify the test to use production URL directly in individual test files.

## Test Coverage
- **Interactive Components**: Radio buttons, sliders, assessments
- **Theme Consistency**: All 4 meeting color themes
- **Responsive Design**: Mobile and desktop layouts
- **Accessibility**: WCAG compliance and keyboard navigation
- **Performance**: Load times and Core Web Vitals
- **Visual Regression**: Cross-browser consistency

## Browser Coverage
- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: Chrome (Pixel 5), Safari (iPhone 12)
