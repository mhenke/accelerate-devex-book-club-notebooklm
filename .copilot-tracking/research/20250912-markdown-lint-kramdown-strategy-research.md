<!-- markdownlint-disable-file -->

# Task Research Notes: Markdown Linting (npm run lint:md) and Strategic Fixes with Kramdown or Rule Disabling

## Research Executed

### File Analysis

- .markdownlint.json
  - Used to configure markdownlint rules; can disable specific rules globally.
- docs/index.md
  - Example of Markdown/HTML hybrid content; typical for Jekyll/Kramdown sites.

### Code Search Results

- MD034/no-bare-urls
  - All current markdownlint errors are MD034, which flags bare URLs not wrapped in angle brackets or markdown link syntax.
- kramdown
  - Default parser for Jekyll; renders bare URLs as clickable links, but markdownlint prefers explicit link syntax for clarity and accessibility.

### External Research

- #fetch_webpage:"markdownlint MD034 documentation"
  - MD034 flags bare URLs; fix by wrapping in angle brackets or using markdown link syntax.
- #fetch_webpage:"Kramdown link syntax"
  - Kramdown supports both bare URLs and markdown links, but explicit links are preferred for accessibility.

### Project Conventions

- Standards referenced: Jekyll/Kramdown, markdownlint
- Instructions followed: markdown.instructions.md

## Key Discoveries

### Project Structure

- Jekyll with Kramdown is the default setup.
- Markdownlint is run before commits for quality assurance.
- Accessibility and structure rules are prioritized.

### Implementation Patterns

- All current errors are MD034/no-bare-urls. Strategic fixes should focus on converting bare URLs to markdown links or wrapping in angle brackets.
- Kramdown renders bare URLs as links, but markdownlint prefers explicit link syntax for accessibility.
- Markdownlint allows granular rule disabling, both globally and per file/block. MD034 can be disabled if bare URLs are intentional and documented.

### Complete Examples

```markdown
Bare URL (will trigger MD034):
https://example.com

Fixed with angle brackets:
<https://example.com>

Fixed with markdown link:
[Example](https://example.com)

Disable MD034 globally in .markdownlint.json:
{
"MD034": false
}
```

### API and Schema Documentation

- Kramdown: https://kramdown.gettalong.org/syntax.html
- markdownlint: https://github.com/DavidAnson/markdownlint

### Configuration Examples

```markdown
<!-- markdownlint-disable MD034 -->

https://example.com

<!-- markdownlint-enable MD034 -->
```

### Technical Requirements

- Fix all MD034/no-bare-urls violations by converting bare URLs to markdown links or wrapping in angle brackets.
- Optionally, disable MD034 globally or per file if bare URLs are intentional and documented.
- For Jekyll/Kramdown, it is safe to disable the following markdownlint rules:
  - MD013 (line length): Kramdown ignores line length.
  - MD022 (headings surrounded by blank lines): Kramdown is tolerant of heading spacing.
  - MD032 (lists surrounded by blank lines): Kramdown parses lists flexibly.
  - MD040 (fenced code blocks): Kramdown supports both indented and fenced code blocks.
  - MD046 (code block style): Kramdown supports both triple backticks and tildes.
- Document exceptions for future contributors.

## Recommended Approach

- Fix all MD034/no-bare-urls errors by updating bare URLs to markdown links or angle brackets.
- Optionally, disable MD034, MD013, MD022, MD032, MD040, and MD046 in .markdownlint.json or per file if project style and Kramdown compatibility allow.
- Document all rule exceptions for future contributors.

## Implementation Guidance

- **Objectives**: Ensure Markdown files are linted for critical issues, with all MD034 errors resolved or intentionally disabled. Apply best practices for Jekyll/Kramdown markdown.
- **Key Tasks**:
  - Update all bare URLs to markdown links or wrap in angle brackets.
  - Optionally, disable MD034, MD013, MD022, MD032, MD040, and MD046 globally or per file if project style and Kramdown compatibility allow.
  - Document all rule exceptions for future contributors.
  - Follow Jekyll/Kramdown markdown best practices:
    - Use semantic headings and maintain a logical heading hierarchy.
    - Prefer fenced code blocks with language specifiers for syntax highlighting.
    - Use explicit markdown links for accessibility and clarity.
    - Use blank lines for readability, but Kramdown is tolerant of spacing.
    - Avoid excessive line length only for readability; Kramdown does not enforce limits.
- **Dependencies**: markdownlint, Jekyll/Kramdown configuration.
- **Success Criteria**: npm run lint:md passes with no critical errors, or rules are intentionally disabled and documented. Markdown is readable, accessible, and compatible with Jekyll/Kramdown.
