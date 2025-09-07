<!-- markdownlint-disable-file -->

# CSS Technical Debt Remediation Plan

## Prioritized Issues

| Priority | Issue                                        | Impact | Effort |
| -------- | -------------------------------------------- | ------ | ------ |
| High     | Duplicated styles (e.g., metric-icon, cards) | High   | Medium |
| High     | Lack of modularization (monolithic files)    | High   | High   |
| High     | Inconsistent variable usage                  | High   | Medium |
| Medium   | Nested selectors/specificity issues          | Medium | Medium |
| Medium   | No documented naming convention              | Medium | Low    |
| Medium   | Responsive/print styles not separated        | Medium | Medium |
| Low      | Utility/design tokens not used everywhere    | Low    | Low    |

## Recommended Refactoring Strategies

1. **Modularization**

   - Split main.scss and large partials into smaller, component-focused SCSS files (e.g., metrics, cards, navigation).
   - Use Jekyll includes for reusable blocks and markup.
   - Move design tokens and utility classes to dedicated partials.

2. **Variable Standardization**

   - Expand and consistently use CSS custom properties in `:root` for all colors, spacing, borders, etc.
   - Refactor all hardcoded values to use variables.
   - Document variable usage and naming conventions.

3. **Duplication Removal**

   - Audit and remove duplicated styles (e.g., metric-icon, meeting-card) across all files.
   - Centralize common styles in shared partials.

4. **Naming Convention Adoption**

   - Choose and document a CSS architecture (BEM, OOCSS, or SMACSS).
   - Refactor selectors to follow the chosen convention.

5. **Selector Simplification**

   - Refactor deeply nested selectors to reduce specificity and improve maintainability.
   - Flatten selector hierarchy where possible.

6. **Accessibility & Performance**

   - Validate all changes against WCAG 2.2 AA standards.
   - Minify CSS and remove unused rules.
   - Test with Lighthouse and Accessibility Insights.

7. **Documentation**
   - Create a CSS architecture and refactoring guide for contributors.
   - Document reusable blocks, variable usage, and naming conventions.

## Dependencies & Blockers

- **Font Awesome**: Required for standardized icon usage.
- **Jekyll Includes**: Needed for reusable blocks.
- **CSS/HTML Linters**: For validation and enforcement of standards.
- **Accessibility/Performance Tools**: Lighthouse, Accessibility Insights, etc.
- **Team Alignment**: Agreement on naming conventions and architecture.
- **Documentation**: Must be created and maintained for new standards.

## Next Steps

- Team review and agreement on remediation plan.
- Begin modularization and variable standardization.
- Audit and refactor duplicated styles.
- Document conventions and update contributor guides.
