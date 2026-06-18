"use client";

import { useState } from "react";
import { SCENARIOS, type ScenarioOption } from "@/data/scenarios";
import AddToPlanButton from "@/components/AddToPlanButton";
import Mascot from "@/components/Mascot";

const TIER: Record<
  ScenarioOption["tier"],
  { label: string; box: string; chip: string; btn: string }
> = {
  good: {
    label: "好回應",
    box: "bg-green-50 border-green-300",
    chip: "bg-green-600",
    btn: "border-green-400 bg-green-50",
  },
  caution: {
    label: "要小心",
    box: "bg-amber-50 border-amber-300",
    chip: "bg-amber-500",
    btn: "border-amber-400 bg-amber-50",
  },
  avoid: {
    label: "應避免",
    box: "bg-rose-50 border-rose-300",
    chip: "bg-rose-500",
    btn: "border-rose-400 bg-rose-50",
  },
};

export default function ScenarioTrainer() {
  const [idx, setIdx] = useState(0);
  // 每條情境已揭開的選項 id
  const [revealed, setRevealed] = useState<Record<string, Set<string>>>({});

  const sc = SCENARIOS[idx];
  const total = SCENARIOS.length;
  const open = revealed[sc.id] ?? new Set<string>();
  const anyOpen = open.size > 0;

  const reveal = (optId: string) =>
    setRevealed((p) => {
      const next = new Set(p[sc.id] ?? []);
      next.add(optId);
      return { ...p, [sc.id]: next };
    });

  const go = (n: number) => {
    setIdx(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* 進度 */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-2 rounded-full bg-brand-100 overflow-hidden">
          <div
            className="h-full bg-brand-600 transition-all"
            style={{ width: `${((idx + 1) / total) * 100}%` }}
          />
        </div>
        <span className="text-sm font-bold text-brand-700 shrink-0">
          情境 {idx + 1}/{total}
        </span>
      </div>

      {/* 情境卡 */}
      <div className="rounded-2xl bg-white border-2 border-brand-100 p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="px-3 py-1 rounded-full bg-brand-600 text-white font-black">
            {sc.child}
          </span>
          <span className="px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 font-bold">
            📍 {sc.setting}
          </span>
          <span className="px-3 py-1 rounded-full bg-warm-50 border border-warm-200 text-warm-700 font-bold">
            {sc.nature}
          </span>
        </div>

        <p className="mt-4 text-ink leading-relaxed">{sc.situation}</p>

        <p className="mt-5 font-black text-brand-900 text-lg">❓ {sc.prompt}</p>

        {/* 選項 */}
        <div className="mt-4 space-y-3">
          {sc.options.map((opt) => {
            const isOpen = open.has(opt.id);
            const t = TIER[opt.tier];
            return (
              <div key={opt.id}>
                <button
                  onClick={() => reveal(opt.id)}
                  aria-expanded={isOpen}
                  disabled={isOpen}
                  className={`w-full text-left rounded-xl border-2 p-4 transition-colors ${
                    isOpen
                      ? t.btn
                      : "border-brand-200 bg-white hover:border-brand-400"
                  } ${isOpen ? "cursor-default" : "cursor-pointer"}`}
                >
                  <span className="text-ink font-medium leading-relaxed">
                    {opt.text}
                  </span>
                </button>

                {isOpen && (
                  <div className={`mt-2 rounded-xl border-2 p-4 ${t.box}`}>
                    <span
                      className={`inline-block mb-2 px-2.5 py-0.5 rounded-full text-white text-xs font-black ${t.chip}`}
                    >
                      {t.label}
                    </span>
                    <p className="text-sm text-ink leading-relaxed">
                      {opt.feedback}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!anyOpen && (
          <p className="mt-4 text-sm text-ink-soft">
            👆 揀一個你會做嘅回應，睇下背後嘅原理。冇分數、可以逐個試。
          </p>
        )}

        {/* 核心原則 */}
        {anyOpen && (
          <div className="mt-6 rounded-2xl bg-brand-50 border border-brand-200 p-5">
            <div className="flex items-start gap-3">
              <span aria-hidden className="shrink-0 -my-1">
                <Mascot size={64} variant="mint" />
              </span>
              <div>
                <p className="font-black text-brand-900 mb-1">💡 記住一句</p>
                <p className="text-ink leading-relaxed">{sc.takeaway}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 導航 */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          onClick={() => go(Math.max(0, idx - 1))}
          disabled={idx === 0}
          className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          ← 上一個
        </button>

        <span className="text-sm text-ink-soft hidden sm:block">
          {sc.child} · {sc.setting}
        </span>

        {idx < total - 1 ? (
          <button
            onClick={() => go(idx + 1)}
            className="px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold"
          >
            下一個情境 →
          </button>
        ) : (
          <AddToPlanButton
            item={{
              id: "scenario-practice",
              title: "繼續練習 SEN 情緒應對情境",
              kind: "step",
            }}
          />
        )}
      </div>
    </div>
  );
}
