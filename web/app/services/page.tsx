import type { Metadata } from "next";
import Link from "next/link";
import { GOVERNMENT_SERVICES, WAITING_NOTE } from "@/data/governmentServices";
import { SectionTitle, SourceList, ConfidenceNote } from "@/components/ui";
import AddToPlanButton from "@/components/AddToPlanButton";

export const metadata: Metadata = {
  title: "政府學前康復服務",
  description:
    "香港四大政府資助學前康復服務：到校學前康復服務、早期教育及訓練中心、特殊幼兒中心、兼收計劃，對象、收費與輪候一覽。",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container-page py-14">
          <p className="text-brand-100 font-bold text-sm mb-2">政府資助 · 學前康復服務</p>
          <h1 className="text-3xl sm:text-4xl font-black">四大政府學前康復服務</h1>
          <p className="mt-4 max-w-2xl text-brand-50">
            香港學前康復服務由社會福利署統籌，全部經「康復服務中央轉介系統」統一輪候。
            以下為四大主要服務，幫你分清適合孩子的方向。
          </p>
        </div>
      </section>

      <section className="container-page py-12 space-y-8">
        {GOVERNMENT_SERVICES.map((s) => (
          <article
            key={s.id}
            id={s.id}
            className="rounded-2xl bg-white border border-brand-100 overflow-hidden scroll-mt-20"
          >
            <div className="p-6 sm:p-8 border-b border-brand-50 bg-brand-50/40">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-2xl font-black text-brand-900">{s.name}</h2>
                    {s.abbr && (
                      <span className="px-2 py-0.5 rounded-md bg-brand-600 text-white text-xs font-bold">
                        {s.abbr}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-soft mt-1">{s.nameEn}</p>
                  <p className="mt-3 text-brand-700 font-bold">{s.tagline}</p>
                </div>
                <AddToPlanButton
                  item={{ id: `svc-${s.id}`, title: s.name, kind: "service" }}
                />
              </div>
            </div>

            <div className="p-6 sm:p-8 grid md:grid-cols-2 gap-x-8 gap-y-5">
              <Field label="服務對象">{s.eligibility}</Field>
              <Field label="服務形式">{s.mode}</Field>
              <Field label="提供機構">{s.provider}</Field>
              <Field label="收費">{s.fee}</Field>
              <div className="md:col-span-2">
                <p className="text-xs font-bold text-brand-600 mb-2">服務重點</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {s.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink">
                      <span className="text-brand-500">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <Field label="如何申請">{s.howToApply}</Field>
              {s.waiting && <Field label="輪候情況">{s.waiting}</Field>}
            </div>

            <div className="px-6 sm:px-8 pb-6">
              <ConfidenceNote confidence={s.confidence} />
              <SourceList sources={s.sources} />
            </div>
          </article>
        ))}

        <p className="text-xs text-ink-soft bg-amber-50 border border-amber-200 rounded-xl p-4">
          ※ {WAITING_NOTE}
        </p>

        <div className="rounded-2xl bg-brand-900 text-white p-8 text-center">
          <h2 className="text-xl font-black">唔肯定孩子適合邊種服務？</h2>
          <p className="mt-2 text-brand-200">
            先了解評估與分級制度，或用服務配對工具獲得方向建議。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <Link href="/grading" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold">
              評估與分級制度
            </Link>
            <Link href="/match" className="px-5 py-2.5 rounded-full bg-warm-500 text-white font-bold">
              🎯 服務配對
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold text-brand-600 mb-1">{label}</p>
      <p className="text-sm text-ink leading-relaxed">{children}</p>
    </div>
  );
}
