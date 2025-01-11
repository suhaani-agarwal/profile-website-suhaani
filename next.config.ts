import { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? '/profile-website-suhaani' : '',
  output: 'export', // Enables static export
};

export default nextConfig;
