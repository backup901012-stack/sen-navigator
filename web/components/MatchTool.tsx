"use client";

import { useState } from "react";
import Link from "next/link";
import { MATCH_QUESTIONS } from "@/data/matchQuestions";
import AddToPlanButton from "@/components/AddToPlanButton";

interface Reco {
  id: string;
  title: string;
  why: string;
  href: string;
  kind: "service" | "course" | "step" | "resource";
  tag: string;
}

function buildRecommendations(a: Record<string, string | string[]>): {
  recos: Reco[];
  note?: string;
} {
  const recos: Reco[] = [];
  const age = a.age as string;
  const assessed = a.assessed as string;
  const inKg = a.kindergarten as string;
  const needs = (a.needs as string[]) || [];
  const budget = a.budget as string;

  let note: string | undefined;

  // 年齡 6+：本平台聚焦學前
  if (age === "over6") {
    note =
      "本平台主要聚焦 0–6 歲學前資源。孩子已 6 歲或以上，學校支援多透過教育局「全校參與模式」處理，建議同時聯絡學校的特殊教育需要統籌主任及教育局。";
  }

  // 評估：未評估 / 懷疑 → 先做評估
  if (assessed === "no" || assessed === "suspect") {
    recos.push({
      id: "reco-cas",
      title: "先安排專業評估（衞生署 CAS）",
      why: "未有正式評估前，難以判定服務方向。評估結果是日後編配服務的關鍵依據，宜盡早安排。",
      href: "/grading",
      kind: "step",
      tag: "第一步",
    });
  }

  // 2 歲以下：早期登記 + 早訓
  if (age === "under2") {
    recos.push({
      id: "reco-early",
      title: "預早登記輪候（中央轉介系統）",
      why: "2 歲以下可預早登記輪候特殊幼兒中心及兼收計劃，及早登記有助縮短實際等候。",
      href: "/services#sccc",
      kind: "step",
      tag: "把握時間",
    });
    recos.push({
      id: "reco-eetc",
      title: "早期教育及訓練中心 (EETC)",
      why: "為初生至 6 歲幼兒提供早期介入，把握 0–6 歲發展黃金期。",
      href: "/services#eetc",
      kind: "service",
      tag: "早期介入",
    });
  }

  // 2–6 歲：依評估程度
  if (age === "2to6") {
    if (assessed === "yes-moderate") {
      recos.push({
        id: "reco-sccc",
        title: "特殊幼兒中心 (SCCC)",
        why: "適合中度至嚴重需要的幼兒，提供全日制密集訓練與照顧。",
        href: "/services#sccc",
        kind: "service",
        tag: "密集訓練",
      });
    } else if (assessed === "yes-mild") {
      if (inKg === "yes") {
        recos.push({
          id: "reco-oprs",
          title: "到校學前康復服務 (OPRS)",
          why: "孩子已入讀幼稚園，跨專業團隊可走入學校提供校本訓練，減少抽離。",
          href: "/services#oprs",
          kind: "service",
          tag: "校本支援",
        });
      }
      recos.push({
        id: "reco-ip",
        title: "幼稚園暨幼兒中心兼收計劃 (IP)",
        why: "適合輕度殘疾幼兒，在普通幼稚園主流環境中接受訓練照顧。",
        href: "/services#ip",
        kind: "service",
        tag: "主流融合",
      });
    } else {
      // 未評估但 2-6
      recos.push({
        id: "reco-oprs-t1",
        title: "到校學前康復服務 — 第一層支援",
        why: "若孩子已入讀參與計劃的幼稚園，懷疑個案也可獲第一層及早支援。",
        href: "/services#oprs",
        kind: "service",
        tag: "及早支援",
      });
    }
  }

  // 需求 → 自費課程方向
  const needMap: Record<string, { id: string; title: string }> = {
    speech: { id: "dir-speech", title: "言語治療" },
    social: { id: "dir-social", title: "社交技巧小組" },
    behavior: { id: "dir-aba", title: "ABA／行為訓練" },
    motor: { id: "dir-ot", title: "職業／物理治療" },
    selfcare: { id: "dir-ot", title: "職業治療（自理訓練）" },
  };
  const seen = new Set<string>();
  needs.forEach((n) => {
    const m = needMap[n];
    if (m && !seen.has(m.id)) {
      seen.add(m.id);
      recos.push({
        id: `reco-${m.id}`,
        title: `${m.title}（可考慮自費補充）`,
        why: "針對你關注的範疇，輪候政府服務期間可考慮自費訓練延續成效。收費因機構而異，宜核實治療師資歷。",
        href: "/directory#fee",
        kind: "course",
        tag: "輪候期支援",
      });
    }
  });

  // 預算傾向
  if (budget === "both" || budget === "private") {
    recos.push({
      id: "reco-tsp",
      title: "申領學習訓練津貼 (TSP)",
      why: "輪候資助服務期間，符合資格者可申領津貼支援訓練（特殊幼兒中心輪候者不設入息審查）。",
      href: "/services",
      kind: "step",
      tag: "經濟支援",
    });
  }

  // 去重
  const unique = recos.filter((r, i) => recos.findIndex((x) => x.id === r.id) === i);
  return { recos: unique, note };
}

export default function MatchTool() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [done, setDone] = useState(false);

  const q = MATCH_QUESTIONS[step];
  const total = MATCH_QUESTIONS.length;

  const pick = (value: string) => {
    if (q.multi) {
      const cur = (answers[q.id] as string[]) || [];
      const next = cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value];
      setAnswers({ ...answers, [q.id]: next });
    } else {
      setAnswers({ ...answers, [q.id]: value });
      if (step < total - 1) setStep(step + 1);
      else setDone(true);
    }
  };

  const next = () => {
    if (step < total - 1) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => {
    setStep(0);
    setAnswers({});
    setDone(false);
  };

  if (done) {
    const { recos, note } = buildRecommendations(answers);
    return (
      <div>
        <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6 text-center">
          <p className="text-3xl">🧭</p>
          <h2 className="mt-2 text-2xl font-black text-brand-900">為孩子整理的方向</h2>
          <p className="mt-2 text-sm text-ink-soft">
            以下是依你的回答整理的<strong>參考方向</strong>，不構成診斷或正式建議。
            正式服務須以專業評估及社署編配為準。
          </p>
        </div>

        {note && (
          <p className="mt-4 text-sm bg-amber-50 border border-amber-200 rounded-xl p-4 text-ink-soft">
            ⚠️ {note}
          </p>
        )}

        <div className="mt-6 space-y-4">
          {recos.map((r, i) => (
            <div key={r.id} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-600 text-white font-black text-sm">
                      {i + 1}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-warm-100 text-warm-700 text-xs font-bold">
                      {r.tag}
                    </span>
                  </div>
                  <h3 className="mt-2 font-black text-brand-900">{r.title}</h3>
                </div>
                <AddToPlanButton size="sm" item={{ id: r.id, title: r.title, kind: r.kind }} />
              </div>
              <p className="mt-2 text-sm text-ink-soft">{r.why}</p>
              <Link href={r.href} className="mt-3 inline-block text-brand-600 font-bold text-sm hover:underline">
                了解更多 →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link href="/planner" className="px-6 py-3 rounded-full bg-warm-500 text-white font-bold">
            📋 查看我的規劃清單
          </Link>
          <button onClick={reset} className="px-6 py-3 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200">
            重新配對
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* 進度 */}
      <div className="flex items-center gap-2 mb-6">
        {MATCH_QUESTIONS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-brand-600" : "bg-brand-100"}`}
          />
        ))}
      </div>
      <p className="text-sm text-ink-soft">問題 {step + 1} / {total}</p>
      <h2 className="mt-1 text-2xl font-black text-brand-900">{q.question}</h2>
      {q.help && <p className="mt-1 text-sm text-ink-soft">{q.help}</p>}

      <div className="mt-6 grid gap-3">
        {q.options.map((o) => {
          const selected = q.multi
            ? ((answers[q.id] as string[]) || []).includes(o.value)
            : answers[q.id] === o.value;
          return (
            <button
              key={o.value}
              onClick={() => pick(o.value)}
              className={`text-left px-5 py-4 rounded-xl border-2 font-medium transition-colors ${
                selected
                  ? "border-brand-500 bg-brand-50 text-brand-800"
                  : "border-brand-100 bg-white hover:border-brand-300"
              }`}
            >
              {q.multi && <span className="mr-2">{selected ? "☑" : "☐"}</span>}
              {o.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="px-5 py-2.5 rounded-full text-brand-700 font-bold disabled:opacity-40"
        >
          ← 上一題
        </button>
        {q.multi && (
          <button onClick={next} className="px-6 py-2.5 rounded-full bg-brand-600 text-white font-bold">
            {step === total - 1 ? "查看結果" : "下一題 →"}
          </button>
        )}
      </div>
    </div>
  );
}
