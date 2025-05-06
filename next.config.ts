import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/portfolio",
        destination: "/",
        permanent: false,
      },
      {
        source: "/portfolio/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
