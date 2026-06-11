import type { Metadata } from "next";
import FaqSection from "@/components/FaqSection";
import AiChat from "@/components/AiChat";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: "常見問題 / AI 助理",
  description:
    "香港 SEN 學前資源常見問題：評估、服務分別、收費、輪候、自費治療，並有 AI 助理即時解答。",
};

/** schema.org FAQPage 結構化數據（利 AI 搜尋/LLM 正確引用；rich results 視乎 Google 政策） */
const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">解答查詢</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">常見問題 · AI 助理</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            最常被問到的問題都整理喺度。搵唔到答案？右邊嘅 AI 助理即時為你解答。
          </p>
        </div>
      </section>

      <section className="container-page py-10 grid lg:grid-cols-[1fr_24rem] gap-8 items-start">
        <div>
          <h2 className="text-xl font-black text-brand-900 mb-4">常見問題</h2>
          <FaqSection />
        </div>
        <div className="lg:sticky lg:top-20">
          <AiChat />
          <p className="mt-3 text-xs text-ink-soft">
            AI 助理僅供一般資訊參考，不構成醫療或診斷意見。緊急情況請聯絡專業人員。
          </p>
        </div>
      </section>
    </>
  );
}
