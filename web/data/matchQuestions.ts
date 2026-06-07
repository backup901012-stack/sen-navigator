import type { MatchQuestion } from "@/lib/types";

export const MATCH_QUESTIONS: MatchQuestion[] = [
  {
    id: "age",
    question: "孩子現時年齡？",
    options: [
      { value: "under2", label: "2 歲以下" },
      { value: "2to6", label: "2 至 6 歲（未入小學）" },
      { value: "over6", label: "6 歲或以上" },
    ],
  },
  {
    id: "assessed",
    question: "孩子有冇做過專業評估？",
    help: "例如衞生署兒童體能智力測驗服務（CAS）或私營評估。",
    options: [
      { value: "no", label: "未做過評估" },
      { value: "suspect", label: "懷疑有需要，未確診" },
      { value: "yes-mild", label: "已評估：輕度需要" },
      { value: "yes-moderate", label: "已評估：中度或嚴重需要" },
    ],
  },
  {
    id: "kindergarten",
    question: "孩子有冇返緊幼稚園／幼兒中心？",
    options: [
      { value: "yes", label: "有，已入學" },
      { value: "no", label: "未入學" },
    ],
  },
  {
    id: "needs",
    question: "你最想改善孩子邊方面？（可多選）",
    multi: true,
    options: [
      { value: "speech", label: "語言／溝通" },
      { value: "social", label: "社交／情緒" },
      { value: "behavior", label: "行為／專注" },
      { value: "motor", label: "大小肌肉／動作" },
      { value: "selfcare", label: "自理能力" },
    ],
  },
  {
    id: "budget",
    question: "現階段你傾向？",
    options: [
      { value: "gov", label: "以政府資助服務為主" },
      { value: "both", label: "政府服務 + 輪候期自費補充" },
      { value: "private", label: "想盡快開始，接受自費" },
    ],
  },
];
