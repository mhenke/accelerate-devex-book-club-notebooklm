<!-- <research-template> -->

````markdown
<!-- markdownlint-disable-file -->

# Task Research Notes: CSS standardization for meeting pages

## Research Executed

### File Analysis

- `docs/_sass/abstracts/_tokens.scss`
  - Found: comprehensive SCSS tokens (colors, typography, spacing, shadows) and matching CSS custom properties declared on `:root` (for example `--meeting-1-primary`, `--meeting-2-primary`, `--text-dark`, `--space-md`, etc.). These are the canonical design tokens to reuse.
- `docs/_sass/components/_meeting-content.scss`
  - Found: many component rules referencing runtime variables like `--meeting-primary`, `--meeting-bg`, `--meeting-light`, `--meeting-hover`, `--meeting-border` but those runtime names are not declared globally in `_tokens.scss` (tokens use `--meeting-1-primary` etc.). This indicates per-page/theme variables are expected to be set on page containers.
  - Observed patterns: heavy use of gradients, `!important` on many rules, `display:flex` for headings to accommodate inline `<i>` icons, and component rules that already style `<i>` descendants.
- `docs/_meetings/*.md` and `docs/resources.md`
  - Found: pervasive inline icon markup using Font Awesome, e.g. `<i class="fas fa-times-circle"></i>`, and many `<h3>`/`<h4>` with embedded `<i>` elements. Markup is consistent but repetitive.

### Code Search Results

- `fas fa-` (Font Awesome classes)
  - actual matches: many headings, list items and buttons across `docs/_meetings/*.md`, `docs/resources.md`, and generated `_jekyll-cache` HTML. The repository consistently uses Font Awesome inline classes rather than pseudo-element insertion.
- `style="` (inline styles present)
  - actual matches: generated artifacts and some vendor outputs contain inline styles (examples in `.lighthouseci/*`, and some third-party generated HTML). Source templates contain a few inline style attributes to be replaced.
- SCSS tokens and variables
  - `_tokens.scss` contains token map and per-meeting color tokens like `$meeting-1-primary` and `--meeting-1-primary` CSS properties.

### External Research

- #githubRepo:"mhenke/accelerate-devex-book-club-notebooklm fa icon usage"
  - Observed pattern: repository uses Font Awesome inline `<i>` tags; headings and buttons expect icons to be inline.
- #fetch:https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
  - Key information: declare global tokens on `:root` when values should be widely available; `var()` fallbacks; `@property` for typed/custom initial values; variables inherit by default. Best-practice: centralize design tokens and map scoped runtime variables for theming.
- #fetch:https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
  - Key information: Font Awesome recommends inline elements (`<i>` or `<span>`) for icons; pseudo-elements are supported but inline markup is simpler for accessibility and maintainability. When using SVG+JS the DOM may be replaced so CSS selectors should target the right element.

### Project Conventions

- Standards referenced: SCSS partials in `docs/_sass/` (abstracts, components, main.scss). Tokens are defined in `_tokens.scss` and exported as CSS custom properties on `:root`.
- Instructions followed: prefer reuse of tokens and keep per-meeting theme variables set at page scope.

## Key Discoveries

### Project Structure

The project already has a robust token system in `docs/_sass/abstracts/_tokens.scss`. Meeting content styles live in `docs/_sass/components/_meeting-content.scss` and expect runtime `--meeting-*` variables. Meeting pages (`docs/_meetings/*.md`) consistently include inline `<i class="fas fa-...">` icons.

### Implementation Patterns

- Authors use inline `<i>` icons consistently; headings and buttons are laid out with `display:flex` and `gap` to accommodate those icons.
- `_meeting-content.scss` expects `--meeting-primary`, `--meeting-bg`, etc. To avoid duplication, create small mapping utility classes like `.meeting-theme--1` that set these runtime variables using `--meeting-1-primary` tokens from `_tokens.scss`.
- Inline `style="..."` occurrences exist in generated artifacts and some source files; remove or replace where possible to keep CSS centralized.

### Complete Examples

```scss
/* Map token names to runtime variables expected by meeting components */
.meeting-theme--1 {
  --meeting-primary: var(--meeting-1-primary);
  --meeting-secondary: var(--meeting-1-secondary);
  --meeting-bg: var(--background-light);
  --meeting-light: rgba(255, 255, 255, 0.6);
  --meeting-hover: var(--hover-coral);
  --meeting-border: var(--border-light);
}

/* Icon utility */
.icon {
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
  margin-right: var(--space-sm);
  color: currentColor; /* inheritable */
}

/* Headings that contain icons should align consistently */
.meeting-content h3,
.meeting-content h4,
.meeting-content h2 {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}
```

### API and Schema Documentation

Not applicable (CSS-only). Font Awesome usage notes: use `<i>` or `<span>` with Font Awesome classes; add `aria-hidden="true"` for decorative icons or provide screen-reader text when icon conveys meaning.

### Configuration Examples

```scss
/* Add utility meeting-theme classes to a component partial and import in main.scss */
.meeting-theme--2 {
  --meeting-primary: var(--meeting-2-primary);
  --meeting-secondary: var(--meeting-2-secondary);
  --meeting-bg: var(--background-light);
  --meeting-light: rgba(255, 255, 255, 0.6);
  --meeting-hover: var(--hover-teal);
  --meeting-border: var(--border-light);
}
```

### Technical Requirements

- Keep the Font Awesome asset available (CDN or local). If switching to SVG framework, update selectors accordingly.
- Add two new SCSS partials (icons + meeting themes) and import them into `docs/_sass/main.scss`.
- Migrate inline styles in source files to classes; hold off on generated third-party inline styles until plugin/config options are assessed.

## Recommended Approach

Single selected approach: Markup-first, token-driven standardization.

- Continue using inline Font Awesome `<i>` elements (authors already do this and Font Awesome recommends it).
- Add a single `.icon` utility class and small modifiers for size. Require authors to add `class="icon fas fa-..."` to icon elements. This centralizes spacing, color and accessibility.
- Implement `.meeting-theme--N` classes that map token values (`--meeting-N-primary`) to runtime variables expected by `_meeting-content.scss` (`--meeting-primary`, `--meeting-bg`, etc.). Apply one theme class on the meeting page container.
- Remove inline `style="..."` across source markdown/templates and replace with classes and variables.

Advantages:

- Minimal markup change; low-risk.
- Centralized styling and consistency across meeting pages.
- Leverages existing token system in `_tokens.scss`.

## Implementation Guidance

- **Objectives**: Use existing tokens; remove inline styles; centralize icon styling and meeting theme mapping; keep solution simple and maintainable.
- **Key Tasks**:
  1. Add `docs/_sass/components/_icons.scss` with `.icon`, `.icon--sm`, `.icon--lg` utilities and heading alignment rules.
  2. Add `docs/_sass/components/_meeting-themes.scss` with `.meeting-theme--1`..`--4` mappings to runtime `--meeting-*` variables.
  3. Import these partials in `docs/_sass/main.scss`.
  4. Update meeting markdown files to ensure each icon `<i>` has the `icon` class (scriptable; dry-run first).
  5. Search/replace inline `style="..."` in source files and move styles to SCSS components.
  6. Remove unnecessary `!important` rules in `_meeting-content.scss` when cascade suffices.
  7. Run Jekyll build and HTML/CSS validation.
- **Dependencies**: Font Awesome (existing), `_tokens.scss` (existing), Jekyll/Sass toolchain (existing).
- **Success Criteria**:
  - Source files no longer contain inline `style` attributes (or very few justified exceptions).
  - Meeting pages apply the correct theme when the appropriate `.meeting-theme--N` class is present.
  - Icons use the `.icon` utility consistently.
  - `bundle exec jekyll build` succeeds and HTML validation does not regress.
````

<!-- </research-template> -->
