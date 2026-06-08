import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "對立反抗症 ODD（基礎認識）",
  description:
    "家長易明的對立反抗症（Oppositional Defiant Disorder, ODD）科普：三大症狀、與正常反抗的分別、與 ADHD／自閉症的關係，以及家長管教訓練等處理方向。科普非診斷。",
};

const SYMPTOMS = [
  {
    icon: "😠",
    t: "憤怒／易怒情緒",
    items: ["經常發脾氣、容易動怒", "常感被激怒、難以平復", "容易記仇、心懷怨憤"],
  },
  {
    icon: "🗣️",
    t: "好辯／反抗行為",
    items: ["常與大人爭辯、頂嘴", "刻意違抗規則或拒絕合作", "故意激怒或惹惱別人"],
  },
  {
    icon: "🎯",
    t: "報復性",
    items: ["在過去六個月內，曾出現至少兩次惡意或報復行為"],
  },
];

const VS = [
  { normal: "偶爾鬧情緒、頂嘴（成長中常見）", odd: "持續 ≥ 6 個月、頻繁出現的模式" },
  { normal: "特定情況或疲累時發生", odd: "明顯超出同齡程度、跨情境出現" },
  { normal: "不太影響日常與關係", odd: "影響家庭、學校、社交與學習" },
];

const HELP = [
  { t: "家長管教訓練（PMT）", d: "學習一致而清晰的規則、正向獎勵、減少權力鬥爭，是 ODD 的主要介入方向之一。" },
  { t: "具體讚賞好行為", d: "捕捉並即時讚賞孩子做得好的小事，比單純責罰更有效建立合作。" },
  { t: "先處理共病", d: "若同時有 ADHD，先處理專注／衝動問題，對立行為往往隨之改善。" },
  { t: "保持冷靜、避免硬碰", d: "預先設定後果、給選擇、減少當下對峙；照顧者也要照顧自己的情緒。" },
];

export default function OddPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">基礎認識 · 情緒行為</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            對立反抗症（ODD）
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            ODD（Oppositional Defiant Disorder）是一種持續的<strong className="text-brand-700">憤怒易怒、
            好辯反抗</strong>的情緒行為模式。明白背後成因，有助家長唔好淨係當孩子「曳」或「教得唔好」。
          </p>
        </div>
      </section>

      {/* 定義 */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">咩係對立反抗症？</h2>
          <p className="mt-3 text-ink leading-relaxed">
            ODD 是精神科診斷手冊（DSM-5）中的一個正式診斷，指持續至少
            <strong> 6 個月</strong>、明顯超出同齡水平的對立反抗模式。它在兒童中並不罕見
            （約 5% 兒童受影響，男孩較多），而且<strong>很常與專注力不足／過度活躍症（ADHD）一同出現</strong>。
            是否屬於 ODD 須由專業評估判定。
          </p>
        </div>
      </section>

      {/* 三大症狀 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-6">三大症狀範疇</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {SYMPTOMS.map((s) => (
            <div key={s.t} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="text-3xl">{s.icon}</div>
              <h3 className="mt-2 font-black text-brand-900">{s.t}</h3>
              <ul className="mt-2 space-y-1.5">
                {s.items.map((x, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink"><span className="text-warm-500">·</span>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 與正常反抗分別 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-4">同「正常反抗」有咩分別？</h2>
        <div className="rounded-2xl bg-white border border-brand-100 overflow-hidden">
          <div className="grid grid-cols-2 bg-brand-50 text-sm font-black text-brand-800">
            <div className="p-3">一般成長中的反抗</div>
            <div className="p-3 border-l border-white">值得留意（可能是 ODD）</div>
          </div>
          {VS.map((v, i) => (
            <div key={i} className="grid grid-cols-2 text-sm border-t border-brand-50">
              <div className="p-3 text-ink-soft">{v.normal}</div>
              <div className="p-3 border-l border-brand-50 text-ink">{v.odd}</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-ink-soft">※ 重點在於持續性、頻率與對生活的影響，而非單一次發脾氣。</p>
      </section>

      {/* 與 SEN 關係 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">與 ADHD／自閉症的關係（很重要）</h2>
          <ul className="mt-4 space-y-2 text-brand-100 text-sm">
            <li className="flex gap-2"><span className="text-warm-300">·</span>ODD 與 <strong className="text-white">ADHD</strong> 共病非常常見。很多時候，ADHD 孩子的「反抗」其實源於<strong className="text-white">衝動控制困難，並非故意作對</strong>。</li>
            <li className="flex gap-2"><span className="text-warm-300">·</span><strong className="text-white">自閉症</strong>孩子因溝通困難、固執需要常規、或感官不適，也可能出現看似對立的行為——理解背後的需要比責罰更重要。</li>
            <li className="flex gap-2"><span className="text-warm-300">·</span>因此，先了解孩子行為背後的成因（衝動？焦慮？感官？溝通？），才能對症下藥。</li>
          </ul>
          <Link href="/sensory" className="mt-4 inline-block text-white font-bold text-sm hover:underline">延伸：感覺統合與本體感覺 →</Link>
        </div>
      </section>

      {/* 點幫 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-6">可以點幫？</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {HELP.map((h) => (
            <div key={h.t} className="rounded-2xl bg-white border border-brand-100 p-5">
              <h3 className="font-black text-brand-900">{h.t}</h3>
              <p className="mt-2 text-sm text-ink">{h.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/parents" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm">家長特區 →</Link>
          <Link href="/journey" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">評估與轉介流程 →</Link>
          <Link href="/directory" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">情緒支援資源 →</Link>
        </div>
      </section>

      {/* 求助 + 來源 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink-soft">
          ⚠️ 本頁為科普資訊，<strong>不能作診斷之用</strong>。若孩子的對立反抗行為持續、嚴重並影響生活，
          宜諮詢兒科醫生、精神科醫生或臨床心理學家評估。情緒支援可致電「情緒通」18111（24 小時）。
          <div className="mt-3">
            <SourceList
              sources={[
                { label: "Mayo Clinic — Oppositional defiant disorder (ODD)", url: "https://www.mayoclinic.org/diseases-conditions/oppositional-defiant-disorder/symptoms-causes/syc-20375831", checkedAt: "2026-06" },
                { label: "DSM-5 對立性反抗症 — 精神健康資料（hkspt.org）", url: "https://www.hkspt.org/wp/?page_id=147639", checkedAt: "2026-06" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
