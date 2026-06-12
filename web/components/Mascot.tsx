/**
 * 吉祥物家族 — SEN 小孩導航員（純 SVG + CSS 動畫：眨眼、揮手、漂浮）
 * 導仔（薄荷、指南針肚）/ 心心（泡泡糖粉、愛心肚）/ 星星（蠟燭紫、星星肚）
 * 動畫 class 在 globals.css 動畫層；全部 aria 標註、reduced-motion 自動停。
 */
type Variant = "mint" | "pink" | "lilac";

const PALETTES: Record<Variant, { body: string; limb: string; dark: string; cheek: string; name: string }> = {
  mint: { body: "#93d6b9", limb: "#62bd9b", dark: "#1e463c", cheek: "#f49ac2", name: "導仔" },
  pink: { body: "#f9c6dc", limb: "#ea66a2", dark: "#6d1b46", cheek: "#fbd9e8", name: "心心" },
  lilac: { body: "#dcc8ef", limb: "#a87fcd", dark: "#3f2a55", cheek: "#f49ac2", name: "星星" },
};

function Belly({ variant, c }: { variant: Variant; c: (typeof PALETTES)["mint"] }) {
  if (variant === "mint")
    return (
      <>
        <circle cx="60" cy="78" r="13" fill="#fffdf8" stroke="#2e8168" strokeWidth="2.5" />
        <path d="M60 69.5 L64 78 L60 86.5 L56 78 Z" fill="#cb2a79" />
        <circle cx="60" cy="78" r="2" fill={c.dark} />
      </>
    );
  if (variant === "pink")
    return (
      <path
        d="M60 88 L49.5 77.5 A6.5 6.5 0 1 1 60 69.5 A6.5 6.5 0 1 1 70.5 77.5 Z"
        fill="#fffdf8"
        stroke="#cb2a79"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    );
  return (
    <path
      d="M60 66 L63.5 73.5 L71.5 74.5 L65.6 80 L67.2 88 L60 84 L52.8 88 L54.4 80 L48.5 74.5 L56.5 73.5 Z"
      fill="#fffdf8"
      stroke="#8f63b5"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  );
}

export default function Mascot({
  size = 120,
  variant = "mint",
}: {
  size?: number;
  variant?: Variant;
}) {
  const c = PALETTES[variant];
  const uid = `shine-${variant}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      role="img"
      aria-label={`導航員吉祥物${c.name}`}
      className="mascot"
    >
      <ellipse cx="60" cy="112" rx="30" ry="5" fill={c.dark} opacity="0.12" />
      <g className="mascot-arm">
        <path d="M28 62 Q14 52 12 40" stroke={c.limb} strokeWidth="9" strokeLinecap="round" />
        <circle cx="12" cy="38" r="6.5" fill={c.body} />
      </g>
      <ellipse cx="60" cy="68" rx="36" ry="40" fill={c.body} />
      <ellipse cx="60" cy="68" rx="36" ry="40" fill={`url(#${uid})`} />
      <path d="M92 66 Q100 76 98 86" stroke={c.limb} strokeWidth="9" strokeLinecap="round" />
      <circle cx="98" cy="88" r="6.5" fill={c.body} />
      <ellipse cx="46" cy="106" rx="9" ry="6" fill={c.limb} />
      <ellipse cx="74" cy="106" rx="9" ry="6" fill={c.limb} />
      <Belly variant={variant} c={c} />
      <g className="mascot-eyes">
        <circle cx="48" cy="54" r="4.2" fill={c.dark} />
        <circle cx="72" cy="54" r="4.2" fill={c.dark} />
        <circle cx="49.5" cy="52.5" r="1.4" fill="#fff" />
        <circle cx="73.5" cy="52.5" r="1.4" fill="#fff" />
      </g>
      <ellipse cx="42" cy="62" rx="4.5" ry="3" fill={c.cheek} opacity="0.85" />
      <ellipse cx="78" cy="62" rx="4.5" ry="3" fill={c.cheek} opacity="0.85" />
      <path d="M53 62 Q60 68 67 62" stroke={c.dark} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <defs>
        <radialGradient id={uid} cx="0.35" cy="0.25" r="0.9">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor={c.dark} stopOpacity="0.12" />
        </radialGradient>
      </defs>
    </svg>
  );
}
