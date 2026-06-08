// 站台正式網址（部署後以環境變數覆寫）
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://backup901012-stack.github.io/sen-navigator";

export const ROUTES = [
  "",
  "/screening",
  "/services",
  "/sccc",
  "/grading",
  "/sensory",
  "/brain",
  "/journey",
  "/directory",
  "/heephong-asd",
  "/match",
  "/planner",
  "/faq",
  "/consult",
  "/resources",
];
