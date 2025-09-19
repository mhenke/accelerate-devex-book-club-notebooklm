---
goal: Fix HTML Void Element Linting Warnings in Jekyll Templates
version: 1.0
date_created: 2025-09-04
last_updated: 2025-09-04
owner: Development Team
status: 'Planned'
tags: ['chore', 'linting', 'html5', 'jekyll', 'templates']
---

# Fix HTML Void Element Linting Warnings in Jekyll Templates

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

This implementation plan addresses 620+ HTML validation warnings caused by XHTML-style self-closing void elements in Jekyll templates. The plan converts all void elements to HTML5-compliant syntax by removing trailing slashes, ensuring consistency with modern web standards and eliminating linter warnings.

## 1. Requirements & Constraints

- **REQ-001**: Convert all XHTML-style void elements (`<meta />`) to HTML5 syntax (`<meta>`)
- **REQ-002**: Maintain full site functionality and layout integrity
- **REQ-003**: Eliminate all void-style HTML validation warnings
- **REQ-004**: Ensure consistent void element syntax across all templates
- **SEC-001**: No security implications - purely syntactic changes
- **CON-001**: Changes must be applied to Jekyll source templates, not generated files
- **CON-002**: Jekyll build process must continue to work without modifications
- **GUD-001**: Follow HTML5 standard recommendations for void elements
- **GUD-002**: Maintain existing Jekyll templating functionality
- **PAT-001**: Use systematic approach to identify and update all void elements

## 2. Implementation Steps

### Implementation Phase 1

- GOAL-001: Update primary Jekyll layout template with HTML5-compliant void elements

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-001 | Analyze `docs/_layouts/default.html` for all void element instances | | |
| TASK-002 | Convert all `<meta ... />` tags to `<meta ...>` syntax | | |
| TASK-003 | Convert all `<link ... />` tags to `<link ...>` syntax | | |
| TASK-004 | Remove trailing whitespace from affected lines | | |
| TASK-005 | Verify Jekyll build process continues to work | | |

### Implementation Phase 2

- GOAL-002: Update additional Jekyll templates and includes

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-006 | Scan `docs/_layouts/meeting.html` for void elements | | |
| TASK-007 | Scan `docs/_includes/` directory for void elements | | |
| TASK-008 | Update any additional void elements found | | |
| TASK-009 | Clean up trailing whitespace in all template files | | |

### Implementation Phase 3

- GOAL-003: Validate fixes and ensure comprehensive coverage

| Task | Description | Completed | Date |
|------|-------------|-----------|------|
| TASK-010 | Run Jekyll build to generate updated site | | |
| TASK-011 | Execute HTML validation tests | | |
| TASK-012 | Verify zero void-style warnings remain | | |
| TASK-013 | Check for any duplicate ID or other remaining warnings | | |
| TASK-014 | Document changes and update any relevant documentation | | |

## 3. Alternatives

- **ALT-001**: Configure html-validate to allow XHTML-style syntax - Rejected because HTML5 standard recommends omitted end tags
- **ALT-002**: Disable void-style rule entirely - Rejected because it removes valuable validation
- **ALT-003**: Use mixed syntax (some files XHTML, some HTML5) - Rejected due to inconsistency

## 4. Dependencies

- **DEP-001**: Jekyll build system must remain functional
- **DEP-002**: html-validate linting tool (already installed v8.7.4)
- **DEP-003**: No additional external dependencies required

## 5. Files

- **FILE-001**: `docs/_layouts/default.html` - Primary layout template containing most void elements
- **FILE-002**: `docs/_layouts/meeting.html` - Meeting-specific layout template
- **FILE-003**: `docs/_includes/*.html` - Include files that may contain void elements
- **FILE-004**: Any additional template files discovered during scanning

## 6. Testing

- **TEST-001**: Jekyll build process completes successfully without errors
- **TEST-002**: Generated HTML files display correctly in browsers
- **TEST-003**: HTML validation passes with zero void-style warnings
- **TEST-004**: All existing functionality remains intact (navigation, styling, etc.)
- **TEST-005**: Mobile responsiveness maintained
- **TEST-006**: Progressive Web App manifest loading continues to work

## 7. Risks & Assumptions

- **RISK-001**: Minimal risk - void element syntax change is purely cosmetic in modern browsers
- **RISK-002**: Jekyll build process could theoretically be sensitive to syntax changes (very low probability)
- **ASSUMPTION-001**: HTML5 void element syntax is supported by all target browsers
- **ASSUMPTION-002**: Jekyll templates are the source of the void element warnings
- **ASSUMPTION-003**: No custom CSS or JavaScript depends on specific void element syntax

## 8. Related Specifications / Further Reading

[HTML5 Specification - Void Elements](https://www.w3.org/TR/html5/syntax.html#void-elements)
[html-validate Documentation - void-style Rule](https://html-validate.org/rules/void-style.html)
[Jekyll Documentation - Templates](https://jekyllrb.com/docs/templates/)
[PROCESS_REVIEW_SUMMARY.md - CI/CD Pipeline Improvements](spec/PROCESS_REVIEW_SUMMARY.md)
