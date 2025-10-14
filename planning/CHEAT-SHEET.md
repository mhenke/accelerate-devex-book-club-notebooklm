# CSS Simplification - Quick Reference Cheat Sheet

## 🚀 Quick Start (Copy & Paste)

```bash
# 1. Create safety branch
git checkout -b css-simplification-v2
git push -u origin css-simplification-v2

# 2. Verify baseline
npm run validate && npm run test:htmlproof

# 3. Start with Phase 1 (see ACTION-PLAN.md)
```

---

## 📁 13 Pages to Test

1. `index.html` - Homepage
2. `meetings.html` - Overview
3. `meetings/meeting-0/index.html`
4. `meetings/meeting-1/index.html`
5. `meetings/meeting-2/index.html`
6. `meetings/meeting-3/index.html`
7. `meetings/meeting-4/index.html`
8. `prompts.html`
9. `resources.html`
10. `transformation-complete/index.html`
11. `404.html`
12. `offline.html`
13. `feeds/index.html`

---

## ⚡ Essential Commands

```bash
# Fast feedback (use constantly)
npm run lint:css          # CSS linting only (~2 sec)
npm run build             # Build site (~10 sec)
npm run serve             # Start local server

# Before every commit
npm run validate          # Full validation (~15 sec)

# Visual testing
open http://localhost:4000/accelerate-devex-book-club-notebooklm/

# Check progress
find docs/_sass -type f -name "*.scss" -exec wc -l {} + | tail -1

# Rerun analysis anytime
./scripts/analyze-css-usage.sh
```

---

## 🎯 Consolidation Targets

| Component | Current | Target | Savings |
|-----------|---------|--------|---------|
| **Font Awesome** | 89 icons | 35 icons | -500 lines |
| **Meeting classes** | 48 classes | 20 classes | -800 lines |
| **Card system** | 8+ types | 3 types | -700 lines |
| **Button system** | 12 variants | 6 variants | -300 lines |
| **Step/Chapter** | 10+ classes | 5 classes | -600 lines |
| **Single-use** | 50+ classes | Remove | -400 lines |
| **TOTAL** | **11,955 lines** | **~8,000 lines** | **-3,300** |

---

## 📝 Git Commit Template

```bash
git commit -m "refactor(css): [component name]

- Consolidated X classes to Y
- [Specific change 1]
- [Specific change 2]
- Savings: ~N lines
- Validation: ✅ All tests passing"
```

**Examples:**
```bash
git commit -m "refactor(css): reduce Font Awesome to essential icons

- Kept 35 essential icons (used 5+ times)
- Removed 54 low-usage icons
- Savings: ~500 lines
- Validation: ✅ All tests passing"

git commit -m "refactor(css): unify card component system

- Consolidated section-card, resource-card, highlight-card
- Base: .card with modifiers .card--section, .card--resource
- Savings: ~700 lines
- Validation: ✅ All tests passing"
```

---

## 🏗️ BEM Naming Pattern

**Before (scattered):**
```scss
.metric-item { }
.metric-card { }
.metric-box { }
```

**After (unified):**
```scss
.metric { }              // Base component
.metric__title { }       // Element (part of component)
.metric__value { }       // Element
.metric--large { }       // Modifier (variation)
.metric--highlighted { } // Modifier
```

**HTML:**
```html
<div class="metric metric--large">
  <h3 class="metric__title">Deployment Frequency</h3>
  <p class="metric__value">Multiple per day</p>
</div>
```

---

## 🎨 CSS Custom Properties Pattern

**Before (many classes):**
```scss
.meeting-1-color { background: #2196F3; }
.meeting-2-color { background: #4CAF50; }
.meeting-3-color { background: #FF9800; }
.meeting-4-color { background: #9C27B0; }
```

**After (custom properties):**
```scss
:root {
  --meeting-1-primary: #2196F3;
  --meeting-2-primary: #4CAF50;
  --meeting-3-primary: #FF9800;
  --meeting-4-primary: #9C27B0;
}

.meeting-badge {
  background: var(--meeting-color);
  
  &[data-meeting="1"] { --meeting-color: var(--meeting-1-primary); }
  &[data-meeting="2"] { --meeting-color: var(--meeting-2-primary); }
  &[data-meeting="3"] { --meeting-color: var(--meeting-3-primary); }
  &[data-meeting="4"] { --meeting-color: var(--meeting-4-primary); }
}
```

**HTML:**
```html
<span class="meeting-badge" data-meeting="1">Meeting 1</span>
```

---

## 📊 Daily Progress Tracker

**Track at end of each day:**

| Date | Lines | Classes | Phase Completed | Notes |
|------|-------|---------|-----------------|-------|
| Start | 11,955 | 618 | Analysis ✅ | Baseline |
| Day 1 | _____ | ___ | Font Awesome | _____ |
| Day 2 | _____ | ___ | Meetings 1/2 | _____ |
| Day 3 | _____ | ___ | Meetings 2/2 | _____ |
| Day 4 | _____ | ___ | Cards | _____ |
| Day 5 | _____ | ___ | Buttons | _____ |
| ... | _____ | ___ | _____ | _____ |

**Commands to get numbers:**
```bash
# Total lines
find docs/_sass -type f -name "*.scss" -exec wc -l {} + | tail -1

# Total classes (rerun analysis)
./scripts/analyze-css-usage.sh
grep "Total unique CSS classes:" planning/css-usage-analysis.txt
```

---

## ✅ Before Commit Checklist

- [ ] `npm run lint:css` - No syntax errors
- [ ] `npm run build` - Jekyll compiles
- [ ] `npm run serve` - Visual check on localhost
- [ ] Test at least 3-5 pages visually
- [ ] Compare with baseline screenshots
- [ ] `git add -p` - Review staged changes
- [ ] Write descriptive commit message
- [ ] `npm run validate` - Full validation passes

---

## 🚨 Emergency Rollback

**If something breaks:**
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Restore specific file
git checkout HEAD~1 -- docs/_sass/components/_cards.scss

# Rebuild
npm run build && npm run serve
```

---

## 🎯 Top Classes to Consolidate (High Impact)

**Must address (high usage):**
1. `fas` (792x) - Font Awesome icon base class
2. `metric-item` (158x) - Metrics display
3. `section-card` (134x) - Card component
4. `btn` (86x) - Buttons
5. `bar` (72x) - Progress bars
6. `step-content` (62x) - Step components

**Good consolidation targets (patterns):**
- Meeting family: 48 classes → 20
- Card family: 8 types → 3
- Button family: 12 variants → 6
- Step/Chapter family: 10+ → 5

---

## 📖 Key Files to Edit

**Most changes will be in:**
- `docs/_sass/abstracts/_tokens.scss` - Add CSS custom properties
- `docs/_sass/components/_icons.scss` - Font Awesome cleanup
- `docs/_sass/components/_cards.scss` - Card consolidation
- `docs/_sass/components/_buttons.scss` - Button simplification
- `docs/_sass/components/_meeting-*.scss` - Meeting components
- `docs/_sass/components/_timelines.scss` - Step/chapter components

**Also update HTML in:**
- `docs/index.md`
- `docs/meetings/*.md`
- `docs/_layouts/*.html`

---

## 💡 Pro Tips

1. **Work in small batches** - One component at a time
2. **Commit frequently** - Every 1-2 hours of work
3. **Test visually** - Automation won't catch visual bugs
4. **Use comments** - Future you will thank you
5. **Take breaks** - This is 20+ hours of work
6. **Keep baseline screenshots** - For comparison
7. **Push to branch daily** - Don't lose work
8. **Ask for help** - If stuck for > 30 min

---

## ❌ DON'T Do This

- ❌ Delete entire files without backup
- ❌ Change multiple components in one commit
- ❌ Skip visual testing
- ❌ Use `!important` to fix issues
- ❌ Guess which classes are unused
- ❌ Work directly on main branch
- ❌ Forget to update HTML when changing CSS

---

## ✅ DO This

- ✅ Use git branches
- ✅ Commit small, atomic changes
- ✅ Test all 13 pages
- ✅ Take screenshots before/after
- ✅ Validate continuously
- ✅ Document as you go
- ✅ Follow BEM naming
- ✅ Use CSS custom properties

---

## 🔗 Full Documentation

- **Start here:** `planning/ACTION-PLAN.md`
- **Full strategy:** `planning/css-simplification-plan.md`
- **Usage data:** `planning/css-usage-analysis.txt`
- **This file:** `planning/CHEAT-SHEET.md`

---

## 🏁 Ready? Start Here!

```bash
git checkout -b css-simplification-v2
npm run validate
npm run serve
# Take screenshots, then follow Phase 1 in ACTION-PLAN.md
```

**Good luck! You've got this! 🚀**