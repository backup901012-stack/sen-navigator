"use client";

/**
 * 小學・共融支援搜尋器
 * 數據：官方《小學概覽 2025》CSV（data.gov.hk／CHSC）每校「全校參與照顧學生的多樣性」欄
 * 507 間小學、支援標籤由關鍵字自動歸納（EP／ST／社交／情緒／讀寫／抽離小組等）。
 */
import { useMemo, useState } from "react";
import SCHOOLS from "@/data/primaryInclusion.json";

interface School {
  n: string; // 名稱
  d: string; // 區域
  net: string; // 小一校網
  t: string; // 類別（官立/資助/直資/私立）
  w: string; // 網址
  s: string; // 多樣性原文
  tags: string[];
}

const ALL = SCHOOLS as School[];
const DISTRICTS = [...new Set(ALL.map((s) => s.d))].sort();
const TAG_OPTIONS = ["EP", "ST", "社交訓練", "情緒支援", "讀寫支援", "抽離小組", "小組訓練"];
const TAG_LABEL: Record<string, string> = {
  EP: "🧠 教育心理學家",
  ST: "🗣️ 言語治療",
  社交訓練: "🤝 社交訓練",
  情緒支援: "💛 情緒支援",
  讀寫支援: "📖 讀寫支援",
  抽離小組: "👥 抽離小組",
  小組訓練: "🎯 小組訓練",
};

export default function PrimaryInclusionExplorer() {
  const [district, setDistrict] = useState("all");
  const [tags, setTags] = useState<string[]>([]);
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    return ALL.filter((s) => {
      if (district !== "all" && s.d !== district) return false;
      if (tags.length && !tags.every((t) => s.tags.includes(t))) return false;
      if (q.trim() && !(s.n.includes(q.trim()) || s.s.includes(q.trim()))) return false;
      return true;
    });
  }, [district, tags, q]);

  function toggleTag(t: string) {
    setTags((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));
  }

  return (
    <div>
      {/* 篩選列 */}
      <div className="rounded-2xl bg-white border border-brand-100 p-5">
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="block text-sm">
            <span className="font-bold text-brand-800">區域</span>
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="mt-1 w-full rounded-xl border border-brand-200 bg-white px-3 py-2.5"
            >
              <option value="all">全部 18 區</option>
              {DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="font-bold text-brand-800">關鍵字（校名或支援內容）</span>
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="例：社交故事、加輔、非華語⋯⋯"
              className="mt-1 w-full rounded-xl border border-brand-200 bg-white px-3 py-2.5"
            />
          </label>
        </div>
        <div className="mt-4">
          <p className="text-sm font-bold text-brand-800">
            概覽中列明嘅支援（可多選、須全部符合）
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {TAG_OPTIONS.map((t) => {
              const on = tags.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleTag(t)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-bold border transition-colors cursor-pointer ${
                    on
                      ? "bg-brand-600 text-white border-brand-600"
                      : "bg-brand-50 text-brand-800 border-brand-100 hover:bg-brand-100"
                  }`}
                >
                  {TAG_LABEL[t]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 結果 */}
      <p className="mt-5 text-sm text-ink-soft" aria-live="polite">
        符合條件：<strong className="text-brand-800">{results.length}</strong> / {ALL.length} 間
        {tags.length > 0 && "（以學校喺官方概覽自述為準）"}
      </p>
      <ul className="mt-3 space-y-3">
        {results.slice(0, 60).map((s) => (
          <li key={s.n} className="rounded-2xl bg-white border border-brand-100 p-5">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <p className="font-black text-brand-900">{s.n}</p>
              <p className="shrink-0 flex gap-1.5">
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-lilac-100 text-lilac-700 font-bold">
                  {s.d}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-brand-100 text-brand-800 font-bold">
                  校網 {s.net}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-terra-100 text-terra-700 font-bold">
                  {s.t}
                </span>
              </p>
            </div>
            {s.tags.length > 0 && (
              <p className="mt-2 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-brand-50 border border-brand-100 text-brand-800 font-bold"
                  >
                    {TAG_LABEL[t] ?? t}
                  </span>
                ))}
              </p>
            )}
            <details className="mt-2">
              <summary className="text-sm text-brand-600 font-bold cursor-pointer">
                概覽原文（學校自述）
              </summary>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{s.s}</p>
            </details>
            {s.w && (
              <a
                href={s.w.startsWith("http") ? s.w : `https://${s.w}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-brand-600 font-bold hover:underline"
              >
                學校網站 ↗
              </a>
            )}
          </li>
        ))}
      </ul>
      {results.length > 60 && (
        <p className="mt-4 text-sm text-ink-soft text-center">
          只顯示首 60 間——加多啲篩選條件收窄範圍啦。
        </p>
      )}
      {results.length === 0 && (
        <p className="mt-4 text-sm text-ink-soft text-center">
          冇符合嘅學校——試吓減少標籤或者轉區。
        </p>
      )}
    </div>
  );
}
