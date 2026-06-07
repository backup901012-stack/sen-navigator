import type { SenCategory } from "@/lib/types";

const EDB = {
  label: "教育局 — 特殊教育需要類別",
  url: "https://sense.edb.gov.hk/tc/types-of-special-educational-needs/",
  checkedAt: "2026-06",
};
const CAS = {
  label: "衞生署 — 兒童體能智力測驗服務（服務範圍）",
  url: "https://www.dhcas.gov.hk/tc/scope.html",
  checkedAt: "2026-06",
};

/**
 * 教育局界定的 9 大特殊教育需要類別。
 * 學前階段另常見「整體發展遲緩」「語言發展遲緩」「腦麻痺」等（衞生署 CAS 列舉約 11 種）。
 * 讀寫障礙正式診斷一般待學齡後，學前多以「語言／發展遲緩」呈現。
 */
export const SEN_CATEGORIES: SenCategory[] = [
  {
    id: "asd",
    name: "自閉症譜系障礙",
    nameEn: "Autism Spectrum Disorder (ASD)",
    icon: "🧩",
    summary: "先天的發展障礙，在社交溝通、認知、情緒及行為上有不同程度困難。",
    signs: ["社交互動與溝通困難", "重複行為或固執的習慣", "對某些感官刺激特別敏感或遲鈍"],
    supportFocus: ["社交溝通訓練", "行為介入（如 ABA）", "結構化教學與視覺提示"],
    sources: [EDB, CAS],
  },
  {
    id: "adhd",
    name: "注意力不足／過度活躍症",
    nameEn: "Attention Deficit / Hyperactivity Disorder (ADHD)",
    icon: "⚡",
    summary: "專注力不足、做事欠條理，或活動量過多、行為較衝動。",
    signs: ["難以持續專注", "坐不定、活動量大", "行為衝動、難等待"],
    supportFocus: ["行為管理策略", "環境與作息結構化", "家長管教技巧"],
    sources: [EDB],
  },
  {
    id: "idd",
    name: "智力發展障礙",
    nameEn: "Intellectual Developmental Disorder",
    icon: "🌱",
    summary: "智力顯著低於一般水平，影響思維、記憶、語言、感知肌能與組織能力。",
    signs: ["學習與理解較同齡慢", "自理能力發展遲緩", "語言發展遲緩"],
    supportFocus: ["生活自理訓練", "個別化學習目標", "多感官教學"],
    sources: [EDB],
  },
  {
    id: "spld",
    name: "特殊學習困難（含讀寫障礙）",
    nameEn: "Specific Learning Difficulties (SpLD)",
    icon: "📖",
    summary: "智力正常，但在準確、流暢地閱讀及默寫字詞上有顯著困難。",
    signs: ["認字、默寫困難", "閱讀緩慢", "學前多以語言發展遲緩先呈現"],
    supportFocus: ["語言及語音意識訓練", "多感官讀寫策略", "及早語言介入"],
    sources: [EDB],
  },
  {
    id: "sli",
    name: "言語障礙",
    nameEn: "Speech and Language Impairment",
    icon: "💬",
    summary: "在發音、語言理解或表達上有困難，影響溝通。",
    signs: ["發音不清", "詞彙量少、語句短", "理解或表達指令困難"],
    supportFocus: ["言語治療", "口肌訓練", "親子溝通策略"],
    sources: [EDB],
  },
  {
    id: "pd",
    name: "肢體傷殘",
    nameEn: "Physical Disability",
    icon: "🦽",
    summary: "因肢體或神經肌肉問題，影響動作、姿勢或活動能力。",
    signs: ["大／小肌肉動作困難", "平衡或協調問題", "需要輔助器具"],
    supportFocus: ["物理治療", "職業治療", "環境無障礙調適"],
    sources: [EDB],
  },
  {
    id: "vi",
    name: "視覺障礙",
    nameEn: "Visual Impairment",
    icon: "👁️",
    summary: "視力受損，影響學習與日常活動。",
    signs: ["看近物或遠物困難", "對光線敏感", "需放大或觸覺輔助"],
    supportFocus: ["視覺輔助器材", "定向行走訓練", "教材調適"],
    sources: [EDB],
  },
  {
    id: "hi",
    name: "聽力障礙",
    nameEn: "Hearing Impairment",
    icon: "👂",
    summary: "聽力受損，影響語言發展與溝通。",
    signs: ["對聲音反應弱", "語言發展遲緩", "需助聽器或人工耳蝸"],
    supportFocus: ["聽覺及言語訓練", "助聽設備配合", "溝通模式支援"],
    sources: [EDB],
  },
  {
    id: "mi",
    name: "精神病",
    nameEn: "Mental Illness",
    icon: "💗",
    summary: "情緒或精神健康問題，影響日常生活與學習（學前較少見、多見於較大兒童）。",
    signs: ["持續情緒困擾", "行為明顯改變", "影響日常功能"],
    supportFocus: ["專業精神健康支援", "情緒輔導", "家庭支援"],
    sources: [EDB],
  },
  {
    id: "gdd",
    name: "整體發展遲緩",
    nameEn: "Global Developmental Delay",
    icon: "🧸",
    summary: "在多個發展範疇（動作、語言、認知、social）較同齡明顯落後，學前常見診斷之一。",
    signs: ["多範疇發展落後", "未達相應年齡里程碑", "需多專業評估"],
    supportFocus: ["早期介入訓練", "跨專業治療", "家長培訓"],
    sources: [CAS],
  },
];
