#!/bin/bash

# Percy Visual Testing Setup Script
# Run this to test Percy integration locally

set -e  # Exit on error

echo "🎨 Percy Visual Testing Setup"
echo "============================="

# Check if we're in the right directory
if [ ! -f ".env" ]; then
    echo "❌ Error: .env file not found. Please run from project root."
    exit 1
fi

# Check if PERCY_TOKEN is set in .env
if ! grep -q "PERCY_TOKEN=" .env || grep -q "PERCY_TOKEN=your-actual-percy-token-from-dashboard" .env; then
    echo "❌ Error: PERCY_TOKEN not properly set in .env file"
    echo "   Please edit .env and replace the placeholder with your actual Percy token"
    exit 1
fi

echo "✅ Environment file found"

# Start Jekyll server in background if not running
if ! curl -s http://localhost:4000 > /dev/null 2>&1; then
    echo "🚀 Starting Jekyll server..."
    cd docs
    bundle exec jekyll serve --detach --port 4000
    cd ..
    echo "⏳ Waiting for server to start..."
    sleep 5
else
    echo "✅ Jekyll server already running"
fi

# Check if server is responding
if curl -s http://localhost:4000 > /dev/null 2>&1; then
    echo "✅ Jekyll server is running at http://localhost:4000"
else
    echo "❌ Error: Jekyll server failed to start"
    exit 1
fi

# Run Percy tests
echo "🎯 Running Percy visual tests..."
cd tests
npm run test:percy

echo "✅ Percy visual tests completed!"
echo "🔗 Check your Percy dashboard at https://percy.io for results"
