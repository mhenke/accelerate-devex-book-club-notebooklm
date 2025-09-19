<!-- markdownlint-disable-file -->
# Task Research Notes: Jekyll HTML Void Element Linting Issues

## Research Executed

### File Analysis
- `docs/_layouts/default.html`
  - Contains 13 self-closing void elements (meta, link tags) causing linter warnings
  - Uses XHTML-style self-closing syntax `<meta ... />` instead of HTML5 `<meta ...>`
  - All violations follow pattern of void elements with slash before closing bracket

### Code Search Results
- `void-style|meta.*/>|link.*/>|hr.*/>|input.*/>|br.*/>|source.*/>`
  - Found 13 matches in default.html layout file showing consistent XHTML-style syntax
  - Pattern repeated across meta tags, link tags throughout head section
- `html-validate` in package.json
  - Version 8.7.4 installed as development dependency
  - Test command: `html-validate "docs/_site/**/*.html"`

### External Research
- #fetch:"https://html-validate.org/rules/void-style.html"
  - `void-style` rule enforces consistent void element closing style
  - Default configuration: `style: "omit"` - requires omitted end tags for void elements
  - Alternative configuration: `style: "selfclosing"` - requires self-closing syntax
  - Void elements cannot have content, may be written as `<img>` or `<img/>`
- #fetch:"https://html-validate.org/rules/no-trailing-whitespace.html"
  - Disallows trailing whitespace at end of lines
  - Simple formatting issue requiring whitespace removal

### Jekyll Configuration Research
- #githubRepo:"html-validate/html-validate Jekyll configuration void-style HTML5 self-closing tags"
  - Jekyll's build process compiles templates to static HTML files in `_site/` directory
  - HTML-validate runs against generated files, not source templates
  - Configuration can be customized via `.htmlvalidate.json` or similar config files
  - Default html-validate preset enforces HTML5 standards (omitted void tags)

### Project Conventions
- Standards referenced: HTML5, Jekyll templating, html-validate linting rules
- Instructions followed: Jekyll best practices for HTML5 compliance

## Key Discoveries

### Project Structure
Jekyll site uses `docs/_layouts/default.html` as primary template. All pages inherit this layout, meaning void element style issues propagate to every generated HTML file. The linter runs against `docs/_site/**/*.html` (generated files) rather than source templates.

### Implementation Patterns
Current implementation uses XHTML-style self-closing void elements:
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="manifest" href="{{ site.baseurl }}/manifest.json" />
```

HTML5-compliant pattern should be:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="manifest" href="{{ site.baseurl }}/manifest.json">
```

### Complete Examples
```html
<!-- Current XHTML-style (causing warnings) -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="theme-color" content="#7adad1" />
<link rel="manifest" href="{{ site.baseurl }}/manifest.json" />

<!-- HTML5-compliant (recommended) -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#7adad1">
<link rel="manifest" href="{{ site.baseurl }}/manifest.json">
```

### Technical Requirements
- HTML-validate version 8.7.4 enforces HTML5 void-style by default
- Jekyll builds templates into static files that are then validated
- Void elements in HTML5: area, base, br, col, embed, hr, img, input, link, meta, param, source, track, wbr
- All void elements must be consistent throughout the project

### Configuration Examples
```json
// .htmlvalidate.json - Alternative approach to allow XHTML-style
{
  "rules": {
    "void-style": ["error", { "style": "selfclosing" }]
  }
}
```

However, HTML5 standard recommends omitted end tags for void elements, making the template fix the preferred approach.

## Recommended Approach
Update Jekyll layout templates to use HTML5-compliant void element syntax by removing trailing slashes from all void elements. This approach aligns with HTML5 standards, maintains consistency across the project, and eliminates linter warnings without compromising functionality.

## Implementation Guidance
- **Objectives**: Eliminate 620+ HTML validation warnings by converting XHTML-style void elements to HTML5 syntax
- **Key Tasks**: Update `docs/_layouts/default.html` and any other templates containing void elements
- **Dependencies**: No external dependencies - purely template syntax updates
- **Success Criteria**: Zero void-style warnings in html-validate output, maintained site functionality
