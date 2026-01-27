# Deploying to Cloudflare Pages

Your project is now fully configured for Cloudflare Pages!

## Method 1: Automatic Deployment (Recommended)
This method connects Cloudflare directly to your GitHub repository.

1.  Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Go to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
3.  Select the repository: `tardigradesfinance/trdg-token`.
4.  **Build Settings**:
    *   **Framework Preset**: Next.js (Static HTML Export) OR None (recommended for dynamic apps using the adapter).
    *   **Build Command**: `npx @cloudflare/next-on-pages` (We added this script as `npm run pages:build`).
    *   **Output Directory**: `.vercel/output/static`.
    *   **Node.js Version**: Set the Environment Variable `NODE_VERSION` to `20` (or compatible version).
    *   **Compatibility Flags**: You may need `nodejs_compat`.

## Method 2: Wrangler CLI (Direct Upload)
This is the "Wrangler method" you asked about. It uploads your built site directly from your computer.

1.  Run the build and deploy command we added:
    ```bash
    npm run pages:deploy
    ```
2.  Authorized `wrangler` will open a browser window to log you in.
3.  It will create a new Pages project (or ask you to select one) and upload your site.
