# Comprehensive Link Audit Report - resources/ Directory

**Date:** 2025-11-03
**Scope:** All markdown files in `/home/mhenke/Projects/accelerate-devex-book-club-notebooklm/resources/`

---

## Executive Summary

**Total Files Scanned:** 120
**Total Links Found:** 735
**Broken Links:** 155 (21% failure rate)

### Breakdown by Category

- **FIXABLE (Priority 1):** 130 links - Files exist, wrong relative paths
- **MISSING_VALUABLE (Priority 2):** 25 links - Files should be created or links need updating
- **MISSING_OBSOLETE (Priority 3):** 0 links - No obsolete references found

---

## Pattern Analysis

The broken links follow clear patterns that can be fixed systematically:

### Pattern 1: Files in `handouts/` linking to `assessments/`
**Count:** 13 broken links
**Issue:** Using `../assessments/` instead of `../../../assessments/`
**Reason:** Files are at `meetings/meeting-X/handouts/`, need to go up 3 levels to reach `resources/`

**Fix Strategy:** Global find/replace in handouts/ files:
```bash
../assessments/ → ../../../assessments/
```

**Affected Files:**
- meetings/meeting-1/handouts/dora-metrics-guide.md
- meetings/meeting-1/handouts/culture-change-model.md
- meetings/meeting-1/handouts/culture-before-metrics.md
- meetings/meeting-2/handouts/security-shift-left.md
- meetings/meeting-2/handouts/architecture-team-independence.md
- meetings/meeting-2/handouts/meeting-agenda.md
- meetings/meeting-3/handouts/deployment-pain-burnout.md
- meetings/meeting-3/handouts/employee-satisfaction.md
- meetings/meeting-3/handouts/lean-management-practices.md
- meetings/meeting-4/handouts/transformation-principles.md

---

### Pattern 2: Files in `handouts/` linking to `activities/`
**Count:** 5 broken links
**Issue:** Using `../activities/` instead of `../../../activities/`
**Reason:** Same as Pattern 1 - need to go up 3 levels

**Fix Strategy:** Global find/replace in handouts/ files:
```bash
../activities/ → ../../../activities/
```

**Affected Files:**
- meetings/meeting-1/handouts/culture-before-metrics.md
- meetings/meeting-2/handouts/meeting-agenda.md
- meetings/meeting-3/handouts/meeting-agenda.md
- meetings/meeting-4/handouts/meeting-agenda.md

---

### Pattern 3: Files in `notebooklm/` linking to `chapter-notes.md`
**Count:** 26 broken links
**Issue:** Using `../../meetings/meeting-X/chapter-notes.md` instead of `../chapter-notes.md`
**Reason:** Incorrect path - already in meeting-X/notebooklm/, just need to go up one level

**Fix Strategy:** For each meeting-X/notebooklm/ file:
```bash
../../meetings/meeting-1/chapter-notes.md → ../chapter-notes.md
../../meetings/meeting-2/chapter-notes.md → ../chapter-notes.md
../../meetings/meeting-3/chapter-notes.md → ../chapter-notes.md
../../meetings/meeting-4/chapter-notes.md → ../chapter-notes.md
```

**Affected Files:** All podcast and video prompt files in:
- meetings/meeting-1/notebooklm/ (7 files)
- meetings/meeting-2/notebooklm/ (7 files)
- meetings/meeting-3/notebooklm/ (6 files)
- meetings/meeting-4/notebooklm/ (6 files)

---

### Pattern 4: Files in `notebooklm/` linking to `outline.md`
**Count:** 20 broken links
**Issue:** Using `../../meetings/meeting-X/outline.md` instead of `../outline.md`
**Reason:** Same as Pattern 3

**Fix Strategy:** For each meeting-X/notebooklm/ file:
```bash
../../meetings/meeting-1/outline.md → ../outline.md
../../meetings/meeting-2/outline.md → ../outline.md
../../meetings/meeting-3/outline.md → ../outline.md
../../meetings/meeting-4/outline.md → ../outline.md
```

---

### Pattern 5: Files in `notebooklm/` linking to `key-questions.md`
**Count:** 12 broken links
**Issue:** Using `../../key-questions.md` instead of `../../../key-questions.md`
**Reason:** Need to go up 3 levels from meeting-X/notebooklm/ to reach resources/

**Fix Strategy:** Global find/replace in notebooklm/ files:
```bash
../../key-questions.md → ../../../key-questions.md
```

---

### Pattern 6: Files in `notebooklm/` linking to `assessments/`
**Count:** 7 broken links
**Issue:** Using `../../assessments/` instead of `../../../assessments/`
**Reason:** Need to go up 3 levels

**Fix Strategy:** Global find/replace in notebooklm/ files:
```bash
../../assessments/ → ../../../assessments/
```

---

### Pattern 7: Files in `notebooklm/` linking to `handouts/`
**Count:** 6 broken links
**Issue:** Using `../meeting-X/handouts/` instead of `../handouts/`
**Reason:** Already in meeting-X/notebooklm/, just need to go up one level

**Fix Strategy:** For each notebooklm/ file:
```bash
../meeting-1/handouts/ → ../handouts/
../meeting-2/handouts/ → ../handouts/
../meeting-3/handouts/ → ../handouts/
../meeting-4/handouts/ → ../handouts/
```

---

### Pattern 8: README.md files linking to leadership/
**Count:** 4 broken links
**Issue:** Missing `leadership/` prefix
**Reason:** Files moved to leadership subdirectory

**Fix Strategy:** In meeting-X/README.md files:
```bash
leader-cheatsheet.md → leadership/leader-cheatsheet.md
discussion-guide.md → leadership/discussion-guide.md
```

**Affected Files:**
- meetings/meeting-1/README.md (4 links)

---

### Pattern 9: Cross-meeting navigation
**Count:** 25 broken links
**Issue:** Various incorrect paths between meetings
**Reason:** Multiple issues - some expecting wrong file locations

**Examples:**
- `meetings/meeting-3/handouts/meeting-agenda.md:109` references `../../meetings/meeting-3/outline.md` (should be `../outline.md`)
- Multiple meeting-agenda.md files reference other meetings' agendas incorrectly
- Chapter notes references pointing to wrong meetings

---

### Pattern 10: resources/README.md references
**Count:** 3 broken links
**Issue:** References to `handouts/README.md` should be `assessments/README.md`
**Reason:** The directory is called `assessments/` not `handouts/`

**Fix Strategy:** In resources/README.md:
```bash
handouts/README.md → assessments/README.md
```

---

## Priority 1: FIXABLE Links (130 total)

These can be fixed immediately with automated find/replace or manual edits.

### High Priority Files (Most Broken Links)

1. **meetings/meeting-2/handouts/meeting-agenda.md** - 7 broken links
2. **meetings/meeting-3/handouts/meeting-agenda.md** - 6 broken links
3. **meetings/meeting-4/handouts/meeting-agenda.md** - 5 broken links
4. **meetings/meeting-1/notebooklm/podcast-deep-dive-default.md** - 5 broken links
5. **meetings/meeting-1/notebooklm/podcast-deep-dive-longer.md** - 5 broken links
6. **meetings/meeting-1/notebooklm/video.md** - 5 broken links

### Automated Fix Script

Create a bash script to fix all patterns systematically:

```bash
#!/bin/bash
RESOURCES_DIR="/home/mhenke/Projects/accelerate-devex-book-club-notebooklm/resources"

# Pattern 1 & 2: handouts/ to assessments/ and activities/
find "$RESOURCES_DIR/meetings" -path "*/handouts/*.md" -type f -exec sed -i 's|\.\./assessments/|../../../assessments/|g' {} \;
find "$RESOURCES_DIR/meetings" -path "*/handouts/*.md" -type f -exec sed -i 's|\.\./activities/|../../../activities/|g' {} \;

# Pattern 3: notebooklm/ to chapter-notes.md
find "$RESOURCES_DIR/meetings/meeting-1/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-1/chapter-notes\.md|../chapter-notes.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-2/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-2/chapter-notes\.md|../chapter-notes.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-3/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-3/chapter-notes\.md|../chapter-notes.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-4/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-4/chapter-notes\.md|../chapter-notes.md|g' {} \;

# Pattern 4: notebooklm/ to outline.md
find "$RESOURCES_DIR/meetings/meeting-1/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-1/outline\.md|../outline.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-2/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-2/outline\.md|../outline.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-3/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-3/outline\.md|../outline.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-4/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-4/outline\.md|../outline.md|g' {} \;

# Pattern 5 & 6: notebooklm/ to key-questions.md and assessments/
find "$RESOURCES_DIR/meetings" -path "*/notebooklm/*.md" -type f -exec sed -i 's|\.\./\.\./key-questions\.md|../../../key-questions.md|g' {} \;
find "$RESOURCES_DIR/meetings" -path "*/notebooklm/*.md" -type f -exec sed -i 's|\.\./\.\./assessments/|../../../assessments/|g' {} \;

# Pattern 7: notebooklm/ to handouts/
find "$RESOURCES_DIR/meetings/meeting-1/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./meeting-1/handouts/|../handouts/|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-2/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./meeting-2/handouts/|../handouts/|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-3/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./meeting-3/handouts/|../handouts/|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-4/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./meeting-4/handouts/|../handouts/|g' {} \;

# Pattern 10: README.md fixes
sed -i 's|handouts/README\.md|assessments/README.md|g' "$RESOURCES_DIR/README.md"

echo "Automated fixes complete! Manual review needed for:"
echo "- Pattern 8: README.md leadership/ references (4 links)"
echo "- Pattern 9: Cross-meeting navigation (25 links)"
echo "- BROKEN-LINKS-AUDIT-REPORT.md references (2 links)"
```

### Manual Fixes Required

**Pattern 8: meetings/meeting-1/README.md (4 occurrences)**
```markdown
# Before
[Leader Cheatsheet](leader-cheatsheet.md)
[Discussion Guide](discussion-guide.md)

# After
[Leader Cheatsheet](leadership/leader-cheatsheet.md)
[Discussion Guide](leadership/discussion-guide.md)
```

**BROKEN-LINKS-AUDIT-REPORT.md (2 occurrences)** - This is the old audit report, can be deleted or updated

**Cross-meeting navigation** - Requires case-by-case review of meeting-agenda.md files

---

## Priority 2: MISSING_VALUABLE Links (25 total)

These reference files that don't exist but are conceptually valuable. Actions needed:

### Category A: References to `handouts/` directory (9 occurrences)

**Issue:** Multiple files reference a `handouts/` directory at the resources/ root level, but it doesn't exist.
**Actual Structure:** Handouts are in `meetings/meeting-X/handouts/`

**Files Affected:**
- README.md:12, 18, 194, 196, 197, 237, 264
- meetings/README.md:258, 287

**Action Options:**
1. **Remove references** - Since handouts are per-meeting, not global
2. **Update links** - Point to specific meeting handouts
3. **Create directory** - Create `resources/handouts/` as a landing page with links to all meeting handouts

**Recommendation:** Option 3 - Create `resources/handouts/README.md` with:
```markdown
# Handouts

This directory contains links to all meeting handouts organized by session.

## Meeting Handouts

- [Meeting 1 Handouts](../meetings/meeting-1/handouts/)
- [Meeting 2 Handouts](../meetings/meeting-2/handouts/)
- [Meeting 3 Handouts](../meetings/meeting-3/handouts/)
- [Meeting 4 Handouts](../meetings/meeting-4/handouts/)

Each meeting includes:
- Attendee Guide
- Action Items Tracker
- Meeting Agenda
- Topic-specific handouts
```

---

### Category B: References to `../meetings/` paths from wrong locations (14 occurrences)

**Issue:** Files in `resources/meetings/meeting-X/handouts/` reference `../meetings/meeting-Y/` which resolves to `resources/meetings/meeting-X/meetings/meeting-Y/` (doesn't exist)

**Examples:**
- meetings/meeting-1/handouts/dora-metrics-guide.md:398,399
- meetings/meeting-1/handouts/culture-change-model.md:446,447,448
- meetings/meeting-1/handouts/culture-before-metrics.md:266,267
- meetings/meeting-2/handouts/security-shift-left.md:427
- meetings/meeting-2/handouts/architecture-team-independence.md:403

**Correct Path:** Should be `../../meeting-Y/` (up 2 levels to meetings/, then into meeting-Y/)

**Action:** Automated fix:
```bash
# In handouts/ files, fix cross-meeting navigation
find resources/meetings/*/handouts/*.md -type f -exec sed -i 's|\.\./meetings/meeting-|../../meeting-|g' {} \;
```

---

### Category C: Missing `extensions/` directory (2 occurrences)

**Issue:** References to extension resources that don't exist
- book-club-roadmap.md:132,191

**Action Options:**
1. **Remove references** - If extensions aren't planned
2. **Create directory** - Create `resources/extensions/` with post-book-club materials

**Recommendation:** Option 2 if post-book-club activities are planned, Option 1 otherwise

---

### Category D: Missing `REORGANIZATION-STATUS.md` (1 occurrence)

**Issue:** meetings/README.md:243 references this file
**Action:** Remove reference or create status file if tracking reorganization

---

### Category E: Obsolete meeting navigation (1 occurrence)

**Issue:** meetings/meeting-4/outline.md:82,83 references `../book-club-materials/`
**Action:** Update to correct path or remove if not needed

---

## Priority 3: MISSING_OBSOLETE Links (0 total)

No obsolete references found. All missing files were categorized as valuable.

---

## Recommended Execution Order

### Phase 1: Automated Fixes (10 minutes)
1. Run the automated fix script above
2. Verify no files were corrupted with `git diff`
3. Test a few links manually

### Phase 2: Manual Fixes (15 minutes)
1. Fix Pattern 8 (README.md leadership references) - 4 links
2. Fix Category B cross-meeting navigation - 14 links
3. Review and fix cross-meeting agenda links - varies

### Phase 3: Create Missing Directories (20 minutes)
1. Create `resources/handouts/README.md` - 9 link fixes
2. Decision on `extensions/` - create or remove references - 2 links
3. Clean up old audit reports and status files - 1 link

### Phase 4: Validation (5 minutes)
1. Re-run the audit script: `node /tmp/audit-links.js`
2. Verify broken link count = 0
3. Test navigation paths manually
4. Commit changes

---

## Impact Assessment

**Current State:**
- 21% of links are broken
- Navigation is confusing and inconsistent
- Documentation appears incomplete

**Post-Fix State:**
- 100% of links working
- Clear, predictable navigation patterns
- Professional, polished documentation

**Estimated Time:** 50 minutes total
**Difficulty:** Low (mostly automated)
**Risk:** Low (can be validated with git diff before committing)

---

## Next Steps

1. Review this report
2. Decide on missing directories (handouts/, extensions/)
3. Run automated fix script
4. Complete manual fixes
5. Validate with re-audit
6. Commit and push changes

---

## Appendix: Files by Broken Link Count

Files with 5+ broken links (high priority for review):

- meetings/meeting-2/handouts/meeting-agenda.md (7 links)
- meetings/meeting-3/handouts/meeting-agenda.md (6 links)
- meetings/meeting-4/handouts/meeting-agenda.md (5 links)
- meetings/meeting-1/notebooklm/podcast-deep-dive-default.md (5 links)
- meetings/meeting-1/notebooklm/podcast-deep-dive-longer.md (5 links)
- meetings/meeting-1/notebooklm/video.md (5 links)
- meetings/meeting-4/notebooklm/podcast-deep-dive-default.md (5 links)
