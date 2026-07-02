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
  "/cas",
  "/sensory",
  "/brain",
  "/milestones",
  "/odd",
  "/understanding",
  "/intelligences",
  "/ot-confidence",
  "/tcm",
  "/journey",
  "/pathways",
  "/special-schools",
  "/training-methods",
  "/directory",
  "/heephong-asd",
  "/match",
  "/parents",
  "/prc",
  "/planner",
  "/faq",
  "/consult",
  "/resources",
  "/podcast",
];
