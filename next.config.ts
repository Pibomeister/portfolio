import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['three'],
  images: {
    localPatterns: [
      {
        pathname: '/**',
        // search omitted — allows query strings for cache busting (e.g. ?v=2)
      },
    ],
  },
};

export default nextConfig;
