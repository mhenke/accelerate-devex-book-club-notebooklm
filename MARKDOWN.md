# Markdown Linting Configuration

This project uses [markdownlint](https://github.com/DavidAnson/markdownlint) to ensure Markdown quality and consistency. The configuration is optimized for Jekyll/Kramdown compatibility.

## Workflow Integration

Markdown linting and spellcheck are fully integrated into the CI/CD pipeline via GitHub Actions workflows:

- See `.github/workflows/test-suite.yml` for the main test suite, which runs markdownlint and spellcheck on all markdown files.
- Spellcheck uses [rojopolis/spellcheck-github-actions](https://github.com/rojopolis/spellcheck-github-actions) with configuration in `.spellcheck.yml`.
- For workflow specification and maintenance, see [`spec/spec-process-cicd-spellcheck.md`](spec/spec-process-cicd-spellcheck.md).

All contributors should review these files for up-to-date configuration and best practices.

## Spellcheck Configuration

The project uses `.spellcheck.yml` for automated spellchecking via [pyspelling](https://github.com/facelessuser/pyspelling):

### Configuration Details

- **Task Name**: `markdown` (required for GitHub Actions integration)
- **Sources**: All markdown files in `docs/`, plus `README.md` and `MARKDOWN.md`
- **Dictionary**: English US (`en_US`) with custom wordlist in `.wordlist.txt`
- **Pipeline**: Processes Markdown with HTML filtering to ignore code blocks

### Custom Wordlist

Technical terms and proper nouns are maintained in `.wordlist.txt`:
- DevOps terminology (DORA, CI/CD, etc.)
- Author names (Forsgren, Humble, etc.)
- Technical tools and frameworks (Jekyll, NotebookLM, etc.)

### Adding New Words

When adding technical terms or proper nouns that trigger spellcheck failures:
1. Add the word to `.wordlist.txt` in alphabetical order
2. Use the exact case as it appears in your content
3. Test the spellcheck passes in CI

### GitHub Actions Integration

The spellcheck action requires both:
- `task_name: markdown` parameter in the workflow
- Named task in `.spellcheck.yml` matching the task_name

**CRITICAL**: The GitHub Actions workflow must include the `task_name` parameter:

```yaml
- uses: rojopolis/spellcheck-github-actions@0.36.0
  with:
    task_name: markdown  # REQUIRED - matches task name in .spellcheck.yml
    source_files: |
      docs/_posts/**/*.md
      docs/_pages/**/*.md
      docs/_meetings/**/*.md
      docs/index.md
      README.md
      MARKDOWN.md
    config_path: .spellcheck.yml
```

**Error Resolution**: If you see "task_name must be specified to use source_files option", add the `task_name: markdown` parameter to your workflow step.

**Current Issue**: Based on the GitHub Actions log, your workflow is missing this parameter. Add the single line `task_name: markdown` to fix the spellcheck failure.

This ensures proper integration between the GitHub Action and pyspelling configuration.

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
