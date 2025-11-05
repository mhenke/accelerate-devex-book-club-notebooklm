#!/bin/bash

# Link Verification Script for Markdown Files
# Checks all relative markdown links to ensure they resolve to existing files

set -e

REPO_ROOT="/home/mhenke/Projects/accelerate-devex-book-club-notebooklm"
ERRORS=0
CHECKED=0
SUCCESS=0

echo "========================================="
echo "Markdown Link Verification"
echo "========================================="
echo ""

# Function to check if a file exists relative to another file
check_link() {
    local source_file="$1"
    local link_path="$2"
    local source_dir=$(dirname "$source_file")

    # Skip external links (http/https)
    if [[ "$link_path" =~ ^https?:// ]]; then
        return 0
    fi

    # Skip anchor-only links
    if [[ "$link_path" =~ ^# ]]; then
        return 0
    fi

    # Remove anchor from link if present
    local file_path="${link_path%%#*}"

    # Skip if empty after removing anchor
    if [[ -z "$file_path" ]]; then
        return 0
    fi

    # Resolve the full path
    local full_path=$(cd "$source_dir" && realpath -m "$file_path" 2>/dev/null || echo "")

    if [[ -z "$full_path" ]] || [[ ! -e "$full_path" ]]; then
        echo "❌ BROKEN: $source_file"
        echo "   Link: $link_path"
        echo "   Expected: $full_path"
        echo ""
        ((ERRORS++))
        return 1
    else
        ((SUCCESS++))
        return 0
    fi
}

# Find all markdown files in resources/
echo "Scanning markdown files in resources/..."
echo ""

while IFS= read -r -d '' md_file; do
    # Extract markdown links: [text](path)
    # This regex captures the path inside parentheses
    while IFS= read -r link; do
        ((CHECKED++))
        check_link "$md_file" "$link" || true
    done < <(grep -oP '\[([^\]]+)\]\(\K[^)]+' "$md_file" 2>/dev/null || true)
done < <(find "$REPO_ROOT/resources" -name "*.md" -type f -print0)

echo "========================================="
echo "Verification Summary"
echo "========================================="
echo "Total links checked: $CHECKED"
echo "✅ Valid links: $SUCCESS"
echo "❌ Broken links: $ERRORS"
echo ""

if [[ $ERRORS -eq 0 ]]; then
    echo "✅ All links are valid!"
    exit 0
else
    echo "❌ Found $ERRORS broken link(s)"
    exit 1
fi
