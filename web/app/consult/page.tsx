import type { Metadata } from "next";
import ConsultForm from "@/components/ConsultForm";

export const metadata: Metadata = {
  title: "預約諮詢",
  description: "整理孩子的狀況與想問的問題，並直接聯絡官方與專業機構獲得諮詢。",
};

const CONTACTS = [
  {
    name: "衞生署 兒童體能智力測驗服務（CAS）",
    desc: "兒童發展評估與診斷（12 歲以下）",
    url: "https://www.dhcas.gov.hk/tc/",
  },
  {
    name: "社會福利署 康復服務中央轉介系統",
    desc: "學前康復服務轉介及輪候查詢",
    url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/crsrehabwa/",
  },
  {
    name: "協康會 Heep Hong",
    desc: "提供評估、訓練及家長支援的主要 NGO",
    url: "https://www.heephong.org/",
  },
  {
    name: "復康會 RehabGuide",
    desc: "一站式復康服務搜尋指南",
    url: "https://www.rehabguide.hk/",
  },
];

export default function ConsultPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-warm-50 to-brand-50">
        <div className="container-page py-14">
          <p className="text-warm-600 font-bold text-sm mb-2">諮詢支援</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900"><span aria-hidden="true">💬 </span>預約諮詢</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            先用下面的表單整理孩子的狀況與你最想問的問題，再帶住摘要聯絡官方或專業機構，
            溝通會更快更聚焦。
          </p>
        </div>
      </section>

      <section className="container-page py-10 grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <h2 className="text-xl font-black text-brand-900 mb-5">整理你的情況</h2>
          <ConsultForm />
        </div>

        <div>
          <h2 className="text-xl font-black text-brand-900 mb-5">直接聯絡這些機構</h2>
          <div className="space-y-3">
            {CONTACTS.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-white border border-brand-100 p-5 card-hover"
              >
                <p className="font-black text-brand-900">{c.name}</p>
                <p className="text-sm text-ink-soft mt-1">{c.desc}</p>
                <span className="mt-2 inline-block text-brand-600 font-bold text-sm">前往官方頁面 →</span>
              </a>
            ))}
          </div>
          <p className="mt-5 text-xs text-ink-soft bg-amber-50 border border-amber-200 rounded-xl p-4">
            ⚠️ 本平台為資訊整合工具，不直接提供醫療或評估服務，亦不代為預約。請透過上述官方／專業機構辦理。
          </p>
        </div>
      </section>
    </>
  );
}
