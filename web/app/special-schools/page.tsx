import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";
import { IconBank, IconSearch, IconHands, IconClipboard } from "@/components/icons";

export const metadata: Metadata = {
  title: "6 歲以上・特殊學校與升學（雙軌制）",
  description:
    "香港 6 歲以上學齡 SEN 兒童升學指南：融合教育與特殊學校「雙軌制」、輕度／中度／嚴重智障及各類特殊學校類別與數目、入學轉介機制（經教育局專業評估、家長同意），以及官方學校名單與按區查詢。",
};

// 教育局資料（2023/24 學年；最新名單以 EDB 官方為準）
const SCHOOL_TYPES = [
  {
    cat: "智障兒童學校",
    count: 43,
    level: "按辦學方針分為「輕度／中度／嚴重」程度",
    detail: "每班約 8 人（嚴重）／10 人（中度）／15–20 人（輕度）；提供 12 年中小學教育，部分設寄宿。輕度智障學校不設寄宿。",
    tone: "bg-brand-100 text-brand-800",
  },
  {
    cat: "肢體傷殘兒童學校",
    count: 7,
    level: "肢體傷殘（部分兼智障）",
    detail: "具一般智能、修讀普通課程者以 13 年完成中小學；提供物理／職業治療等支援，部分設寄宿。",
    tone: "bg-lilac-100 text-lilac-700",
  },
  {
    cat: "群育學校",
    count: 8,
    level: "情緒及行為支援",
    detail: "為有持續情緒或行為需要的學生提供教育與輔導；院舍（寄宿）服務由社會福利署資助。",
    tone: "bg-warm-100 text-warm-700",
  },
  {
    cat: "視障兒童學校",
    count: 2,
    level: "視障（部分兼智障）",
    detail: "提供點字、定向行走等支援；設寄宿。",
    tone: "bg-terra-100 text-terra-700",
  },
  {
    cat: "聽障兒童學校",
    count: 1,
    level: "聽障",
    detail: "提供聽覺及語言支援；具一般智能者以 13 年完成中小學；設寄宿。",
    tone: "bg-amber-100 text-amber-800",
  },
  {
    cat: "醫院學校",
    count: 1,
    level: "住院學童",
    detail: "於多間公立醫院開設輔導班，為住院期間的學童提供教育，不設寄宿。",
    tone: "bg-emerald-100 text-emerald-800",
  },
];

const STEPS = [
  { n: 1, t: "察覺顯著或多重需要", d: "在主流學校就讀期間，若校方／專業人員觀察到孩子有較顯著或多重的特殊教育需要。" },
  { n: 2, t: "教育局專業評估", d: "由教育局教育心理學家（及相關專家）為孩子進行專業評估。" },
  { n: 3, t: "提出建議", d: "教育局按評估結果，建議最合適的特殊學校類別（程度／殘疾類別）。" },
  { n: 4, t: "家長同意與轉介", d: "在家長同意下，由教育局轉介並安排合適的特殊學校學位。" },
];

export default function SpecialSchoolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container-page py-14">
          <p className="text-brand-100 font-bold text-sm mb-2">6 歲以上 · 學齡階段</p>
          <h1 className="text-3xl sm:text-4xl font-black">特殊學校與升學（雙軌制）</h1>
          <p className="mt-4 max-w-2xl text-brand-50">
            孩子到了學齡（一般 6 歲入學），SEN 升學分兩條路：留在主流學校接受
            <strong className="text-white">融合教育</strong>，或入讀
            <strong className="text-white">特殊學校</strong>。
            本頁整理兩者的分別、特殊學校的類別與程度，以及最重要的——入學是怎樣安排的。
          </p>
          <p className="mt-3 text-sm text-brand-100">
            （本平台主要服務 0–6 歲學前階段，本頁為學齡升學的延伸參考。）
          </p>
        </div>
      </section>

      {/* 雙軌制 */}
      <section className="container-page py-12">
        <h2 className="text-2xl font-black text-brand-900">香港特殊教育「雙軌制」</h2>
        <div className="mt-5 grid md:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white border border-brand-100 p-6 card-hover">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600">
              <IconHands size={28} />
            </span>
            <h3 className="mt-4 text-lg font-black text-brand-900">第一軌：融合教育</h3>
            <p className="mt-2 text-sm text-ink leading-relaxed">
              大部分輕度或中度 SEN 學生，會留在<strong className="text-brand-700">主流學校</strong>，
              透過教育局「全校參與模式」獲得校本支援（如抽離訓練、課程調適、教學助理、校本教育心理學家等）。
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-brand-100 p-6 card-hover">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-warm-100 text-warm-700">
              <IconBank size={28} />
            </span>
            <h3 className="mt-4 text-lg font-black text-brand-900">第二軌：特殊學校</h3>
            <p className="mt-2 text-sm text-ink leading-relaxed">
              有<strong className="text-warm-700">較嚴重或多重殘疾</strong>的學生，
              教育局會按專家評估及建議、在家長同意下，轉介入讀<strong className="text-warm-700">資助特殊學校</strong>，
              以獲得更密集的專業支援。
            </p>
          </div>
        </div>
      </section>

      {/* 入學轉介機制（重點） */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-white border-2 border-brand-200 p-6 sm:p-8">
          <span className="inline-block px-3 py-1 rounded-full bg-warm-100 text-warm-700 text-sm font-bold">
            最多人誤會的關鍵
          </span>
          <h2 className="mt-3 text-2xl font-black text-brand-900">特殊學校不是「自行報名」</h2>
          <p className="mt-2 text-ink-soft">
            入讀特殊學校<strong className="text-brand-700">不是家長自行揀校報名</strong>，
            而是經教育局專業評估、建議，並在家長同意下轉介及安排學位。
          </p>
          <ol className="mt-6 space-y-3">
            {STEPS.map((s) => (
              <li key={s.n} className="flex gap-4 rounded-xl bg-brand-50/60 border border-brand-100 p-4">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-brand-600 text-white font-black shrink-0">{s.n}</span>
                <div>
                  <h3 className="font-black text-brand-900">{s.t}</h3>
                  <p className="mt-0.5 text-sm text-ink">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-ink-soft">
            ※ 家長對選校有意見可向教育局表達；如對安排有疑問，可聯絡教育局特殊教育服務組。
          </p>
        </div>
      </section>

      {/* 學校類別 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-2">特殊學校類別與程度</h2>
        <p className="text-ink-soft mb-5 text-sm">
          全港共 <strong className="text-brand-700">62 所</strong>資助特殊學校（教育局 2023/24 學年數字）。智障兒童學校按程度分輕度／中度／嚴重。
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {SCHOOL_TYPES.map((s) => (
            <div key={s.cat} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-black text-brand-900">{s.cat}</h3>
                <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${s.tone}`}>{s.count} 所</span>
              </div>
              <p className="mt-1.5 text-sm font-bold text-brand-700">{s.level}</p>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 分區查詢（誠實說明） */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-brand-600">
              <IconSearch size={22} />
            </span>
            <h2 className="text-xl font-black text-brand-900">想按地區找學校？</h2>
          </div>
          <p className="text-ink leading-relaxed">
            特殊學校<strong className="text-brand-700">不設「校網／分區派位」</strong>——
            學位是按殘疾類別、程度、評估建議、家長意願與學額，由教育局統一安排，並非按住址分區。
            不過每間學校都有固定校址，你可以按地區查看，作為了解與表達意願時的參考。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://sense.edb.gov.hk/uploads/page/special-education/type-and-number-of-special-schools/list_of_aided_sp_schs_tc.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-brand-600 text-white font-bold text-sm">教育局・資助特殊學校完整名單（PDF）→</a>
            <a href="https://www.schooland.hk/sp/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white text-brand-700 font-bold text-sm border border-brand-200">特殊學校按區搜尋（學校通）→</a>
          </div>
          <p className="mt-3 text-xs text-ink-soft">完整、最新的學校名單與校址，請以教育局官方公布為準。</p>
        </div>
      </section>

      {/* 下一步 + 來源 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-white/15">
              <IconClipboard size={22} />
            </span>
            <h2 className="text-xl font-black">仍在學前階段（0–6 歲）？</h2>
          </div>
          <p className="text-brand-200 text-sm">
            先把握學前的黃金介入期。了解評估、政府學前康復服務與申請流程，為日後升學打好基礎。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/grading" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold text-sm">評估與分級 →</Link>
            <Link href="/journey" className="px-5 py-2.5 rounded-full bg-warm-500 text-white font-bold text-sm">學前申請流程 →</Link>
          </div>
        </div>
        <div className="mt-6">
          <SourceList
            sources={[
              { label: "教育局 — 特殊學校類別及數目", url: "https://sense.edb.gov.hk/tc/special-education/categories-and-numbers-of-special-schools.html", checkedAt: "2026-06-13" },
              { label: "教育局 — 資助特殊學校名單（PDF）", url: "https://sense.edb.gov.hk/uploads/page/special-education/type-and-number-of-special-schools/list_of_aided_sp_schs_tc.pdf", checkedAt: "2026-06-13" },
              { label: "教育局 — 特殊教育「雙軌制」簡介", url: "https://sense.edb.gov.hk/uploads/page/special-education/principles/SE_Info_sheet_tc.pdf", checkedAt: "2026-06-13" },
            ]}
          />
        </div>
        <p className="mt-3 text-xs text-ink-soft">⚠️ 學校數目為教育局 2023/24 學年公布數字；類別、學額與安排會更新，一切以教育局官方為準。</p>
      </section>
    </>
  );
}
