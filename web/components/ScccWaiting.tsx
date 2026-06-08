"use client";

import { useMemo, useState } from "react";
import {
  SCCC_CENTRES,
  SCCC_UPDATE,
  monthsWaited,
  type ScccCentre,
} from "@/data/scccCentres";

// 依港島→九龍→新界次序
const DISTRICT_ORDER = [
  "中西區", "灣仔", "東區", "南區", "離島區",
  "觀塘", "黃大仙", "九龍城", "深水埗",
  "荃灣", "青衣", "葵涌", "將軍澳", "西貢", "沙田", "大埔", "北區(上水及粉嶺)",
  "元朗", "屯門", "天水圍",
];

function waitColor(m: number | null): string {
  if (m === null) return "bg-gray-100 text-gray-600";
  if (m <= 12) return "bg-green-100 text-green-800";
  if (m <= 24) return "bg-amber-100 text-amber-800";
  return "bg-warm-100 text-warm-700";
}

export default function ScccWaiting() {
  const [q, setQ] = useState("");
  const [district, setDistrict] = useState("all");

  const districts = useMemo(() => {
    const set = new Set(SCCC_CENTRES.map((c) => c.district));
    return DISTRICT_ORDER.filter((d) => set.has(d));
  }, []);

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return SCCC_CENTRES.filter((c) => {
      if (district !== "all" && c.district !== district) return false;
      if (!kw) return true;
      return (
        c.nameZh.toLowerCase().includes(kw) ||
        c.nameEn.toLowerCase().includes(kw) ||
        c.code.toLowerCase().includes(kw) ||
        c.district.includes(kw)
      );
    });
  }, [q, district]);

  // 按分區分組
  const grouped = useMemo(() => {
    const map = new Map<string, ScccCentre[]>();
    for (const c of filtered) {
      if (!map.has(c.district)) map.set(c.district, []);
      map.get(c.district)!.push(c);
    }
    return districts
      .filter((d) => map.has(d))
      .map((d) => [d, map.get(d)!] as const);
  }, [filtered, districts]);

  return (
    <div>
      {/* 說明 */}
      <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink">
        <p className="font-bold text-amber-800 mb-1">點睇呢個數據？</p>
        <p>
          表內「<strong>最後獲篩選個案申請日期</strong>」＝該中心最近獲取錄個案當初遞交申請嘅月份。
          日期越舊，代表該中心輪候越長。下方「約 X 個月」是以社署更新日（{SCCC_UPDATE}）推算嘅
          <strong>逐間</strong>輪候時長，<strong>並非全港平均數</strong>。實際視乎個別情況、地區選擇與空缺。
        </p>
      </div>

      {/* 搜尋 + 分區 */}
      <div className="mt-5 rounded-2xl bg-white border border-brand-100 p-5">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="搜尋中心名稱、編號或分區"
          className="w-full rounded-xl border border-brand-200 px-4 py-3 focus:border-brand-400"
        />
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setDistrict("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-bold ${
              district === "all" ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"
            }`}
          >
            全部分區
          </button>
          {districts.map((d) => (
            <button
              key={d}
              onClick={() => setDistrict(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                district === d ? "bg-brand-600 text-white" : "bg-brand-50 text-brand-700 hover:bg-brand-100"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* 圖例 */}
      <div className="mt-4 flex flex-wrap gap-3 text-xs text-ink-soft">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-200 inline-block" />約 ≤12 個月</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-200 inline-block" />約 13–24 個月</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-warm-200 inline-block" />約 &gt;24 個月</span>
      </div>

      <p className="mt-3 text-sm text-ink-soft">
        共 <strong className="text-brand-700">{filtered.length}</strong> 間中心
        （全港 {SCCC_CENTRES.length} 間）
      </p>

      {/* 分區分組 */}
      <div className="mt-4 space-y-6">
        {grouped.map(([d, centres]) => (
          <section key={d}>
            <h2 className="flex items-center gap-2 text-lg font-black text-brand-900 mb-3">
              <span className="w-1.5 h-5 rounded bg-brand-500 inline-block" />
              {d}
              <span className="text-sm font-medium text-ink-soft">（{centres.length} 間）</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {centres.map((c) => {
                const m = monthsWaited(c.lastApp);
                return (
                  <div key={c.code} className="rounded-xl bg-white border border-brand-100 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-bold text-brand-900 leading-snug">{c.nameZh}</p>
                      <span className="text-[11px] text-ink-soft shrink-0 font-mono">{c.code}</span>
                    </div>
                    <p className="text-xs text-ink-soft mt-0.5">{c.nameEn}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      {c.residential && (
                        <span className="px-2 py-0.5 rounded-md bg-brand-50 text-brand-700 text-xs border border-brand-100">設住宿</span>
                      )}
                      <span className="px-2 py-0.5 rounded-md bg-gray-100 text-ink text-xs">
                        最後獲篩選申請：<strong>{c.lastApp}</strong>
                      </span>
                      <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${waitColor(m)}`}>
                        {m === null ? "—" : `約 ${m} 個月`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-ink-soft py-10">找不到符合的中心，試試換關鍵字或選「全部分區」。</p>
        )}
      </div>

      <p className="mt-8 text-xs text-ink-soft">
        資料來源：社會福利署「特殊幼兒中心 — 最後獲篩選個案的申請日期」，更新日期 {SCCC_UPDATE}。
        數字會隨時間變動，申請與最新資訊請以社署為準。
      </p>
    </div>
  );
}
