"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getPlan,
  toggleDone,
  removeFromPlan,
  clearPlan,
  addToPlan,
} from "@/lib/plan";
import type { PlanItem } from "@/lib/types";
import Mascot from "@/components/Mascot";

const KIND_LABEL: Record<string, string> = {
  service: "政府服務",
  course: "自費課程",
  step: "流程步驟",
  resource: "資源",
};

export default function PlannerBoard() {
  const [items, setItems] = useState<PlanItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [custom, setCustom] = useState("");

  useEffect(() => {
    setMounted(true);
    const refresh = () => setItems(getPlan());
    refresh();
    window.addEventListener("plan-changed", refresh);
    return () => window.removeEventListener("plan-changed", refresh);
  }, []);

  if (!mounted) return null;

  const doneCount = items.filter((i) => i.done).length;

  const addCustom = () => {
    const t = custom.trim();
    if (!t) return;
    addToPlan({ id: `custom-${Date.now()}`, title: t, kind: "step" });
    setCustom("");
  };

  if (items.length === 0) {
    return (
      <div className="rounded-2xl bg-white border border-brand-100 p-10 text-center">
        <div className="flex justify-center" aria-hidden>
          <Mascot size={96} variant="lilac" />
        </div>
        <h2 className="mt-3 text-xl font-black text-brand-900">清單仲係空嘅</h2>
        <p className="mt-2 text-ink-soft">
          去瀏覽服務、流程或資源，按「＋ 加入規劃」就會出現喺呢度。
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href="/match" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold">
            🎯 服務配對
          </Link>
          <Link href="/directory" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200">
            瀏覽資源目錄
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 進度 */}
      <div className="rounded-2xl bg-brand-600 text-white p-6 flex items-center justify-between no-print">
        <div>
          <p className="font-black text-lg">進度</p>
          <p className="text-brand-100 text-sm">
            已完成 {doneCount} / {items.length} 項
          </p>
        </div>
        <div className="text-right">
          <button onClick={() => window.print()} className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 font-bold text-sm mr-2">
            🖨 列印
          </button>
          <button
            onClick={() => { if (confirm("確定清空整個清單？")) clearPlan(); }}
            className="px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 font-bold text-sm"
          >
            清空
          </button>
        </div>
      </div>

      {/* 加自訂項目 */}
      <div className="mt-4 flex gap-2 no-print">
        <input
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addCustom()}
          placeholder="加入自訂待辦（如：致電 XX 中心查詢）"
          className="flex-1 rounded-xl border border-brand-200 px-4 py-2.5 text-sm focus:border-brand-400"
        />
        <button onClick={addCustom} className="px-5 rounded-xl bg-brand-600 text-white font-bold text-sm">
          加入
        </button>
      </div>

      {/* 清單 */}
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li
            key={it.id}
            className={`flex items-center gap-3 rounded-xl border p-4 ${
              it.done ? "bg-green-50 border-green-200" : "bg-white border-brand-100"
            }`}
          >
            <button
              onClick={() => toggleDone(it.id)}
              aria-label="切換完成"
              className={`grid place-items-center w-6 h-6 rounded-full border-2 shrink-0 ${
                it.done ? "bg-green-500 border-green-500 text-white" : "border-brand-300"
              }`}
            >
              {it.done && "✓"}
            </button>
            <div className="flex-1">
              <p className={`font-medium ${it.done ? "line-through text-ink-soft" : "text-ink"}`}>
                {it.title}
              </p>
              <span className="text-xs text-ink-soft">{KIND_LABEL[it.kind] || it.kind}</span>
            </div>
            <button
              onClick={() => removeFromPlan(it.id)}
              className="text-ink-soft hover:text-warm-600 text-sm no-print"
              aria-label="移除"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-ink-soft">
        ※ 清單儲存在你的瀏覽器（不會上傳）。清除瀏覽器資料會一併清除清單。
      </p>
    </div>
  );
}
