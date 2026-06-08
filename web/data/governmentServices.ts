import type { GovernmentService } from "@/lib/types";

/**
 * 資料來源：社會福利署、立法會答覆。
 * ⚠️ 名額與輪候時間屬「查證時點快照」（多為截至 2022-03-31 / 2021-22 年度官方數字），
 *    會隨時間變動，最新數字請見 data.gov.hk 每月更新資料集。
 */
export const WAITING_NOTE =
  "名額與輪候時間為官方公開的查證時點數字（多為截至 2022 年 3 月／2021-22 年度），會隨時間變動，最新數字請參閱 data.gov.hk。";

export const GOVERNMENT_SERVICES: GovernmentService[] = [
  {
    id: "oprs",
    name: "到校學前康復服務",
    nameEn: "On-site Pre-school Rehabilitation Services",
    abbr: "OPRS",
    tagline: "跨專業團隊走入幼稚園，校本支援孩子、家長與老師",
    provider: "社會福利署（由非政府機構營辦跨專業服務隊）",
    eligibility:
      "就讀參與計劃的幼稚園／幼稚園暨幼兒中心，經評估為輕度殘疾或懷疑有特殊需要（6 歲以下）的兒童，及其家長／照顧者與教師",
    mode: "校本到校 · 綜合模式",
    highlights: [
      "跨專業服務隊：職業／物理／言語治療師、臨床或教育心理學家、社工、特殊幼兒工作員",
      "在孩子熟悉的幼稚園環境內提供訓練，減少抽離",
      "同時支援家長與教師，提升日常照顧與教學能力",
      "分第一層（懷疑／邊緣個案）與第二層綜合服務；另設基本服務作輪候過渡",
    ],
    howToApply:
      "第二層綜合服務：經社工轉介至社署「康復服務中央轉介系統」。第一層／基本服務：可直接向參與計劃的幼稚園或服務隊申請。",
    fee: "免費（除幼稚園原有學費外，無額外費用）",
    waiting: "輪候約 2,703 人、平均約 4.3 個月（截至 2022-03-31／2021-22 年度）",
    confidence: "high",
    sources: [
      { label: "社會福利署 — 到校學前康復服務", url: "https://www.swd.gov.hk/oprs/index_tc.htm", checkedAt: "2026-06" },
      { label: "立法會答覆（名額與輪候，2022-12-14）", url: "https://www.info.gov.hk/gia/general/202212/14/P2022121400203.htm", checkedAt: "2026-06" },
    ],
  },
  {
    id: "eetc",
    name: "早期教育及訓練中心",
    nameEn: "Early Education and Training Centre",
    abbr: "EETC",
    tagline: "初生至 6 歲的早期介入，把握黃金訓練期",
    provider: "社會福利署資助 · 康復服務單位營辦",
    eligibility: "初生至 6 歲以下、未開始接受小學教育的殘疾幼兒",
    mode: "中心為本 · 早期介入",
    highlights: [
      "及早介入，把握 0-6 歲發展黃金期",
      "為幼兒提供發展訓練，並指導家長在家延續訓練",
      "適合正等候其他服務、或需要早期支援的幼兒",
    ],
    howToApply:
      "經社工或康復服務單位人員轉介至社署「康復服務中央轉介系統」。",
    fee: "每年基本費用約 HK$148（申請程序本身免費）",
    waiting: "輪候約 1,258 人、平均約 5.4 個月（截至 2022-03-31／2021-22 年度）",
    confidence: "medium",
    sources: [
      { label: "社會福利署 — 早期教育及訓練中心", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/earlyeduca/", checkedAt: "2026-06" },
      { label: "立法會答覆（名額與輪候，2022-12-14）", url: "https://www.info.gov.hk/gia/general/202212/14/P2022121400203.htm", checkedAt: "2026-06" },
    ],
  },
  {
    id: "sccc",
    name: "特殊幼兒中心",
    nameEn: "Special Child Care Centre",
    abbr: "SCCC",
    tagline: "為中度至嚴重需要的幼兒提供全日制密集訓練與照顧",
    provider: "社會福利署資助 · 康復服務單位營辦（全日制）",
    eligibility:
      "2 至 6 歲以下、未入小學，有中度或嚴重智障／肢體傷殘／聽覺或視覺受損／自閉症或嚴重行為情緒問題的兒童",
    mode: "中心為本 · 全日制",
    highlights: [
      "發展評估、個別及小組訓練",
      "職業治療、物理治療、言語治療",
      "幼兒護理、家長服務、心理輔導、暫託服務",
    ],
    howToApply:
      "經社工或康復服務單位人員轉介至社署「康復服務中央轉介系統」。",
    fee: "學費全免（校巴接載按營辦機構政策收費）",
    waiting:
      "輪候因中心而異（不設全港平均）。可按分區查看各中心「最後獲篩選個案的申請日期」，採用社署 2026-04-30 最新逐間數據。",
    confidence: "high",
    sources: [
      { label: "社會福利署 — 特殊幼兒中心", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/specialchi/", checkedAt: "2026-06" },
      { label: "社署 — 特殊幼兒中心最後獲篩選個案的申請日期（2026-04-30）", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/specialchi/", checkedAt: "2026-06" },
    ],
  },
  {
    id: "ip",
    name: "幼稚園暨幼兒中心兼收計劃",
    nameEn: "Integrated Programme in Kindergarten-cum-Child Care Centre",
    abbr: "IP",
    tagline: "在主流幼稚園環境中，為輕度殘疾幼兒提供訓練照顧",
    provider: "普通幼稚園暨幼兒中心（社署資助）",
    eligibility:
      "2 至 6 歲以下輕度殘疾幼兒（輕度智障、輕度肢體傷殘且無嚴重行動問題、輕度或中度聽覺／視覺受損）",
    mode: "主流融合 · 中心為本",
    highlights: [
      "在普通幼稚園暨幼兒中心的主流環境中學習與成長",
      "提供適切訓練與照顧，促進融合",
      "由地區言語治療隊提供支援",
    ],
    howToApply:
      "經社工或康復服務單位人員轉介至社署「康復服務中央轉介系統」。",
    fee: "除幼稚園暨幼兒中心原有收費外，無額外費用",
    waiting: "輪候約 541 人、平均約 6.3 個月（截至 2022-03-31／2021-22 年度）",
    confidence: "high",
    sources: [
      { label: "社會福利署 — 兼收弱能兒童計劃", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/integrated2/", checkedAt: "2026-06" },
      { label: "立法會答覆（名額與輪候，2022-12-14）", url: "https://www.info.gov.hk/gia/general/202212/14/P2022121400203.htm", checkedAt: "2026-06" },
    ],
  },
];
