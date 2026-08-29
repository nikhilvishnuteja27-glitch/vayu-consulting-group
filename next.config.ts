import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/perspectives',
        destination: '/insights',
        permanent: true,
      },
      {
        source: '/perspectives/transformation-stalls',
        destination: '/perspectives/transformation-stall',
        permanent: true,
      },
      {
        source: '/perspectives/ai-accountability',
        destination: '/perspectives/ai-execution-accountability',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
