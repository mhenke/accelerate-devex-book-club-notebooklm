# Max-Width Audit Report

Generated: 2025-10-21

## Summary

This audit identifies all hardcoded `max-width` values that should use design tokens from `_tokens.scss` for consistency and maintainability.

## Design Tokens Available

From `docs/_sass/abstracts/_tokens.scss`:

```scss
--container-narrow: 600px;    // Short text, CTAs
--container-reading: 720px;   // Optimal reading width
--container-content: 900px;   // Content sections
--container-medium: 1000px;   // Medium containers
--desktop: 1200px;            // Max desktop width
```

## Issues Found

### Critical Issues (Inconsistent with Tokens)

#### 1. Hero Subtitle - 600px
**File:** `docs/_sass/components/_hero.scss:170`
```scss
.hero-subtitle {
  max-width: 600px; // ❌ Should use var(--container-narrow)
}
```
**Fix:** Change to `max-width: var(--container-narrow);`

---

#### 2. Grid Containers - 800px
**Files:**
- `docs/_sass/layout/_grid.scss:21`
- `docs/_sass/components/_sections.scss:520`
- `docs/_sass/components/_sections.scss:1377`

```scss
.container-grid {
  max-width: 800px; // ❌ No token for 800px
}
```

**Options:**
1. Use `--container-reading` (720px) - if for text content
2. Use `--container-content` (900px) - if for general content
3. Create new token `--container-standard: 800px;` if 800px is needed

---

#### 3. Section Containers - 900px
**File:** `docs/_sass/components/_sections.scss:2347`
```scss
.some-section {
  max-width: 900px; // ❌ Should use var(--container-content)
}
```
**Fix:** Change to `max-width: var(--container-content);`

---

#### 4. Large Containers - 1000px
**File:** `docs/_sass/components/_sections.scss:2278`
```scss
.large-container {
  max-width: 1000px; // ❌ Should use var(--container-medium)
}
```
**Fix:** Change to `max-width: var(--container-medium);`

---

#### 5. Desktop Containers - 1200px
**Files:**
- `docs/_sass/components/_sections.scss:1775`
- `docs/_sass/components/_sections.scss:2035`
- `docs/_sass/layout/_meeting.scss:196`

```scss
.desktop-container {
  max-width: 1200px; // ❌ Should use var(--desktop)
}
```
**Fix:** Change to `max-width: var(--desktop);`

---

#### 6. Wide Layout - 1400px
**File:** `docs/_sass/layout/_grid.scss:25`
```scss
.wide-layout {
  max-width: 1400px; // ⚠️ No token available
}
```

**Options:**
1. Add token: `--container-wide: 1400px;`
2. Reduce to `--desktop` (1200px)

---

### Minor Issues (Component-Specific)

These are acceptable as component-specific constraints but could benefit from tokens:

#### 7. Small Components
- `docs/_sass/base/_critical.scss:1942` - `max-width: 200px;` (icon/image)
- `docs/_sass/pages/_404.scss:111` - `max-width: 200px;` (404 icon)
- `docs/_sass/base/_critical.scss:1928` - `max-width: 220px;` (button/badge)
- `docs/_sass/pages/_offline.scss:66` - `max-width: 280px;` (offline icon)
- `docs/_sass/components/_sections.scss:1856` - `max-width: 300px;` (card element)
- `docs/_sass/pages/_404.scss:21` - `max-width: 420px;` (404 message)

**Recommendation:** These are fine as-is unless they're reused. Consider creating utility classes if patterns emerge.

---

### Media Query Issues

#### 8. Inconsistent Breakpoints
**File:** `docs/_sass/pages/_resources.scss:21,46`
```scss
@media (max-width: 768px) { // ❌ Should use $mobile variable
```

**Available breakpoints from tokens:**
```scss
$small: 480px;
$medium: 640px;
$mobile: 768px;
$tablet: 1024px;
$desktop: 1200px;
```

**Fix:** Change to `@media (max-width: #{$mobile - 1px}) {`

---

## Recommended Actions

### Phase 1: Critical Container Fixes (High Priority)

1. **Hero subtitle** - Use `--container-narrow`
2. **All 1200px containers** - Use `--desktop`
3. **900px sections** - Use `--container-content`
4. **1000px sections** - Use `--container-medium`

### Phase 2: Standardize 800px Usage (Medium Priority)

Decide if 800px should:
- Map to existing `--container-reading` (720px)
- Map to existing `--container-content` (900px)
- Get its own token `--container-standard: 800px;`

### Phase 3: Add Missing Tokens (Low Priority)

If 1400px is needed across multiple components:
```scss
:root {
  --container-wide: 1400px;
}
```

### Phase 4: Media Query Consistency (Maintenance)

Replace all hardcoded breakpoints with SCSS variables:
- `768px` → `$mobile`
- `1024px` → `$tablet`
- `1200px` → `$desktop`

---

## Implementation Priority

### Must Fix (Breaks Design System)
1. ✅ `_hero.scss:170` - 600px → `var(--container-narrow)`
2. ✅ `_sections.scss:2347` - 900px → `var(--container-content)`
3. ✅ `_sections.scss:2278` - 1000px → `var(--container-medium)`
4. ✅ `_sections.scss:1775,2035` + `_meeting.scss:196` - 1200px → `var(--desktop)`

### Should Fix (Consistency)
5. ⚠️ All 800px instances - Decide on token mapping
6. ⚠️ `_grid.scss:25` - 1400px → Add token or reduce to 1200px
7. ⚠️ Media queries - Use SCSS variables

### Can Keep (Component-Specific)
8. ℹ️ Small component widths (200-420px) - Fine as hardcoded

---

## Testing Checklist

After implementing fixes:

- [ ] Run `npm run build` - Ensure no SCSS errors
- [ ] Run `npm run validate` - Check all validations pass
- [ ] Visual test homepage hero section
- [ ] Visual test meeting pages layout
- [ ] Visual test sections and cards
- [ ] Test responsive behavior at all breakpoints
- [ ] Check that reading width feels comfortable
- [ ] Verify container hierarchy makes sense

---

## Notes

- The 600px in hero subtitle matches `--container-narrow` perfectly
- Multiple 1200px values suggest strong need for `--desktop` token
- The 800px pattern needs team decision on mapping
- Consider if 1400px is actually needed or if it's over-engineering
