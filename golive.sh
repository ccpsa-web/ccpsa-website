#!/bin/bash
# CCPSA Website Go Live — merges staging into main and pushes to production
# Vercel auto-deploys main to critcaremd.com
# Usage: ./golive.sh

set -euo pipefail

# Fail loudly: if any command below errors, say where instead of exiting silently.
trap 'echo ""; echo "!! golive.sh FAILED at line $LINENO. See the git error above."; echo "   Most common cause: uncommitted changes to tracked files, or main/staging out of sync."; echo "   Fix: commit or \"git stash\" stray changes, then re-run."; exit 1' ERR

# Clear stale lock files (left behind by a previously interrupted git command)
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
