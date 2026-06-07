"use client";

import { useRef, useState } from "react";

interface Msg {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "我個仔 3 歲仲未識講句子，應該點做？",
  "到校服務同特殊幼兒中心有咩分別？",
  "輪候緊政府服務，等緊可以做啲咩？",
];

export default function AiChat() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply || "（暫時無法回應）" }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "連線出現問題，請稍後再試。" }]);
    } finally {
      setLoading(false);
      setTimeout(() => boxRef.current?.scrollTo(0, boxRef.current.scrollHeight), 50);
    }
  };

  return (
    <div className="rounded-2xl bg-white border border-brand-100 overflow-hidden flex flex-col h-[32rem]">
      <div className="bg-brand-600 text-white px-5 py-3 flex items-center gap-2">
        <span className="text-xl">🤖</span>
        <div>
          <p className="font-black leading-tight">導航員 AI 助理</p>
          <p className="text-xs text-brand-100">即時解答 SEN 資源疑問</p>
        </div>
      </div>

      <div ref={boxRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-brand-50/30">
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
