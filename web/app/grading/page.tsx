import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle, SourceList } from "@/components/ui";
import { SEN_CATEGORIES } from "@/data/senCategories";

export const metadata: Metadata = {
  title: "評估與分級制度",
  description:
    "釐清香港 SEN 學前服務的「分級」真相：按殘疾程度對應服務、到校服務內部層級、衞生署兒童體能智力測驗評估，以及中央轉介系統運作。",
};

const MAPPING = [
  { level: "輕度殘疾", services: "兼收計劃 (IP)、到校學前康復服務 (OPRS)", color: "bg-green-50 border-green-200 text-green-800" },
  { level: "中度至嚴重殘疾", services: "特殊幼兒中心 (SCCC)", color: "bg-warm-50 border-warm-200 text-warm-700" },
  { level: "初生至 6 歲（早期介入）", services: "早期教育及訓練中心 (EETC)", color: "bg-brand-50 border-brand-200 text-brand-800" },
];

export default function GradingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">釐清概念</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            SEN 學前服務的「分級」真相
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            很多家長以為香港有一套「等級 1／2／3」的 SEN 分級。
            事實上，香港<strong className="text-brand-700">並沒有對外公布的統一兒童等級標籤</strong>。
            所謂「分級」，其實是以下三個機制在運作。
          </p>
        </div>
      </section>

      {/* 機制 A */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold">
            機制 A
          </span>
          <h2 className="mt-3 text-2xl font-black text-brand-900">
            按「殘疾程度」對應不同服務類型
          </h2>
          <p className="mt-2 text-ink-soft">
            服務強度由評估判定的殘疾程度決定，並非由家長自選等級。
          </p>
          <div className="mt-6 space-y-3">
            {MAPPING.map((m) => (
              <div
                key={m.level}
                className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 rounded-xl border p-4 ${m.color}`}
              >
                <span className="font-black shrink-0 sm:w-48">{m.level}</span>
                <span className="hidden sm:block">→</span>
                <span className="font-medium">{m.services}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 機制 B */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold">
            機制 B
          </span>
          <h2 className="mt-3 text-2xl font-black text-brand-900">
            到校服務 (OPRS) 的內部支援層級
          </h2>
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-brand-50/60 border border-brand-100 p-5">
              <p className="font-black text-brand-800">第一層支援</p>
              <p className="mt-1 text-sm text-ink-soft">
                為懷疑有特殊需要或邊緣個案的兒童及早提供支援。2023 年 9 月起恆常化。
              </p>
            </div>
            <div className="rounded-xl bg-brand-50/60 border border-brand-100 p-5">
              <p className="font-black text-brand-800">第二層綜合服務</p>
              <p className="mt-1 text-sm text-ink-soft">
                為已評估有發展障礙的兒童提供跨專業密集訓練。另設「基本服務」作輪候過渡。
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink-soft">
            這是<strong>服務內部的支援層級</strong>，並非全港統一的「兒童分級」。
          </p>
        </div>
      </section>

      {/* 機制 C：CAS */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold">
            機制 C
          </span>
          <h2 className="mt-3 text-2xl font-black text-brand-900">
            衞生署 兒童體能智力測驗服務（CAS）
          </h2>
          <p className="mt-2 text-ink-soft">
            這是判定發展障礙類別與程度的關鍵評估，結果是日後編配服務的重要依據。
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm">
            <Info label="服務對象">12 歲以下、有發展障礙或行為問題的兒童</Info>
            <Info label="轉介來源">母嬰健康院、註冊西醫、心理學家、醫院（不接受傳真轉介）</Info>
            <Info label="申請方式">持六個月內正本轉介信，致電或親臨所屬地區測驗中心預約</Info>
            <Info label="處理時間">收齊文件及費用後，醫療報告約 6 至 8 星期處理</Info>
            <Info label="醫療報告費用">每份申請 HK$960（撤回不退款）</Info>
            <Info label="評估方式">跨專業團隊評估，提供教育及康復建議</Info>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://www.dhcas.gov.hk/tc/referral.html" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold text-sm hover:underline">衞生署 CAS 轉介及評估 →</a>
            <a href="https://eform.cefs.gov.hk/form/dh0118/tc/" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold text-sm hover:underline">醫療報告網上申請 →</a>
          </div>
          <SourceList
            sources={[
              { label: "衞生署 CAS — 轉介及評估", url: "https://www.dhcas.gov.hk/tc/referral.html", checkedAt: "2026-06" },
              { label: "衞生署 CAS — 服務範圍", url: "https://www.dhcas.gov.hk/tc/scope.html", checkedAt: "2026-06" },
            ]}
          />
        </div>
      </section>

      {/* 由評估到排隊：Form 2 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-white border-2 border-brand-200 p-6 sm:p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-warm-100 text-warm-700 text-sm font-bold">
            最多家長忽略的關鍵
          </span>
          <h2 className="mt-3 text-2xl font-black text-brand-900">
            由評估到排隊：Form 2 轉介信點嚟？
          </h2>
          <p className="mt-2 text-ink-soft">
            要輪候政府資助學前康復服務（OPRS／EETC／SCCC／兼收計劃），須經
            「康復服務中央轉介系統 — 學前兒童康復服務」，而轉介<strong className="text-brand-700">需要「Form 2」轉介信</strong>。
          </p>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex gap-3 rounded-xl bg-brand-50/60 border border-brand-100 p-4">
              <span className="font-black text-brand-600 shrink-0">1</span>
              <p>
                <strong>Form 2 由專業人員提交</strong>（醫務社工／綜合家庭服務中心社工／主流幼稚園社工），
                並須<strong>附上評估書面報告</strong>。
              </p>
            </div>
            <div className="flex gap-3 rounded-xl bg-brand-50/60 border border-brand-100 p-4">
              <span className="font-black text-brand-600 shrink-0">2</span>
              <div>
                <p className="font-bold">即係要先有評估書面報告，先攞到 Form 2。報告有兩條路：</p>
                <div className="mt-2 grid sm:grid-cols-2 gap-2">
                  <div className="rounded-lg bg-white border border-brand-100 p-3">
                    <p className="font-bold text-brand-800">① 政府資助評估</p>
                    <p className="text-ink-soft mt-0.5">衞生署兒童體能智力測驗服務（CAS）。免費／低收費，但要<strong>輪候</strong>。</p>
                  </div>
                  <div className="rounded-lg bg-white border border-warm-100 p-3">
                    <p className="font-bold text-warm-700">② 自費評估</p>
                    <p className="text-ink-soft mt-0.5">私營臨床／教育心理學家。較快，收費因機構而異，可縮短整體輪候。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 rounded-xl bg-brand-50/60 border border-brand-100 p-4">
              <span className="font-black text-brand-600 shrink-0">3</span>
              <div>
                <p className="font-bold">評估常用的標準工具（產生書面報告），例如：</p>
                <ul className="mt-1 space-y-1 text-ink-soft">
                  <li>· 香港學前兒童綜合發展評估（適用約 3 歲 4 個月至 6 歲）</li>
                  <li>· 美林-帕爾默兒童智力測驗（修訂版 M-P-R）（適用約 1 個月至 6 歲 3 個月）</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-ink-soft">
            💡 <strong>貼士：</strong>自費評估通常較快攞到報告，能更早交 Form 2、更早開始輪候；
            但宜核實評估者資歷，及報告是否為社署接受。具體程序以社署實務指引為準。
          </div>

          <SourceList
            sources={[
              { label: "社署 — 康復服務中央轉介系統（CRSRehab）", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/centralref/", checkedAt: "2026-06" },
              { label: "社署 — 康復服務實務指引", url: "https://www.swd.gov.hk/tc/index/site_pubsvc/page_rehab/sub_practicegu/", checkedAt: "2026-06" },
              { label: "復康會 RehabGuide — 學前兒童評估及轉介", url: "https://www.rehabguide.hk/evaluation_ss.php?id=1", checkedAt: "2026-06" },
            ]}
          />
        </div>
      </section>

      {/* 中央轉介系統 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">康復服務中央轉介系統</h2>
          <ul className="mt-4 space-y-2 text-brand-100 text-sm">
            <li>· 社署統一接收轉介，按申請先後次序及地區選擇進行編配。</li>
            <li>· 2 歲以下兒童可<strong className="text-white">預早登記</strong>輪候特殊幼兒中心及兼收計劃。</li>
            <li>· 規劃比率：每 1,000 名 0–6 歲兒童設 23 個學前康復服務名額（2022 年起納入規劃標準）。</li>
            <li>· 到校服務須確認已獲參與幼稚園學位才作編配。</li>
          </ul>
          <SourceList
            sources={[
              { label: "社署 — 康復服務中央轉介系統", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/crsrehabwa/", checkedAt: "2026-06" },
              { label: "立法會答覆（規劃比率，2024-03-27）", url: "https://www.info.gov.hk/gia/general/202403/27/P2024032700217.htm", checkedAt: "2026-06" },
            ]}
          />
        </div>
      </section>

      {/* SEN 類別 */}
      <section className="container-page pb-16">
        <SectionTitle
          eyebrow="教育局界定"
          title="特殊教育需要的主要類別"
          desc="了解孩子可能屬於哪一類，有助與專業溝通。"
        />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SEN_CATEGORIES.map((c) => (
            <div key={c.id} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-black text-brand-900">{c.name}</h3>
              </div>
              <p className="text-xs text-ink-soft mt-1">{c.nameEn}</p>
              <p className="mt-3 text-sm text-ink">{c.summary}</p>
              <div className="mt-3">
                <p className="text-xs font-bold text-brand-600">常見表徵</p>
                <ul className="mt-1 space-y-1">
                  {c.signs.map((s, i) => (
                    <li key={i} className="text-xs text-ink-soft">· {s}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-soft">
          資料來源：教育局「融合教育及特殊教育資訊網站」、衞生署兒童體能智力測驗服務（查證 2026-06）。
          類別判定須以專業評估為準。
        </p>
        <div className="mt-8 text-center">
          <Link href="/journey" className="inline-block px-6 py-3 rounded-full bg-brand-600 text-white font-bold">
            了解完整申請流程 →
          </Link>
        </div>
      </section>
    </>
  );
}

function Info({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold text-brand-600 mb-1">{label}</p>
      <p className="text-ink">{children}</p>
    </div>
  );
}
