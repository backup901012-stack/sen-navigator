import type { PrivateCourseCategory } from "@/lib/types";

const CONSUMER = {
  label: "消費者委員會 — 言語治療服務收費調查",
  url: "https://www.consumer.org.hk/tc/article/538-speech-therapy-services/538-therapy-observation",
  checkedAt: "2026-06",
};

/**
 * ⚠️ 香港私營兒童治療沒有官方統一收費表，收費因機構、治療師資歷、時長而差異很大。
 *    言語治療收費區間以消委會 2021 年調查為可引用來源；其餘類別標「收費因機構而異」，不憑空填數字。
 *    言語治療師等註冊屬自願性質，家長應自行核實治療師資歷。
 */
export const PRIVATE_FEE_DISCLAIMER =
  "私營治療在香港沒有官方統一收費，以下金額僅供參考、實際以機構報價為準。部分專業（如言語治療師）的註冊屬自願性質，建議家長核實治療師的學歷與資格。";

export const PRIVATE_COURSES: PrivateCourseCategory[] = [
  {
    id: "speech",
    name: "言語治療",
    nameEn: "Speech Therapy",
    icon: "💬",
    summary: "針對語言發展遲緩、發音、口部肌肉及社交溝通的訓練。",
    suitableFor: ["語言發展遲緩", "發音不清", "社交溝通困難"],
    feeRange: "首次評估約 $780–$4,000；其後每次治療約 $590–$3,500",
    feeNote: "據消委會 2021 年調查（25 間機構），時長與資歷不同差異大",
    confidence: "medium",
    sources: [CONSUMER],
  },
  {
    id: "ot",
    name: "職業治療",
    nameEn: "Occupational Therapy",
    icon: "✋",
    summary: "訓練小肌肉、自理能力、書寫前技巧與專注力。",
    suitableFor: ["小肌肉發展", "自理能力", "書寫前準備", "專注力"],
    feeRange: "收費因機構而異",
    feeNote: "香港無官方統一價目，請向機構查詢",
    confidence: "pending",
    sources: [],
  },
  {
    id: "pt",
    name: "物理治療",
    nameEn: "Physiotherapy",
    icon: "🤸",
    summary: "訓練大肌肉、姿勢、平衡與動作協調。",
    suitableFor: ["大肌肉發展", "姿勢平衡", "動作協調"],
    feeRange: "收費因機構而異",
    feeNote: "香港無官方統一價目，請向機構查詢",
    confidence: "pending",
    sources: [],
  },
  {
    id: "psych-assess",
    name: "教育／臨床心理評估",
    nameEn: "Psychological Assessment",
    icon: "📋",
    summary: "發展評估、智力評估、自閉症／ADHD 評估及書面報告。",
    suitableFor: ["發展評估", "智力評估", "ASD／ADHD 評估", "申請服務報告"],
    feeRange: "詳細書面評估報告約 $2,800 起（個別機構例子）",
    feeNote: "私營評估收費視機構及評估範圍而異",
    confidence: "pending",
    sources: [],
  },
  {
    id: "aba",
    name: "ABA／行為訓練",
    nameEn: "Applied Behaviour Analysis",
    icon: "🎯",
    summary: "應用行為分析，多由具資格的行為分析師（如 BCBA）督導。",
    suitableFor: ["自閉症", "行為問題", "技能建立"],
    feeRange: "收費因機構而異",
    feeNote: "密集式訓練收費差距大，請向機構查詢",
    confidence: "pending",
    sources: [],
  },
  {
    id: "social",
    name: "社交技巧小組",
    nameEn: "Social Skills Group",
    icon: "👫",
    summary: "以小組形式進行社交溝通與情緒互動訓練。",
    suitableFor: ["社交溝通", "情緒理解", "同儕互動"],
    feeRange: "收費因機構而異",
    feeNote: "請向機構查詢",
    confidence: "pending",
    sources: [],
  },
  {
    id: "si",
    name: "感覺統合訓練",
    nameEn: "Sensory Integration",
    icon: "🌀",
    summary: "針對感覺統合失調的介入訓練。",
    suitableFor: ["感統失調", "感官敏感／遲鈍", "專注與情緒調節"],
    feeRange: "收費因機構而異",
    feeNote: "請向機構查詢",
    confidence: "pending",
    sources: [],
  },
];
