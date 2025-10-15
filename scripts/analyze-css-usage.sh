#!/bin/bash
# CSS Class Usage Analysis Script
# Analyzes CSS class usage across all HTML and Markdown files
# to help identify optimization opportunities

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== CSS Class Usage Analysis ===${NC}"
echo "Analyzing HTML and Markdown files in docs/"
echo ""

# Create output directory if it doesn't exist
mkdir -p planning

# Output file
OUTPUT_FILE="planning/css-usage-analysis.txt"
echo "CSS Class Usage Analysis - $(date)" > "$OUTPUT_FILE"
echo "========================================" >> "$OUTPUT_FILE"
echo "" >> "$OUTPUT_FILE"

# Find all HTML and Markdown files
echo -e "${YELLOW}Scanning files...${NC}"
FILE_COUNT=$(find docs/ -type f \( -name "*.html" -o -name "*.md" \) | wc -l)
echo "Found $FILE_COUNT files to analyze"
echo ""

# Extract all classes and count occurrences
echo -e "${BLUE}Top 100 Most Used Classes:${NC}"
echo "Top 100 Most Used Classes:" >> "$OUTPUT_FILE"
echo "===========================" >> "$OUTPUT_FILE"

grep -roh 'class="[^"]*"' docs/ --include="*.html" --include="*.md" 2>/dev/null | \
  sed 's/class="//g' | sed 's/"//g' | \
  tr ' ' '\n' | grep -v '^$' | sort | uniq -c | sort -rn | head -100 | \
  tee -a "$OUTPUT_FILE"

echo "" | tee -a "$OUTPUT_FILE"

# Component families (grouped by prefix)
echo -e "${BLUE}=== Component Families (by prefix) ===${NC}"
echo "=== Component Families (by prefix) ===" >> "$OUTPUT_FILE"

grep -roh 'class="[^"]*"' docs/ --include="*.html" --include="*.md" 2>/dev/null | \
  sed 's/class="//g' | sed 's/"//g' | \
  tr ' ' '\n' | grep -v '^$' | sort -u | \
  grep '-' | sed 's/-.*//g' | sort | uniq -c | sort -rn | head -50 | \
  tee -a "$OUTPUT_FILE"

echo "" | tee -a "$OUTPUT_FILE"

# Classes used only once (candidates for removal or inlining)
echo -e "${BLUE}=== Classes Used Only Once (consolidation candidates) ===${NC}"
echo "=== Classes Used Only Once ===" >> "$OUTPUT_FILE"

grep -roh 'class="[^"]*"' docs/ --include="*.html" --include="*.md" 2>/dev/null | \
  sed 's/class="//g' | sed 's/"//g' | \
  tr ' ' '\n' | grep -v '^$' | sort | uniq -c | sort -n | \
  awk '$1 == 1 {print $2}' | head -50 | \
  tee -a "$OUTPUT_FILE"

echo "" | tee -a "$OUTPUT_FILE"

# Classes used 2-3 times (possible consolidation candidates)
echo -e "${BLUE}=== Classes Used 2-3 Times (review for necessity) ===${NC}"
echo "=== Classes Used 2-3 Times ===" >> "$OUTPUT_FILE"

grep -roh 'class="[^"]*"' docs/ --include="*.html" --include="*.md" 2>/dev/null | \
  sed 's/class="//g' | sed 's/"//g' | \
  tr ' ' '\n' | grep -v '^$' | sort | uniq -c | sort -n | \
  awk '$1 >= 2 && $1 <= 3 {print $1, $2}' | \
  tee -a "$OUTPUT_FILE"

echo "" | tee -a "$OUTPUT_FILE"

# Total unique classes
TOTAL_CLASSES=$(grep -roh 'class="[^"]*"' docs/ --include="*.html" --include="*.md" 2>/dev/null | \
  sed 's/class="//g' | sed 's/"//g' | \
  tr ' ' '\n' | grep -v '^$' | sort -u | wc -l)

echo -e "${GREEN}=== Summary ===${NC}"
echo "=== Summary ===" >> "$OUTPUT_FILE"
echo "Total unique CSS classes: $TOTAL_CLASSES" | tee -a "$OUTPUT_FILE"
echo "Files analyzed: $FILE_COUNT" | tee -a "$OUTPUT_FILE"
echo "" | tee -a "$OUTPUT_FILE"

# Find all unique class names for reference
echo "=== All Unique Classes (alphabetical) ===" >> "$OUTPUT_FILE"
grep -roh 'class="[^"]*"' docs/ --include="*.html" --include="*.md" 2>/dev/null | \
  sed 's/class="//g' | sed 's/"//g' | \
  tr ' ' '\n' | grep -v '^$' | sort -u >> "$OUTPUT_FILE"

echo "" | tee -a "$OUTPUT_FILE"

# Analyze current SCSS file
if [ -f "docs/assets/main.scss" ]; then
  SCSS_LINES=$(wc -l < docs/assets/main.scss)
  echo "Current main.scss: $SCSS_LINES lines" | tee -a "$OUTPUT_FILE"
fi

echo ""
echo -e "${GREEN}✅ Analysis complete!${NC}"
echo -e "Full report saved to: ${YELLOW}$OUTPUT_FILE${NC}"
echo ""
echo -e "${BLUE}Next steps:${NC}"
echo "1. Review the report: cat $OUTPUT_FILE"
echo "2. Identify optimization opportunities"
echo "3. Follow the implementation plan in planning/css-simplification-plan.md"
