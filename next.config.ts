import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All photos are local static imports (src/assets/images); no remote hosts are allowed.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
