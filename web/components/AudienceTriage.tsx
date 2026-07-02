"use client";

/**
 * 前導分流器 — 「百萬富翁」問答格式 × 愛馬仕配色（老闆 2026-07-02 指定素材＋配色）
 * 格式：六角題板 + A/B/C/D 菱形答案掣（揀中鎖定轉橙）→ 獎金階梯式路線 → 三個錦囊。
 * 配色：愛馬仕橙 #F37021（大字/裝飾）/ #C2410C（白字底、對比 4.8:1）× 奶油米白 × 深啡 × 金。
 * 業界模式不變：audience-based navigation（gov.uk / NHS「I am a...」），只換表現層。
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
  letter: "A" | "B" | "C" | "D";
  emoji: string;
  label: string;
  quote: string;
  greeting: string;
  steps: Step[];
}

/* 愛馬仕色票（集中一處、方便調） */
const H = {
  orange: "#f37021",
  orangeDeep: "#c2410c",
  cream: "#fbf5e9",
  creamDark: "#f3e8d3",
  brown: "#3f2b1f",
  brownSoft: "#6b5344",
  gold: "#c8a165",
};

/* 百萬富翁答案掣六角形 */
const LOZENGE =
  "polygon(28px 0, calc(100% - 28px) 0, 100% 50%, calc(100% - 28px) 100%, 28px 100%, 0 50%)";

const PERSONAS: Persona[] = [
  {
    id: "noticing",
    letter: "A",
    emoji: "🌱",
    label: "開始覺得孩子有啲唔同",
    quote: "講嘢好似慢過人、又唔多應人⋯⋯係咪我諗多咗？",
    greeting: "唔係你諗多咗，肯留意已經係好開始。由第一步開始上階梯：",
    steps: [
      { href: "/milestones", title: "對照發展里程碑", desc: "0–6 歲語言及六大範疇，睇下孩子係咪真係慢。", time: "3 分鐘" },
      { href: "/screening", title: "做個免費早期篩查", desc: "國際常用 M-CHAT-R（16–30 個月），20 條問題即出方向。", time: "5 分鐘" },
      { href: "/cas", title: "了解去邊度正式評估", desc: "兒童體能智力測驗服務（CAS）點轉介、各區中心一覽。", time: "4 分鐘" },
      { href: "/journey", title: "睇清成條路點行", desc: "由察覺到接受服務的 6 步流程地圖，心裡有底。", time: "5 分鐘" },
    ],
  },
  {
    id: "waiting",
    letter: "B",
    emoji: "🧭",
    label: "評咗估，等緊政府服務",
    quote: "報告攞咗，話要輪候⋯⋯跟住其實要做啲咩？",
    greeting: "輪候期唔使乾等。睇明份報告、知道等幾耐、諗定後備：",
    steps: [
      { href: "/grading", title: "睇明評估報告同分級", desc: "評估結果點決定服務種類、中央轉介系統點運作。", time: "5 分鐘" },
      { href: "/services", title: "認清各項政府服務", desc: "到校學前康復、特殊幼兒中心、E 位兼收逐樣拆解。", time: "6 分鐘" },
      { href: "/sccc", title: "查各區輪候現況", desc: "特殊幼兒中心逐間最後獲篩選日期，估算大約等幾耐。", time: "2 分鐘" },
      { href: "/pathways", title: "比較津貼 vs 自費兩條路", desc: "輪候期間可以點雙軌並行，一張流程圖睇晒。", time: "4 分鐘" },
    ],
  },
  {
    id: "training",
    letter: "C",
    emoji: "🎒",
    label: "想搵訓練幫孩子進步",
    quote: "唔想白等，坊間課程咁多、收費差咁遠，點揀好？",
    greeting: "揀訓練之前，先配對方向、識睇方法，先至唔會俾人氹住走：",
    steps: [
      { href: "/match", title: "為孩子配對服務方向", desc: "答幾條問題，按年齡同需要配對合適嘅服務組合。", time: "2 分鐘" },
      { href: "/training-methods", title: "認識常見訓練方法", desc: "ABA、TEACCH、感統⋯⋯邊啲有實證、邊啲要留神。", time: "5 分鐘" },
      { href: "/directory", title: "篩選資源目錄", desc: "政府、NGO 同自費課程一個目錄搜晒，可以逐項篩。", time: "自行瀏覽" },
      { href: "/parents", title: "去家長特區攞實戰貼士", desc: "情緒應對訓練、感覺統合科普，屋企都做到嘅練習。", time: "自行瀏覽" },
    ],
  },
  {
    id: "ally",
    letter: "D",
    emoji: "🏫",
    label: "我係老師／親友／街坊",
    quote: "身邊有 SEN 小朋友，想支持但驚講錯嘢做錯嘢。",
    greeting: "你嘅理解，對一個 SEN 家庭嚟講好重要。由呢度開始：",
    steps: [
      { href: "/understanding", title: "認識・同理", desc: "點解同理唔等於同情、遇到時點反應先算尊重。", time: "6 分鐘" },
      { href: "/intelligences", title: "了解多元智能", desc: "每個孩子強項唔同——換個角度睇「唔同」。", time: "4 分鐘" },
      { href: "/faq", title: "常見問題快答", desc: "SEN 係咩、會唔會「好返」？基礎疑問一次過解。", time: "3 分鐘" },
      { href: "/resources", title: "收藏權威資源連結", desc: "官方同專業機構連結一覽，轉發俾有需要嘅家庭。", time: "1 分鐘" },
    ],
  },
];

const LIFELINES = [
  {
    emoji: "➗",
    name: "50 : 50",
    desc: "選擇太多？答幾條問題，幫你刪走唔啱嘅服務",
    href: "/match",
    cta: "服務配對",
  },
  {
    emoji: "📞",
    name: "打電話問朋友",
    desc: "想搵有經驗嘅同行者傾一傾你嘅情況",
    href: "/consult",
    cta: "預約諮詢",
  },
  {
    emoji: "🙋",
    name: "問現場觀眾",
    desc: "大家都問過嘅問題，答案早就整理好晒",
    href: "/faq",
    cta: "常見問題",
  },
];

export default function AudienceTriage() {
  const [active, setActive] = useState<string | null>(null);
  const persona = PERSONAS.find((p) => p.id === active) ?? null;
  const panelRef = useRef<HTMLDivElement>(null);

  // 手機上路線喺答案掣下面、可能喺屏幕外——鎖定答案後自動帶到路線（即時回饋）
  useEffect(() => {
    if (!active || !panelRef.current) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    panelRef.current.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
    });
  }, [active]);

  return (
    <div
      className="rounded-3xl p-6 sm:p-10 border-2"
      style={{ background: H.cream, borderColor: H.gold }}
    >
      {/* 題板 */}
      <div className="max-w-2xl mx-auto">
        <div
          className="px-10 py-4 text-center"
          style={{ clipPath: LOZENGE, background: H.brown }}
        >
          <p className="text-lg sm:text-2xl font-black text-white">
            <span style={{ color: H.orange }}>Q.</span> 邊個最似而家嘅你？
          </p>
        </div>
        <p className="mt-3 text-center text-sm" style={{ color: H.brownSoft }}>
          揀一個答案——冇陷阱、冇扣分，即刻攞到為你度身嘅路線。
        </p>
      </div>

      {/* A/B/C/D 答案掣 */}
      <div className="mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
        {PERSONAS.map((p) => {
          const selected = active === p.id;
          return (
            <button
              key={p.id}
              type="button"
              aria-expanded={selected}
              aria-controls="triage-panel"
              onClick={() => setActive(selected ? null : p.id)}
              className="text-left px-9 sm:px-11 py-4 cursor-pointer transition-transform hover:-translate-y-0.5"
              style={{
                clipPath: LOZENGE,
                background: selected ? H.orangeDeep : "#fffdf8",
                border: selected ? "none" : undefined,
                boxShadow: selected ? "none" : `inset 0 0 0 2px ${H.gold}`,
              }}
            >
              <span className="flex items-center gap-3">
                <span
                  className="font-black text-xl shrink-0"
                  style={{ color: selected ? "#ffd9a8" : H.orange }}
                >
                  {p.letter}:
                </span>
                <span className="flex-1">
                  <span
                    className="block font-black"
                    style={{ color: selected ? "#ffffff" : H.brown }}
                  >
                    {p.emoji} {p.label}
                  </span>
                  <span
                    className="block mt-0.5 text-xs sm:text-sm"
                    style={{ color: selected ? "#ffe9d2" : H.brownSoft }}
                  >
                    「{p.quote}」
                  </span>
                </span>
                <span
                  className="shrink-0 text-xs font-bold"
                  style={{ color: selected ? "#ffd9a8" : H.gold }}
                >
                  {selected ? "✓ 最終答案" : "揀我"}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* 路線階梯（鎖定答案後出現） */}
      <div id="triage-panel" role="region" aria-live="polite" ref={panelRef} className="scroll-mt-24">
        {persona && (
          <div
            key={persona.id}
            className="mt-6 rounded-2xl p-6 sm:p-8 animate-fade-up border"
            style={{ background: "#fffdf8", borderColor: H.gold }}
          >
            <p className="font-bold" style={{ color: H.brown }}>
              {persona.emoji} {persona.greeting}
            </p>
            <ol className="mt-5 space-y-3">
              {persona.steps.map((s, i) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex gap-3 rounded-xl p-4 transition-colors border"
                    style={{ background: H.cream, borderColor: H.creamDark }}
                  >
                    <span
                      className="grid place-items-center w-8 h-8 rounded-full font-black text-sm shrink-0 text-white"
                      style={{ background: H.orangeDeep }}
                    >
                      {i + 1}
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold" style={{ color: H.brown }}>
                          {s.title}
                        </span>
                        <span
                          className="text-[11px] px-2 py-0.5 rounded-md bg-white border"
                          style={{ color: H.brownSoft, borderColor: H.gold }}
                        >
                          ⏱ {s.time}
                        </span>
                      </span>
                      <span
                        className="block mt-1 text-sm leading-relaxed"
                        style={{ color: H.brownSoft }}
                      >
                        {s.desc}
                      </span>
                    </span>
                    <span
                      className="self-center font-black"
                      style={{ color: H.orange }}
                      aria-hidden
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
              <li
                className="flex items-center gap-3 rounded-xl p-4 border-2 border-dashed"
                style={{ borderColor: H.gold, color: H.brown }}
              >
                <span className="text-2xl" aria-hidden>
                  🏆
                </span>
                <span className="font-black">
                  終極目標：孩子接到合適嘅支援
                  <span className="block text-xs font-bold mt-0.5" style={{ color: H.brownSoft }}>
                    一步一步嚟，唔使一次過睇晒成個網站。
                  </span>
                </span>
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* 三個錦囊 */}
      <div className="mt-8">
        <p className="text-center font-black" style={{ color: H.brown }}>
          🧧 卡住咗？你仲有三個錦囊
        </p>
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          {LIFELINES.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-2xl bg-white p-5 text-center card-hover border"
              style={{ borderColor: H.creamDark }}
            >
              <span className="text-3xl" aria-hidden>
                {l.emoji}
              </span>
              <span className="block mt-2 font-black" style={{ color: H.brown }}>
                {l.name}
              </span>
              <span className="block mt-1 text-xs leading-relaxed" style={{ color: H.brownSoft }}>
                {l.desc}
              </span>
              <span
                className="inline-block mt-3 px-4 py-1.5 rounded-full text-xs font-bold text-white"
                style={{ background: H.orangeDeep }}
              >
                {l.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* 6 歲以上快速通道 */}
      <Link
        href="/special-schools"
        className="mt-6 flex items-center gap-3 rounded-2xl px-5 py-4 card-hover border bg-white"
        style={{ borderColor: H.creamDark }}
      >
        <span className="text-2xl" aria-hidden>
          🎓
        </span>
        <span className="flex-1 text-sm">
          <strong style={{ color: H.brown }}>孩子 6 歲或以上？</strong>
          <span style={{ color: H.brownSoft }}>
            {" "}
            學前服務會停，去睇特殊學校與升學（雙軌制）點安排。
          </span>
        </span>
        <span className="font-bold text-sm shrink-0" style={{ color: H.orangeDeep }}>
          前往 →
        </span>
      </Link>
    </div>
  );
}
