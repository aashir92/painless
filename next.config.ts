import type { NextConfig } from "next";

/** Static export: deploy `out/` to Cloudflare Pages, GitHub Pages, S3, etc. */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
