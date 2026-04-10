# Painless Dental — Islamabad

Premium, mobile-first marketing site for **Painless Dental and Medical Clinic** (Next.js App Router, Tailwind CSS v4, Framer Motion).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Static build

This project uses **`output: "export"`** so `next build` writes a fully static site to **`out/`** (no Node server required). Images use **`images.unoptimized: true`** so remote Unsplash URLs work without the Next.js image optimizer.

```bash
npm run build
```

Preview the export locally:

```bash
npx serve out
```

## Cloudflare Pages (Git integration)

Use a **Pages** project (not a Workers-only deploy). After `npm run build`, Cloudflare should **publish the `out/` folder only**.

| Setting | Value |
|--------|--------|
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Deploy command** | *(leave **empty** — do not set this)* |

**Important:** Do **not** run `npx wrangler deploy`. That targets **Workers** and will fail with “Missing entry-point” for this repo. There is **no** separate deploy step for static Pages: the platform uploads `out/` after a successful build.

If your project currently has **Deploy command** set to `npx wrangler deploy`, **remove it**, save, and redeploy.

**Environment variables:** set `NEXT_PUBLIC_SITE_URL` to your live URL (e.g. `https://<project>.pages.dev` or your custom domain) for correct Open Graph / canonical URLs.

### Optional: deploy from your machine

After `npx wrangler login`:

```bash
npm run pages:deploy
```

This runs `wrangler pages deploy out` (not `wrangler deploy`). Change `--project-name` in `package.json` if your Pages project name differs.

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical / Open Graph base URL (`metadataBase` in `app/layout.tsx`). |

Copy `.env.example` to `.env.local` for local overrides.
