import type { Metadata } from "next";
import { RESOURCE_GROUPS } from "@/data/resources";

export const metadata: Metadata = {
  title: "權威資源連結",
  description:
    "香港 SEN 學前資源權威連結：社署、衞生署、教育局官方頁面、公開數據、政策文件及實用 NGO。",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">一手來源</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">權威資源連結</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            本平台所有資料均整理自以下官方與權威來源。建議直接前往官方頁面查證最新詳情。
          </p>
        </div>
      </section>

      <section className="container-page py-10 grid md:grid-cols-2 gap-6">
        {RESOURCE_GROUPS.map((g) => (
          <div key={g.title} className="rounded-2xl bg-white border border-brand-100 p-6">
            <h2 className="font-black text-brand-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded bg-brand-500 inline-block" />
              {g.title}
            </h2>
            <ul className="space-y-3">
              {g.items.map((it) => (
                <li key={it.url}>
                  <a
                    href={it.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 font-medium hover:underline break-words"
                  >
                    {it.label} →
                  </a>
                  {it.note && <p className="text-xs text-ink-soft">{it.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container-page pb-16">
        <p className="text-xs text-ink-soft bg-amber-50 border border-amber-200 rounded-xl p-4">
          ⚠️ 連結與資料查證日期為 2026 年 6 月。政策、收費與輪候數字會隨時間變動，
          最新資訊請以各官方機構公佈為準。輪候即時數字建議參閱 data.gov.hk 每月更新資料集。
        </p>
      </section>
    </>
  );
}
