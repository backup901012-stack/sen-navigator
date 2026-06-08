import type { Metadata } from "next";
import Link from "next/link";
import {
  LANGUAGE_MILESTONES,
  LANG_NOTE_FIRSTWORD,
} from "@/data/languageMilestones";

export const metadata: Metadata = {
  title: "語言發展里程碑（0–5 歲）",
  description:
    "0 至 5 歲兒童語言發展里程碑：各階段的言語表達能力與聆聽理解能力一覽（整理自新界西醫院聯網言語治療部）。為一般指引，如有疑慮請諮詢言語治療師。",
};

export default function MilestonesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">基礎認識 · 言語發展</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            語言發展里程碑（0–5 歲）
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            了解孩子在不同年齡的「<strong className="text-brand-700">言語表達</strong>」與
            「<strong className="text-brand-700">聆聽理解</strong>」一般會發展到甚麼程度，
            有助及早察覺語言發展遲緩。
          </p>
          <p className="mt-4 inline-block rounded-full bg-white border border-brand-200 px-4 py-1.5 text-sm font-bold text-brand-700">
            📌 {LANG_NOTE_FIRSTWORD}
          </p>
        </div>
      </section>

      <section className="container-page py-10 space-y-5">
        {LANGUAGE_MILESTONES.map((m) => (
          <article key={m.age} className="rounded-2xl bg-white border border-brand-100 overflow-hidden">
            <div className="px-5 py-3 bg-brand-600 text-white">
              <h2 className="font-black">{m.age}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-brand-50">
              <div className="bg-white p-5">
                <p className="text-xs font-bold text-brand-600 mb-2">🗣 言語表達能力</p>
                <ul className="space-y-1.5">
                  {m.expressive.map((x, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink"><span className="text-brand-400">·</span>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-5">
                <p className="text-xs font-bold text-brand-600 mb-2">👂 聆聽和理解能力</p>
                <ul className="space-y-1.5">
                  {m.receptive.map((x, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink"><span className="text-brand-400">·</span>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
            {m.other && m.other.length > 0 && (
              <div className="px-5 py-3 bg-brand-50/50 border-t border-brand-50">
                <span className="text-xs font-bold text-brand-600">其他：</span>
                <span className="text-sm text-ink">{m.other.join("；")}</span>
              </div>
            )}
          </article>
        ))}
      </section>

      {/* 何時求助 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">幾時應該搵言語治療師？</h2>
          <ul className="mt-4 space-y-2 text-brand-100 text-sm">
            <li className="flex gap-2"><span className="text-warm-300">·</span>孩子比上述里程碑明顯落後（例如 15 個月仍未發出第一個單字、2 歲仍未說兩個字短句）</li>
            <li className="flex gap-2"><span className="text-warm-300">·</span>發音長期不清、別人難以明白</li>
            <li className="flex gap-2"><span className="text-warm-300">·</span>理解指示、與人溝通或眼神接觸出現困難</li>
            <li className="flex gap-2"><span className="text-warm-300">·</span>語言能力曾經出現後又倒退</li>
          </ul>
          <p className="mt-4 text-sm text-brand-200">
            每個孩子發展步伐有個別差異，里程碑只屬一般指引；如有疑慮，及早諮詢專業人員更安心。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/journey" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold text-sm">評估與轉介流程 →</Link>
            <Link href="/directory" className="px-5 py-2.5 rounded-full bg-warm-500 text-white font-bold text-sm">搵言語治療資源 →</Link>
            <Link href="/screening" className="px-5 py-2.5 rounded-full bg-white/15 text-white font-bold text-sm">自閉症早期篩查 →</Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <p className="text-xs text-ink-soft bg-amber-50 border border-amber-200 rounded-xl p-4">
          ⚠️ 資料整理自<strong>新界西醫院聯網 言語治療部</strong>「語言發展里程碑」（查證 2026-06），僅供參考、不能作診斷之用。
          發展評估與診斷請以衞生署兒童體能智力測驗服務或言語治療師專業評估為準。
        </p>
      </section>
    </>
  );
}
