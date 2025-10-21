#!/bin/bash
# PurgeCSS script to remove unused CSS

set -e

echo "🧹 Running PurgeCSS to remove unused CSS..."
echo ""

# Store original size
ORIGINAL=$(du -h docs/_site/assets/main.css | cut -f1)

# Run PurgeCSS
npx purgecss \
  --css docs/_site/assets/main.css \
  --content 'docs/_site/**/*.html' \
  --output docs/_site/assets/

# Get new size
PURGED=$(du -h docs/_site/assets/main.css | cut -f1)

echo ""
echo "✅ PurgeCSS Complete!"
echo "   Before: $ORIGINAL"
echo "   After:  $PURGED"
echo ""

