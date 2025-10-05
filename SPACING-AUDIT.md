# Spacing Audit & Standardization Plan

**Date:** 2025-10-05  
**Issue:** Inconsistent padding and margins across the site causing visual chaos

## Executive Summary

The site has **300+ different padding/margin declarations** with no clear pattern. This creates:

- Visual inconsistency across pages
- Difficult maintenance
- Unpredictable spacing behavior
- Hard-to-debug layout issues

## Current Spacing Token Usage

### Space Tokens (8px grid system)

- `--space-xs`: 0.25rem (4px)
- `--space-sm`: 0.5rem (8px)
- `--space-md`: 1rem (16px)
- `--space-lg`: 1.5rem (24px)
- `--space-xl`: 2rem (32px)
- `--space-2xl`: 3rem (48px)
- `--space-3xl`: 4rem (64px)

### Spacing Tokens (Legacy - should be migrated)

- `--spacing-sm`, `--spacing-md`, `--spacing-lg`, `--spacing-xl`, `--spacing-2xl`, `--spacing-3xl`

## Problem Areas

### 1. **Heading Margins** (HIGHEST PRIORITY)

**Current State:** Chaotic

```scss
// From _meeting.scss
h2 {
  margin: var(--space-xl) 0 var(--space-md) 0;
} // 32px 0 16px 0
h2 {
  margin: var(--space-lg) 0 var(--space-md) 0;
} // 24px 0 16px 0

// From _sections.scss
h2 {
  margin: 0 0 var(--space-sm);
} // 0 0 8px
h2 {
  margin: 0 0 var(--space-xs) 0;
} // 0 0 4px 0

// From _mixins.scss
h1 {
  margin: var(--space-xl) 0 var(--space-lg) 0;
} // 32px 0 24px 0
h2 {
  margin: var(--space-lg) 0 var(--space-md) 0;
} // 24px 0 16px 0
```

**Recommended Standard:**

```scss
h1 {
  margin: var(--space-2xl) 0 var(--space-lg) 0;
} // 48px 0 24px 0
h2 {
  margin: var(--space-xl) 0 var(--space-md) 0;
} // 32px 0 16px 0
h3 {
  margin: var(--space-lg) 0 var(--space-sm) 0;
} // 24px 0 8px 0
h4 {
  margin: var(--space-md) 0 var(--space-sm) 0;
} // 16px 0 8px 0
h5 {
  margin: var(--space-md) 0 var(--space-xs) 0;
} // 16px 0 4px 0
h6 {
  margin: var(--space-sm) 0 var(--space-xs) 0;
} // 8px 0 4px 0
```

### 2. **Section Card Padding**

**Current State:** Inconsistent

```scss
.section-card {
  padding: var(--space-sm);
} // 8px
.section-card {
  padding: var(--space-md);
} // 16px
.section-card {
  padding: var(--space-lg);
} // 24px
.section-card {
  padding: var(--space-xl);
} // 32px
.section-card {
  padding: var(--space-2xl) var(--space-xl);
} // 48px 32px
```

**Recommended Standard:**

```scss
// Base section card
.section-card {
  padding: var(--space-xl); // 32px uniform
  margin: var(--space-lg) 0; // 24px top/bottom
}

// Compact variant
.section-card.compact {
  padding: var(--space-lg); // 24px
}

// Dark theme (needs more breathing room)
.section-card.dark-theme {
  padding: var(--space-2xl) var(--space-xl); // 48px 32px
}
```

### 3. **Content Containers**

**Current State:** All over the map

```scss
.meeting-container {
  margin: 0 auto;
  padding: 0 var(--space-md);
}
.meeting-container {
  padding: var(--space-md) 0;
}
.meeting-container {
  padding: var(--space-lg) 0;
}
.content {
  padding: var(--space-xl);
}
.content {
  padding: var(--space-md) var(--space-lg);
}
```

**Recommended Standard:**

```scss
// Main containers
.meeting-container,
.page-content {
  margin: 0 auto;
  padding: 0 var(--space-lg); // 24px horizontal
  max-width: 1200px;
}

// Content sections within containers
.meeting-content {
  padding: var(--space-xl) 0; // 32px vertical spacing
}
```

### 4. **Buttons**

**Current State:** Mixed

```scss
button {
  padding: var(--space-md) var(--space-lg);
} // 16px 24px
button {
  padding: var(--space-sm) var(--space-md);
} // 8px 16px
button {
  padding: 16px 32px;
} // Hardcoded!
button {
  padding: 8px 16px;
} // Hardcoded!
```

**Recommended Standard:**

```scss
// Primary/large buttons
.btn {
  padding: var(--space-md) var(--space-xl); // 16px 32px
}

// Secondary/medium buttons
.btn-secondary {
  padding: var(--space-sm) var(--space-lg); // 8px 24px
}

// Small/compact buttons
.btn-small {
  padding: var(--space-sm) var(--space-md); // 8px 16px
}
```

### 5. **Lists**

**Current State:** Inconsistent

```scss
ul,
ol {
  margin: var(--space-md) 0;
}
ul,
ol {
  margin: var(--space-lg) 0;
}
ul,
ol {
  margin: 1rem 0;
} // Hardcoded!
li {
  margin: var(--space-sm) 0;
}
li {
  margin: var(--space-xs) 0;
}
```

**Recommended Standard:**

```scss
ul,
ol {
  margin: var(--space-md) 0; // 16px vertical
  padding-left: var(--space-xl); // 32px indent

  li {
    margin-bottom: var(--space-sm); // 8px between items
    line-height: var(--line-height-relaxed);
  }
}
```

### 6. **Hardcoded Values** (MUST FIX)

Found **25+ hardcoded spacing values** that bypass the design system:

```scss
// BAD - Hardcoded pixels
padding: 1rem 0; // Should be: var(--space-md) 0
padding: 8px 16px; // Should be: var(--space-sm) var(--space-md)
margin: 1.5rem 0; // Should be: var(--space-lg) 0
padding: 0.75rem; // Should be: var(--space-sm) + custom if needed
margin: 2px; // Should be: 0 or var(--space-xs)
```

## Recommended Standardization Plan

### Phase 1: Heading Standardization (DONE ✅)

- [x] Standardized h1-h6 font sizes
- [x] Fixed dark-theme heading hierarchy
- [x] Meeting page h2-h4 updates
- [ ] **TODO:** Standardize ALL heading margins across site

### Phase 2: Section Card Padding (HIGH PRIORITY)

- [ ] Audit all `.section-card` instances
- [ ] Create 3 variants: default, compact, dark-theme
- [ ] Replace all custom padding with variants

### Phase 3: Container Spacing

- [ ] Standardize `.meeting-container` padding
- [ ] Standardize `.page-content` padding
- [ ] Fix all hardcoded container margins

### Phase 4: Component Spacing

- [ ] Button padding standardization
- [ ] List margin/padding standardization
- [ ] Card padding standardization
- [ ] Form element spacing

### Phase 5: Cleanup

- [ ] Remove all hardcoded pixel/rem values
- [ ] Migrate `--spacing-*` to `--space-*`
- [ ] Remove duplicate spacing rules
- [ ] Document spacing standards in style guide

## Files Requiring Major Updates

### Critical Files (Most Impact)

1. `_sass/base/_critical.scss` - 150+ spacing declarations
2. `_sass/components/_sections.scss` - 100+ spacing declarations
3. `_sass/layout/_meeting.scss` - 50+ spacing declarations
4. `_sass/abstracts/_mixins.scss` - Heading margin mixins

### Secondary Files

5. `_sass/components/_buttons.scss`
6. `_sass/components/_cards.scss`
7. `_sass/components/_meeting-content.scss`
8. `_sass/layout/_grid.scss`
9. `_sass/layout/_header.scss`

## Spacing Usage Statistics

**Total padding/margin declarations:** 300+

**Breakdown by token:**

- `var(--space-sm)`: 80 instances (8px)
- `var(--space-md)`: 120 instances (16px)
- `var(--space-lg)`: 90 instances (24px)
- `var(--space-xl)`: 50 instances (32px)
- `var(--space-2xl)`: 20 instances (48px)
- `var(--space-3xl)`: 10 instances (64px)
- Hardcoded values: 25+ instances ⚠️

**Legacy spacing tokens:** 15 instances (need migration)

## Impact Analysis

### Visual Impact

- **High:** Headings, section cards, containers
- **Medium:** Buttons, lists, forms
- **Low:** Inline components, small utilities

### Maintenance Impact

- **High:** Every developer must memorize 6 different section card paddings
- **High:** Inconsistent spacing makes debugging layout issues difficult
- **Medium:** Hard to enforce spacing standards in code reviews

## Next Steps

1. **Immediate:** Create standardized heading margin mixin (DONE ✅)
2. **This Week:** Audit and fix all section card padding
3. **This Week:** Replace all hardcoded spacing values
4. **Next Sprint:** Create spacing utilities documentation
5. **Next Sprint:** Add linting rules to prevent hardcoded spacing

## Questions for Team

1. Should we enforce ALL spacing to be 8px multiples?
2. Do we need `.section-card.compact` variant or just default?
3. Should dark-theme sections always have extra padding?
4. Should we create spacing utility classes (e.g., `.p-lg`, `.m-md`)?

---

**Status:** 🔴 Critical - Site has inconsistent visual rhythm  
**Priority:** High - Impacts user experience and developer velocity  
**Owner:** Design System Team  
**Next Review:** After Phase 2 completion
