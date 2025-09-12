#!/bin/zsh
# Local Percy test runner: loads .env and exports PERCY_TOKEN for Playwright/Percy
# Usage: ./run-percy-tests.sh [test args]

set -e

# Load .env if present
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Check for PERCY_TOKEN
if [ -z "$PERCY_TOKEN" ]; then
  echo "Error: PERCY_TOKEN not set. Please add it to your .env file."
  exit 1
fi

# Start Jekyll server in background
echo "Starting Jekyll server..."
cd docs && bundle exec jekyll serve --detach --port 4000 --baseurl '/accelerate-devex-book-club-notebooklm' && cd ..

# Run Percy/Playwright tests
echo "Running Percy visual tests..."
npm run test:percy "$@"

echo "Percy tests complete. Check your Percy dashboard for results."
