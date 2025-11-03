# Broken Links Audit Report

**Date:** November 3, 2025
**Scope:** `/home/mhenke/Projects/accelerate-devex-book-club-notebooklm/resources/`
**Total Files Scanned:** 113 markdown files

## Executive Summary

Out of 696 total links found across 113 markdown files:
- **251 broken links** identified (36% of all links)
- **56 unique target paths** can be FIXED (files exist at different locations)
- **26 unique target paths** are MISSING (files don't exist anywhere)
- **192 link references** point to fixable targets
- **59 link references** point to missing targets

## Critical Issues by Category

### 1. Directory Structure Mismatches (56 FIXABLE paths)

#### Problem: Handouts Directory Location
**Impact:** 13 broken paths

**Current expectation:** `resources/handouts/meeting-X/`
**Actual location:** `resources/meetings/meeting-X/handouts/`

Files affected:
- `attendee-guide.md`
- `meeting-agenda.md`
- `action-items-tracker.md`
- Various meeting-specific handouts

**Example broken links:**
```markdown
Source: resources/meetings/README.md:39
Link:   [Attendee Guide](../meetings/meeting-1/handouts/attendee-guide.md)
Target: resources/meetings/meeting-1/handouts/attendee-guide.md (DOES NOT EXIST)
Found:  resources/meetings/meeting-1/handouts/attendee-guide.md (ACTUAL)
```

#### Problem: Leadership Materials Location
**Impact:** 12 broken paths for leader-cheatsheet.md, 7 for discussion-guide.md

**Current expectation:** `meetings/meeting-X/leader-cheatsheet.md`
**Actual location:** `meetings/meeting-X/leadership/leader-cheatsheet.md`

**Example broken links:**
```markdown
Source: resources/README.md:19
Link:   [leader cheatsheet](meetings/meeting-1/leadership/leader-cheatsheet.md)
Target: resources/meetings/meeting-1/leadership/leader-cheatsheet.md (DOES NOT EXIST)
Found:  resources/meetings/meeting-1/leadership/leader-cheatsheet.md (ACTUAL)
```

Similarly for `discussion-guide.md` - expected at meeting root, actually in `leadership/` subdirectory.

#### Problem: Assessments Directory Location
**Impact:** 8 broken paths

**Current expectation:** `meetings/assessments/`
**Actual location:** `resources/assessments/`

Files affected:
- `24-capabilities-assessment.md` (8 references)
- `dora-metrics-template.md` (5 references)
- `culture-assessment-worksheet.md` (2 references)

**Example broken links:**
```markdown
Source: resources/book-club-roadmap.md:116
Link:   [View Assessment](assessments/24-capabilities-assessment.md)
Target: resources/meetings/assessments/24-capabilities-assessment.md (WRONG)
Found:  resources/assessments/24-capabilities-assessment.md (CORRECT)
```

#### Problem: Key Questions File Location
**Impact:** 20 broken paths (HIGHEST COUNT)

**Current expectation:** `meetings/key-questions.md`
**Actual location:** `resources/key-questions.md`

This is referenced extensively across meeting materials.

#### Problem: Double-nested Meeting Paths
**Impact:** 40+ broken paths

Many links have incorrect path traversal like `meetings/meeting-X/` instead of `meetings/meeting-X/`.

**Example:**
```markdown
Source: resources/meetings/meeting-1/README.md:134
Link:   [chapter notes](../meetings/meeting-2/chapter-notes.md)
Target: resources/meetings/meeting-2/chapter-notes.md (WRONG - double "meetings")
Found:  resources/meetings/meeting-2/chapter-notes.md (CORRECT)
```

### 2. Missing Files That Should Be Created (26 MISSING paths)

#### HIGH PRIORITY (Referenced 3+ times)

**1. `activities/discussion-practices.md` - 12 references**
   - Most referenced missing file
   - Expected to contain facilitation guidelines
   - Referenced in: book-club-roadmap.md, book-club-plan.md, meetings/README.md

**2. `notebooklm-prompts/podcasts/brief.md` - 6 references**
   - Central NotebookLM prompt template
   - Referenced across multiple retrospective templates

**3. `meetings/activities/discussion-practices.md` - 5 references**
   - Variant path of #1 (confusion about location)

**4. `notebooklm-docs/` - 4 references**
   - Directory expected to contain NotebookLM documentation
   - Referenced in: book-club-roadmap.md, meetings/README.md

**5. `activities/between-meetings.md` - 4 references**
   - Guidelines for inter-meeting work
   - Referenced in: book-club-roadmap.md

**6. `activities/` directory - 3 references**
   - Parent directory doesn't exist
   - Expected to contain discussion practices, facilitation guides

**7. `activities/facilitation-guide.md` - 3 references**
   - Facilitator instructions

#### MEDIUM PRIORITY (Referenced 2 times)

- `extensions/` directory - 2 references (continuation resources)
- `meetings/meeting-2/meeting-guide.md` - 2 references
- `meetings/meeting-3/meeting-guide.md` - 2 references

#### LOW PRIORITY (Referenced 1 time) - 16 files

Notable items:
- `REORGANIZATION-STATUS.md` - 1 reference (may be internal tracking doc)
- Various `podcast-prompt.md` and `video-prompt.md` files (replaced by notebooklm/ subdirectories)
- `meeting-guide.md` files for meetings 1, 2, 3, 4

## Recommended Actions

### Phase 1: Fix Directory Structure Issues (IMMEDIATE)

**Option A: Update Links** (Recommended - No file moves required)
Update all links to point to actual file locations:

1. Change `../handouts/meeting-X/` → `meeting-X/handouts/`
2. Change `meeting-X/leader-cheatsheet.md` → `meeting-X/leadership/leader-cheatsheet.md`
3. Change `meeting-X/discussion-guide.md` → `meeting-X/leadership/discussion-guide.md`
4. Fix `meetings/` double-nesting to `meetings/`
5. Change `meetings/assessments/` → `assessments/`
6. Change `meetings/key-questions.md` → `key-questions.md`

**Option B: Move Files** (Alternative - Matches link expectations)
Move files to match link paths:

1. Create `resources/handouts/` and move all `meetings/meeting-X/handouts/` there
2. Move `meeting-X/leadership/*.md` to `meeting-X/` (flatten structure)
3. Create `resources/meetings/assessments/` and move assessment files there

**Recommendation:** Option A (update links) is safer and maintains logical organization.

### Phase 2: Create High Priority Missing Files (URGENT)

Create these 7 files that are referenced 3+ times:

1. **`resources/activities/discussion-practices.md`**
   - Content: Facilitation guidelines, ground rules, engagement techniques
   - Referenced by: 12 files

2. **`resources/notebooklm-prompts/podcasts/brief.md`**
   - Content: Template for brief podcast prompts
   - Referenced by: 6 files (retrospective templates)

3. **`resources/activities/between-meetings.md`**
   - Content: Inter-session activities, experiments, tracking
   - Referenced by: 4 files

4. **`resources/notebooklm-docs/README.md`**
   - Content: Index of NotebookLM best practices
   - Referenced by: 4 files

5. **`resources/activities/facilitation-guide.md`**
   - Content: Detailed facilitator instructions
   - Referenced by: 3 files

6. **Create `resources/activities/` directory** to house files above

### Phase 3: Evaluate Medium Priority Missing Files

Review these 3 files with 2 references each:
- `extensions/` - Decide if needed for post-book-club resources
- `meeting-guide.md` files - May be duplicates of existing materials

### Phase 4: Clean Up Low Priority Links (OPTIONAL)

For 16 files with 1 reference each:
- Remove links or create stub files
- Most appear to be obsolete (e.g., old prompt file structure)

## Detailed Breakdown by Source File

### Files with Most Broken Links

1. **`meetings/README.md`** - 40+ broken links
   - Mostly handouts and leadership materials paths

2. **`book-club-roadmap.md`** - 12 broken links
   - Assessments and activities directories

3. **`README.md`** - 8 broken links
   - Handouts and cheatsheet locations

4. **Meeting-specific README files** - 7-10 broken links each
   - Cross-references to other meetings
   - Handouts and leadership materials

## Impact Assessment

### Severity Levels

- **CRITICAL (192 links):** Fixable paths - can be resolved with bulk find/replace
- **HIGH (12 links):** Missing discussion-practices.md - core facilitation guidance
- **HIGH (6 links):** Missing podcast brief template - affects retrospectives
- **MEDIUM (13 links):** Other missing activities and documentation
- **LOW (16 links):** Single-reference missing files - likely obsolete

### User Impact

**Current state:** 36% of all documentation links are broken
- Users cannot navigate between related materials
- Facilitators cannot find leadership resources
- References to activities and assessment files fail

**After Phase 1 fix:** ~77% of broken links resolved (192 of 251)
**After Phase 2 completion:** ~94% of broken links resolved (236 of 251)

## Implementation Notes

### Find/Replace Patterns for Phase 1

```bash
# Fix handouts paths (example)
find resources/ -type f -name "*.md" -exec sed -i 's|../handouts/meeting-|meeting-|g' {} +

# Fix leadership materials (example)
find resources/ -type f -name "*.md" -exec sed -i 's|meeting-\([0-9]\)/leader-cheatsheet.md|meeting-\1/leadership/leader-cheatsheet.md|g' {} +

# Fix double-nested meetings paths (example)
find resources/ -type f -name "*.md" -exec sed -i 's|meetings/|meetings/|g' {} +
```

**WARNING:** Test on individual files first before bulk operations. Review all changes before committing.

### Template for Missing Files

For `activities/discussion-practices.md`:
```markdown
# Discussion Best Practices

## Ground Rules
- Be respectful and curious
- Focus on learning, not blame
- Share experiences from your context

## Facilitation Techniques
- Use scenarios to make concepts concrete
- Ask "What would this look like in our organization?"
- Track action items and commitments

[Add content from existing meeting materials]
```

## Appendix: Full List of Broken Targets

### FIXABLE Targets (56 unique paths, 192 references)

Top 10 by reference count:
1. `meetings/key-questions.md` - 20 refs
2. `meetings/meeting-1/leadership/leader-cheatsheet.md` - 12 refs
3. `handouts/` - 8 refs
4. `meetings/assessments/24-capabilities-assessment.md` - 8 refs
5. `meetings/meeting-1/leadership/discussion-guide.md` - 7 refs
6. `meetings/meeting-1/chapter-notes.md` - 7 refs
7. `meetings/meeting-1/outline.md` - 7 refs
8. `meetings/meeting-2/chapter-notes.md` - 7 refs
9. `meetings/meeting-3/chapter-notes.md` - 6 refs
10. `meetings/meeting-2/outline.md` - 6 refs

[Full list available in audit script output]

### MISSING Targets (26 unique paths, 59 references)

**High Priority (7 files, 37 references):**
- `activities/discussion-practices.md` - 12 refs
- `notebooklm-prompts/podcasts/brief.md` - 6 refs
- `meetings/activities/discussion-practices.md` - 5 refs
- `notebooklm-docs/` - 4 refs
- `activities/between-meetings.md` - 4 refs
- `activities/` - 3 refs
- `activities/facilitation-guide.md` - 3 refs

**Medium Priority (3 files, 6 references):**
- `extensions/` - 2 refs
- `meetings/meeting-2/meeting-guide.md` - 2 refs
- `meetings/meeting-3/meeting-guide.md` - 2 refs

**Low Priority (16 files, 16 references):**
- See full audit output for complete list

---

## Next Steps

1. Review this report with project maintainers
2. Decide on Option A vs Option B for Phase 1 (recommend Option A)
3. Create Phase 2 missing files (high priority)
4. Run bulk find/replace operations (with testing)
5. Validate all links with re-run of audit script
6. Document new directory structure conventions

**Audit Script Location:** `/tmp/check_broken_links.py` and `/tmp/summarize_broken_links.py`
