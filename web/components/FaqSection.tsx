"use client";

import { useMemo, useState } from "react";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";

export default function FaqSection() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("全部");
  const [open, setOpen] = useState<string | null>(null);

  const list = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return FAQ_ITEMS.filter((f) => {
      if (cat !== "全部" && f.category !== cat) return false;
      if (!kw) return true;
      return f.q.toLowerCase().includes(kw) || f.a.toLowerCase().includes(kw);
    });
  }, [q, cat]);

  return (
    <div>
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="搜尋問題…"
        className="w-full rounded-xl border border-brand-200 px-4 py-3 focus:border-brand-400"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {["全部", ...FAQ_CATEGORIES].map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold ${
              cat === c ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {list.map((f) => {
          const isOpen = open === f.id;
          return (
            <div key={f.id} className="rounded-2xl bg-white border border-brand-100 overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : f.id)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
                aria-expanded={isOpen}
              >
                <span className="font-bold text-brand-900">{f.q}</span>
                <span className={`text-brand-500 transition-transform ${isOpen ? "rotate-45" : ""}`}>＋</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-ink leading-relaxed whitespace-pre-wrap">{f.a}</p>
                  {f.sources && f.sources.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-brand-50">
                      <p className="text-[11px] font-bold text-ink-soft mb-1">資料來源</p>
                      {f.sources.map((s, i) => (
                        <a
                          key={i}
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-[11px] text-brand-600 hover:underline break-all"
                        >
                          {s.label}（查證 {s.checkedAt}）
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
        {list.length === 0 && (
          <p className="text-center text-ink-soft py-8">找不到相關問題，試試用 AI 助理發問。</p>
        )}
      </div>
    </div>
  );
}
