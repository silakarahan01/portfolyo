import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Screenshot'lar public/screenshots/ altında yerel olduğu için remotePatterns gerekmez.
    // Gerekirse ileride buraya domain eklenebilir.
    unoptimized: false,
  },
};

export default nextConfig;
