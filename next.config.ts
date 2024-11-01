import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Ensures Next.js uses static export mode
  images: {
    unoptimized: true, // Disables image optimization (required for static exports)
  },
  basePath: '/next_app_layout', // Replace 'project-name' with your repository name
  assetPrefix: '/next_app_layout', // Ensures assets are loaded from the correct path
};

export default nextConfig;
