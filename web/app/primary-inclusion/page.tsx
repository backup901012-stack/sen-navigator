import type { Metadata } from "next";
import Link from "next/link";
import PrimaryInclusionExplorer from "@/components/PrimaryInclusionExplorer";

export const metadata: Metadata = {
  title: "小學・共融支援搜尋器（官方概覽 2025）",
  description:
    "按官方《小學概覽 2025》507 間小學嘅「全校參與照顧學生的多樣性」自述，篩選有列明校本教育心理學家、言語治療、社交訓練、情緒支援等共融支援嘅學校，可按 18 區同關鍵字搜尋。",
};

export default function PrimaryInclusionPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 via-white to-lilac-50">
        <div className="container-page py-12 sm:py-16">
          <p className="text-brand-600 font-bold text-sm">資源目錄 · 學校資料</p>
          <h1 className="mt-1 text-3xl sm:text-4xl font-black text-brand-900">
            <span aria-hidden="true">🔎 </span>小學・共融支援搜尋器
          </h1>
          <p className="mt-4 text-ink-soft max-w-2xl">
            數據來自官方《小學概覽 2025》（家庭與學校合作事宜委員會／data.gov.hk）
            全港 507 間小學嘅「<strong>全校參與照顧學生的多樣性</strong>」欄——
            即係學校自己申報嘅共融支援措施。想搵有寫明校本心理學家、言語治療、
            社交小組嘅學校？喺度篩就得。
          </p>
        </div>
      </section>

      <section className="container-page py-8">
        {/* 誠實使用說明 */}
        <div className="rounded-2xl bg-amber-50 border border-amber-100 p-5 text-sm text-ink leading-relaxed">
          <p>
            <strong className="text-brand-900">📌 點解讀呢啲資料：</strong>
            列明有關支援 = 學校主動喺官方概覽申報咗（落地有宣示）；但
            <strong>冇寫唔一定等於冇提供</strong>——按政策所有公營小學都有
            SENCO 同校本教育心理服務（
            <Link href="/inclusion-schools" className="text-brand-600 font-bold hover:underline">
              詳見人手配置
            </Link>
            ）。呢個工具幫你<strong>初步篩選</strong>，落實前請上學校網站
            同埋直接問 SENCO。
          </p>
        </div>

        <div className="mt-6">
          <PrimaryInclusionExplorer />
        </div>

        <p className="mt-8 text-xs text-ink-soft">
          資料來源：
          <a
            href="https://data.gov.hk/tc-data/dataset/chsc-chsc-primary-school-profiles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            《小學概覽 2025》官方開放數據（data.gov.hk／家庭與學校合作事宜委員會）
          </a>
          （2026-07 抓取整理）。支援標籤由學校自述文字以關鍵字自動歸納，原文可逐間展開核對；
          幼稚園請用{" "}
          <a
            href="https://www.chsc.hk/kindergarten"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:underline"
          >
            幼稚園概覽
          </a>
          逐間查。
        </p>
      </section>
    </>
  );
}
