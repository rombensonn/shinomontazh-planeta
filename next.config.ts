import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: "/shinomontazh-planeta",
        assetPrefix: "/shinomontazh-planeta/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
