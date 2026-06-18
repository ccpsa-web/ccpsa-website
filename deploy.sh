#!/bin/bash
# CCPSA Website Deploy — commits and pushes specific files directly to main
# Usage: ./deploy.sh "description of changes" file1 file2 ...

set -euo pipefail

# Fail loudly: if any command below errors, say where instead of exiting silently.
trap 'echo ""; echo "!! deploy.sh FAILED at line $LINENO. See the git error above."; echo "   Fix the reported issue and re-run."; exit 1' ERR

# Clear stale lock files (left behind by a previously interrupted git command)
rm -f .git/HEAD.lock .git/index.lock

# Require a commit message and at least one file
if [ -z "${1:-}" ]; then
  echo "Usage: ./deploy.sh \"description of changes\" file1 file2 ..."
  exit 1
fi

MESSAGE="$1"
shift

if [ $# -eq 0 ]; then
  echo "Error: No files specified. List the files to deploy after the message."
  echo "Usage: ./deploy.sh \"description of changes\" file1 file2 ..."
  exit 1
fi

# Stage only the specified files, commit, push
git add "$@"
git commit -m "$MESSAGE"
git push origin main

echo ""
echo "Deployed. Vercel will build and publish automatically."
