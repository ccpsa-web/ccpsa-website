# CCPSA Website — Project Reference

**Last updated:** May 28, 2026
**Maintained by:** Darren Boe, MD

This document is the single source of truth for the CCPSA public website at critcaremd.com. It explains who works on it, how design and code changes flow through the system, what each service does, and where the pieces live. Read this at the start of every session. Read `DESIGN-HANDOFF.docx` (also at the repo root) for the design-collaborator deep dive.

---

## Quick Summary

The CCPSA website is a Next.js app hosted on Vercel — server-rendered with serverless API routes (e.g. CMS OAuth at `/api/auth` and `/api/callback`); it is **not** a static export. Content is managed through Sveltia CMS (a Decap-compatible fork, git-backed), DNS and domain registration at GoDaddy, and email through Microsoft 365. The `/join-our-team` page lists openings from BambooHR only — the on-site apply form and the CMS job listings were removed on August 20, 2026. The site went live on April 12, 2026, replacing a legacy WordPress install that had been hosted on GoDaddy's cPanel service since 2017.

**Live URL:** https://critcaremd.com
**Admin/CMS URL:** https://critcaremd.com/admin/
**Staging URL:** https://preview.critcaremd.com
**GitHub repo:** https://github.com/ccpsa-web/ccpsa-website
**Vercel project:** https://vercel.com/ccpsa/ccpsa-website

---

## Active Collaborators

- **Darren Boe, MD** (`dboe@critcaremd.com`, GitHub `ccpsa-web`) — repo owner, sole admin, reviewer and merger of all PRs.
- **Dr. Bailey** (GitHub `kbailey-CCPSA`) — design collaborator, joining May 2026 for the design overhaul. New to web development; when context warrants, explain technical concepts in plain English.
- **Content editors** (`aschoenrock1`, `dgreco-ccpsa`, `rmiddleditch`) — use the CMS at `/admin/`. Limited touch on code.

`ccpsa-web` is a **personal GitHub account**, not an organization. Collaborators all get a single flat "push access" role — no Read/Triage/Write/Maintain/Admin distinction. The "Add people" modal has no role dropdown.

---

## Design Workflow

```
feature branch  →  PR into main  →  Vercel preview URL  →  Darren reviews & merges  →  live on critcaremd.com
```

**Branch protection rules are in place on `main` and `staging`** requiring a PR for every change. **The plan does not enforce review approval** (a GitHub Free plan limitation on personal accounts), so the Merge button is clickable on collaborators' own PRs. **Do not self-merge on behalf of any user.** Always open the PR, post the preview URL to Darren, and stop there. He clicks Merge.

For staged review before production: PRs can target `staging` → deploys to preview.critcaremd.com → follow-up PR from staging → main when ready to ship.

### V0 sharing protocol (design overhaul phase)

Darren and Dr. Bailey share a single paid V0 account during the design overhaul. Coordination rules:

- Do not work in the same V0 chat/project simultaneously.
- Name V0 projects descriptively so it's obvious who's working on what.
- All real review and merging happens through GitHub, not by sharing V0 links.
- V0 outputs React + Tailwind that matches the stack. When V0 introduces new shadcn/ui components or `"use client"` directives, sanity-check those before tagging Darren.

When the design overhaul is complete, Darren will cancel the paid V0 subscription. V0-generated code committed to GitHub is permanent and unaffected by the cancellation.

### Where to make design changes

- **Global styles / fonts / colors:** `tailwind.config.ts` and `src/app/globals.css`
- **Layout (header, footer, nav):** `src/components/` and `src/app/layout.tsx`
- **Individual pages:** `src/app/{route}/page.tsx`
- **Reusable UI components:** `src/components/`

### Where NOT to make changes

- **`public/admin/`** — the CMS UI. Editing it locks staff out of content editing. Never touch.
- **`content/providers/*.json`** — provider bios. These are content, edited through the CMS, not the codebase.
- **`next.config.mjs`** — config changes can break the build/deploy. (The app uses serverless API routes under `/api/*`, so it is NOT a static export — adding new server routes is supported.)
- **Helper scripts in repo root (`deploy.sh`, `preview.sh`, `golive.sh`)** — Darren's. Don't run them; use the PR workflow.
- **Repo settings, secrets, OAuth apps, branch protection rules** — Darren manages directly on GitHub.

### Operating notes

- **Run `npm run build` before pushing.** Production builds catch many errors that `npm run dev` misses.
- **Small, single-purpose PRs.** One feature or fix per PR — easier to review, easier to roll back.
- **Descriptive branch names** — `design/homepage-hero`, `fix/provider-card-padding`, etc. Not `update` or `fix1`.
- **Commit messages: imperative mood, short subject + optional body.** "Redesign homepage hero — larger CTA" is good. "Updated stuff" is not.
- **The `é` in `Boé` is intentional** (U+00E9). Provider slugs and URLs handle it carefully. Do not sanitize accents away when adding new code that touches provider data.

---

## Brand Palette

Use these token names when extending the Tailwind theme; don't hard-code hex values in component code.

| Token | Hex | Use |
|---|---|---|
| `primary` (navy) | #1B4F72 | Headers, primary buttons, footer |
| `secondary` (blue) | #2E86C1 | Links, secondary accents |
| `accent` (amber) | #F39C12 | CTAs, highlights |
| `light-gray` | #F2F3F4 | Section backgrounds |

Type: Calibri for marketing/print materials; the website uses a web-safe stack — check `globals.css` for the current font stack.

---

## Architecture — Request Flow

When a patient or staff member visits critcaremd.com, this is what happens:

```
Browser types critcaremd.com
        ↓
GoDaddy DNS (ns11/ns12.domaincontrol.com) returns:
  - A @ → 216.150.1.1 (Vercel's edge IP)
  - CNAME www → 69ab976768f4d89e.vercel-dns-017.com. (Vercel)
        ↓
Vercel edge receives request, terminates TLS with a Let's Encrypt cert
        ↓
Vercel serves the Next.js site — static assets from CDN, dynamic routes and /api/* via serverless functions
        ↓
Browser renders HTML/CSS/JS — provider data, pages, etc.
```

Email to anyone @critcaremd.com follows a separate path:

```
Sender's mail server queries DNS for MX record at critcaremd.com
        ↓
GoDaddy DNS returns: MX → critcaremd-com.mail.protection.outlook.com
        ↓
Message is delivered to Microsoft 365 (Exchange Online)
```

---

## Services & What Each One Does

### Vercel — **Website hosting**
Hosts the built Next.js site and serves it globally via CDN. Handles TLS termination with an automatically-renewed Let's Encrypt certificate. Auto-deploys on every push to the `main` branch of the GitHub repo. Hosts both production (`critcaremd.com` + `www.critcaremd.com`) and staging (`preview.critcaremd.com`).

**Why it's here:** Vercel is purpose-built for Next.js. Zero-configuration deployment, free SSL, global CDN, instant rollbacks. Replaces the much slower and more fragile WordPress/cPanel setup.

### GoDaddy — **Domain registration**
Owns the legal registration of `critcaremd.com`. Renews annually (~$20/yr). This is an essential, ongoing expense — without this the domain lapses and someone else can claim it.

**Why it's here:** Domain was originally registered here and there's no current reason to transfer it. Could eventually be moved to Cloudflare Registrar or similar for cost savings, but not a priority.

### GoDaddy — **DNS hosting (nameservers)**
Serves the DNS records that map hostnames to IPs and services. The nameservers are `ns11.domaincontrol.com` and `ns12.domaincontrol.com`. Free, bundled with the domain registration. This is where the A record (pointing to Vercel), the CNAME for www (pointing to Vercel), the MX records (pointing to Microsoft 365), and SPF/DKIM/DMARC records live.

**Why it's here:** Bundled with the registration and working correctly. Could move to Vercel DNS or Cloudflare for marginal speed improvements, but not a priority. **Warning:** GoDaddy has been known to silently overwrite these records when hosting plans are disconnected — see Incident History below.

### GitHub — **Source code repository**
Stores the Next.js project code at `ccpsa-web/ccpsa-website`. Every edit — whether from a developer in code or a content editor via Decap CMS — becomes a git commit here. Pushes to `main` trigger production deploys; pushes to `staging` trigger preview deploys.

**Why it's here:** Vercel integrates natively with GitHub for deploys. Also serves as version history and backup — every change is permanent and recoverable.

### Sveltia CMS — **Content editing interface**
A web-based admin panel at `/admin/` that lets non-technical staff edit page content (provider bios, locations, services, etc.) without touching code. Sveltia (a Decap-compatible fork) reads and writes JSON/Markdown files in the GitHub repo. Authentication is via GitHub OAuth — editors need to be collaborators on the repo.

**Why it's here:** Staff need to update content without developer involvement. Sveltia is free, self-hosted (lives in the same repo), and version-controls every edit.

### Microsoft 365 — **Email**
Handles all email at @critcaremd.com addresses. MX records at GoDaddy DNS point to `critcaremd-com.mail.protection.outlook.com`. SPF (`v=spf1 include:spf.protection.outlook.com -all`), DKIM (`selector1._domainkey`, `selector2._domainkey`), DMARC, and Autodiscover are all configured and active.

**Why it's here:** Pre-existing practice-wide email system. Nothing about the website migration touched email.

### GoDaddy Web Hosting Economy — **Dormant, expiring 11/27/2027**
Old cPanel/Apache/PHP 5.6/WordPress hosting that ran the prior version of the site. As of April 16, 2026, its primary domain was swapped from `critcaremd.com` to `old.critcaremd.com`, which unbinds it from serving the public site. Set to not auto-renew.

**Why it's still here (barely):** Keeping it alive until expiry lets us recover any historical content from the old WordPress install if needed. Files are still on the server but no longer reachable via any public URL.

---

## Website Components (inside the repo)

### Pages — `src/app/`
Uses Next.js App Router. Each folder is a route.
- `src/app/page.tsx` — Homepage
- `src/app/our-team/` — Provider directory
- `src/app/contact/` — Contact and locations
- Similar pattern for other routes

### Components — `src/components/`
Shared React components (headers, footers, cards, etc.). Referenced by the pages.

### Content — `content/providers/*.json`
One JSON file per provider. Edited via Decap CMS. Providers can belong to multiple category groups via a `categories` array (e.g., a physician who is both executive team and critical care).

### Content loading — `src/lib/content.ts`
Server-side logic that reads the JSON content files at build time and passes the data to React components.

### Styling — Tailwind CSS
Configured in `tailwind.config.ts`. Uses CCPSA brand colors: navy `#1B4F72`, blue `#2E86C1`, amber `#F39C12`, light gray `#F2F3F4`. Calibri font.

### Admin — `public/admin/`
Static HTML + JavaScript that loads **Sveltia CMS** (not Decap — Sveltia is a Decap-compatible fork). The CMS UI talks to GitHub via OAuth to read and commit content changes.

**IMPORTANT — where the admin config lives:** The admin configuration is a JavaScript object literal **inline in `public/admin/index.html`**, passed via `CMS.init({ config: {...} })` with `load_config_file: false`. The file `public/admin/config.yml` is **NOT USED** at runtime — it exists only as a historical artifact. Edit `index.html` to change admin behavior.

To validate the inline config parses after edits:
```
node -e "global.window={location:{origin:'x'}};const m=require('fs').readFileSync('public/admin/index.html','utf8').match(/CMS\.init\((\{[\s\S]*?\})\);\s*\}/);eval('('+m[1]+')');console.log('OK')"
```

**Site-wide editable settings** — the Footer and Header read from `content/settings/footer.json` and `content/settings/header.json` (loaded via `getSettings()` in `src/lib/content.ts`). These are exposed in the admin UI under the "Site Settings" collection.

**OAuth authentication:** The admin uses a custom GitHub OAuth flow via two Next.js API routes: `src/app/api/auth/route.ts` (initiates the flow) and `src/app/api/callback/route.ts` (exchanges code for token). It requires two env vars on Vercel: `OAUTH_GITHUB_CLIENT_ID` and `OAUTH_GITHUB_CLIENT_SECRET`.

GitHub OAuth Apps require **exact host match** on the Authorization callback URL, so **each environment needs its own OAuth app**:
- Production OAuth app — callback `https://critcaremd.com/api/callback`, env vars scoped to Production on Vercel.
- Preview OAuth app (`CCPSA Admin Preview`) — callback `https://preview.critcaremd.com/api/callback`, env vars scoped to Preview on Vercel.

If you see "The redirect_uri is not associated with this application" on GitHub during admin login, the env vars are serving the wrong OAuth app's credentials for that environment. Fix: verify each env var's scope is set to exactly one environment, with the correct Client ID/Secret for that environment's OAuth app.

---

## Deploy Process

All deploys go through shell scripts in the project root. Never use raw `git add`/`git commit` — the scripts enforce explicit file lists to prevent accidental commits.

**Preview deploy** (test on preview.critcaremd.com before going live):
```
cd ~/Documents/Claude/Projects/Website/ccpsa-nextjs-project && ./preview.sh "description" file1 file2
```

**Production deploy** (after preview is confirmed good):
```
cd ~/Documents/Claude/Projects/Website/ccpsa-nextjs-project && ./golive.sh
```

**Direct production deploy** (skip preview — use sparingly):
```
cd ~/Documents/Claude/Projects/Website/ccpsa-nextjs-project && ./deploy.sh "description" file1 file2
```

Every script pushes to GitHub, which triggers Vercel's auto-deploy. Build and deploy typically completes in 2–3 minutes.

### Deploy script gotchas

- **Start from a clean working tree.** `preview.sh` and `golive.sh` switch branches (`git checkout main`/`staging`). Git refuses to switch branches when uncommitted changes to tracked files would be overwritten, so the deploy aborts. Commit or `git stash` anything unrelated to the deploy before running. As of June 2026 the scripts run a preflight that detects stray tracked changes and aborts with a clear message naming them.
- **The scripts now fail loudly.** They previously used `2>/dev/null` with `set -e`, so a failed `git checkout` exited the script with *no output at all* — it looked like nothing happened. They now use `set -euo pipefail` plus an `ERR` trap that prints the failing line and the likely cause. If a deploy "does nothing," read the printed message; it will tell you what to fix.
- **Stale `.git/index.lock`.** An interrupted git command can leave `.git/index.lock`, which makes the next git command fail with `error: could not write index`. All three scripts `rm -f` it on startup; if you hit it outside the scripts, run `rm -f .git/index.lock` manually.
- **Don't commit build artifacts.** `tsconfig.tsbuildinfo` regenerates on every build and was previously tracked, so it showed as modified constantly and repeatedly blocked branch switches. It is now gitignored (`*.tsbuildinfo`) and untracked, along with `.DS_Store`.
- **`staging` is normally an ancestor of `main`** (it gets fast-forwarded up to main inside `preview.sh`). If you find them diverged, that's a sign a prior deploy was interrupted partway.

---

## DNS Configuration (current correct state)

At GoDaddy DNS (ns11/ns12.domaincontrol.com):

**Website-critical records:**
- `A @ → 216.150.1.1` (Vercel)
- `CNAME www → 69ab976768f4d89e.vercel-dns-017.com.` (Vercel)
- `CNAME preview → 69ab976768f4d89e.vercel-dns-017.com.` (Vercel — staging)

**Email-critical records (Microsoft 365):**
- `MX @ → critcaremd-com.mail.protection.outlook.com` (priority 0)
- `TXT @ → v=spf1 include:spf.protection.outlook.com -all`
- `CNAME autodiscover → autodiscover.outlook.com.`
- `CNAME selector1._domainkey → selector1-critcaremd-com._domainkey.critcaremd.onmicrosoft.com.`
- `CNAME selector2._domainkey → selector2-critcaremd-com._domainkey.critcaremd.onmicrosoft.com.`
- `TXT _dmarc → v=DMARC1; p=none`

**Other operational records:** Lync/Teams SIP records, Intune enrollment CNAMEs, VPN A records for `lakevpn`/`parkvpn`/`remote`/`server`/`intranet`.

**Residual stale records** (harmless, can clean up later): `admin.old`, `mail.old`, `old`, `webdisk.old`, `webdisk.admin.old`, `whm.old`, `www.admin.old` — all artifacts of the April 16 hosting disconnect, pointing to the now-dormant old server.

---

## Admin Portal (Content Editing)

**URL:** https://critcaremd.com/admin/
**Login:** GitHub account (OAuth)

To add a new content editor:
1. Go to https://github.com/ccpsa-web/ccpsa-website/settings/access
2. Click "Add people"
3. Enter their GitHub username or email and confirm
4. Because this is a personal GitHub account (not an organization), there is **no role selector** — all direct collaborators get push access automatically. The branch-protection rules on `main` and `staging` keep them from pushing straight to production.
5. GitHub emails them an invite; once accepted, they can log in at `/admin/`

---

## Credentials & Access Points

- **GoDaddy account:** Darren's login. Manages domain + DNS + old hosting.
- **Vercel:** Darren's account `dboe-2499`, team `ccpsa`.
- **GitHub account:** `ccpsa-web` is a personal user account (NOT an organization). Collaborators automatically get write access; there's no role selector in the collaborators UI.
- **Microsoft 365 admin:** Separate practice-wide login.

---

## Incident History / Known Gotchas

### April 16, 2026 — GoDaddy silently overwrote DNS during hosting disconnect
**What happened:** While unbinding the dormant WordPress hosting from critcaremd.com, GoDaddy's chat support applied a "Parked" DNS template as an undisclosed side effect. This overwrote the root A record (from `216.150.1.1` to "Parked", which resolved to AWS parking IPs 15.197.148.33 / 3.33.130.190) and the www CNAME (from Vercel to `critcaremd.com`). Site went down with `ERR_SSL_UNRECOGNIZED_NAME_ALERT` for approximately 60–90 minutes.

**Resolution:** Restored both records manually via GoDaddy's DNS panel. DNS and SSL auto-provisioning completed within ~15 minutes. Vercel support was helpful in detecting the wrong IPs, which pointed back to GoDaddy as the cause.

**Lesson:** Any time a GoDaddy hosting action is performed on a domain actively pointing elsewhere, immediately verify DNS records afterward. Snapshot the DNS panel first.

### April 16, 2026 — Admin portal bookmark confusion
**What happened:** Staff typing `/admin/` were being redirected to `/wp-admin/` because they were hitting the old WordPress server via stale DNS caches. Additionally, an active A record for `admin.critcaremd.com` pointed directly to the old cPanel IP, routing anyone with that bookmark to the old WP admin login.

**Resolution:** Deleted the `admin.critcaremd.com` and `mail.critcaremd.com` A records. Disconnected the old hosting from critcaremd.com. New admin at `/admin/` (Decap) is the only admin path that resolves.

### Testing commands worth remembering
- Check what a domain actually resolves to on your Mac: `ping -c 1 critcaremd.com`
- Test a specific server directly without DNS: `curl -Iv --resolve critcaremd.com:80:<IP> http://critcaremd.com`
- Check DNS globally: `https://dnschecker.org/#A/critcaremd.com`

---

## What's Pending / Future Work

- **Lower root A record TTL to 600s at GoDaddy** (currently longer). Makes future DNS changes propagate in minutes instead of hours. 1-minute task in the GoDaddy DNS panel.
- **Clean up residual `.old` DNS records** at GoDaddy (cosmetic; harmless as-is).
- **Send staff note** announcing the new `/admin/` URL so content editors update bookmarks. (Drafted but not yet sent as of 2026-04-17.)
- **Consider moving DNS or registrar** away from GoDaddy if their silent DNS template issue reoccurs. Cloudflare is a strong alternative.

---

## Rollback Procedure (if something breaks)

If the new site breaks and the old site needs to come back temporarily:
1. At GoDaddy DNS: change A `@` from `216.150.1.1` to `107.180.114.47` (old server IP)
2. At GoDaddy DNS: change CNAME `www` to `critcaremd.com.`
3. At GoDaddy hosting: swap the primary domain back from `old.critcaremd.com` to `critcaremd.com`

This is only a stopgap — the old WordPress is a decade-old install and shouldn't be used long-term.

---

## Key Contacts

- **Vercel support:** vercel.com/help (chat)
- **GoDaddy support:** 480-505-8877 (phone) or chat from the hosting dashboard
- **Microsoft 365 admin:** through Microsoft admin portal
