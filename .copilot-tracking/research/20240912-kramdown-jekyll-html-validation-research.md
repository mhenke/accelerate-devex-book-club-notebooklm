<!-- markdownlint-disable-file -->

# Task Research Notes: Kramdown/Jekyll HTML Validation Issues

## Research Executed

### File Analysis

- `MARKDOWN.md`
  - Documents markdownlint configuration, disabled rules, and Jekyll/Kramdown compatibility rationale.
- HTML validation logs (user-provided)
  - Warnings for trailing whitespace, invalid IDs, duplicate IDs, `<style>` in `<div>`, duplicate form names, and ARIA misuse.

### Code Search Results

- Searched for Kramdown/Jekyll handling of whitespace, IDs, embedded styles, and form/ARIA attributes.
  - Found that Kramdown/Jekyll do not strictly enforce HTML5 validation rules; they allow flexible markdown-to-HTML conversion.

### External Research

- #fetch:https://jekyllrb.com/docs/configuration/
  - Jekyll does not enforce strict HTML5 validation; relies on user templates and markdown conversion.
- #fetch:https://kramdown.gettalong.org/syntax.html
  - Kramdown supports flexible markdown, embedded HTML, and does not sanitize or validate HTML output.
- #fetch:https://html-validate.org/rules/no-trailing-whitespace.html
  - Trailing whitespace is a warning for HTML5, but not a breaking error for Jekyll/Kramdown.
- #fetch:https://html-validate.org/rules/valid-id.html
  - IDs must start with a letter per HTML5; Kramdown does not enforce this, but HTML validators do.
- #fetch:https://html-validate.org/rules/element-permitted-content.html
  - `<style>` tags are not allowed inside `<div>` per HTML5; Kramdown allows embedded HTML, but this is not best practice.
- #fetch:https://html-validate.org/rules/no-dup-id.html
  - Duplicate IDs are invalid in HTML5; Kramdown does not prevent this.
- #fetch:https://html-validate.org/rules/aria-label-misuse.html
  - ARIA attributes must be used on correct elements; Kramdown does not validate ARIA usage.
- #fetch:https://html-validate.org/rules/form-dup-name.html
  - Form control names must be unique; Kramdown does not enforce this.

### Project Conventions

- Standards referenced: markdownlint config, Jekyll/Kramdown docs, HTML-Validate docs.
- Instructions followed: Disabled markdownlint rules for Kramdown compatibility, but HTML validation is stricter.

## Key Discoveries

### Project Structure

- Markdown is converted to HTML via Kramdown in Jekyll.
- HTML output is not sanitized or validated by Kramdown/Jekyll; validation is a post-process step.

### Implementation Patterns

- Trailing whitespace, invalid IDs, duplicate IDs, and embedded `<style>` tags are common in Kramdown/Jekyll output.
- ARIA and form attribute misuse can occur due to flexible markdown/HTML embedding.

### Complete Examples

```markdown
<!-- Example: Embedded HTML in Kramdown -->
<div>
  <style>
    /* Not valid HTML5, but allowed by Kramdown */
  </style>
</div>
```

### API and Schema Documentation

- Kramdown syntax: https://kramdown.gettalong.org/syntax.html
- Jekyll configuration: https://jekyllrb.com/docs/configuration/
- HTML validation rules: https://html-validate.org/rules/

### Configuration Examples

```json
// .markdownlintrc.json
{
  "MD013": false, // Line length
  "MD022": false, // Headings surrounded by blank lines
  "MD032": false, // Lists surrounded by blank lines
  "MD034": false, // No bare URLs
  "MD040": false, // Fenced code blocks should have language
  "MD046": false // Code block style
}
```

### Technical Requirements

- HTML output must pass HTML5 validation for production quality.
- Kramdown/Jekyll do not enforce HTML5 rules; post-process validation is required.

## Recommended Approach

### 1. Turn Off Non-Critical HTML Validation Rules for Kramdown/Jekyll

- Trailing whitespace (`no-trailing-whitespace`): Can be ignored for Kramdown/Jekyll, but clean up for production.
- `<style>` in `<div>` (`element-permitted-content`): Warn only, do not fail build; recommend moving styles to `<head>` or external CSS.
- Duplicate IDs (`no-dup-id`): Warn only, but fix in templates for accessibility and JS compatibility.
- Invalid IDs (`valid-id`): Warn only, but fix in templates for best practice.
- ARIA misuse (`aria-label-misuse`): Warn only, but fix for accessibility.
- Duplicate form names (`form-dup-name`): Warn only, but fix for form reliability.

### 2. Best Practices for HTML Validation in Kramdown/Jekyll

- **Whitespace**: Remove trailing whitespace in templates and markdown for cleaner output.
- **IDs**: Ensure all element IDs start with a letter and are unique across the page.
- **Embedded Styles**: Move `<style>` tags to the `<head>` or use external CSS files; avoid inline styles in `<div>`.
- **ARIA Attributes**: Use ARIA attributes only on supported elements; validate with accessibility tools.
- **Form Names**: Ensure form control names are unique within each form.
- **Validation Workflow**: Use HTML-Validate in CI, but configure rules to warn (not fail) for Kramdown/Jekyll quirks.

### 3. Configuration Example for HTML-Validate

```json
// html-validate.json
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

## Implementation Guidance

- **Objectives**: Achieve clean, accessible, and maintainable HTML output from Kramdown/Jekyll while minimizing false positives in validation.
- **Key Tasks**:
  - Update HTML-Validate config to set problematic rules to "warn" instead of "error".
  - Refactor templates and markdown to avoid trailing whitespace, duplicate/invalid IDs, and embedded styles.
  - Educate contributors on best practices for IDs, ARIA, and form controls.
- **Dependencies**: HTML-Validate config, Jekyll/Kramdown templates, markdownlint config.
- **Success Criteria**: HTML validation passes with only warnings for Kramdown/Jekyll quirks; production output is accessible and standards-compliant.
