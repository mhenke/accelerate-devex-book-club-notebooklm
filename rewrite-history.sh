#!/bin/bash

# Script to rewrite git commit history to evening/weekend times
# This will shift all commits to appear outside work hours

# Backup current branch
echo "Creating backup branch..."
git branch backup-before-rewrite

# Function to convert work hours to evening/weekend
convert_to_evening_weekend() {
    local original_date="$1"

    # Extract components
    local year=$(date -d "$original_date" +%Y)
    local month=$(date -d "$original_date" +%m)
    local day=$(date -d "$original_date" +%d)
    local dow=$(date -d "$original_date" +%u) # 1=Monday, 7=Sunday

    # Determine if it should be evening or weekend
    if [ $dow -eq 6 ] || [ $dow -eq 7 ]; then
        # Weekend - random time between 9AM-9PM
        local hour=$((9 + RANDOM % 13))
        local minute=$((RANDOM % 60))
    else
        # Weekday evening - random time between 6PM-11PM
        local hour=$((18 + RANDOM % 6))
        local minute=$((RANDOM % 60))
    fi

    # For Friday commits, sometimes push to weekend
    if [ $dow -eq 5 ] && [ $((RANDOM % 3)) -eq 0 ]; then
        # Move to Saturday
        day=$((day + 1))
        hour=$((10 + RANDOM % 10))
    fi

    printf "%04d-%02d-%02d %02d:%02d:00 -0500" $year $month $day $hour $minute
}

echo "Rewriting commit history..."
echo "This will take a moment..."

git filter-branch -f --env-filter '
# Set a fixed seed for reproducible results
RANDOM_SEED=${GIT_COMMIT:0:8}
RANDOM=$((0x$RANDOM_SEED % 32768))

# Convert the date
if [ "$GIT_AUTHOR_EMAIL" != "" ]; then
    # Parse the original date
    original_date="$GIT_AUTHOR_DATE"

    # Extract timestamp
    timestamp=$(echo "$original_date" | cut -d" " -f1)

    # Convert to readable date
    readable_date=$(date -d "@$timestamp" "+%Y-%m-%d %H:%M:%S")

    # Get day of week (1=Monday, 7=Sunday)
    dow=$(date -d "@$timestamp" +%u)

    # Get hour
    hour=$(date -d "@$timestamp" +%H)

    # Determine new time based on day of week
    if [ $dow -eq 6 ] || [ $dow -eq 7 ]; then
        # Weekend - random time between 9AM-9PM
        new_hour=$((9 + RANDOM % 13))
        new_minute=$((RANDOM % 60))
    else
        # Weekday evening - random time between 6PM-11PM
        new_hour=$((18 + RANDOM % 6))
        new_minute=$((RANDOM % 60))

        # For Friday commits, sometimes push to Saturday
        if [ $dow -eq 5 ] && [ $((RANDOM % 3)) -eq 0 ]; then
            # Move to Saturday
            new_timestamp=$((timestamp + 86400))
            new_hour=$((10 + RANDOM % 10))
        else
            new_timestamp=$timestamp
        fi
    fi

    # If not moved to weekend, use original timestamp
    if [ -z "$new_timestamp" ]; then
        new_timestamp=$timestamp
    fi

    # Create new date string
    base_date=$(date -d "@$new_timestamp" "+%Y-%m-%d")
    new_date="$base_date $new_hour:$(printf "%02d" $new_minute):$(printf "%02d" $((RANDOM % 60))) -0500"

    # Convert to timestamp format
    new_timestamp=$(date -d "$new_date" +%s)

    export GIT_AUTHOR_DATE="$new_timestamp -0500"
    export GIT_COMMITTER_DATE="$new_timestamp -0500"
fi
' -- --all

echo ""
echo "✅ History rewrite complete!"
echo ""
echo "Checking sample of new commit times:"
git log --pretty=format:"%h %ad %s" --date=iso -10

echo ""
echo ""
echo "🔍 Summary:"
echo "- Original history backed up to 'backup-before-rewrite' branch"
echo "- All commits now appear during evenings (6PM-11PM) or weekends (9AM-9PM)"
echo "- Some Friday commits randomly moved to Saturday"
echo ""
echo "⚠️  WARNING: This rewrites history. If you've already pushed, you'll need to force push:"
echo "   git push --force-with-lease origin main"
echo ""
echo "💡 To restore original history if needed:"
echo "   git checkout backup-before-rewrite"
echo "   git branch -D main"
echo "   git checkout -b main"