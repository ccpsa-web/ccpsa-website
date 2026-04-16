#!/bin/bash
# CCPSA Website Go Live — merges staging into main and pushes to production
# Vercel auto-deploys main to critcaremd.com
# Usage: ./golive.sh

set -e

# Clear stale lock files
rm -f .git/HEAD.lock .git/index.lock

# Switch to main, pull latest, merge staging, push
git checkout main
git pull origin main
git merge staging --no-edit
git push origin main

echo ""
echo "============================================"
echo "  Live. Changes are now on critcaremd.com"
echo "  Vercel will build and publish automatically."
echo "============================================"
