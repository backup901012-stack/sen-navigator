import type { NextConfig } from "next";

// GitHub Pages 靜態部署：由 workflow 設 PAGES_EXPORT=1 + BASE_PATH=/sen-navigator
const isPages = process.env.PAGES_EXPORT === "1";
// 接受帶或唔帶前導斜線（避免 Git Bash MSYS 路徑轉換問題）
const rawBase = process.env.BASE_PATH || "";
const basePath = rawBase ? "/" + rawBase.replace(/^\/+/, "").replace(/\/+$/, "") : "";

const nextConfig: NextConfig = {
  ...(isPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath || undefined,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
