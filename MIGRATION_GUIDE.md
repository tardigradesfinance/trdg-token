# Migration Status: Vercel Blob to Cloudflare

This repository has been migrated from using Vercel Blob Storage to using local assets (for Cloudflare Pages compatibility).

## ⚠️ Important: Missing Assets

Because the Vercel Blob storage was inaccessible at the time of migration, **40 media files (images/videos) are currently missing from the repository.**

In the code, these files are referenced with a `MISSING_` prefix in the `/images/` folder. For example:
`/images/MISSING_Audit-RW9ODM1CMtUTEviDtu46efiKypSwzl.mp4`

### How to Fix

1.  **Locate the original files** from your local backups or other sources.
2.  **Move them** into the `public/images/` folder.
3.  **Rename/Update them** to match the implementation.

You can modify the code to point to the correct filenames you find. For example, if you find the audit video and name it `audit.mp4`:
-   Go to `components/utility.tsx` (or search the codebase)
-   Refactor `/images/MISSING_Audit-...mp4` to `/images/audit.mp4`

## Assets Manifest

See `missing-assets.json` for the full list of files that failed to download.

## Deployment

This site is now a standard Next.js static/hybrid app. 
To deploy to Cloudflare Pages:
1.  Connect this repo to Cloudflare Pages.
2.  Build Command: `npm run build` (or `next build`)
3.  Output Directory: `out` (if static export) or leave default if using Cloudflare's Next.js adapter.
