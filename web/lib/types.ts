// ============================================================
// SEN 小孩導航員 — 資料模型
// ============================================================

/** 資料來源標註（零幻覺鐵律：每筆事實須可追溯） */
export interface SourceRef {
  /** 來源機構/網站名稱 */
  label: string;
  /** 來源連結 */
  url: string;
  /** 查證日期 e.g. "2026-06" */
  checkedAt: string;
}

/** 資料可信度 */
export type Confidence = "high" | "medium" | "pending";

// ------------------------------------------------------------
// 政府學前康復服務
// ------------------------------------------------------------
export interface GovernmentService {
  id: string;
  /** 中文全名 */
  name: string;
  /** 英文全名 */
  nameEn: string;
  /** 常用簡稱 e.g. OPRS */
  abbr?: string;
  /** 一句話定位 */
  tagline: string;
  /** 提供/統籌機構 e.g. 社會福利署 */
  provider: string;
  /** 服務對象與年齡 */
  eligibility: string;
  /** 服務形式（到校 / 中心 / 半日 / 全日） */
  mode: string;
  /** 服務內容重點 */
  highlights: string[];
  /** 申請/輪候方式 */
  howToApply: string;
  /** 是否免費 / 收費說明 */
  fee: string;
  /** 輪候情況（須有來源，否則 pending） */
  waiting?: string;
  confidence: Confidence;
  sources: SourceRef[];
}

// ------------------------------------------------------------
// SEN 類別 / 常見發展需要
// ------------------------------------------------------------
export interface SenCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string; // emoji 或簡單符號
  summary: string;
  /** 常見表徵 */
  signs: string[];
  /** 相關支援方向 */
  supportFocus: string[];
  sources: SourceRef[];
}

// ------------------------------------------------------------
// 申請流程步驟
// ------------------------------------------------------------
export interface JourneyStep {
  step: number;
  title: string;
  who: string; // 負責部門/角色
  what: string;
  tips?: string[];
  links?: { label: string; url: string }[];
}

// ------------------------------------------------------------
// 自費機構訓練課程（類別）
// ------------------------------------------------------------
export interface PrivateCourseCategory {
  id: string;
  name: string;
  nameEn: string;
  icon: string;
  summary: string;
  /** 適合對象 */
  suitableFor: string[];
  /** 一般收費區間（無公開來源則註明） */
  feeRange: string;
  feeNote?: string;
  confidence: Confidence;
  sources: SourceRef[];
}

// ------------------------------------------------------------
// 資源目錄項目（政府 + 自費 + NGO 統一卡片）
// ------------------------------------------------------------
export type ResourceType = "government" | "ngo" | "private" | "assessment" | "hotline";
export type ResourceFunding = "free" | "subsidised" | "self-pay" | "mixed";

export interface ResourceItem {
  id: string;
  name: string;
  type: ResourceType;
  funding: ResourceFunding;
  /** 服務範疇標籤 e.g. 言語治療、ASD、評估 */
  tags: string[];
  /** 適合年齡 */
  ageGroup: string;
  description: string;
  region?: string;
  url?: string;
  phone?: string;
  confidence: Confidence;
  sources: SourceRef[];
}

// ------------------------------------------------------------
// 服務配對問卷
// ------------------------------------------------------------
export interface MatchOption {
  value: string;
  label: string;
}
export interface MatchQuestion {
  id: string;
  question: string;
  help?: string;
  multi?: boolean;
  options: MatchOption[];
}

// ------------------------------------------------------------
// FAQ
// ------------------------------------------------------------
export interface FaqItem {
  id: string;
  q: string;
  a: string;
  category: string;
  sources?: SourceRef[];
}

// ------------------------------------------------------------
// 規劃清單項目（localStorage）
// ------------------------------------------------------------
export interface PlanItem {
  id: string;
  title: string;
  kind: "service" | "course" | "step" | "resource";
  note?: string;
  done: boolean;
  addedAt: number;
}
