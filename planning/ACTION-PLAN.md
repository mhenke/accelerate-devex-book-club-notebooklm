# CSS Simplification - Immediate Action Plan

**Goal**: Reduce 11,955 lines of CSS to ~8,000 lines (30% reduction) by consolidating 618 classes to ~400-450 classes.

**Status**: Ready to execute
**Timeline**: 2-3 weeks, incremental work
**Risk**: LOW (using git branches and continuous validation)

---

## Quick Start (Do This First)

```bash
# 1. Create safety branch
git checkout -b css-simplification-v2
git push -u origin css-simplification-v2

# 2. Verify baseline works
npm run validate
npm run test:htmlproof

# 3. Take baseline screenshots (manual)
npm run serve
# Open each page, take screenshots, save to planning/screenshots-before/

# 4. Review analysis (already done)
cat planning/css-usage-analysis.txt
```

---

## Phase 1: Font Awesome Cleanup (Week 1, Day 1-2)
**Impact**: 500 lines saved | **Risk**: LOW

### Current State
- 89 `fa-*` icon variants
- Many used only 1-2 times
- Top icons: fa-check-circle (64x), fa-chevron-down (54x), fa-rocket (45x)

### Action Steps

**Step 1.1: Identify essential icons (1 hour)**
```bash
# List icons by usage
grep -roh 'fa-[a-z-]*' docs/ --include="*.html" --include="*.md" | \
  sort | uniq -c | sort -rn > planning/icon-usage.txt

# Keep icons used 5+ times (essential)
# Remove icons used 1-3 times (optional)
```

**Step 1.2: Remove low-usage icons from CSS (2 hours)**
- Edit `docs/_sass/components/_icons.scss`
- Comment out (don't delete) icons used <5 times
- Test: `npm run build && npm run serve`
- Verify visually on all 13 pages

**Step 1.3: Update HTML if needed (1 hour)**
- If icon is critical but low-use, consider:
  - Using a similar common icon
  - Inlining SVG instead
  - Using CSS icon (emoji, pseudo-element)

**Commit checkpoint:**
```bash
git add docs/_sass/components/_icons.scss
git commit -m "refactor(css): reduce Font Awesome to 35 essential icons

- Removed 54 low-usage icons (<5 uses)
- Kept 35 essential icons (5+ uses)
- Savings: ~500 lines
- Validation: ✅ All tests passing"
```

---

## Phase 2: Meeting Components (Week 1, Day 3-5)
**Impact**: 800 lines saved | **Risk**: MEDIUM

### Current State
- 48 `meeting-*` classes
- Multiple color variants: meeting-1-color, meeting-2-color, etc.
- Scattered across multiple files

### Action Steps

**Step 2.1: Create CSS custom properties for meeting themes (2 hours)**
```scss
// In docs/_sass/abstracts/_tokens.scss
:root {
  // Meeting 1 theme (Chapters 1-3)
  --meeting-1-primary: #2196F3;
  --meeting-1-secondary: #1976D2;
  
  // Meeting 2 theme (Chapters 4-6)
  --meeting-2-primary: #4CAF50;
  --meeting-2-secondary: #388E3C;
  
  // Meeting 3 theme (Chapters 7-9)
  --meeting-3-primary: #FF9800;
  --meeting-3-secondary: #F57C00;
  
  // Meeting 4 theme (Chapters 10-11)
  --meeting-4-primary: #9C27B0;
  --meeting-4-secondary: #7B1FA2;
}
```

**Step 2.2: Consolidate meeting badge classes (2 hours)**

Before (multiple classes):
```scss
.meeting-badge { /* base */ }
.meeting-badge--0 { color: gray; }
.meeting-badge--1 { color: blue; }
.meeting-badge--2 { color: green; }
// etc...
```

After (unified with custom properties):
```scss
.meeting-badge {
  /* base styles */
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  
  &[data-meeting="1"] { background: var(--meeting-1-primary); }
  &[data-meeting="2"] { background: var(--meeting-2-primary); }
  &[data-meeting="3"] { background: var(--meeting-3-primary); }
  &[data-meeting="4"] { background: var(--meeting-4-primary); }
}
```

**Step 2.3: Update HTML to use data attributes (3 hours)**
```html
<!-- Before -->
<span class="meeting-badge meeting-badge--1">Meeting 1</span>

<!-- After -->
<span class="meeting-badge" data-meeting="1">Meeting 1</span>
```

**Step 2.4: Consolidate other meeting-* classes (3 hours)**
- meeting-subtitle → .meeting__subtitle
- meeting-meta-item → .meeting__meta-item
- Follow BEM naming: .meeting, .meeting__element, .meeting--modifier

**Commit checkpoint:**
```bash
git add docs/_sass/abstracts/_tokens.scss
git add docs/_sass/components/_meeting-themes.scss
git add docs/meetings/
git commit -m "refactor(css): unify meeting component system

- Created CSS custom properties for meeting themes
- Consolidated 48 meeting-* classes to 20
- Unified BEM naming: .meeting__badge, .meeting__subtitle
- Savings: ~800 lines
- Validation: ✅ All tests passing"
```

---

## Phase 3: Card System (Week 2, Day 1-2)
**Impact**: 700 lines saved | **Risk**: MEDIUM

### Current State
- section-card (134 uses)
- resource-card (24 uses)
- highlight-card (26 uses)
- checkpoint-card (20 uses)
- Many similar patterns

### Action Steps

**Step 3.1: Create unified card base (2 hours)**
```scss
// In docs/_sass/components/_cards.scss
.card {
  display: flex;
  flex-direction: column;
  background: var(--card-bg, #fff);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
  
  &__header { /* header styles */ }
  &__content { /* content styles */ }
  &__footer { /* footer styles */ }
  
  // Modifiers
  &--section { /* specific to section-card */ }
  &--resource { /* specific to resource-card */ }
  &--highlight { /* specific to highlight-card */ }
  &--checkpoint { /* specific to checkpoint-card */ }
}
```

**Step 3.2: Update HTML (4 hours)**
```html
<!-- Before -->
<div class="section-card">
  <div class="card-header">...</div>
  <div class="card-content">...</div>
</div>

<!-- After -->
<div class="card card--section">
  <div class="card__header">...</div>
  <div class="card__content">...</div>
</div>
```

**Commit checkpoint:**
```bash
git commit -m "refactor(css): unify card component system

- Consolidated 8 card types into single .card base
- BEM structure: .card, .card__header, .card--section
- Maintained all visual variations with modifiers
- Savings: ~700 lines
- Validation: ✅ All tests passing"
```

---

## Phase 4: Button System (Week 2, Day 3)
**Impact**: 300 lines saved | **Risk**: LOW

### Current State
- 12 `btn-*` variants
- btn--primary-action (56 uses)
- btn, btn-primary, btn-secondary, btn-404, btn-offline, etc.

### Action Steps

**Step 4.1: Standardize button patterns (3 hours)**
```scss
// In docs/_sass/components/_buttons.scss
.btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  
  // Variants
  &--primary { 
    background: var(--btn-primary-bg, #2196F3);
    color: white;
  }
  
  &--secondary {
    background: var(--btn-secondary-bg, #6c757d);
    color: white;
  }
  
  &--action {
    /* Keep for primary CTA if needed */
  }
  
  // Theme support
  &[data-theme="meeting-1"] { --btn-primary-bg: var(--meeting-1-primary); }
  &[data-theme="meeting-2"] { --btn-primary-bg: var(--meeting-2-primary); }
  &[data-theme="meeting-3"] { --btn-primary-bg: var(--meeting-3-primary); }
  &[data-theme="meeting-4"] { --btn-primary-bg: var(--meeting-4-primary); }
}
```

**Step 4.2: Update HTML and remove redundant classes (2 hours)**

**Commit checkpoint:**
```bash
git commit -m "refactor(css): simplify button system

- Unified 12 button variants to 6 core styles
- Added theme support via data attributes
- Savings: ~300 lines
- Validation: ✅ All tests passing"
```

---

## Phase 5: Step/Chapter Components (Week 2, Day 4-5)
**Impact**: 600 lines saved | **Risk**: MEDIUM

### Current State
- step-content (62), step-metrics (52), step-chapter (52)
- chapter-title (44), chapter-number (44), chapter-item (44)
- Multiple similar patterns

### Action Steps

**Step 5.1: Create unified step component (3 hours)**
```scss
// In docs/_sass/components/_steps.scss (or similar)
.step {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  
  &__content { /* content styles */ }
  &__number { /* number badge */ }
  &__title { /* title styles */ }
  
  // Modifiers for different step types
  &--metrics { /* metrics-specific styles */ }
  &--chapter { /* chapter-specific styles */ }
  &--culture { /* culture-specific styles */ }
  &--business { /* business-specific styles */ }
}

.chapter {
  /* Similar pattern for chapters */
  &__number { }
  &__title { }
  &__content { }
  &__indicator { }
}
```

**Step 5.2: Update HTML (4 hours)**

**Commit checkpoint:**
```bash
git commit -m "refactor(css): unify step and chapter components

- Consolidated 10+ step/chapter classes to 5
- BEM structure: .step__content, .chapter__title
- Savings: ~600 lines
- Validation: ✅ All tests passing"
```

---

## Phase 6: Single-Use Classes (Week 3, Day 1)
**Impact**: 400 lines saved | **Risk**: LOW

### Action Steps

**Step 6.1: Review single-use classes (1 hour)**
```bash
# Already have list from analysis
grep "1 " planning/css-usage-analysis.txt
```

**Step 6.2: Decision matrix (2 hours)**
- Remove: Truly unused or legacy classes
- Inline: One-off styles (add to HTML style attribute)
- Keep: Complex or semantically important

**Step 6.3: Execute cleanup (2 hours)**

**Commit checkpoint:**
```bash
git commit -m "chore(css): remove single-use and unused classes

- Removed 50+ single-use classes
- Inlined one-off styles where appropriate
- Savings: ~400 lines
- Validation: ✅ All tests passing"
```

---

## Phase 7: Final Organization & Documentation (Week 3, Day 2-3)

### Step 7.1: Add documentation comments (2 hours)
- Document each component file's purpose
- Add usage examples in comments
- Explain complex patterns

### Step 7.2: Update project documentation (2 hours)
- Update README.md
- Update copilot-instructions.md
- Create CSS-ARCHITECTURE.md
- Create CSS-MAINTENANCE.md

### Step 7.3: Final validation (2 hours)
```bash
# Run all validations
npm run validate
npm run test:htmlproof
npm run audit

# Visual check all 13 pages
npm run serve
# Compare with baseline screenshots

# Performance check
ls -lh docs/_site/assets/main.css
# Should be 30-35% smaller
```

**Final commit:**
```bash
git commit -m "docs: update CSS architecture documentation

- Documented component patterns
- Created maintenance guide
- Updated all references
- Final line count: ~8,000 lines (33% reduction)"
```

---

## Merge to Main (Week 3, Day 4)

```bash
# Final checks
npm run validate
npm run test:htmlproof

# Create PR
git push origin css-simplification-v2
# Open PR on GitHub with screenshots and metrics

# After approval, merge
git checkout main
git merge css-simplification-v2
git push origin main

# Tag release
git tag -a css-v2.0 -m "CSS Simplification: 30% reduction, unified components"
git push --tags
```

---

## Daily Checklist (Use This Every Day)

Before starting work:
- [ ] `git pull origin css-simplification-v2`
- [ ] `npm run serve` - baseline check

After each component:
- [ ] `npm run lint:css` - catch syntax errors
- [ ] `npm run build` - ensure Jekyll compiles
- [ ] `npm run serve` - visual check
- [ ] Compare with baseline screenshots
- [ ] Test all 13 pages (at least spot check)
- [ ] `git add -p` - review changes
- [ ] `git commit -m "..."` - descriptive message

End of day:
- [ ] `npm run validate` - full validation
- [ ] `git push origin css-simplification-v2` - backup work

---

## Emergency Rollback

If something breaks:
```bash
# Rollback last commit
git reset --hard HEAD~1

# Or rollback specific file
git checkout HEAD~1 -- docs/_sass/components/_cards.scss

# Rebuild and test
npm run build && npm run serve
```

---

## Success Metrics Tracker

Track progress as you go:

| Phase | Target Lines | Actual Lines | Status |
|-------|--------------|--------------|--------|
| Start | 11,955 | 11,955 | ✅ |
| Phase 1: Icons | -500 | ___ | ⏳ |
| Phase 2: Meetings | -800 | ___ | ⏳ |
| Phase 3: Cards | -700 | ___ | ⏳ |
| Phase 4: Buttons | -300 | ___ | ⏳ |
| Phase 5: Steps | -600 | ___ | ⏳ |
| Phase 6: Cleanup | -400 | ___ | ⏳ |
| **Target** | **8,655** | ___ | ⏳ |

Update after each phase:
```bash
find docs/_sass -type f -name "*.scss" -exec wc -l {} + | tail -1
```

---

## Tips for Success

1. **One component at a time** - Don't try to do everything at once
2. **Commit frequently** - Small, atomic commits are safer
3. **Test visually** - Automated tests won't catch visual regressions
4. **Use comments** - Mark complex sections for future reference
5. **Take breaks** - This is 20+ hours of work, pace yourself
6. **Ask for help** - If stuck, ask in team chat or create an issue

---

## Common Pitfalls to Avoid

❌ Don't delete files without backing up
❌ Don't change multiple components in one commit
❌ Don't skip visual testing
❌ Don't assume classes are unused without checking
❌ Don't forget to update HTML when changing CSS
❌ Don't use `!important` to fix specificity issues

✅ Do use git branches
✅ Do commit frequently with clear messages
✅ Do test on all 13 pages
✅ Do take screenshots before/after
✅ Do validate continuously
✅ Do document as you go

---

**Ready to start? Begin with Phase 1 (Font Awesome Cleanup) - it's low-risk and high-impact!**

```bash
# Let's go!
git checkout -b css-simplification-v2
./scripts/analyze-css-usage.sh
# Then follow Phase 1 steps above
```
