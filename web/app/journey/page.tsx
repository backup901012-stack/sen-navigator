import type { Metadata } from "next";
import Link from "next/link";
import { JOURNEY_STEPS } from "@/data/journeySteps";
import AddToPlanButton from "@/components/AddToPlanButton";

export const metadata: Metadata = {
  title: "申請流程地圖",
  description:
    "從察覺、評估、診斷、轉介、輪候到獲配服務，香港 SEN 學前康復服務完整申請流程，每步對應的部門與官方連結。",
};

export default function JourneyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">一步一步來</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">申請流程地圖</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            由察覺到獲配服務，整個過程分六大步。把握每一步，尤其別浪費輪候期。
          </p>
        </div>
      </section>

      <section className="container-page py-12">
        <ol className="relative border-l-2 border-brand-200 ml-4 space-y-8">
          {JOURNEY_STEPS.map((s) => (
            <li key={s.step} className="ml-8 relative">
              <span className="absolute -left-[3.05rem] grid place-items-center w-10 h-10 rounded-full bg-brand-600 text-white font-black ring-4 ring-white">
                {s.step}
              </span>
              <div className="rounded-2xl bg-white border border-brand-100 p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-black text-brand-900">{s.title}</h2>
                    <p className="text-sm text-brand-600 font-bold mt-0.5">{s.who}</p>
                  </div>
                  <AddToPlanButton
                    size="sm"
                    item={{ id: `step-${s.step}`, title: `第 ${s.step} 步：${s.title}`, kind: "step" }}
                  />
                </div>
                <p className="mt-3 text-ink leading-relaxed">{s.what}</p>
                {s.tips && s.tips.length > 0 && (
                  <div className="mt-4 rounded-xl bg-brand-50/60 border border-brand-100 p-4">
                    <p className="text-xs font-bold text-brand-700 mb-1">💡 貼士</p>
                    <ul className="space-y-1">
                      {s.tips.map((t, i) => (
                        <li key={i} className="text-sm text-ink-soft">· {t}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {s.links && s.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {s.links.map((l, i) =>
                      l.url.startsWith("/") ? (
                        <Link key={i} href={l.url} className="text-brand-600 font-bold text-sm hover:underline">
                          {l.label} →
                        </Link>
                      ) : (
                        <a
                          key={i}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-600 font-bold text-sm hover:underline"
                        >
                          {l.label} →
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl bg-brand-900 text-white p-8 text-center">
          <h2 className="text-xl font-black">想把這些步驟記下來、逐步跟進？</h2>
          <p className="mt-2 text-brand-200">
            把流程步驟與合適服務加入「我的規劃清單」，隨時查看進度。
          </p>
          <Link href="/planner" className="mt-5 inline-block px-6 py-3 rounded-full bg-warm-500 text-white font-bold">
            📋 開啟我的規劃清單
          </Link>
        </div>
      </section>
    </>
  );
}
