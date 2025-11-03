#!/bin/bash
RESOURCES_DIR="/home/mhenke/Projects/accelerate-devex-book-club-notebooklm/resources"

echo "Starting automated link fixes..."
echo ""

# Pattern 1 & 2: handouts/ to assessments/ and activities/
echo "Fixing Pattern 1 & 2: handouts/ to assessments/ and activities/..."
find "$RESOURCES_DIR/meetings" -path "*/handouts/*.md" -type f -exec sed -i 's|\.\./assessments/|../../../assessments/|g' {} \;
find "$RESOURCES_DIR/meetings" -path "*/handouts/*.md" -type f -exec sed -i 's|\.\./activities/|../../../activities/|g' {} \;

# Pattern 3: notebooklm/ to chapter-notes.md
echo "Fixing Pattern 3: notebooklm/ to chapter-notes.md..."
find "$RESOURCES_DIR/meetings/meeting-1/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-1/chapter-notes\.md|../chapter-notes.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-2/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-2/chapter-notes\.md|../chapter-notes.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-3/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-3/chapter-notes\.md|../chapter-notes.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-4/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-4/chapter-notes\.md|../chapter-notes.md|g' {} \;

# Pattern 4: notebooklm/ to outline.md
echo "Fixing Pattern 4: notebooklm/ to outline.md..."
find "$RESOURCES_DIR/meetings/meeting-1/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-1/outline\.md|../outline.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-2/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-2/outline\.md|../outline.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-3/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-3/outline\.md|../outline.md|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-4/notebooklm" -name "*.md" -type f -exec sed -i 's|../../meetings/meeting-4/outline\.md|../outline.md|g' {} \;

# Pattern 5 & 6: notebooklm/ to key-questions.md and assessments/
echo "Fixing Pattern 5 & 6: notebooklm/ to key-questions.md and assessments/..."
find "$RESOURCES_DIR/meetings" -path "*/notebooklm/*.md" -type f -exec sed -i 's|\.\./\.\./key-questions\.md|../../../key-questions.md|g' {} \;
find "$RESOURCES_DIR/meetings" -path "*/notebooklm/*.md" -type f -exec sed -i 's|\.\./\.\./assessments/|../../../assessments/|g' {} \;

# Pattern 7: notebooklm/ to handouts/
echo "Fixing Pattern 7: notebooklm/ to handouts/..."
find "$RESOURCES_DIR/meetings/meeting-1/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./\.\./handouts/meeting-1/|../handouts/|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-2/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./\.\./handouts/meeting-2/|../handouts/|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-3/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./\.\./handouts/meeting-3/|../handouts/|g' {} \;
find "$RESOURCES_DIR/meetings/meeting-4/notebooklm" -name "*.md" -type f -exec sed -i 's|\.\./\.\./handouts/meeting-4/|../handouts/|g' {} \;

# Cross-meeting navigation in handouts/
echo "Fixing cross-meeting navigation in handouts/..."
find "$RESOURCES_DIR/meetings" -path "*/handouts/*.md" -type f -exec sed -i 's|\.\./meetings/meeting-|../../meeting-|g' {} \;

echo ""
echo "Automated fixes complete!"
echo ""
echo "Summary:"
echo "  - Fixed handouts/ to assessments/ and activities/ paths"
echo "  - Fixed notebooklm/ to chapter-notes.md and outline.md paths"
echo "  - Fixed notebooklm/ to key-questions.md and assessments/ paths"
echo "  - Fixed notebooklm/ to handouts/ paths"
echo "  - Fixed cross-meeting navigation in handouts/"
echo ""
echo "Manual fixes still needed:"
echo "  - meetings/meeting-*/README.md leadership/ references"
echo "  - Create handouts/README.md"
echo "  - Remove old audit files"
