# Markdown Linting Configuration

This project uses [markdownlint](https://github.com/DavidAnson/markdownlint) to ensure Markdown quality and consistency. The configuration is optimized for Jekyll/Kramdown compatibility.

## Workflow Integration

Markdown linting and spellcheck are fully integrated into the CI/CD pipeline via GitHub Actions workflows:

- See `.github/workflows/test-suite.yml` for the main test suite, which runs markdownlint and spellcheck on all markdown files.
- Spellcheck uses [rojopolis/spellcheck-github-actions](https://github.com/rojopolis/spellcheck-github-actions) with configuration in `.spellcheck.yml`.
- For workflow specification and maintenance, see [`spec/spec-process-cicd-spellcheck.md`](spec/spec-process-cicd-spellcheck.md).

All contributors should review these files for up-to-date configuration and best practices.

## Disabled Rules

The following markdownlint rules are disabled in `.markdownlintrc.json` for compatibility with Jekyll/Kramdown:

### MD013 - Line Length

- **Disabled**: Kramdown ignores line length restrictions
- **Rationale**: Jekyll/Kramdown renders long lines properly, and enforcing line length adds unnecessary friction for content authors

### MD022 - Headings Surrounded by Blank Lines

- **Disabled**: Kramdown is tolerant of heading spacing
- **Rationale**: Kramdown parses headings correctly regardless of surrounding blank lines

### MD032 - Lists Surrounded by Blank Lines

- **Disabled**: Kramdown parses lists flexibly
- **Rationale**: Kramdown handles list spacing gracefully, making this rule unnecessarily strict

### MD034 - No Bare URLs

- **Disabled**: Kramdown renders bare URLs as clickable links
- **Rationale**: While explicit markdown links are preferred for accessibility, Kramdown automatically converts bare URLs to functional links

### MD040 - Fenced Code Blocks Should Have Language

- **Disabled**: Kramdown supports both indented and fenced code blocks
- **Rationale**: Not all code blocks require language specification, and Kramdown handles both styles appropriately

### MD046 - Code Block Style

- **Disabled**: Kramdown supports multiple code block styles
- **Rationale**: Jekyll/Kramdown accepts both triple backticks and tildes, allowing content flexibility

## Best Practices

While these rules are disabled, we recommend following these Jekyll/Kramdown best practices:

### Headings

- Use semantic headings and maintain logical hierarchy (H1 → H2 → H3)
- Start with H1 for page titles, use H2 for major sections

### Code Blocks

- Prefer fenced code blocks with language specifiers for syntax highlighting
- Use language identifiers when possible: `json`, `markdown`, `bash`, `javascript`, etc.

### Links

- Use explicit markdown links for better accessibility: `[Link Text](URL)`
- Bare URLs are acceptable but explicit links provide better context

### Readability

- Use blank lines between sections for readability
- Keep paragraphs reasonably sized for better reading experience
- Line length is flexible but aim for readability on various screen sizes

## Configuration Location

Markdownlint configuration is stored in `.markdownlintrc.json` at the project root.

## Testing

Run markdown linting with:

```bash
npm run lint:md
```

Or test all linting (CSS, JS, Markdown):

```bash
npm run lint
```

## Contributing

When adding new Markdown content:

1. Focus on semantic structure and accessibility
2. Use explicit links when context is important
3. Add language specifiers to code blocks for syntax highlighting
4. Test with `npm run lint` before committing
