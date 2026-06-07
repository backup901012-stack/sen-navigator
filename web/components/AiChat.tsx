"use client";

import { useRef, useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "我個仔 3 歲仲未識講句子，應該點做？",
  "到校服務同特殊幼兒中心有咩分別？",
  "輪候緊政府服務，等緊可以做啲咩？",
];

const FALLBACK = `多謝你嘅提問！我暫時喺呢條問題搵唔到最啱嘅答案，可以試吓：
• 查看「常見問題」，已涵蓋評估、服務分別、收費、輪候等
• 用「服務配對」工具，輸入孩子資料即有方向建議
• 「申請流程」頁有完整六步指引

如急需協助，建議直接聯絡衞生署兒童體能智力測驗服務或社會福利署。`;

// 客戶端關鍵字比對 FAQ 知識庫（無需後端、即時、零成本）
const STOP = new Set(["我", "個", "嘅", "係", "點", "做", "可以", "有", "冇", "咩", "同", "要", "唔", "佢", "你", "呀", "啊", "嗎", "呢", "的", "了", "嘅", "之", "怎", "樣"]);

function tokenize(s: string): string[] {
  const clean = s.toLowerCase().replace(/[，。？！、,.\?!\s]+/g, "");
  const grams: string[] = [];
  for (let i = 0; i < clean.length - 1; i++) grams.push(clean.slice(i, i + 2));
  return grams.filter((g) => !STOP.has(g));
}

function answer(q: string): string {
  const qTokens = new Set(tokenize(q));
  if (qTokens.size === 0) return FALLBACK;
  let best = { score: 0, a: "" };
  for (const f of FAQ_ITEMS) {
    const hay = `${f.q} ${f.a} ${f.category}`;
    const hayTokens = tokenize(hay);
    let score = 0;
    for (const t of hayTokens) if (qTokens.has(t)) score++;
    // 主題關鍵字加權
    const KW: Record<string, number> = {
      評估: 3, 收費: 3, 輪候: 3, 分級: 3, 自費: 2, 言語: 2, 治療: 2,
      到校: 2, 特殊: 2, 幼兒: 2, 中心: 1, 登記: 2, 服務: 1,
    };
    for (const k in KW) if (q.includes(k) && hay.includes(k)) score += KW[k];
    if (score > best.score) best = { score, a: f.a };
  }
  return best.score >= 2 ? best.a : FALLBACK;
}

export default function AiChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const send = (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    // 模擬思考延遲，提升對話感
    setTimeout(() => {
      setMessages([...next, { role: "assistant", content: answer(content) }]);
      setLoading(false);
      setTimeout(() => boxRef.current?.scrollTo(0, boxRef.current.scrollHeight), 50);
    }, 450);
  };

  return (
    <div className="rounded-2xl bg-white border border-brand-100 overflow-hidden flex flex-col h-[32rem]">
      <div className="bg-brand-600 text-white px-5 py-3 flex items-center gap-2">
        <span className="text-xl">🤖</span>
        <div>
          <p className="font-black leading-tight">導航員智能助理</p>
          <p className="text-xs text-brand-100">即時解答 SEN 資源疑問</p>
        </div>
      </div>

      <div
        ref={boxRef}
        aria-live="polite"
        aria-atomic="false"
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-brand-50/30"
      >
        {messages.length === 0 && (
          <div className="text-center text-sm text-ink-soft py-6">
            <p>你好！我可以解答有關香港 SEN 學前資源嘅問題。</p>
            <div className="mt-4 space-y-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="block w-full text-left px-4 py-2.5 rounded-xl bg-white border border-brand-100 hover:border-brand-300 text-ink text-sm"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                m.role === "user"
                  ? "bg-brand-600 text-white rounded-br-sm"
                  : "bg-white border border-brand-100 text-ink rounded-bl-sm"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-brand-100 rounded-2xl px-4 py-2.5 text-sm text-ink-soft">
              思考中…
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-brand-100 p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send(input)}
          placeholder="輸入你的問題…"
          aria-label="輸入問題"
          className="flex-1 rounded-full border border-brand-200 px-4 py-2.5 text-sm focus:border-brand-400"
        />
        <button
          onClick={() => send(input)}
          disabled={loading}
          className="px-5 rounded-full bg-brand-600 text-white font-bold text-sm disabled:opacity-50"
        >
          傳送
        </button>
      </div>
    </div>
  );
}
