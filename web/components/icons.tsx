/**
 * 結構性 UI 圖示（零依賴 inline SVG、Lucide 風格、stroke 2、currentColor 可主題化）
 * 依 ui-ux-pro-max 規則：結構圖示不用 emoji（跨平台不一致、不可控色）；
 * 內容性裝飾 emoji（文案內）不在此列。
 */
import type { ReactNode, SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 24, children, ...rest }: P & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

/** 對話氣泡（解答查詢） */
export const IconChat = (p: P) => (
  <Base {...p}><path d="M21 11.5a8.38 8.38 0 0 1-9 8.36 8.5 8.5 0 0 1-3.4-.66L3 21l1.8-4.4A8.38 8.38 0 0 1 3.6 12 8.5 8.5 0 0 1 12 3.5a8.38 8.38 0 0 1 9 8Z" /></Base>
);

/** 握手/同行（諮詢支援） */
export const IconHands = (p: P) => (
  <Base {...p}><path d="M11 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" /><path d="M13 7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" /><path d="m8 12 3 3a1.9 1.9 0 0 0 3-3l-4-4a3 3 0 0 0-4 0l-2 2" /></Base>
);

/** 指南針（資源規劃） */
export const IconCompass = (p: P) => (
  <Base {...p}><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" /></Base>
);

/** 目標（服務配對） */
export const IconTarget = (p: P) => (
  <Base {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></Base>
);

/** 清單（紀錄跟進） */
export const IconClipboard = (p: P) => (
  <Base {...p}><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" /><path d="m9 12 2 2 4-4" /></Base>
);

/** 彩虹/全部 */
export const IconRainbow = (p: P) => (
  <Base {...p}><path d="M4 17a8 8 0 0 1 16 0" /><path d="M7.5 17a4.5 4.5 0 0 1 9 0" /><circle cx="12" cy="16.6" r="0.6" fill="currentColor" stroke="none" /></Base>
);

/** 書本（基礎認識） */
export const IconBook = (p: P) => (
  <Base {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a1 1 0 0 0-1-1H6.5A2.5 2.5 0 0 0 4 5.5v14Z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></Base>
);

/** 放大鏡（評估） */
export const IconSearch = (p: P) => (
  <Base {...p}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></Base>
);

/** 機構/制度 */
export const IconBank = (p: P) => (
  <Base {...p}><path d="m3 9 9-6 9 6" /><path d="M5 9v10M9.5 9v10M14.5 9v10M19 9v10" /><path d="M3 19h18" /></Base>
);

/** 拼圖（服務） */
export const IconPuzzle = (p: P) => (
  <Base {...p}><path d="M14 6a2 2 0 1 0-4 0H7a1 1 0 0 0-1 1v3a2 2 0 1 0 0 4v3a1 1 0 0 0 1 1h3a2 2 0 1 1 4 0h3a1 1 0 0 0 1-1v-3a2 2 0 1 1 0-4V7a1 1 0 0 0-1-1h-3Z" /></Base>
);

/** 錢幣（費用） */
export const IconCoins = (p: P) => (
  <Base {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v10M15 9.5c0-1-1.3-1.8-3-1.8s-3 .8-3 1.8 1 1.6 3 2 3 1 3 2.2-1.3 1.8-3 1.8-3-.8-3-1.8" /></Base>
);

/** 沙漏（輪候） */
export const IconHourglass = (p: P) => (
  <Base {...p}><path d="M7 3h10M7 21h10" /><path d="M8 3v3.5c0 2 4 3.5 4 5.5s-4 3.5-4 5.5V21" /><path d="M16 3v3.5c0 2-4 3.5-4 5.5s4 3.5 4 5.5V21" /></Base>
);

/** 購物（自費） */
export const IconCart = (p: P) => (
  <Base {...p}><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" /><path d="M3 4h2l2.4 11.2a1.5 1.5 0 0 0 1.5 1.3h7.7a1.5 1.5 0 0 0 1.5-1.2L20 8H6" /></Base>
);

/** 幼苗（剛知道） */
export const IconSprout = (p: P) => (
  <Base {...p}><path d="M12 21v-7" /><path d="M12 14c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6Z" /><path d="M12 12C12 8.5 9.8 6 5.5 6c0 4 2.5 6 6.5 6Z" /></Base>
);

/** 心（情緒支援） */
export const IconHeart = (p: P) => (
  <Base {...p}><path d="M19.5 12.6 12 20l-7.5-7.4A5 5 0 1 1 12 6.3a5 5 0 1 1 7.5 6.3Z" /></Base>
);

/** 機械人（AI 助理） */
export const IconBot = (p: P) => (
  <Base {...p}><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V5M12 5a1.5 1.5 0 1 0-1.5-1.5" /><circle cx="9.5" cy="13" r="0.8" fill="currentColor" stroke="none" /><circle cx="14.5" cy="13" r="0.8" fill="currentColor" stroke="none" /><path d="M9.5 16.5h5" /></Base>
);

/** 圖表（數據） */
export const IconChart = (p: P) => (
  <Base {...p}><path d="M3 3v17a1 1 0 0 0 1 1h17" /><path d="M8 16v-5M13 16V8M18 16v-8" /></Base>
);

export const PILLAR_ICONS: Record<number, (p: P) => ReactNode> = {
  1: IconChat,
  2: IconHands,
  3: IconCompass,
  4: IconTarget,
  5: IconClipboard,
};
