import type { NextConfig } from "next";

/** Static export: deploy `out/` to Cloudflare Pages, GitHub Pages, S3, etc. */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
