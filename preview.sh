#!/bin/bash
# CCPSA Website Preview — commits specific files to the staging branch
# Vercel auto-deploys staging to preview.critcaremd.com
# Usage: ./preview.sh "description of changes" file1 file2 ...

set -e

# Clear stale lock files
rm -f .git/HEAD.lock .git/index.lock

# Require a commit message and at least one file
if [ -z "$1" ]; then
  echo "Usage: ./preview.sh \"description of changes\" file1 file2 ..."
  exit 1
fi

MESSAGE="$1"
shift

if [ $# -eq 0 ]; then
  echo "Error: No files specified. List the files to deploy after the message."
  echo "Usage: ./preview.sh \"description of changes\" file1 file2 ..."
  exit 1
fi

# Switch to staging, sync with main first
git checkout main 2>/dev/null
git pull origin main 2>/dev/null
git checkout staging 2>/dev/null || git checkout -b staging
git merge main --no-edit 2>/dev/null

# Stage specific files, commit, push
git add "$@"
git commit -m "$MESSAGE"
git push -u origin staging

echo ""
echo "============================================"
echo "  Preview deployed to: https://preview.critcaremd.com"
echo ""
echo "  Share this link with your team to review."
echo "  When approved, run: ./golive.sh"
echo "============================================"
