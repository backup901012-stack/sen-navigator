"use client";

import { useRef, useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

interface Mode {
  id: string;
  icon: string;
  title: string;
  desc: string;
  cats: string[]; // 偏向的 FAQ 範疇
  suggestions: string[];
  intro: string;
  fallback: string;
}

const RESOURCE_FALLBACK = `我搵唔到最啱嘅答案，不過你可以試吓：
• 「服務配對」工具，輸入孩子資料即有方向建議
• 「申請流程」頁有完整六步指引（評估 → Form 2 → 輪候）
• 「資源目錄」可按類型／收費篩選政府與自費資源`;

const LEARN_FALLBACK = `我搵唔到最啱嘅答案，不過你可以睇吓「基礎認識」科普：
• 咩係 SEN、感覺統合與本體感覺、童年經歷與腦部成長
• 語言發展里程碑、對立反抗症 ODD
（如有發展疑慮，建議安排專業評估）`;

const SUPPORT_FALLBACK = `照顧 SEN 孩子唔容易，你嘅感受好正常。你並唔孤單：
• 24 小時可致電「情緒通」18111（陪我講 Shall We Talk），照顧者本身都可以求助
• 「家長特區」有情緒自我照顧與各區家長資源中心
• 如有即時危險，請致電 999 或撒瑪利亞防止自殺會 2896 0000`;

const NEWLY_FALLBACK = `啱啱知道孩子有 SEN，感到亂、擔心、甚至自責，都係好正常嘅反應——呢個唔係你嘅錯。
慢慢嚟，一步一步：
• 先照顧自己嘅情緒：「家長特區」有自我照顧建議；需要傾訴可致電 18111
• 了解多啲：「童年經歷與腦部成長」會話你知，及早的正向關係與介入係強大保護因子
• 行第一步：「申請流程」由察覺→評估→轉介，清楚列出每一步
你已經喺度搵資料，呢個就係好好嘅開始 💛`;

const MODES: Mode[] = [
  {
    id: "newly",
    icon: "🌱",
    title: "剛知道・仲在消化",
    desc: "啱啱知道孩子有 SEN，仲未平復",
    cats: [],
    suggestions: [
      "啱啱知道孩子有 SEN，我好亂，點算？",
      "係咪我做錯咗啲咩？",
      "下一步應該點行第一步？",
    ],
    intro: "慢慢嚟，你已經行緊好重要嘅一步 🌱 有咩想傾、想問都得，唔急。",
    fallback: NEWLY_FALLBACK,
  },
  {
    id: "resource",
    icon: "🔍",
    title: "積極尋找資源",
    desc: "評估、政府服務、輪候、自費、學前資源",
    cats: ["評估", "制度", "服務", "費用", "輪候", "自費"],
    suggestions: [
      "點樣先排到政府學前康復服務？",
      "邊度做評估？要幾錢？",
      "輪候緊政府服務，等緊可以做啲咩？",
      "自費治療點收費？點揀機構？",
    ],
    intro: "你想積極搵資源 👍 問我評估、政府服務、輪候、自費等學前資源問題。",
    fallback: RESOURCE_FALLBACK,
  },
  {
    id: "learn",
    icon: "📚",
    title: "想了解 SEN 基礎知識",
    desc: "咩係 SEN、發展、情緒行為等",
    cats: ["基礎認識"],
    suggestions: [
      "咩係 SEN？我個孩子算唔算？",
      "咩係感覺統合／本體覺失調？",
      "孩子幾歲應該識講嘢？",
      "成日發脾氣、反抗，是 ODD 嗎？",
    ],
    intro: "想先了解多啲 📚 問我 SEN 基礎知識、發展與情緒行為。",
    fallback: LEARN_FALLBACK,
  },
  {
    id: "support",
    icon: "💗",
    title: "需要情緒支援",
    desc: "照顧者的情緒與支援",
    cats: [],
    suggestions: [
      "照顧 SEN 孩子好攰，可以搵邊個傾？",
      "我覺得好內疚、好無力，點算？",
      "邊度有家長互助小組？",
    ],
    intro: "先照顧好自己，先有力照顧孩子 💗 有需要隨時搵人傾。",
    fallback: SUPPORT_FALLBACK,
  },
];

const STOP = new Set(["我", "個", "嘅", "係", "點", "做", "可以", "有", "冇", "咩", "同", "要", "唔", "佢", "你", "呀", "啊", "嗎", "呢", "的", "了", "之", "怎", "樣"]);

function tokenize(s: string): string[] {
  const clean = s.toLowerCase().replace(/[，。？！、,.?!\s]+/g, "");
  const grams: string[] = [];
  for (let i = 0; i < clean.length - 1; i++) grams.push(clean.slice(i, i + 2));
  return grams.filter((g) => !STOP.has(g));
}

function answer(q: string, mode: Mode): string {
  const qTokens = new Set(tokenize(q));
  if (qTokens.size === 0) return mode.fallback;
  let best = { score: 0, a: "" };
  for (const f of FAQ_ITEMS) {
    const hay = `${f.q} ${f.a} ${f.category}`;
    let score = 0;
    for (const t of tokenize(hay)) if (qTokens.has(t)) score++;
    const KW: Record<string, number> = {
      評估: 3, 收費: 3, 輪候: 3, 分級: 3, 自費: 2, 言語: 2, 治療: 2,
      到校: 2, 特殊: 2, 幼兒: 2, 登記: 2, 服務: 1, 感覺: 3, 本體: 3,
      情緒: 2, 反抗: 3, 里程: 2, 中醫: 2,
    };
    for (const k in KW) if (q.includes(k) && hay.includes(k)) score += KW[k];
    // 模式範疇加權：只在已有實際文字命中時加（否則任何輸入都會誤中門檻、答非所問）
    if (score > 0 && mode.cats.includes(f.category)) score += 2;
    if (score > best.score) best = { score, a: f.a };
  }
  return best.score >= 2 ? best.a : mode.fallback;
}

export default function AiChat() {
  const [mode, setMode] = useState<Mode | null>(null);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    const content = text.trim();
    if (!content || loading || !mode) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages([...next, { role: "assistant", content: answer(content, mode) }]);
      setLoading(false);
      setTimeout(() => boxRef.current?.scrollTo(0, boxRef.current.scrollHeight), 50);
    }, 400);
  };

  const chooseMode = (m: Mode) => {
    setMode(m);
    setMessages([{ role: "assistant", content: m.intro }]);
  };

  const reset = () => {
    setMode(null);
    setMessages([]);
  };

  return (
    <div className="rounded-2xl bg-white border border-brand-100 overflow-hidden flex flex-col h-[34rem]">
      <div className="bg-brand-600 text-white px-5 py-3 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">🤖</span>
          <div>
            <p className="font-black leading-tight">導航員智能助理</p>
            <p className="text-xs text-brand-100">{mode ? mode.title : "即時解答 SEN 疑問"}</p>
          </div>
        </div>
        {mode && (
          <button onClick={reset} className="text-xs bg-white/15 hover:bg-white/25 px-3 py-1.5 rounded-full font-bold">
            切換模式
          </button>
        )}
      </div>

      {/* 模式選擇 */}
      {!mode && (
        <div className="flex-1 overflow-y-auto p-4 bg-brand-50/30">
          <p className="text-sm text-ink-soft text-center mb-3">你而家處於邊個階段？揀一個開始：</p>
          <div className="space-y-2.5">
            {MODES.map((m) => (
              <button
                key={m.id}
                onClick={() => chooseMode(m)}
                className="w-full text-left rounded-xl bg-white border border-brand-100 hover:border-brand-300 p-4 flex items-start gap-3"
              >
                <span className="text-2xl">{m.icon}</span>
                <span>
                  <span className="block font-black text-brand-900">{m.title}</span>
                  <span className="block text-xs text-ink-soft mt-0.5">{m.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 對話 */}
      {mode && (
        <div ref={boxRef} aria-live="polite" aria-atomic="false" className="flex-1 overflow-y-auto p-4 space-y-3 bg-brand-50/30">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${m.role === "user" ? "bg-brand-600 text-white rounded-br-sm" : "bg-white border border-brand-100 text-ink rounded-bl-sm"}`}>
                {m.content}
              </div>
            </div>
          ))}

          {/* 建議問題 */}
          {messages.length <= 1 && (
            <div className="space-y-2 pt-1">
              {mode.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="block w-full text-left px-4 py-2.5 rounded-xl bg-white border border-brand-100 hover:border-brand-300 text-ink text-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-brand-100 rounded-2xl px-4 py-2.5 text-sm text-ink-soft">思考中…</div>
            </div>
          )}
        </div>
      )}

      {mode && (
        <div className="border-t border-brand-100 p-3 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="輸入你的問題…"
            aria-label="輸入問題"
            className="flex-1 rounded-full border border-brand-200 px-4 py-2.5 text-sm focus:border-brand-400"
          />
          <button onClick={() => send(input)} disabled={loading} className="px-5 rounded-full bg-brand-600 text-white font-bold text-sm disabled:opacity-50">
            傳送
          </button>
        </div>
      )}
    </div>
  );
}
