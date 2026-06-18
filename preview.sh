#!/bin/bash
# CCPSA Website Preview — commits specific files to the staging branch
# Vercel auto-deploys staging to preview.critcaremd.com
# Usage: ./preview.sh "description of changes" file1 file2 ...

set -euo pipefail

# Fail loudly: if any command below errors, say where and why instead of exiting silently.
trap 'echo ""; echo "!! preview.sh FAILED at line $LINENO. See the git error above."; echo "   Most common cause: uncommitted changes to tracked files other than the ones you are deploying,"; echo "   or you are on a branch that has diverged from main/staging."; echo "   Fix: commit or \"git stash\" the unrelated changes, then re-run."; exit 1' ERR

# Clear stale lock files (left behind by a previously interrupted git command)
rm -f .git/HEAD.lock .git/index.lock

# Require a commit message and at least one file
if [ -z "${1:-}" ]; then
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

# Preflight: the branch switches below will fail if the working tree has uncommitted
# changes to tracked files that are NOT part of this deploy. Catch that now with a
# clear message instead of a confusing mid-script git error.
DEPLOY_FILES=" $* "
STRAY=""
while IFS= read -r f; do
  [ -z "$f" ] && continue
  case "$DEPLOY_FILES" in
    *" $f "*) ;;                       # part of this deploy — expected
    *) STRAY="${STRAY}    ${f}"$'\n' ;; # unrelated change — would block the branch switch
  esac
done < <(git diff --name-only HEAD)

if [ -n "$STRAY" ]; then
  echo "Aborting: you have uncommitted changes to tracked files that are NOT part of this deploy:"
  printf "%s" "$STRAY"
  echo "  These would block the branch switch below."
  echo "  Commit them, or set them aside with: git stash push -- <file> ..."
  echo "  Then re-run this command."
  exit 1
fi

# Switch to staging, sync with main first. Errors here are shown, not hidden.
git checkout main
git pull origin main
git checkout staging 2>/dev/null || git checkout -b staging   # only this fallback is conditional
git merge main --no-edit

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
