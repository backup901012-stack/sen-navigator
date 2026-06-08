"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { DIRECTORY, TYPE_LABEL } from "@/data/directory";
import { PRIVATE_COURSES, PRIVATE_FEE_DISCLAIMER } from "@/data/privateCourses";
import { FundingBadge, Tag, ConfidenceNote, SourceList } from "@/components/ui";
import AddToPlanButton from "@/components/AddToPlanButton";

const TYPES = ["all", "government", "assessment", "ngo", "private"] as const;
const FUNDINGS = ["all", "free", "subsidised", "self-pay", "mixed"] as const;
const FUNDING_LABEL: Record<string, string> = {
  all: "全部",
  free: "免費",
  subsidised: "資助",
  "self-pay": "自費",
  mixed: "混合",
};

export default function DirectoryExplorer() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("all");
  const [funding, setFunding] = useState<string>("all");

  const results = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return DIRECTORY.filter((r) => {
      if (type !== "all" && r.type !== type) return false;
      if (funding !== "all" && r.funding !== funding) return false;
      if (!kw) return true;
      return (
        r.name.toLowerCase().includes(kw) ||
        r.description.toLowerCase().includes(kw) ||
        r.tags.some((t) => t.toLowerCase().includes(kw))
      );
    });
  }, [q, type, funding]);

  return (
    <>
      {/* 篩選控制 */}
      <div className="rounded-2xl bg-white border border-brand-100 p-5 sticky top-16 z-10">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜尋服務、機構或關鍵字（如：言語治療、自閉症、評估）"
          className="w-full rounded-xl border border-brand-200 px-4 py-3 text-base focus:border-brand-400"
        />
        <div className="mt-4 flex flex-wrap gap-4">
          <FilterRow label="類型" value={type} setValue={setType} options={TYPES} labelMap={(v) => (v === "all" ? "全部" : TYPE_LABEL[v])} />
          <FilterRow label="收費" value={funding} setValue={setFunding} options={FUNDINGS} labelMap={(v) => FUNDING_LABEL[v]} />
        </div>
      </div>

      <p className="mt-4 text-sm text-ink-soft">
        共 <strong className="text-brand-700">{results.length}</strong> 項資源
      </p>

      {/* 結果 */}
      <div className="mt-4 grid sm:grid-cols-2 gap-4">
        {results.map((r) => (
          <article key={r.id} className="rounded-2xl bg-white border border-brand-100 p-5 flex flex-col">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-black text-brand-900">{r.name}</h3>
              <FundingBadge funding={r.funding} />
            </div>
            <p className="text-xs text-ink-soft mt-0.5">
              {TYPE_LABEL[r.type]} · 適合 {r.ageGroup}
            </p>
            <p className="mt-2 text-sm text-ink flex-1">{r.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {r.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <ConfidenceNote confidence={r.confidence} />
            <div className="mt-4 flex items-center justify-between gap-2">
              <AddToPlanButton size="sm" item={{ id: `dir-${r.id}`, title: r.name, kind: "resource" }} />
              {r.url && r.url.startsWith("/") ? (
                <Link href={r.url} className="text-brand-600 font-bold text-sm hover:underline">
                  詳情 →
                </Link>
              ) : r.url && r.url.startsWith("http") ? (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold text-sm hover:underline">
                  官方頁面 →
                </a>
              ) : null}
            </div>
            <SourceList sources={r.sources} />
          </article>
        ))}
      </div>

      {results.length === 0 && (
        <p className="mt-10 text-center text-ink-soft">
          找不到符合條件的資源，試試清除篩選或換個關鍵字。
        </p>
      )}

      {/* 自費收費參考 */}
      <section id="fee" className="mt-16 scroll-mt-20">
        <h2 className="text-2xl font-black text-brand-900">自費訓練課程收費參考</h2>
        <p className="mt-2 text-sm bg-amber-50 border border-amber-200 rounded-xl p-4 text-ink-soft">
          ⚠️ {PRIVATE_FEE_DISCLAIMER}
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {PRIVATE_COURSES.map((c) => (
            <div key={c.id} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.icon}</span>
                <div>
                  <h3 className="font-black text-brand-900">{c.name}</h3>
                  <p className="text-xs text-ink-soft">{c.nameEn}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink">{c.summary}</p>
              <div className="mt-3 rounded-xl bg-warm-50 border border-warm-100 p-3">
                <p className="text-xs font-bold text-warm-700">一般收費（參考）</p>
                <p className="text-sm text-ink mt-0.5">{c.feeRange}</p>
                {c.feeNote && <p className="text-xs text-ink-soft mt-1">{c.feeNote}</p>}
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {c.suitableFor.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <ConfidenceNote confidence={c.confidence} />
              <SourceList sources={c.sources} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FilterRow({
  label,
  value,
  setValue,
  options,
  labelMap,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
  options: readonly string[];
  labelMap: (v: string) => string;
}) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs font-bold text-ink-soft">{label}：</span>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => setValue(o)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
            value === o
              ? "bg-brand-600 text-white"
              : "bg-brand-50 text-brand-700 hover:bg-brand-100"
          }`}
        >
          {labelMap(o)}
        </button>
      ))}
    </div>
  );
}
