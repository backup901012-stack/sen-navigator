import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "SEN 兒童常見訓練方法概覽",
  description:
    "香港 SEN／自閉症兒童教育機構常見的訓練與介入方法：ABA 應用行為分析、分次嘗試訓練、TEACCH 結構化教學、PECS 圖片交換、地板時間、社交故事、感覺統合，以及食療／藥物與輔助療法的注意事項。早期介入、個別化、選擇療法的判斷原則。",
};

// 行為及溝通訓練（資料整理自 HKU PAAC「自閉症的訓練及治療 — 概覽」）
const METHODS = [
  {
    en: "Applied Behavioral Analysis (ABA)",
    zh: "應用行為分析",
    desc: "許多訓練計劃的理論基礎：得到獎賞的行為，比被忽視的行為更容易出現及持續。Lovaas 是著名的提倡者。",
    tone: "bg-brand-100 text-brand-800",
  },
  {
    en: "Discrete Trial Training (DTT)",
    zh: "分次嘗試訓練",
    desc: "把每項工作拆成「要求 → 孩子反應 → 訓練員回應」，再細分為簡單步驟逐步掌握；既用於改善行為，也用於教導新技能。經典模式為每週 30–40 小時單對單訓練。",
    tone: "bg-lilac-100 text-lilac-700",
  },
  {
    en: "TEACCH",
    zh: "結構化教學",
    desc: "1970 年代美國北卡羅萊納大學發展。先以 PEP 評估，再按結果設計課程；以結構化環境增加孩子對環境與他人行為的理解，推動社交、溝通與適應。有意見認為它較為結構化。",
    tone: "bg-warm-100 text-warm-700",
  },
  {
    en: "PECS",
    zh: "圖片交換溝通系統",
    desc: "為語言能力較弱的孩子提供另類溝通媒介：教孩子用圖片去交換想要的物件或活動，從而促進溝通、帶動語言發展。",
    tone: "bg-terra-100 text-terra-700",
  },
  {
    en: "Floor Time（DIR）",
    zh: "地板時間",
    desc: "由 Greenspan 及 Wieder 提倡。著重互動、誘發共同注意與社交意向；成人把握孩子流露的微弱動機作回應，引導他投入互動、提升社交動機與情感連結。",
    tone: "bg-amber-100 text-amber-800",
  },
  {
    en: "Social Stories",
    zh: "社交故事",
    desc: "透過故事教導社交技巧與認知，幫助孩子從他人角度觀察與感受，掌握不同場合的社交常規、他人的信念與期望。",
    tone: "bg-emerald-100 text-emerald-800",
  },
  {
    en: "Sensory Integration",
    zh: "感覺統合",
    desc: "針對感官反應過敏或過弱：透過接觸不同質感與刺激，慢慢建立適當的調節（包括聽覺統合訓練）。接受訓練前，須由專業人員（多為職業治療師）先作評估。",
    tone: "bg-brand-100 text-brand-800",
  },
];

const CHECKLIST = [
  "這個方法會不會對孩子有害？",
  "是否有科學根據與實證基礎？",
  "如何銜接孩子現有的服務？切勿全程投入單一療法，而忽略社交、溝通、行為的整體訓練。",
  "訓練員受過哪種針對自閉症的訓練？有何經驗？",
  "孩子能得到多少個別化的訓練？如何量度進展？",
  "有沒有配套的家居訓練？費用、時間與路程是否負擔得來？",
];

export default function TrainingMethodsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container-page py-14">
          <p className="text-brand-100 font-bold text-sm mb-2">認識訓練・做明智選擇</p>
          <h1 className="text-3xl sm:text-4xl font-black"><span aria-hidden="true">🧰 </span>SEN 兒童常見訓練方法</h1>
          <p className="mt-4 max-w-2xl text-brand-50">
            政府與自費機構為 SEN／自閉症兒童提供多種訓練方法。先認識每種方法的理念與針對的困難，
            才能與專業人員一起，為孩子規劃合適的計劃。
          </p>
        </div>
      </section>

      {/* 核心原則 */}
      <section className="container-page py-12">
        <h2 className="text-2xl font-black text-brand-900">三個重要原則</h2>
        <div className="mt-5 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-2xl bg-white border border-brand-100 p-5">
            <p className="font-black text-brand-700">早期介入</p>
            <p className="mt-1 text-ink-soft leading-relaxed">及早提供適當的教育與訓練，是現時專家共識中最佳的治療原則。</p>
          </div>
          <div className="rounded-2xl bg-white border border-brand-100 p-5">
            <p className="font-black text-brand-700">個別化</p>
            <p className="mt-1 text-ink-soft leading-relaxed">沒有兩個自閉症孩子是一樣的。訓練目標與策略，必須針對孩子的發展階段、能力與需要度身訂造。</p>
          </div>
          <div className="rounded-2xl bg-white border border-brand-100 p-5">
            <p className="font-black text-brand-700">家人參與</p>
            <p className="mt-1 text-ink-soft leading-relaxed">有效的早期介入，都包含針對社交與溝通的訓練、減少行為問題，以及鼓勵家人一起參與。</p>
          </div>
        </div>
        <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-ink-soft">
          💡 各種方法的成效仍有待研究確認，<strong className="text-brand-700">難以斷定哪一種「最有效」</strong>。
          重點是按孩子的獨特需要，配搭合適的方法，而非盲目追逐單一療法。
        </div>
      </section>

      {/* 行為及溝通訓練 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-2">注重行為與溝通的訓練</h2>
        <p className="text-ink-soft mb-5 text-sm">這類方法針對自閉症孩子在社交、溝通與行為上的核心困難，是最常見的介入取向。</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {METHODS.map((m) => (
            <div key={m.en} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <h3 className="font-black text-brand-900">{m.zh}</h3>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${m.tone}`}>{m.en}</span>
              </div>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 如何衡量療法 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">選擇療法前，先問自己</h2>
          <p className="mt-2 text-ink-soft text-sm">資訊氾濫的世代，這幾個問題可幫你判斷一種訓練方法是否適合孩子。</p>
          <ul className="mt-5 space-y-2.5">
            {CHECKLIST.map((c, i) => (
              <li key={i} className="flex gap-3 rounded-xl bg-white border border-brand-100 p-4 text-sm text-ink">
                <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-600 text-white font-black shrink-0">{i + 1}</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 食療藥物與輔助療法（誠實警示） */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-white border-2 border-warm-200 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">食療、藥物與輔助療法：請額外小心</h2>
          <div className="mt-4 space-y-3 text-sm text-ink leading-relaxed">
            <p>
              <strong className="text-warm-700">沒有藥物、維他命或特殊食療可以「醫好」自閉症。</strong>
              部分藥物可改善伴隨的問題（如過度活躍、焦慮、專注力失調），但須由醫生評估、處方並密切監察副作用。
            </p>
            <p>
              坊間有「無麩質（gluten）／無酪蛋白（casein）飲食」或補充維他命等說法，但
              <strong className="text-warm-700">至今未有大型而一致的研究證實有效</strong>，部分更可能引起副作用。
              嘗試前必須先做檢查、諮詢專業人員。
            </p>
            <p>
              音樂治療、藝術治療、動物治療等<strong>輔助療法</strong>，對陶冶性情、穩定情緒或有幫助，
              但大部分<strong className="text-warm-700">欠缺實驗理據</strong>；宜了解背後理念與成效，作為輔助而非主要治療。
            </p>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            及早、針對性及個別化的教育，才是現時公認有效、並獲研究支持的治療方針。
          </p>
        </div>
      </section>

      {/* 下一步 + 來源 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-xl font-black">為孩子找合適的訓練</h2>
          <p className="mt-2 text-brand-200 text-sm">
            了解方法之後，可瀏覽政府與自費的服務與課程，並與專業人員一起規劃。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/directory" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold text-sm">資源目錄（含自費課程）→</Link>
            <Link href="/services" className="px-5 py-2.5 rounded-full bg-warm-500 text-white font-bold text-sm">政府學前服務 →</Link>
          </div>
        </div>
        <div className="mt-6">
          <SourceList
            sources={[
              { label: "HKU PAAC — 自閉症的訓練及治療・概覽", url: "https://i.cs.hku.hk/~pschan/paac/files/ASDTx.pdf", checkedAt: "2026-06-13" },
              { label: "協康會 — 自閉症譜系障礙", url: "https://www.heephong.org/child-development-and-training/useful-advice/autism-spectrum-disorders", checkedAt: "2026-06-13" },
            ]}
          />
        </div>
        <p className="mt-3 text-xs text-ink-soft">
          ⚠️ 本頁為一般教育資訊，不構成醫療建議。各種方法是否適合，須由專業人員按孩子的個別評估決定。
        </p>
      </section>
    </>
  );
}
