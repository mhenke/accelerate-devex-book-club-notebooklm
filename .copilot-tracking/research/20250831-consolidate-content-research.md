<!-- markdownlint-disable-file -->

# Research: Consolidate Duplicate Content into Shared Includes/Data Files

## Tool Usage Documentation

- Duplicate questions and action items found in multiple meeting guides and Markdown files.
- Jekyll supports includes and data files for shared content.

## Code Examples & Specifications

- Example of Jekyll include:
  ```liquid
  {% include question.html question="What is DevOps?" %}
  ```
- Example of Jekyll data file:
  ```yaml
  questions:
    - What is DevOps?
    - How do you measure success?
  ```
- Best practice: Move shared content to `_includes/` or `_data/` and reference in Markdown.

## Project Structure Analysis

- Meeting guides: `docs/_meetings/meeting-*.md`, `resources/meetings/meeting-*/meeting.md`
- Jekyll includes: `docs/_includes/` (to be created if missing)
- Jekyll data: `docs/_data/` (to be created if missing)

## External Source Research

- [Jekyll Docs: Includes](https://jekyllrb.com/docs/includes/)
- [Jekyll Docs: Data Files](https://jekyllrb.com/docs/datafiles/)

## Implementation Guidance

- Identify duplicate content across meeting guides.
- Move shared items to includes/data files.
- Reference shared content in Markdown using Jekyll syntax.
