// 站台設定：導覽、品牌、5 大服務模式

export const SITE = {
  name: "SEN 小孩導航員",
  shortName: "SEN 導航員",
  tagline: "陪你走好孩子的每一步",
  description:
    "香港 SEN 兒童學前資源一站式導航：政府服務、評估流程、自費課程。",
};

export interface NavLink {
  href: string;
  label: string;
}

/** 主導覽 */
export const NAV: NavLink[] = [
  { href: "/services", label: "政府學前服務" },
  { href: "/grading", label: "評估與分級" },
  { href: "/journey", label: "申請流程" },
  { href: "/directory", label: "資源目錄" },
  { href: "/match", label: "服務配對" },
  { href: "/faq", label: "常見問題" },
];

/** 656 照顧導航員 5 大服務模式 → SEN 版對應 */
export interface ServicePillar {
  num: number;
  title: string;
  desc: string;
  href: string;
  cta: string;
  icon: string;
}

export const PILLARS: ServicePillar[] = [
  {
    num: 1,
    title: "解答查詢",
    desc: "常見問題庫 + AI 助理，即時解答家長對 SEN 服務、評估、輪候的疑問。",
    href: "/faq",
    cta: "問問題",
    icon: "💬",
  },
  {
    num: 2,
    title: "諮詢支援",
    desc: "預約導航員，由有經驗的同行者陪你梳理孩子的狀況與下一步。",
    href: "/consult",
    cta: "預約諮詢",
    icon: "🤝",
  },
  {
    num: 3,
    title: "資源規劃",
    desc: "可搜尋、可篩選的資源目錄，整合政府服務、NGO 與自費課程。",
    href: "/directory",
    cta: "瀏覽資源",
    icon: "🧭",
  },
  {
    num: 4,
    title: "服務配對",
    desc: "回答幾條問題，為孩子的年齡與需要配對合適的服務方向。",
    href: "/match",
    cta: "開始配對",
    icon: "🎯",
  },
  {
    num: 5,
    title: "紀錄跟進",
    desc: "把合適的服務加入「我的規劃清單」，逐項跟進申請進度。",
    href: "/planner",
    cta: "我的規劃",
    icon: "📋",
  },
];
