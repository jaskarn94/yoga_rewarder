import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/yoga_rewarder",
  assetPrefix: "/yoga_rewarder/",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
