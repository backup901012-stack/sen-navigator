"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Mascot from "@/components/Mascot";

/**
 * 導仔陪伴系統（全站互動吉祥物）：
 * - 每頁右下角漂浮；點佢 → 按當前頁面講「下一步去邊」（帶連結）
 * - 再點 → 輪換溫馨鼓勵語；可關閉（本次瀏覽唔再出）
 * - aria 完整、reduced-motion 自動停浮動、列印隱藏
 */
interface Tip {
  text: string;
  href?: string;
  cta?: string;
}

const TIPS: Record<string, Tip> = {
  "/": { text: "唔知由邊度開始？答 5 條問題，我幫你搵方向！", href: "/match", cta: "去服務配對" },
  "/services": { text: "睇完四大服務，去「服務配對」睇邊樣最啱你孩子！", href: "/match", cta: "去配對" },
  "/grading": { text: "了解咗評估制度，下一步係申請流程六步圖！", href: "/journey", cta: "睇流程" },
  "/journey": { text: "唔同步驟可以加入「規劃清單」，逐項跟進唔會漏！", href: "/planner", cta: "我的規劃" },
  "/pathways": { text: "津貼定自費未拗掂？「服務配對」幫你梳理！", href: "/match", cta: "去配對" },
  "/match": { text: "配對結果可以㩒「＋加入規劃」，下一步就唔會唔記得！", href: "/planner", cta: "我的規劃" },
  "/screening": { text: "篩查唔係診斷，有疑慮就去睇申請流程、搵專業評估！", href: "/journey", cta: "睇流程" },
  "/directory": { text: "見到啱嘅資源就㩒「＋加入規劃」，集齊晒慢慢比較！", href: "/planner", cta: "我的規劃" },
  "/planner": { text: "清單會留喺你部機，列印埋帶去見社工都得！" },
  "/faq": { text: "搵唔到答案？右邊 AI 助理即時答你！" },
  "/parents": { text: "照顧好自己，先照顧到孩子。你已經做得好好 💛" },
  "/sccc": { text: "輪候時間因中心而異，可以揀多幾區增加機會！", href: "/faq", cta: "輪候 FAQ" },
};

const CHEERS = [
  "你為孩子做緊嘅嘢，好有意義 💛",
  "一步一步嚟，唔使急！",
  "及早了解就係最好嘅開始 🌱",
  "今日都辛苦晒！記得照顧埋自己",
];

export default function Buddy() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [cheerIdx, setCheerIdx] = useState(-1);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  const route = "/" + (pathname.split("/").filter(Boolean)[0] || "");
  const tip = TIPS[route] || TIPS["/"];
  const showing: Tip = cheerIdx >= 0 ? { text: CHEERS[cheerIdx % CHEERS.length] } : tip;

  const poke = () => {
    if (!open) setOpen(true);
    else setCheerIdx((i) => i + 1);
  };

  return (
    <div className="fixed bottom-24 sm:bottom-4 right-3 sm:right-4 z-40 no-print flex flex-col items-end gap-2">
      {open && (
        <div
          role="status"
          className="iv max-w-[15rem] rounded-2xl bg-white border-2 border-brand-200 p-3.5 text-sm text-ink shadow-lg"
        >
          <button
            onClick={() => setHidden(true)}
            aria-label="收起導仔"
            className="float-right -mt-1 -mr-1 w-6 h-6 grid place-items-center rounded-full text-ink-soft hover:bg-brand-50 text-xs"
          >
            ✕
          </button>
          <p className="leading-relaxed pr-4">{showing.text}</p>
          {showing.href && (
            <Link href={showing.href} className="mt-2 inline-block text-brand-700 font-black hover:underline">
              {showing.cta} →
            </Link>
          )}
          <p className="mt-1.5 text-[10px] text-ink-soft">再㩒導仔有驚喜 ✨</p>
        </div>
      )}
      <button
        onClick={poke}
        aria-label="導航小幫手導仔（點擊有貼士）"
        aria-expanded={open}
        className="rounded-full"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Mascot size={72} />
      </button>
    </div>
  );
}
