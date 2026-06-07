// 站台正式網址（部署後以環境變數覆寫）
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://sen-navigator.vercel.app";

export const ROUTES = [
  "",
  "/services",
  "/grading",
  "/journey",
  "/directory",
  "/match",
  "/planner",
  "/faq",
  "/consult",
  "/resources",
];
