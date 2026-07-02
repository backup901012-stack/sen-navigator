"use client";

/**
 * 前導分流器 — 「邊個最似而家嘅你？」
 * 業界模式：audience-based navigation（gov.uk / NHS「I am a...」入口）。
 * 撳卡片即時內嵌展開度身路線（零跳頁、即時回饋），減低首屏資訊過載。
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Step {
  href: string;
  title: string;
  desc: string;
  time: string;
}

interface Persona {
  id: string;
  emoji: string;
  label: string;
  quote: string;
  accent: {
    card: string;
    active: string;
    chip: string;
    step: string;
  };
  greeting: string;
  steps: Step[];
}

const PERSONAS: Persona[] = [
  {
    id: "noticing",
    emoji: "🌱",
    label: "開始覺得孩子有啲唔同",
    quote: "「講嘢好似慢過人、又唔多應人⋯⋯係咪我諗多咗？」",
    accent: {
      card: "border-brand-100",
      active: "ring-brand-400 bg-brand-50/70",
      chip: "bg-brand-100 text-brand-700",
      step: "bg-brand-100 text-brand-700",
    },
    greeting: "唔係你諗多咗，肯留意已經係好開始。順住呢幾步，一步步確認：",
    steps: [
      {
        href: "/milestones",
        title: "對照發展里程碑",
        desc: "0–6 歲語言及六大範疇，睇下孩子係咪真係慢。",
        time: "3 分鐘",
      },
      {
        href: "/screening",
        title: "做個免費早期篩查",
        desc: "國際常用 M-CHAT-R（16–30 個月），20 條問題即出方向。",
        time: "5 分鐘",
      },
      {
        href: "/cas",
        title: "了解去邊度正式評估",
        desc: "兒童體能智力測驗服務（CAS）點轉介、各區中心一覽。",
        time: "4 分鐘",
      },
      {
        href: "/journey",
        title: "睇清成條路點行",
        desc: "由察覺到接受服務的 6 步流程地圖，心裡有底。",
        time: "5 分鐘",
      },
    ],
  },
  {
    id: "waiting",
    emoji: "🧭",
    label: "評咗估，等緊政府服務",
    quote: "「報告攞咗，話要輪候⋯⋯跟住其實要做啲咩？」",
    accent: {
      card: "border-lilac-100",
      active: "ring-lilac-400 bg-lilac-50/70",
      chip: "bg-lilac-100 text-lilac-700",
      step: "bg-lilac-100 text-lilac-700",
    },
    greeting: "輪候期唔使乾等。睇明份報告、知道等幾耐、諗定後備：",
    steps: [
      {
        href: "/grading",
        title: "睇明評估報告同分級",
        desc: "評估結果點決定服務種類、中央轉介系統點運作。",
        time: "5 分鐘",
      },
      {
        href: "/services",
        title: "認清各項政府服務",
        desc: "到校學前康復、特殊幼兒中心、E 位兼收逐樣拆解。",
        time: "6 分鐘",
      },
      {
        href: "/sccc",
        title: "查各區輪候現況",
        desc: "特殊幼兒中心逐間最後獲篩選日期，估算大約等幾耐。",
        time: "2 分鐘",
      },
      {
        href: "/pathways",
        title: "比較津貼 vs 自費兩條路",
        desc: "輪候期間可以點雙軌並行，一張流程圖睇晒。",
        time: "4 分鐘",
      },
    ],
  },
  {
    id: "training",
    emoji: "🎒",
    label: "想搵訓練幫孩子進步",
    quote: "「唔想白等，坊間課程咁多、收費差咁遠，點揀好？」",
    accent: {
      card: "border-warm-100",
      active: "ring-warm-400 bg-warm-50/70",
      chip: "bg-warm-100 text-warm-700",
      step: "bg-warm-100 text-warm-700",
    },
    greeting: "揀訓練之前，先配對方向、識睇方法，先至唔會俾人氹住走：",
    steps: [
      {
        href: "/match",
        title: "為孩子配對服務方向",
        desc: "答幾條問題，按年齡同需要配對合適嘅服務組合。",
        time: "2 分鐘",
      },
      {
        href: "/training-methods",
        title: "認識常見訓練方法",
        desc: "ABA、TEACCH、感統⋯⋯邊啲有實證、邊啲要留神。",
        time: "5 分鐘",
      },
      {
        href: "/directory",
        title: "篩選資源目錄",
        desc: "政府、NGO 同自費課程一個目錄搜晒，可以逐項篩。",
        time: "自行瀏覽",
      },
      {
        href: "/parents",
        title: "去家長特區攞實戰貼士",
        desc: "情緒應對訓練、感覺統合科普，屋企都做到嘅練習。",
        time: "自行瀏覽",
      },
    ],
  },
  {
    id: "ally",
    emoji: "🏫",
    label: "我係老師／親友／街坊",
    quote: "「身邊有 SEN 小朋友，想支持但驚講錯嘢做錯嘢。」",
    accent: {
      card: "border-amber-100",
      active: "ring-amber-400 bg-amber-50/70",
      chip: "bg-amber-100 text-amber-700",
      step: "bg-amber-100 text-amber-700",
    },
    greeting: "你嘅理解，對一個 SEN 家庭嚟講好重要。由呢度開始：",
    steps: [
      {
        href: "/understanding",
        title: "認識・同理",
        desc: "點解同理唔等於同情、遇到時點反應先算尊重。",
        time: "6 分鐘",
      },
      {
        href: "/intelligences",
        title: "了解多元智能",
        desc: "每個孩子強項唔同——換個角度睇「唔同」。",
        time: "4 分鐘",
      },
      {
        href: "/faq",
        title: "常見問題快答",
        desc: "SEN 係咩、會唔會「好返」？基礎疑問一次過解。",
        time: "3 分鐘",
      },
      {
        href: "/resources",
        title: "收藏權威資源連結",
        desc: "官方同專業機構連結一覽，轉發俾有需要嘅家庭。",
        time: "1 分鐘",
      },
    ],
  },
];

export default function AudienceTriage() {
  const [active, setActive] = useState<string | null>(null);
  const persona = PERSONAS.find((p) => p.id === active) ?? null;
  const panelRef = useRef<HTMLDivElement>(null);

  // 手機上面板喺四張卡下面、可能喺屏幕外——揀完自動帶到路線（即時回饋）
  useEffect(() => {
    if (!active || !panelRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panelRef.current.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
    });
  }, [active]);

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PERSONAS.map((p) => {
          const selected = active === p.id;
          return (
            <button
              key={p.id}
              type="button"
              aria-expanded={selected}
              aria-controls="triage-panel"
              onClick={() => setActive(selected ? null : p.id)}
              className={`text-left rounded-2xl bg-white border p-5 card-hover transition-shadow cursor-pointer ${
                p.accent.card
              } ${selected ? `ring-2 ${p.accent.active}` : ""}`}
            >
              <span className="text-3xl" aria-hidden>
                {p.emoji}
              </span>
              <h3 className="mt-3 font-black text-brand-900 leading-snug">
                {p.label}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {p.quote}
              </p>
              <span
                className={`mt-3 inline-block px-3 py-1 rounded-full text-xs font-bold ${p.accent.chip}`}
              >
                {selected ? "收起路線 ↑" : "睇我嘅路線 ↓"}
              </span>
            </button>
          );
        })}
      </div>

      <div id="triage-panel" role="region" aria-live="polite" ref={panelRef} className="scroll-mt-24">
        {persona && (
          <div
            key={persona.id}
            className="mt-5 rounded-3xl bg-white border border-brand-100 p-6 sm:p-8 animate-fade-up"
          >
            <p className="font-bold text-brand-800">
              {persona.emoji} {persona.greeting}
            </p>
            <ol className="mt-5 grid md:grid-cols-2 gap-3">
              {persona.steps.map((s, i) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex gap-3 rounded-2xl border border-brand-50 bg-brand-50/40 hover:bg-brand-50 p-4 transition-colors h-full"
                  >
                    <span
                      className={`grid place-items-center w-8 h-8 rounded-full font-black text-sm shrink-0 ${persona.accent.step}`}
                    >
                      {i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-ink">{s.title}</span>
                        <span className="text-[11px] px-2 py-0.5 rounded-md bg-white text-ink-soft border border-brand-100">
                          ⏱ {s.time}
                        </span>
                      </span>
                      <span className="block mt-1 text-sm text-ink-soft leading-relaxed">
                        {s.desc}
                      </span>
                    </span>
                    <span className="self-center text-brand-400 font-black" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
            <p className="mt-5 text-sm text-ink-soft">
              路線只係建議，可以隨時跳步。想更貼身？
              <Link href="/match" className="text-brand-600 font-bold hover:underline">
                用 2 分鐘服務配對
              </Link>
              ，或者去
              <Link href="/faq" className="text-brand-600 font-bold hover:underline">
                常見問題
              </Link>
              直接搵答案。
            </p>
          </div>
        )}
      </div>

      {/* 6 歲以上快速通道 */}
      <Link
        href="/special-schools"
        className="mt-5 flex items-center gap-3 rounded-2xl bg-brand-50/60 border border-brand-100 px-5 py-4 card-hover"
      >
        <span className="text-2xl" aria-hidden>
          🎓
        </span>
        <span className="flex-1 text-sm">
          <strong className="text-brand-900">孩子 6 歲或以上？</strong>
          <span className="text-ink-soft">
            {" "}
            學前服務會停，去睇特殊學校與升學（雙軌制）點安排。
          </span>
        </span>
        <span className="text-brand-600 font-bold text-sm shrink-0">前往 →</span>
      </Link>
    </div>
  );
}
