<!-- markdownlint-disable-file -->
# Task Details: CSS Standardization & Reusable Blocks

## Research Reference
**Source Research**: #file:../research/20250906-css-standardization-research.md

## Phase 1: Audit & Inventory

### Task 1.1: Audit all CSS, inline styles, and duplicated blocks
- Review all HTML, Markdown, and SCSS files for inline styles and duplicated block patterns
- Document locations and types of inline styles and duplicated blocks
- **Files**:
  - docs/_meetings/ - Meeting pages with duplicated blocks
  - docs/assets/main.scss - Inline style replacements
- **Success**:
  - Comprehensive list of all inline styles and duplicated blocks
- **Research References**:
  - #file:../research/20250906-css-standardization-research.md (Lines 10-30) - Audit methodology
- **Dependencies**:
  - None

### Task 1.2: Inventory existing variables and reusable classes
- List all CSS/SCSS variables and reusable classes in main.scss
- Identify opportunities to extend or reuse variables
- **Files**:
  - docs/assets/main.scss - Source of variables/classes
- **Success**:
  - Inventory of all variables and reusable classes
- **Research References**:
  - #file:../research/20250906-css-standardization-research.md (Lines 31-50) - Variable/class inventory
- **Dependencies**:
  - Task 1.1 completion

## Phase 2: Refactor & Standardize

### Task 2.1: Remove inline styles and replace with standardized classes
- Refactor all inline styles to use standardized classes and variables
- **Files**:
  - docs/_meetings/ - Remove inline styles
  - docs/assets/main.scss - Add/extend classes
- **Success**:
  - No inline styles remain
- **Research References**:
  - #file:../research/20250906-css-standardization-research.md (Lines 51-70) - Refactor patterns
- **Dependencies**:
  - Phase 1 completion

### Task 2.2: Refactor duplicated blocks into reusable classes/partials
- Extract common meeting page blocks into reusable classes or Jekyll partials
- Update all meeting pages to use these blocks
- **Files**:
  - docs/_layouts/meeting.html - Add reusable blocks
  - docs/_meetings/ - Update to use blocks
  - docs/assets/main.scss - Add block styles
- **Success**:
  - All meeting pages use reusable blocks
- **Research References**:
  - #file:../research/20250906-css-standardization-research.md (Lines 71-90) - Block refactor
- **Dependencies**:
  - Task 2.1 completion

### Task 2.3: Standardize icon usage (CSS pseudo-elements or single pattern)
- Choose a single icon pattern (prefer CSS pseudo-elements for accessibility)
- Refactor all icon usage to follow this pattern
- **Files**:
  - docs/assets/main.scss - Icon classes
  - docs/_meetings/ - Update icon usage
- **Success**:
  - All icons use the standardized pattern
- **Research References**:
  - #file:../research/20250906-css-standardization-research.md (Lines 91-110) - Icon standardization
- **Dependencies**:
  - Task 2.2 completion

## Phase 3: Documentation & Testing

### Task 3.1: Update documentation for new CSS standards and blocks
- Document new CSS variables, classes, and reusable blocks
- Update README and relevant guides
- **Files**:
  - README.md - CSS standards section
  - docs/assets/main.scss - Inline documentation
- **Success**:
  - Documentation is clear and up to date
- **Research References**:
  - #file:../research/20250906-css-standardization-research.md (Lines 111-130) - Documentation patterns
- **Dependencies**:
  - Phase 2 completion

### Task 3.2: Run linting, accessibility, and visual regression tests
- Run `npm run lint:css`, `npm run lint:md`, and Playwright visual regression tests
- Validate accessibility with Accessibility Insights
- **Files**:
  - All affected files
- **Success**:
  - All tests pass, accessibility validated
- **Research References**:
  - #file:../research/20250906-css-standardization-research.md (Lines 131-150) - Testing methodology
- **Dependencies**:
  - Task 3.1 completion

## Dependencies
- Jekyll, SCSS, Markdownlint, Stylelint, Playwright

## Success Criteria
- All inline styles removed
- CSS variables and reusable blocks used throughout
- Consistent icon usage
- No duplicated patterns in meeting pages
- Documentation updated
- All tests pass
