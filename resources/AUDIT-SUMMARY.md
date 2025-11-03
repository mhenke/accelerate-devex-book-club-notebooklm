# Broken Links Audit - Quick Summary

**Date:** November 3, 2025
**Status:** AUDIT COMPLETE - FIXES READY TO APPLY

## The Numbers

```
Total files scanned:     113 markdown files
Total links found:       696 links
Broken links:            251 (36% of all links)

FIXABLE:                 192 links → 56 unique target paths
MISSING:                  59 links → 26 unique target paths
```

## What's Broken?

### 1. **FIXABLE Issues (77% of broken links)**

Files exist but links point to wrong paths. Common patterns:

- **Key Questions File** - 20 links expect `meetings/key-questions.md` but it's at `key-questions.md`
- **Leader Cheatsheets** - 12 links expect `meeting-X/leader-cheatsheet.md` but files are in `meeting-X/leadership/`
- **Discussion Guides** - 7 links expect `meeting-X/discussion-guide.md` but files are in `meeting-X/leadership/`
- **Handouts Directory** - 13 links expect `resources/handouts/meeting-X/` but files are in `meetings/meeting-X/handouts/`
- **Assessments** - 8 links expect `meetings/assessments/` but files are in `assessments/`
- **Double-Nesting** - 40+ links have incorrect `meetings/` path traversal

### 2. **MISSING Files (23% of broken links)**

Files don't exist anywhere. High priority items:

- **`activities/discussion-practices.md`** - 12 references - CRITICAL
- **`notebooklm-prompts/podcasts/brief.md`** - 6 references - HIGH
- **`activities/between-meetings.md`** - 4 references - HIGH
- **`notebooklm-docs/`** directory - 4 references - HIGH
- **`activities/`** directory - Missing parent folder

## Quick Fix Guide

### Step 1: Preview Changes (Safe)

```bash
cd /home/mhenke/Projects/accelerate-devex-book-club-notebooklm/resources
./fix-broken-links.sh --dry-run
```

This shows what would change without modifying any files.

### Step 2: Apply Automated Fixes

```bash
./fix-broken-links.sh
```

This fixes all FIXABLE issues (192 links). Creates .bak files automatically.

### Step 3: Verify Fixes

```bash
python3 /tmp/check_broken_links.py
```

Re-run the audit to confirm fixes worked.

### Step 4: Create Missing Files

Create these 5 high-priority files manually:

1. `activities/discussion-practices.md` - 12 refs
2. `notebooklm-prompts/podcasts/brief.md` - 6 refs
3. `activities/between-meetings.md` - 4 refs
4. `notebooklm-docs/README.md` - 4 refs
5. `activities/facilitation-guide.md` - 3 refs

See full report for content suggestions.

## Files in This Directory

- **BROKEN-LINKS-AUDIT-REPORT.md** - Full detailed report with examples
- **broken-links-summary.csv** - Spreadsheet format for tracking
- **fix-broken-links.sh** - Automated fix script (with --dry-run option)
- **AUDIT-SUMMARY.md** - This quick reference

## Impact

### Before Fix
- 251 broken links (36% failure rate)
- Users cannot navigate documentation
- Facilitators can't find leadership materials
- Missing core activity guidelines

### After Automated Fix (Step 2)
- ~77% of issues resolved (192 of 251 fixed)
- Only 59 links still broken
- All existing files properly linked

### After Manual File Creation (Step 4)
- ~94% of issues resolved (236 of 251 fixed)
- Only 15 low-priority links remain
- Complete documentation navigation

## Root Causes

1. **Directory reorganization** - Files moved but links not updated
2. **Leadership materials grouped** - New `leadership/` subdirectories created
3. **Handouts distributed** - Changed from central `handouts/` to per-meeting folders
4. **Missing activity framework** - Planned `activities/` directory never created

## Recommendations

### Immediate (Today)
1. Run `fix-broken-links.sh --dry-run` to review changes
2. Apply automated fixes with `fix-broken-links.sh`
3. Verify with audit script
4. Commit fixes: `git add . && git commit -m "Fix broken markdown links"`

### Short-term (This Week)
1. Create 5 high-priority missing files
2. Populate with content from meeting materials
3. Test all navigation paths manually
4. Update this audit summary

### Long-term (Ongoing)
1. Add link checking to CI/CD pipeline
2. Document directory structure conventions
3. Use relative paths consistently
4. Regular audits (monthly)

## Questions?

Review the full audit report: `BROKEN-LINKS-AUDIT-REPORT.md`

---

**Next Action:** Run `./fix-broken-links.sh --dry-run` to see what will change.
