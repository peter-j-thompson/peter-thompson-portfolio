import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // For GitHub Pages deployment under /peter-thompson-portfolio/
  basePath: "/peter-thompson-portfolio",
  assetPrefix: "/peter-thompson-portfolio/",
};

export default nextConfig;
