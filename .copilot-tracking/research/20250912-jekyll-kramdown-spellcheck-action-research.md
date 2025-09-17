<!-- markdownlint-disable-file -->

# Task Research Notes: Jekyll/Kramdown Spellcheck Action & Workflow Integration

## Research Executed

### File Analysis

- .spellcheck.yml
  - Used to configure pyspelling tasks for spellcheck in markdown files.
- .github/workflows/spellcheck.yml (recommended location)
  - GitHub Actions workflow for running rojopolis/spellcheck-github-actions.

### Code Search Results

- Jekyll markdown file patterns: docs/\_posts/**/\*.md, docs/\_pages/**/_.md, docs/\_meetings/\*\*/_.md, docs/index.md, README.md
- No existing spellcheck workflow found; recommend adding one.

### External Research

- #githubRepo:"rojopolis/spellcheck-github-actions jekyll kramdown"
  - Example workflows require task_name when using source_files.
- #fetch:https://github.com/rojopolis/spellcheck-github-actions
  - Usage: task_name is required with source_files.
- #fetch:https://github.com/rojopolis/pyspelling
  - .spellcheck.yml must define tasks with name and sources.

### Project Conventions

- Standards referenced: Jekyll/Kramdown, pyspelling, GitHub Actions
- Instructions followed: markdown.instructions.md, github-actions-ci-cd-best-practices.instructions.md

## Key Discoveries

### Project Structure

- Jekyll/Kramdown markdown files are organized in docs/\_posts, docs/\_pages, docs/\_meetings, docs/index.md, README.md.
- Spellcheck should be run on all markdown content for quality assurance.

### Implementation Patterns

- rojopolis/spellcheck-github-actions integrates with pyspelling and requires task_name when using source_files.
- .spellcheck.yml should define a markdown task with all relevant sources.
- Workflow should run on push and pull_request for CI coverage.

### Complete Examples

```yaml
# .github/workflows/spellcheck.yml
name: Spellcheck
on:
  push:
    paths:
      - "**/*.md"
  pull_request:
    paths:
      - "**/*.md"
jobs:
  spellcheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Spellcheck
        uses: rojopolis/spellcheck-github-actions@0.36.0
        with:
          task_name: markdown
          source_files: |
            docs/_posts/**/*.md
            docs/_pages/**/*.md
            docs/_meetings/**/*.md
            docs/index.md
            README.md
          config_path: .spellcheck.yml
```

```yaml
# .spellcheck.yml
---
tasks:
  - name: markdown
    sources:
      - docs/_posts/**/*.md
      - docs/_pages/**/*.md
      - docs/_meetings/**/*.md
      - docs/index.md
      - README.md
    dictionaries:
      - en_US
    # Optionally add custom words or ignore patterns
    # ignore:
    #   - "docs/vendor/**"
```

### API and Schema Documentation

- rojopolis/spellcheck-github-actions: https://github.com/rojopolis/spellcheck-github-actions
- pyspelling: https://github.com/rojopolis/pyspelling

### Configuration Examples

- See above for sample workflow and .spellcheck.yml

### Technical Requirements

- Always specify task_name when using source_files in the action.
- .spellcheck.yml must define a markdown task with all relevant sources.
- Document any custom dictionaries or ignore patterns for contributors.

## Recommended Approach

- Add a dedicated spellcheck workflow in .github/workflows/spellcheck.yml.
- Configure .spellcheck.yml with a markdown task covering all Jekyll/Kramdown markdown sources.
- Document configuration and exceptions for future contributors.

## Implementation Guidance

- **Objectives**: Ensure all markdown files are spellchecked in CI for quality and accessibility.
- **Key Tasks**:
  - Add spellcheck workflow to .github/workflows/spellcheck.yml.
  - Update .spellcheck.yml with markdown sources and dictionaries.
  - Document configuration and any exceptions.
- **Dependencies**: rojopolis/spellcheck-github-actions, pyspelling, Jekyll/Kramdown markdown files.
- **Success Criteria**: Spellcheck passes for all markdown files, with documented configuration and exceptions.
