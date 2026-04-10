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

## Cloudflare Pages

1. In the [Cloudflare dashboard](https://dash.cloudflare.com/) go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git** and select this repository.
2. **Framework preset:** None (or Static).
3. **Build command:** `npm run build`
4. **Build output directory:** `out`
5. **Environment variables:** add `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://painless.pages.dev` or your custom domain).

Optional **CLI** deploy (after `npx wrangler login`):

```bash
npm run pages:deploy
```

`wrangler.toml` sets `pages_build_output_dir = "out"` for Wrangler-based uploads.

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical / Open Graph base URL (`metadataBase` in `app/layout.tsx`). |

Copy `.env.example` to `.env.local` for local overrides.
