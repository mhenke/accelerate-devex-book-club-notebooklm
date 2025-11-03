#!/bin/bash
#
# Broken Links Fix Script
#
# This script fixes broken links found in the markdown audit.
# IMPORTANT: Review and test changes before committing!
#
# Usage:
#   ./fix_broken_links.sh --dry-run    # Preview changes
#   ./fix_broken_links.sh              # Apply changes
#

set -euo pipefail

BASE_DIR="/home/mhenke/Projects/accelerate-devex-book-club-notebooklm/resources"
DRY_RUN=false

# Parse arguments
if [[ "${1:-}" == "--dry-run" ]]; then
    DRY_RUN=true
    echo "DRY RUN MODE - No changes will be made"
    echo "========================================"
    echo
fi

# Backup function
backup_file() {
    local file="$1"
    if [[ "$DRY_RUN" == "false" ]]; then
        cp "$file" "$file.bak"
    fi
}

# Safe sed function
safe_sed() {
    local pattern="$1"
    local replacement="$2"
    local file="$3"

    if [[ "$DRY_RUN" == "true" ]]; then
        echo "Would update: $file"
        echo "  Pattern: $pattern"
        echo "  Replace: $replacement"
        grep -n "$pattern" "$file" 2>/dev/null | head -3 || echo "  (no matches found)"
        echo
    else
        backup_file "$file"
        sed -i "s|$pattern|$replacement|g" "$file"
    fi
}

echo "Fixing broken links in: $BASE_DIR"
echo

# Phase 1: Fix key-questions.md location (20 references)
echo "Phase 1a: Fix key-questions.md paths..."
find "$BASE_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
    if grep -q "meetings/key-questions\.md" "$file" 2>/dev/null; then
        safe_sed "(meetings/key-questions\.md)" "(key-questions.md)" "$file"
    fi
done

# Phase 1b: Fix assessments directory location
echo "Phase 1b: Fix assessments/ paths..."
find "$BASE_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
    if grep -q "meetings/assessments/" "$file" 2>/dev/null; then
        safe_sed "(meetings/assessments/)" "(assessments/)" "$file"
    fi
done

# Phase 1c: Fix leader-cheatsheet.md location (12 references)
echo "Phase 1c: Fix leader-cheatsheet.md paths..."
find "$BASE_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
    if grep -q "meeting-[0-9]/leader-cheatsheet\.md" "$file" 2>/dev/null; then
        safe_sed "meeting-\([0-9]\)/leader-cheatsheet\.md" "meeting-\1/leadership/leader-cheatsheet.md" "$file"
    fi
done

# Phase 1d: Fix discussion-guide.md location (7 references)
echo "Phase 1d: Fix discussion-guide.md paths..."
find "$BASE_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
    if grep -q "meeting-[0-9]/discussion-guide\.md" "$file" 2>/dev/null; then
        safe_sed "meeting-\([0-9]\)/discussion-guide\.md" "meeting-\1/leadership/discussion-guide.md" "$file"
    fi
done

# Phase 1e: Fix double-nested meetings/ paths
echo "Phase 1e: Fix double-nested meetings/meetings/ paths..."
find "$BASE_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
    if grep -q "meetings/meetings/" "$file" 2>/dev/null; then
        safe_sed "meetings/meetings/" "meetings/" "$file"
    fi
done

# Phase 1f: Fix handouts directory paths
echo "Phase 1f: Fix handouts/ paths (../handouts/meeting-X/ → meeting-X/handouts/)..."
find "$BASE_DIR/meetings" -type f -name "*.md" -print0 | while IFS= read -r -d '' file; do
    if grep -q "\.\./handouts/meeting-" "$file" 2>/dev/null; then
        safe_sed "\.\./handouts/meeting-\([0-9]\)/" "meeting-\1/handouts/" "$file"
    fi
done

# Phase 1g: Fix handouts paths in resources/ root
echo "Phase 1g: Fix handouts/ paths in root files..."
for file in "$BASE_DIR"/*.md; do
    if [[ -f "$file" ]] && grep -q "handouts/meeting-" "$file" 2>/dev/null; then
        safe_sed "handouts/meeting-\([0-9]\)/" "meetings/meeting-\1/handouts/" "$file"
    fi
done

echo
echo "========================================"
if [[ "$DRY_RUN" == "true" ]]; then
    echo "DRY RUN COMPLETE"
    echo "Run without --dry-run to apply changes"
else
    echo "FIXES APPLIED"
    echo "Backup files created with .bak extension"
    echo "Run the audit script again to verify fixes"
fi
echo "========================================"
echo
echo "Next steps:"
echo "1. Review changes: git diff"
echo "2. Test links manually"
echo "3. Run audit script: python3 /tmp/check_broken_links.py"
echo "4. If satisfied: git add . && git commit -m 'Fix broken markdown links'"
echo "5. If issues: restore from .bak files"
