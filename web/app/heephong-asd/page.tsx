import type { Metadata } from "next";
import Link from "next/link";
import {
  HEEPHONG_ASD,
  HEEPHONG_SERIES,
  HEEPHONG_CENTRES,
} from "@/data/heephongIntensive";
import AddToPlanButton from "@/components/AddToPlanButton";

export const metadata: Metadata = {
  title: "協康會 學前自閉症兒童密集式訓練服務",
  description:
    "協康會青蔥計劃 學前自閉症兒童密集式訓練服務 2025-2026 年度一覽表：伴我童樂 / 伴我童行（基礎・高階）班別、月費與參與中心。自費，以 TEACCH+SCERTS 為本。",
};

export default function HeepHongAsdPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-warm-50 to-brand-50">
        <div className="container-page py-14">
          <p className="text-warm-600 font-bold text-sm mb-2">自費密集訓練 · {HEEPHONG_ASD.org}</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900"><span aria-hidden="true">🐥 </span>
            {HEEPHONG_ASD.title}
          </h1>
          <p className="mt-2 text-brand-700 font-bold">{HEEPHONG_ASD.year}一覽表</p>
          <p className="mt-4 max-w-2xl text-ink-soft">{HEEPHONG_ASD.approach}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <AddToPlanButton item={{ id: "heephong-asd", title: "協康會 學前自閉症密集式訓練（查詢報名）", kind: "course" }} />
            <a href={HEEPHONG_ASD.sourceUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm">
              官方一覽表 PDF →
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-10 space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border border-brand-100 p-5">
            <p className="text-xs font-bold text-brand-600 mb-1">服務對象</p>
            <p className="text-ink">{HEEPHONG_ASD.target}</p>
          </div>
          <div className="rounded-2xl bg-white border border-brand-100 p-5">
            <p className="text-xs font-bold text-brand-600 mb-1">備註</p>
            <p className="text-ink">{HEEPHONG_ASD.note}</p>
          </div>
        </div>

        {/* 課程系列 + 月費 */}
        {HEEPHONG_SERIES.map((s) => (
          <div key={s.name} className="rounded-2xl bg-white border border-brand-100 overflow-hidden">
            <div className="px-5 py-4 bg-brand-50/50 border-b border-brand-100 flex items-center justify-between">
              <h2 className="font-black text-brand-900">{s.name}</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-600 text-white text-xs font-bold">{s.age}</span>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-ink-soft">
                  <th className="px-5 py-2 font-bold">班別形式</th>
                  <th className="px-5 py-2 font-bold">每月收費（參考）</th>
                </tr>
              </thead>
              <tbody>
                {s.classes.map((c, i) => (
                  <tr key={i} className="border-t border-brand-50">
                    <td className="px-5 py-3 text-ink">{c.format}</td>
                    <td className="px-5 py-3">
                      <span className="font-bold text-brand-800">{c.monthlyFee}</span>
                      {c.note && <span className="block text-xs text-ink-soft">{c.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        {/* 參與中心 */}
        <div className="rounded-2xl bg-white border border-brand-100 p-6">
          <h2 className="font-black text-brand-900 mb-3">參與中心（按區）</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {HEEPHONG_CENTRES.map((c) => (
              <div key={c.name} className="rounded-lg bg-brand-50/50 border border-brand-100 px-3 py-2 text-sm">
                <span className="font-bold text-brand-800">{c.name}</span>
                <span className="text-ink-soft"> · {c.district}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-ink-soft">
            個別班別於哪間中心開辦、確切時間表與地址，請以協康會官方一覽表為準。
          </p>
        </div>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink-soft">
          ⚠️ 以上收費為 {HEEPHONG_ASD.year}參考數字（查證 2026-06），實際收費、班別與名額會變動，
          報名及最新詳情請以協康會公佈為準。
          <div className="mt-3 flex flex-wrap gap-3">
            <a href={HEEPHONG_ASD.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">官方一覽表 PDF →</a>
            <a href={HEEPHONG_ASD.enquiryUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">協康會青蔥計劃 →</a>
            <Link href="/directory" className="text-brand-600 font-bold hover:underline">返回資源目錄 →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
