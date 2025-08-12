import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide Next.js debugger and development features
  reactStrictMode: false,
  swcMinify: true,
  // Disable development features in production
  ...(process.env.NODE_ENV === 'production' && {
    devIndicators: {
      buildActivity: false,
      buildActivityPosition: 'bottom-right',
    },
  }),
  // Disable source maps in production for cleaner builds
  ...(process.env.NODE_ENV === 'production' && {
    productionBrowserSourceMaps: false,
  }),
};

export default nextConfig;
