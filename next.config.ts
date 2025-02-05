// import { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig: NextConfig = {
//   basePath: isProd ? '/profile-website-suhaani' : '',
//   output: 'export', // Enables static export
//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;


import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // Required for GitHub Pages
  basePath: isProd ? "/profile-website-suhaani" : "", // Change to your actual GitHub repo name
  assetPrefix: isProd ? "/profile-website-suhaani/" : "", // Ensures assets load properly
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;
