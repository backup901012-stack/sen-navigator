import type { Metadata } from "next";
import Link from "next/link";
import { PRC_REGIONS, PRC_TOTAL } from "@/data/prcCentres";

export const metadata: Metadata = {
  title: "各區家長／親屬資源中心",
  description:
    "全港 23 間津助家長／親屬資源中心按區一覽：名稱、地址與電話。為殘疾人士的家長／親屬／照顧者提供輔導、互助小組與資源，免費，可直接申請。",
};

export default function PrcPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container-page py-14">
          <p className="text-brand-100 font-bold text-sm mb-2">家長支援 · 社區資源</p>
          <h1 className="text-3xl sm:text-4xl font-black">各區家長／親屬資源中心</h1>
          <p className="mt-4 max-w-2xl text-brand-50">
            社署資助、全港 {PRC_TOTAL} 間。為殘疾人士的家長／親屬／照顧者提供輔導、互助小組、
            資源與社區教育，紓緩照顧壓力。<strong className="text-white">免費</strong>，可直接向任何中心申請。
          </p>
        </div>
      </section>

      <section className="container-page py-10 space-y-8">
        {PRC_REGIONS.map((r) => (
          <div key={r.region}>
            <h2 className="flex items-center gap-2 text-2xl font-black text-brand-900 mb-4">
              <span className="w-1.5 h-6 rounded bg-brand-500 inline-block" />
              {r.region}
              <span className="text-sm font-medium text-ink-soft">（{r.centres.length} 間）</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {r.centres.map((c) => (
                <div key={c.name} className="rounded-2xl bg-white border border-brand-100 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-brand-600 text-white text-xs font-bold shrink-0">{c.district}</span>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {c.em && <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[11px] font-bold">少數族裔單位</span>}
                      {c.mentalRecovery && <span className="px-2 py-0.5 rounded-md bg-warm-100 text-warm-700 text-[11px] font-bold">精神復元照顧者</span>}
                    </div>
                  </div>
                  <h3 className="mt-2 font-black text-brand-900 leading-snug">{c.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">📍 {c.address}</p>
                  <a href={`tel:${c.tel.replace(/\s/g, "")}`} className="mt-1 inline-block text-brand-700 font-black">📞 {c.tel}</a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink-soft">
          ⚠️ 標示「精神復元照顧者」的中心，服務對象為精神復元人士的照顧者；其餘為殘疾人士的家長／親屬資源中心。
          部分中心設少數族裔（EM）服務單位。資料整理自社署「家長／親屬資源中心」名單（2025-07-11、查證 2026-06），
          地址電話以官方為準。
          <div className="mt-3 flex flex-wrap gap-3">
            <a href="https://www.swd.gov.hk/tc/pubsvc/rehab/cat_supportcom/centrebase/parentsrel/" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">社署官方頁 →</a>
            <a href="https://data.gov.hk/tc-data/dataset/hk-swd-rm-list-of-prc" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">data.gov.hk 名單 →</a>
            <Link href="/parents" className="text-brand-600 font-bold hover:underline">家長特區 →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
