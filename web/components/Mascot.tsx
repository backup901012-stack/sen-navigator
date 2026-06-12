/**
 * 導仔 — SEN 小孩導航員吉祥物（純 SVG + CSS 動畫：眨眼、揮手、漂浮）
 * 粘土小圓人：薄荷身體、指南針肚、粉紅面珠。動畫 class 在 globals.css 動畫層。
 */
export default function Mascot({ size = 120 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label="導航員吉祥物導仔"
      className="mascot"
    >
      {/* 影 */}
      <ellipse cx="60" cy="112" rx="30" ry="5" fill="#1e463c" opacity="0.12" />
      {/* 揮手（左手、由肩 pivot 搖） */}
      <g className="mascot-arm">
        <path d="M28 62 Q14 52 12 40" stroke="#62bd9b" strokeWidth="9" strokeLinecap="round" />
        <circle cx="12" cy="38" r="6.5" fill="#93d6b9" />
      </g>
      {/* 身體 */}
      <ellipse cx="60" cy="68" rx="36" ry="40" fill="#93d6b9" />
      <ellipse cx="60" cy="68" rx="36" ry="40" fill="url(#mascotShine)" />
      {/* 右手（垂） */}
      <path d="M92 66 Q100 76 98 86" stroke="#62bd9b" strokeWidth="9" strokeLinecap="round" />
      <circle cx="98" cy="88" r="6.5" fill="#93d6b9" />
      {/* 腳 */}
      <ellipse cx="46" cy="106" rx="9" ry="6" fill="#62bd9b" />
      <ellipse cx="74" cy="106" rx="9" ry="6" fill="#62bd9b" />
      {/* 肚：指南針 */}
      <circle cx="60" cy="78" r="13" fill="#fffdf8" stroke="#2e8168" strokeWidth="2.5" />
      <path d="M60 69.5 L64 78 L60 86.5 L56 78 Z" fill="#cb2a79" />
      <circle cx="60" cy="78" r="2" fill="#1e463c" />
      {/* 眼（眨） */}
      <g className="mascot-eyes">
        <circle cx="48" cy="54" r="4.2" fill="#1e463c" />
        <circle cx="72" cy="54" r="4.2" fill="#1e463c" />
        <circle cx="49.5" cy="52.5" r="1.4" fill="#fff" />
        <circle cx="73.5" cy="52.5" r="1.4" fill="#fff" />
      </g>
      {/* 面珠 */}
      <ellipse cx="42" cy="62" rx="4.5" ry="3" fill="#f49ac2" opacity="0.8" />
      <ellipse cx="78" cy="62" rx="4.5" ry="3" fill="#f49ac2" opacity="0.8" />
      {/* 笑 */}
      <path d="M53 62 Q60 68 67 62" stroke="#1e463c" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <defs>
        <radialGradient id="mascotShine" cx="0.35" cy="0.25" r="0.9">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#1e463c" stopOpacity="0.12" />
        </radialGradient>
      </defs>
    </svg>
  );
}
