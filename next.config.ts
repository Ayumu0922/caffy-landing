import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Redirect old Caffy URLs to new paths
      {
        source: "/privacy",
        destination: "/apps/caffy/privacy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/apps/caffy/terms",
        permanent: true,
      },
      {
        source: "/legal/tokushoho",
        destination: "/apps/caffy/legal/tokushoho",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
