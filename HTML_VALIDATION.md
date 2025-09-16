# HTML Validation Configuration

This project uses [html-validate](https://html-validate.org/) to ensure HTML quality and accessibility while accommodating Jekyll/Kramdown compatibility requirements.

## Configuration Overview

The HTML validation is configured in `.htmlvalidaterc.json` to handle common Jekyll/Kramdown output patterns that are valid for the framework but trigger warnings in strict HTML5 validation.

## Workflow Integration

HTML validation is integrated into the CI/CD pipeline via GitHub Actions workflows:

- See `.github/workflows/test-suite.yml` for the main test suite, which runs HTML validation on all generated HTML files
- Run locally with `npm run test:html`
- Full validation included in `npm run validate`

## Validation Rules

### Rules Set to "warn" (Jekyll/Kramdown Compatibility)

The following rules are set to generate warnings instead of errors to accommodate Jekyll/Kramdown output patterns:

#### no-trailing-whitespace
- **Issue**: Kramdown may generate trailing whitespace in HTML output
- **Impact**: Cosmetic only, doesn't affect rendering
- **Recommendation**: Clean up in templates when possible

#### element-permitted-content
- **Issue**: `<style>` tags in `<div>` containers from embedded styles in markdown
- **Impact**: Not HTML5 compliant but renders correctly
- **Recommendation**: Move styles to `<head>` or external CSS files when possible

#### no-dup-id
- **Issue**: Duplicate IDs from reusable Jekyll includes/components
- **Impact**: Can affect JavaScript and accessibility
- **Recommendation**: Use unique ID prefixes in reusable components

#### valid-id
- **Issue**: Element IDs starting with numbers (invalid in HTML5)
- **Impact**: May cause issues with CSS selectors and JavaScript
- **Recommendation**: Ensure IDs start with letters

#### aria-label-misuse
- **Issue**: ARIA attributes on elements that don't support them
- **Impact**: Accessibility tools may ignore or misinterpret
- **Recommendation**: Use ARIA attributes only on supported elements

#### form-dup-name
- **Issue**: Duplicate form control names within forms
- **Impact**: Can cause form submission issues
- **Recommendation**: Ensure unique names within each form

## Best Practices

### Templates and Layouts

- Clean up trailing whitespace in Jekyll templates
- Use unique ID generation for reusable components
- Move embedded styles to external stylesheets
- Validate ARIA usage with accessibility tools

### Component Development

- Prefix IDs in reusable includes with component names
- Use semantic HTML elements before adding ARIA attributes
- Test form functionality when using multiple instances

### Testing Workflow

1. **During development**: `npm run test:html` (shows warnings)
2. **Before committing**: `npm run validate` (includes HTML validation)
3. **CI/CD pipeline**: Warnings are reported but don't fail the build

## Understanding Warnings

The current configuration generates ~267 warnings that are expected for Jekyll/Kramdown sites:

- **Trailing whitespace**: 40+ instances across templates
- **Style in div**: 100+ instances from component styling
- **Duplicate IDs**: 50+ instances from reusable components
- **Invalid IDs**: 10+ instances from generated content
- **ARIA/Form issues**: 5+ instances from interactive components

These warnings highlight areas for improvement but don't prevent the site from functioning correctly.

## Configuration File

The validation rules are defined in `.htmlvalidaterc.json`:

```json
{
  "extends": ["html-validate:recommended"],
  "rules": {
    "no-trailing-whitespace": "warn",
    "element-permitted-content": "warn",
    "no-dup-id": "warn",
    "valid-id": "warn",
    "aria-label-misuse": "warn",
    "form-dup-name": "warn"
  }
}
```

## Testing Commands

```bash
# HTML validation only
npm run test:html

# All linting and validation
npm run validate

# Build and validate
npm run build && npm run test:html
```

## Contributing

When adding new HTML content or Jekyll components:

1. Run `npm run test:html` to check for new warnings
2. Address critical issues (invalid IDs, ARIA misuse, form problems)
3. Cosmetic issues (trailing whitespace, embedded styles) can be addressed over time
4. All changes should maintain or improve the warning count

This approach balances strict HTML5 compliance with practical Jekyll/Kramdown development workflows.