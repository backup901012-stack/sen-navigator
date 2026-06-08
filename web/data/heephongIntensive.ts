// 協康會 青蔥計劃 — 學前自閉症兒童密集式訓練服務 2025-2026 年度一覽表（自費）
// 來源：協康會官方 PDF（slp.heephong.org），查證 2026-06
// ⚠️ 收費與班別會變動，完整逐間時間表/地址以協康會官方一覽表為準。

export const HEEPHONG_ASD = {
  org: "協康會 青蔥計劃",
  title: "學前自閉症兒童密集式訓練服務",
  year: "2025-2026 年度",
  approach: "以 TEACCH（結構化教學）為基礎，結合 SCERTS 策略，提升社交溝通、情緒調控及共同協作能力。",
  target: "已評估為自閉症或有自閉症傾向的學前兒童（約 2 至 5 歲）",
  note: "部分班別可額外選購職業治療、言語治療等個別治療服務（另收費）。",
  sourceLabel: "協康會 — 學前自閉症兒童密集式訓練服務 2025-2026 一覽表（PDF）",
  sourceUrl: "https://slp.heephong.org/cht/files/training/1211/MAS%202025%20JUN.pdf",
  enquiryLabel: "協康會 青蔥計劃",
  enquiryUrl: "https://slp.heephong.org/cht/individual-assessment-and-training",
};

export interface HhClass {
  format: string;     // 班別形式
  monthlyFee: string; // 每月收費
  note?: string;
}
export interface HhSeries {
  name: string;
  age: string;
  classes: HhClass[];
}

export const HEEPHONG_SERIES: HhSeries[] = [
  {
    name: "伴我童樂",
    age: "2-3 歲",
    classes: [
      { format: "四日班", monthlyFee: "每月港幣 $9,900" },
      { format: "三日班", monthlyFee: "每月港幣 $9,000" },
      { format: "三日班", monthlyFee: "每月港幣 $7,200", note: "不含治療師服務的選項（部分中心）" },
    ],
  },
  {
    name: "伴我童行 — 基礎訓練",
    age: "2-3 歲",
    classes: [
      { format: "五日班", monthlyFee: "每月港幣 $9,100" },
      { format: "四日班", monthlyFee: "每月港幣 $8,700" },
      { format: "三日班", monthlyFee: "每月港幣 $7,200" },
      { format: "兩日班（每堂約 2.5 小時）", monthlyFee: "每月港幣 $5,600" },
      { format: "兩日班（每堂約 2 小時）", monthlyFee: "每月港幣 $4,600" },
    ],
  },
  {
    name: "伴我童行 — 高階訓練",
    age: "4-5 歲",
    classes: [
      { format: "兩日班（每堂約 2.5 小時）", monthlyFee: "每月港幣 $5,600" },
    ],
  },
];

export interface HhCentre {
  name: string;
  district: string;
}

// 參與中心（名稱與所屬區；個別班別於哪間開辦、確切時間及地址，請以官方一覽表為準）
export const HEEPHONG_CENTRES: HhCentre[] = [
  { name: "大坑東東滿中心", district: "深水埗" },
  { name: "太子中心", district: "深水埗" },
  { name: "林護紀念基金兒童發展中心", district: "九龍城（何文田）" },
  { name: "藍田宏利兒童資源中心", district: "觀塘（藍田）" },
  { name: "星籽才藝學校", district: "元朗" },
  { name: "馬鞍山中心", district: "沙田（馬鞍山）" },
  { name: "慧妍雅集石門中心", district: "沙田（石門）" },
  { name: "屯門帝國中心", district: "屯門" },
  { name: "屯門柏麗中心", district: "屯門" },
  { name: "粉嶺家長資源中心", district: "北區（粉嶺）" },
];
