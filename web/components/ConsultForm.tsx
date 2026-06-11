"use client";

import { useState } from "react";

export default function ConsultForm() {
  const [f, setF] = useState({
    childAge: "",
    concern: "",
    assessed: "",
    question: "",
  });
  const [summary, setSummary] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF({ ...f, [k]: e.target.value });

  const build = () => {
    const text = `【SEN 諮詢摘要】
孩子年齡：${f.childAge || "—"}
主要關注：${f.concern || "—"}
評估狀況：${f.assessed || "—"}
想問的問題：${f.question || "—"}`;
    setSummary(text);
    setTimeout(() => document.getElementById("summary-box")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const copy = async () => {
    if (!summary) return;
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 剪貼簿被拒（舊瀏覽器/權限）：選取摘要文字、方便手動複製
      const node = document.getElementById("summary-box")?.querySelector("pre");
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  };

  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-bold text-brand-700 mb-1">孩子年齡</label>
        <input value={f.childAge} onChange={set("childAge")} placeholder="例如：3 歲 2 個月" className="w-full rounded-xl border border-brand-200 px-4 py-2.5 focus:border-brand-400" />
      </div>
      <div>
        <label className="block text-sm font-bold text-brand-700 mb-1">主要關注</label>
        <input value={f.concern} onChange={set("concern")} placeholder="例如：語言發展、社交、行為、專注" className="w-full rounded-xl border border-brand-200 px-4 py-2.5 focus:border-brand-400" />
      </div>
      <div>
        <label className="block text-sm font-bold text-brand-700 mb-1">評估狀況</label>
        <select value={f.assessed} onChange={set("assessed")} className="w-full rounded-xl border border-brand-200 px-4 py-2.5 focus:border-brand-400 bg-white">
          <option value="">請選擇</option>
          <option>未做過評估</option>
          <option>懷疑有需要，未確診</option>
          <option>已評估：輕度需要</option>
          <option>已評估：中度或嚴重需要</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-bold text-brand-700 mb-1">想問的問題</label>
        <textarea value={f.question} onChange={set("question")} rows={3} placeholder="把你最想了解的事寫下來" className="w-full rounded-xl border border-brand-200 px-4 py-2.5 focus:border-brand-400" />
      </div>

      <button onClick={build} className="w-full py-3 rounded-full bg-brand-600 text-white font-bold">
        整理我的諮詢摘要
      </button>

      {summary && (
        <div id="summary-box" className="rounded-2xl bg-brand-50 border border-brand-100 p-5">
          <p className="font-bold text-brand-800 mb-2">你的諮詢摘要</p>
          <pre className="whitespace-pre-wrap text-sm text-ink font-sans">{summary}</pre>
          <div className="mt-4 flex flex-wrap gap-2">
            <button onClick={copy} className="px-4 py-2 rounded-full bg-brand-600 text-white font-bold text-sm">
              {copied ? "✓ 已複製" : "複製摘要"}
            </button>
            <button onClick={() => window.print()} className="px-4 py-2 rounded-full bg-white border border-brand-200 text-brand-700 font-bold text-sm">
              🖨 列印
            </button>
          </div>
          <p className="mt-3 text-xs text-ink-soft">
            把這份摘要帶去或致電以下機構，可更快進入主題。
          </p>
        </div>
      )}
    </div>
  );
}
