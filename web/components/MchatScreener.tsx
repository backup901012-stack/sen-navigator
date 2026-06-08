"use client";

import { useState } from "react";
import Link from "next/link";
import { MCHAT_ITEMS, scoreBand, MCHAT_SOURCE } from "@/data/mchat";
import AddToPlanButton from "@/components/AddToPlanButton";

type Ans = "yes" | "no";

const BAND_STYLE: Record<string, { box: string; chip: string }> = {
  green: { box: "bg-green-50 border-green-200", chip: "bg-green-600" },
  amber: { box: "bg-amber-50 border-amber-200", chip: "bg-amber-500" },
  warm: { box: "bg-warm-50 border-warm-200", chip: "bg-warm-600" },
};

export default function MchatScreener() {
  const [answers, setAnswers] = useState<Record<number, Ans>>({});
  const [submitted, setSubmitted] = useState(false);

  const total = MCHAT_ITEMS.length;
  const answeredCount = Object.keys(answers).length;
  const allDone = answeredCount === total;

  const pick = (no: number, a: Ans) => setAnswers((p) => ({ ...p, [no]: a }));

  const score = MCHAT_ITEMS.reduce(
    (s, it) => s + (answers[it.no] === it.riskAnswer ? 1 : 0),
    0
  );

  if (submitted) {
    const r = scoreBand(score);
    const st = BAND_STYLE[r.color];
    return (
      <div>
        <div className={`rounded-2xl border-2 p-6 sm:p-8 ${st.box}`}>
          <div className="flex items-center gap-3">
            <span className={`grid place-items-center w-14 h-14 rounded-full text-white text-2xl font-black ${st.chip}`}>
              {score}
            </span>
            <div>
              <p className="text-sm text-ink-soft">有風險回答數目（總分）</p>
              <h2 className="text-2xl font-black text-brand-900">{r.title}</h2>
            </div>
          </div>
          <p className="mt-4 text-ink leading-relaxed">{r.advice}</p>
        </div>

        {/* 強免責 */}
        <p className="mt-4 text-sm bg-brand-50 border border-brand-100 rounded-xl p-4 text-ink-soft">
          ⚠️ 此結果只屬「篩查」參考，<strong>並非診斷</strong>。M-CHAT-R/F 適用於 16–30 個月幼兒。
          任何疑慮都應諮詢專業人員（醫生、心理學家），由專業評估作準。
        </p>

        {/* 下一步 */}
        <div className="mt-6">
          <p className="font-bold text-brand-900 mb-3">建議下一步</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/journey" className="rounded-xl bg-white border border-brand-100 p-4 card-hover">
              <p className="font-black text-brand-900">① 了解評估流程</p>
              <p className="text-sm text-ink-soft mt-1">取得書面報告 + Form 2 轉介</p>
            </Link>
            <Link href="/grading" className="rounded-xl bg-white border border-brand-100 p-4 card-hover">
              <p className="font-black text-brand-900">② 評估與分級</p>
              <p className="text-sm text-ink-soft mt-1">CAS / 自費評估、中央轉介系統</p>
            </Link>
            <Link href="/match" className="rounded-xl bg-white border border-brand-100 p-4 card-hover">
              <p className="font-black text-brand-900">③ 服務配對</p>
              <p className="text-sm text-ink-soft mt-1">為孩子找合適服務方向</p>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <AddToPlanButton item={{ id: "mchat-followup", title: "跟進 M-CHAT 篩查結果（諮詢專業評估）", kind: "step" }} />
          <button
            onClick={() => { setSubmitted(false); setAnswers({}); }}
            className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200"
          >
            重新篩查
          </button>
        </div>

        <p className="mt-6 text-xs text-ink-soft">
          工具來源：
          <a href={MCHAT_SOURCE.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
            {MCHAT_SOURCE.label}
          </a>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* 進度 */}
      <div className="sticky top-16 z-10 bg-[--color-paper] py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-brand-100 overflow-hidden">
            <div className="h-full bg-brand-600 transition-all" style={{ width: `${(answeredCount / total) * 100}%` }} />
          </div>
          <span className="text-sm font-bold text-brand-700 shrink-0">{answeredCount}/{total}</span>
        </div>
      </div>

      <div className="space-y-3 mt-2">
        {MCHAT_ITEMS.map((it) => {
          const a = answers[it.no];
          return (
            <div key={it.no} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="flex gap-3">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-50 text-brand-700 font-black text-sm shrink-0">
                  {it.no}
                </span>
                <div className="flex-1">
                  <p className="font-medium text-ink">{it.text}</p>
                  {it.example && <p className="text-sm text-ink-soft mt-1">例：{it.example}</p>}
                  <div className="mt-3 flex gap-2">
                    {(["yes", "no"] as Ans[]).map((opt) => (
                      <button
                        key={opt}
                        onClick={() => pick(it.no, opt)}
                        aria-pressed={a === opt}
                        className={`px-6 py-2 rounded-full font-bold text-sm border-2 transition-colors ${
                          a === opt
                            ? "border-brand-500 bg-brand-600 text-white"
                            : "border-brand-200 bg-white text-brand-700 hover:border-brand-400"
                        }`}
                      >
                        {opt === "yes" ? "是" : "否"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 sticky bottom-0 bg-[--color-paper] py-4">
        <button
          onClick={() => { setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          disabled={!allDone}
          className="w-full py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {allDone ? "查看篩查結果" : `仲有 ${total - answeredCount} 題未答`}
        </button>
      </div>
    </div>
  );
}
