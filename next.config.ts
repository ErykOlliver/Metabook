import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.superherodb.com',
        port: '',
        pathname: '/pictures2/**',
      },
    ]
  },
};

export default nextConfig;
