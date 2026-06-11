"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FAQ_ITEMS, FAQ_CATEGORIES } from "@/data/faq";

/** 範疇 → 粘土色圖示磚（Clay Doh 13 材質色系輪替） */
const CAT_META: Record<string, { icon: string; tile: string; chip: string }> = {
  全部:     { icon: "🌈", tile: "bg-white text-brand-900",          chip: "bg-brand-50 text-brand-800" },
  基礎認識: { icon: "📚", tile: "bg-brand-100 text-brand-800",      chip: "bg-brand-100 text-brand-800" },
  評估:     { icon: "🔍", tile: "bg-lilac-100 text-lilac-700",      chip: "bg-lilac-100 text-lilac-700" },
  制度:     { icon: "🏛️", tile: "bg-sky-100 text-sky-800",          chip: "bg-sky-100 text-sky-800" },
  服務:     { icon: "🧩", tile: "bg-warm-100 text-warm-700",        chip: "bg-warm-100 text-warm-700" },
  費用:     { icon: "💰", tile: "bg-amber-100 text-amber-800",      chip: "bg-amber-100 text-amber-800" },
  輪候:     { icon: "⏳", tile: "bg-terra-100 text-terra-700",      chip: "bg-terra-100 text-terra-700" },
  自費:     { icon: "🛒", tile: "bg-emerald-100 text-emerald-800",  chip: "bg-emerald-100 text-emerald-800" },
};

export default function FaqSection() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("全部");
  const [open, setOpen] = useState<string | null>(null);

  const counts = useMemo(() => {
    const m: Record<string, number> = { 全部: FAQ_ITEMS.length };
    for (const f of FAQ_ITEMS) m[f.category] = (m[f.category] || 0) + 1;
    return m;
  }, []);

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
      {/* 圖示化範疇磚（粘土彩輪） */}
      <div className="mt-5 grid grid-cols-4 sm:grid-cols-8 gap-2.5">
        {["全部", ...FAQ_CATEGORIES].map((c) => {
          const meta = CAT_META[c] ?? CAT_META.全部;
          const active = cat === c;
          return (
            <button
              key={c}
              onClick={() => setCat(c)}
              aria-pressed={active}
              className={`rounded-xl px-1 py-3 flex flex-col items-center gap-1 border-2 transition-colors ${meta.tile} ${
                active ? "border-brand-600" : "border-transparent hover:border-brand-300"
              }`}
            >
              <span className="text-2xl" aria-hidden>{meta.icon}</span>
              <span className="text-xs font-black leading-none">{c}</span>
              <span className="text-[10px] opacity-70 leading-none">{counts[c] ?? 0} 條</span>
            </button>
          );
        })}
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
                <span className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`shrink-0 grid place-items-center w-8 h-8 rounded-lg text-base ${(CAT_META[f.category] ?? CAT_META.全部).chip}`}
                    aria-hidden
                  >
                    {(CAT_META[f.category] ?? CAT_META.全部).icon}
                  </span>
                  <span className="font-bold text-brand-900">{f.q}</span>
                </span>
                <span className={`text-brand-500 transition-transform ${isOpen ? "rotate-45" : ""}`}>＋</span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-ink leading-relaxed whitespace-pre-wrap">{f.a}</p>
                  {f.sources && f.sources.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-brand-50">
                      <p className="text-[11px] font-bold text-ink-soft mb-1">資料來源</p>
                      {f.sources.map((s, i) =>
                        s.url.startsWith("/") ? (
                          <Link key={i} href={s.url} className="block text-[11px] text-brand-600 hover:underline break-all">
                            {s.label}
                          </Link>
                        ) : (
                          <a
                            key={i}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-[11px] text-brand-600 hover:underline break-all"
                          >
                            {s.label}（查證 {s.checkedAt}）
                          </a>
                        )
                      )}
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
