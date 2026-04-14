# CCPSA Website Go-Live Record

**Date:** April 12, 2026
**Domain:** critcaremd.com
**Hosting:** Vercel (ccpsa/ccpsa-website)

## DNS Changes Made in GoDaddy

### A Record (@ / critcaremd.com)
- **Old value:** 107.180.114.47
- **New value:** 216.150.1.1

### CNAME Record (www)
- **Old value:** critcaremd.com.
- **New value:** 69ab976768f4d89e.vercel-dns-017.com.

## Vercel Domain Configuration
- critcaremd.com — redirects to www.critcaremd.com
- www.critcaremd.com — connected to Production environment
- Both domains verified valid

## Rollback Plan
To revert to old hosting, change GoDaddy DNS back to:
- A record `@` → `107.180.114.47`
- CNAME `www` → `critcaremd.com.`

## Verification
- Email records (MX, TXT) confirmed untouched
- DNS propagation confirmed via dnschecker.org (all but one server resolved to new IP at time of cutover)
- New site confirmed live at ccpsa-website.vercel.app
