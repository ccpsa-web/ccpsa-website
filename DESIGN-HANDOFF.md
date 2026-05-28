# CCPSA Website — Design Handoff

Welcome. This is everything you need to start making design changes to **critcaremd.com**.

The website is a Next.js + Tailwind project deployed to Vercel via GitHub. You'll work on feature branches, open pull requests, preview your changes on a live URL Vercel auto-generates, and merge to production once Darren reviews.

---

## 1. Access checklist

Darren will send these invites. Accept each one before doing anything else.

| System | What you'll get | Where to accept |
|---|---|---|
| GitHub repo `ccpsa-web/ccpsa-website` | Collaborator (push access) | Email invite from GitHub |
| Vercel V0 (shared account) | Login credentials shared by Darren | Sent separately |
| Sveltia/Decap CMS at `critcaremd.com/admin/` | Auto-granted via GitHub OAuth once you have repo write access | Just log in with GitHub |

You will **not** have a Vercel team account — by design, to avoid an added seat cost. You don't need one. Every PR you open automatically gets a Vercel preview URL posted as a comment on the PR (publicly accessible), so you can see your changes live without logging into Vercel. If a build ever fails, Darren will dig into the Vercel logs and relay the error to you.

You will **not** have admin access on the repo either. You can ship any design change; you can't change secrets, OAuth apps, or repo settings. If you need one of those, ping Darren.

---

## 2. Project overview

- **Site:** critcaremd.com (production), preview.critcaremd.com (staging)
- **Framework:** Next.js (App Router) with `output: 'export'` (static site)
- **Styling:** Tailwind CSS
- **CMS:** Decap/Sveltia at `/admin/` for content edits (bios, pages, images)
- **Hosting:** Vercel (auto-deploys from GitHub)
- **DNS:** GoDaddy (don't touch)

Production builds on every push to `main`. Staging builds on every push to `staging`. Any other branch gets its own preview URL automatically when you open a PR.

---

## 3. Local development setup

Clone the repo and run it locally before making any changes — confirms your environment works.

```bash
# Clone
git clone https://github.com/ccpsa-web/ccpsa-website.git
cd ccpsa-website/ccpsa-nextjs-project

# Install dependencies (Node 18+ required)
npm install

# Run dev server
npm run dev
```

The site will be at `http://localhost:3000`. Edits to files reload automatically.

To produce a production build locally (catches build errors before pushing):

```bash
npm run build
```

---

## 4. Repo structure

The Next.js project lives in `ccpsa-nextjs-project/`. The repo root also contains historical files (an old static HTML version in `ccpsa-site/`, WordPress migration scripts, the SQL backup) — **ignore those for design work**.

Inside `ccpsa-nextjs-project/`:

```
src/
  app/                  # Pages (App Router)
    page.tsx            # Homepage
    about/              # Each folder = a route
    providers/
    services/
    contact/
    layout.tsx          # Global layout (header, footer, fonts)
    globals.css         # Global CSS — base styles, Tailwind directives
  components/           # Reusable components (header, footer, cards, etc.)
  lib/
    content.ts          # Loads JSON content from /content
content/
  providers/            # One JSON file per provider — these power the bios
  pages/                # Page-level content edited via CMS
public/
  admin/                # Decap/Sveltia CMS lives here — DO NOT EDIT
  images/               # Static images
tailwind.config.ts      # Tailwind theme — colors, fonts, breakpoints
next.config.js          # Next.js config (static export, image settings)
```

**Where to make design changes:**

- **Global styles / fonts / colors:** `tailwind.config.ts` + `src/app/globals.css`
- **Layout (header, footer, nav):** `src/components/` and `src/app/layout.tsx`
- **Individual pages:** `src/app/{route}/page.tsx`
- **Reusable UI:** `src/components/`

**Where NOT to make design changes:**

- `public/admin/` — that's the CMS UI itself, breaking it locks staff out of content editing
- `content/providers/*.json` — that's provider bio content, edited through the CMS
- `next.config.js` — config changes can break the static export

---

## 5. Branch and PR workflow

The repo has branch protection on `main`. You can't push to it directly. Workflow:

> **Important: do not self-merge your own pull requests.** Branch protection on this repo requires a PR but does not technically enforce approval review (a GitHub Free plan limitation on personal repos). Darren reviews and merges all PRs targeting `main` and `staging`. Open the PR, share the preview link, and wait for him to merge — even if the Merge button is clickable to you.

```bash
# Start from latest main
git checkout main
git pull

# Create a feature branch (name it descriptively)
git checkout -b design/homepage-hero-refresh

# Make changes, commit
git add .
git commit -m "Redesign homepage hero — new layout, larger CTA"

# Push and open PR
git push -u origin design/homepage-hero-refresh
```

Then on GitHub, open a PR from your branch into `main`. **Vercel will automatically build a preview URL** (link appears as a comment on the PR within ~1 minute). Send Darren that URL to review. Once approved, he merges and it goes live.

**If you want Darren to see staged changes ahead of production:** target `staging` instead of `main`. That deploys to `preview.critcaremd.com`. Then a follow-up PR from `staging` → `main` ships it.

---

## 6. Deploy pipeline

You probably won't touch deploy directly — PRs handle it. But for reference:

- Push to `main` → builds and deploys to `critcaremd.com` (production)
- Push to `staging` → builds and deploys to `preview.critcaremd.com`
- Any other branch with an open PR → unique preview URL

Build logs and deployment status live at `vercel.com/ccpsa/ccpsa-website`.

The repo also has helper shell scripts in the root (`deploy.sh`, `preview.sh`, `golive.sh`) — these are Darren's. **Don't use them.** Stick to the PR workflow.

---

## 7. Design system

CCPSA brand colors and type are defined in `tailwind.config.ts`. Use Tailwind utility classes wherever possible rather than custom CSS — it keeps the codebase consistent.

**Brand palette** (use these names, not hex codes, when extending the theme):

| Token | Hex | Use |
|---|---|---|
| `primary` (navy) | `#1B4F72` | Headers, primary buttons, footer |
| `secondary` (blue) | `#2E86C1` | Links, secondary accents |
| `accent` (amber) | `#F39C12` | CTAs, highlights, key takeaways |
| `light-gray` | `#F2F3F4` | Section backgrounds |
| White / black | standard | Body |

**Type:** Calibri for marketing/print materials; the website uses a web-safe stack — check `globals.css` to see what's currently loaded. Headings sit in semibold/bold weights; body in regular.

**Components to reuse, not rebuild:** check `src/components/` before creating anything new. If a card, button, or section pattern already exists, extend it.

---

## 8. V0 workflow (Vercel V0)

V0 is the prototyping tool we're using for the design overhaul phase. **You and Darren will share a single V0 account** — Darren will send you the login credentials separately. All collaboration on actual code happens through GitHub, not inside V0.

A few coordination notes since the account is shared:

- **Don't edit the same V0 chat/project at the same time.** Concurrent edits can clobber each other. If you're both actively prototyping, give each other a heads-up (Slack or text) so you don't step on each other.
- **Name your V0 projects descriptively** (e.g., "Homepage hero v2," "Providers grid redesign") so it's obvious who's working on what.
- **All real review and merging happens through GitHub**, not by sharing V0 links. Once you've prototyped something in V0, push it to a GitHub PR and discuss there.

The cleanest workflow:

1. **Prototype in V0.** Build the new section/page using prompts and V0's visual editor.
2. **Connect V0 to GitHub.** In V0, click "Add to Codebase" or "Open PR" → select the `ccpsa-web/ccpsa-website` repo. V0 creates a new branch and opens a PR.
3. **Review the diff yourself first.** V0 sometimes adds dependencies or restructures files. Make sure the PR only touches what you intended before tagging Darren.
4. **Iterate locally if needed.** Pull the V0 branch into your local clone, refine in code, push.
5. **Tag Darren on the PR** for review and merge.

V0 outputs React + Tailwind, which matches the stack. Watch for:
- **shadcn/ui components:** V0 leans on these heavily. If the project doesn't already have a given shadcn component, V0 will try to add it. That's usually fine but creates noise in the PR — keep it intentional.
- **Server vs. client components:** V0 sometimes generates client components (`"use client"`) when a server component would do. Not a blocker, but worth a glance.

**V0 is a temporary tool for this transition.** Once the major design overhaul is complete, Darren plans to cancel the paid V0 subscription. The code V0 generates lives permanently in the GitHub repo — cancelling V0 later doesn't affect the live site or remove any committed code. Post-overhaul, design tweaks happen directly in code (no V0 needed).

---

## 8b. Cowork workflow (Claude desktop app)

If you haven't used Cowork before: it's Anthropic's desktop version of Claude that has access to files on your computer, can run code in a sandboxed Linux environment, and can browse the web. For this project, Cowork will likely be your single biggest accelerator. You don't need to know git commands or React syntax from memory — Claude can do most of the mechanical work for you while you focus on design decisions.

**Setup (one-time):**
1. Download Cowork from `claude.ai/download` if you don't already have it.
2. Open Cowork and create or open a project for the CCPSA website. Point it at your local clone of the `ccpsa-web/ccpsa-website` repo so Claude has access to the code.
3. Tell Claude at the start of each session: *"This is the CCPSA website project. Read the CLAUDE.md and DESIGN-HANDOFF.md files at the root for context."* That gives Claude the full picture in one read.

**Things Cowork can do for you:**
- Explain any part of the codebase in plain English ("walk me through how the providers page works").
- Make code changes you describe in plain English ("change the homepage hero background to navy and center the CTA button").
- Run the local dev server (`npm run dev`) so you can see your changes at `localhost:3000` without touching the terminal yourself.
- Pull a V0-generated branch into your local clone and refine it further.
- Open pull requests, push commits, switch branches — Claude can run the git commands; you just describe what you want.
- Review V0's output before it goes to GitHub and flag anything weird.
- Walk through the handoff doc section-by-section if anything's unclear.

**What Cowork won't do for you:**
- Replace your design judgment. Cowork is great at *implementing* a design — less great at deciding what looks good. That's where V0's visual prototyping and your eye come in.
- Skip the PR workflow. Even when Cowork makes code changes, they still go through a PR to `main` for Darren to review.

**Typical session:** Open Cowork, tell Claude what you're trying to change, watch it propose edits or run V0, review the result on `localhost:3000`, ask Claude to commit and push to a branch, then open a PR. The whole loop usually takes minutes.

## 9. CMS overview (so you know what NOT to edit in code)

The site has a content management system at `critcaremd.com/admin/` (Decap/Sveltia). Staff use it to edit:

- Provider bios (name, photo, credentials, narrative)
- Page-level copy (about, services descriptions, etc.)
- Images uploaded to `public/`

**This means:** if you're tempted to edit a provider bio JSON file directly in the repo, stop. That's content, not design. Content edits happen through the CMS so staff stay in control.

Design changes that *affect* how content renders (e.g., how a bio card looks) live in `src/components/`. Content itself lives in `content/`.

---

## 10. Guardrails

- **Never push directly to `main`.** Branch protection blocks it, but don't try.
- **Never merge your own PRs.** This is the most important rule. Branch protection requires a PR but does not technically force approval review on this repo (GitHub Free plan limitation on personal accounts). You will see a working "Merge" button on your own PRs — **do not click it.** Darren reviews and merges every PR. This applies to PRs into `main` *and* `staging`.
- **Never edit `public/admin/`.** That breaks CMS access for everyone.
- **Test locally before pushing.** Run `npm run build` to catch errors.
- **One change per PR when possible.** Easier to review, easier to roll back.
- **The site is static-exported.** Server-side features (API routes that run at request time, database queries) won't work. Everything is built ahead of time.
- **The `é` in Boé matters.** Provider slugs/URLs handle this carefully — don't sanitize accents in new code without checking.

---

## 11. Who to contact

- **Code, design, deploys, repo access:** Darren Boe — `dboe@critcaremd.com`
- **CMS issues / content questions:** Darren (until further notice)
- **DNS / domain / Vercel billing:** Darren only

---

## 12. First-day checklist

1. Accept GitHub and Vercel invites.
2. Clone the repo, run it locally, confirm it loads at `localhost:3000`.
3. Log in to `critcaremd.com/admin/` with GitHub — confirm you can see the CMS.
4. Open V0 and connect it to the `ccpsa-website` repo.
5. Make one trivial change on a `test/` branch, open a PR, and confirm Vercel builds a preview. Close the PR without merging.
6. You're set. Schedule a 30-min walkthrough with Darren before your first real design PR.
