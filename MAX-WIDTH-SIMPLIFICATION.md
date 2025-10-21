# Max-Width Simplification Plan

## Problem

We have too many container width tokens when media queries should handle responsiveness:

```scss
// Current - TOO MANY
--container-narrow: 600px;
--container-reading: 720px;
--container-content: 900px;
--container-medium: 1000px;
--desktop: 1200px;
```

## Solution: Single Max-Width + Media Queries

### Proposed Simple System

```scss
// One content max-width
--content-max-width: 1200px;  // Maximum content width

// Let media queries handle the rest
$mobile: 768px;
$tablet: 1024px;
$desktop: 1200px;
```

## Implementation Plan

### Step 1: Remove Unused Container Tokens

From `_tokens.scss`, keep only:
```scss
:root {
  --content-max-width: 1200px;  // Single max width for content
}
```

### Step 2: Replace All Hardcoded max-width Values

Replace these patterns:

```scss
// ❌ OLD
.hero-subtitle {
  max-width: 600px;
}

.section {
  max-width: 800px;
}

.container {
  max-width: 1200px;
}

// ✅ NEW - Use 100% with padding and media queries
.hero-subtitle {
  max-width: 100%;
  padding: 0 var(--space-lg);
  
  @media (min-width: #{$tablet}) {
    max-width: 600px;  // Only if truly needed for readability
  }
}

.section {
  max-width: 100%;
  padding: 0 var(--space-lg);
  margin: 0 auto;
}

.container {
  max-width: var(--content-max-width);
  padding: 0 var(--space-lg);
  margin: 0 auto;
}
```

## What We Actually Need

### Analysis of Current Usage

**Only 6 uses** of container tokens found:
1. `_hero.scss` - hero subtitle width
2. `_critical.scss` (5 instances) - various content containers

### Recommended Approach

**Option A: Single Token (Simplest)**
```scss
:root {
  --content-max-width: 1200px;
}
```

- Everything uses 100% width with responsive padding
- Only apply `--content-max-width` to main containers
- Use media queries for narrower widths when needed

**Option B: Keep Just Two (Pragmatic)**
```scss
:root {
  --content-max-width: 1200px;  // Main content
  --text-max-width: 720px;      // Reading content (optimal line length)
}
```

## Hardcoded Values to Remove

### Must Change (exact token matches available)
- ❌ `600px` (1 instance) → Use responsive approach
- ❌ `900px` (1 instance) → Use `var(--content-max-width)` or remove
- ❌ `1000px` (1 instance) → Use `var(--content-max-width)` or remove  
- ❌ `1200px` (3 instances) → Use `var(--content-max-width)`

### Decision Needed
- ❌ `800px` (3 instances) → Use responsive approach or 720px
- ❌ `1400px` (1 instance) → Remove, use 1200px or responsive

### Can Keep (Component-specific, < 500px)
- ✅ `200-420px` (small icons, badges, etc.)

## Migration Steps

1. **Update `_tokens.scss`** - Remove excess container tokens
2. **Update `_hero.scss`** - Use responsive approach
3. **Update `_sections.scss`** - Replace hardcoded widths
4. **Update `_grid.scss`** - Simplify layout
5. **Update `_meeting.scss`** - Use single token
6. **Test** - Ensure responsive behavior works
7. **Remove** - Delete unused token definitions

## Benefits

✅ Simpler design system (1-2 tokens vs 5)
✅ More responsive by default (no arbitrary widths)
✅ Easier to maintain (fewer magic numbers)
✅ More flexible (media queries adapt better)
✅ Follows modern best practices

## Testing Checklist

- [ ] Hero section looks good on mobile/tablet/desktop
- [ ] Content sections are readable on all sizes
- [ ] No horizontal scroll on mobile
- [ ] Text line length is comfortable (45-75 characters)
- [ ] Containers stack properly on mobile
- [ ] Spacing feels consistent across breakpoints
