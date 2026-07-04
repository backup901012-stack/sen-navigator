import type { Metadata } from "next";
import Link from "next/link";
import { SPECIAL_SCHOOLS, SP_SCHOOL_SOURCE } from "@/data/specialSchoolList";
import {
  INDEX_SOURCE,
  THREE_LAYERS,
  INDEX_DOMAINS,
  STAFFING,
  EXAM_ACCOMMODATIONS,
  FUNDED_GROUPS,
} from "@/data/inclusionIndex";
import { SectionTitle } from "@/components/ui";

export const metadata: Metadata = {
  title: "關愛共融政策・學校列表",
  description:
    "香港關愛共融學校資料一覽：資助特殊學校 62 所官方名單（按類別、逐間地址電話網址），以及點樣查主流學校嘅共融支援（全校參與模式、關愛校園獎、學校概覽）。",
};

const CAT_EMOJI: Record<string, string> = {
  智障兒童學校: "🧠",
  肢體傷殘兒童學校: "🦽",
  群育學校: "🌤️",
  視障兒童學校: "👁️",
  聽障兒童學校: "👂",
  醫院學校: "🏥",
};

const MAINSTREAM_TOOLS = [
  {
    emoji: "🏛️",
    name: "融情・特教（SENSE）",
    desc: "教育局官方共融資訊網：全校參與模式點運作、學校有咩支援措施。",
    href: "https://sense.edb.gov.hk/",
    external: true,
  },
  {
    emoji: "🔎",
    name: "幼稚園概覽／小學概覽（CHSC）",
    desc: "官方概覽逐間查心儀學校嘅師資、課程同 SEN 支援安排。",
    href: "https://www.chsc.hk/",
    external: true,
  },
  {
    emoji: "💗",
    name: "關愛校園獎勵計劃",
    desc: "香港基督教服務處自 2005 年起表揚實踐關愛文化嘅學校，得獎名單可作參考。",
    href: "https://www.hkcs.org/tc/services/caringschoolawardscheme",
    external: true,
  },
];

export default function InclusionSchoolsPage() {
  const total = Object.values(SPECIAL_SCHOOLS).reduce((n, a) => n + a.length, 0);
  return (
    <>
      {/* 頁首 */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-lilac-50">
        <div className="container-page py-12 sm:py-16">
          <p className="text-brand-600 font-bold text-sm">資源目錄 · 學校資料</p>
          <h1 className="mt-1 text-3xl sm:text-4xl font-black text-brand-900">
            <span aria-hidden="true">🤝 </span>關愛共融政策・學校列表
          </h1>
          <p className="mt-4 text-ink-soft max-w-2xl">
            呢一頁幫你搵「學校層面」嘅共融資料：主流學校點查支援、
            以及全港 {total} 所資助特殊學校嘅官方名單（按類別、逐間列出）。
          </p>
        </div>
      </section>

      {/* 事實框：主流學校冇「共融認證名單」 */}
      <section className="container-page py-10">
        <div className="rounded-3xl bg-amber-50 border border-amber-100 p-6 sm:p-8">
          <h2 className="font-black text-brand-900 text-lg">
            📌 先講清一個重要事實
          </h2>
          <p className="mt-2 text-ink leading-relaxed">
            香港<strong>所有公營普通中小學都必須實行融合教育</strong>
            （教育局「全校參與」模式），所以官方<strong>並冇</strong>
            一份「共融學校認證名單」。分別在於每間學校
            <strong>支援做得好唔好</strong>——落地要靠以下工具逐間查證，
            同埋參考表現認可（如關愛校園獎）。
          </p>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {MAINSTREAM_TOOLS.map((t) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white border border-brand-100 p-5 card-hover block"
            >
              <span className="text-3xl" aria-hidden>
                {t.emoji}
              </span>
              <h3 className="mt-2 font-black text-brand-900">{t.name}</h3>
              <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{t.desc}</p>
              <span className="mt-3 inline-block text-brand-600 font-bold text-sm">
                前往官方網站 ↗
              </span>
            </a>
          ))}
        </div>
        <p className="mt-4 text-sm text-ink-soft">
          相關政策連結（三層支援、學習支援津貼等）已收錄喺{" "}
          <Link href="/directory" className="text-brand-600 font-bold hover:underline">
            資源目錄
          </Link>
          ；雙軌制點運作見{" "}
          <Link href="/special-schools" className="text-brand-600 font-bold hover:underline">
            特殊學校與升學
          </Link>
          。
        </p>
      </section>

      {/* 共融校園指標樹圖 */}
      <section className="bg-white border-y border-brand-100">
        <div className="container-page py-12">
          <SectionTitle
            eyebrow="政策拆解 · 樹圖"
            title="🌳 共融政策實際點運作？一張樹圖睇晒"
            desc="根據教育局《照顧學生個別差異～共融校園指標》（2008 第三版、港版 Index for Inclusion）整理——學校用嚟自我評估共融做得好唔好嘅官方工具。"
          />

          {/* 樹根 */}
          <div className="mt-8 flex flex-col items-center">
            <div className="px-7 py-3.5 rounded-full bg-brand-600 text-white font-black text-lg">
              🏫 共融校園
            </div>
            <div className="w-0.5 h-6 bg-brand-200" aria-hidden />
            <p className="text-sm font-bold text-brand-700">三個互相扣連嘅層面</p>
            <div className="w-0.5 h-4 bg-brand-200" aria-hidden />
          </div>

          {/* 第一層分支：三層面 */}
          <div className="grid sm:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {THREE_LAYERS.map((l) => (
              <div key={l.name} className="rounded-2xl bg-brand-50/60 border border-brand-100 p-4 text-center">
                <span className="text-2xl" aria-hidden>{l.emoji}</span>
                <p className="mt-1 font-black text-brand-900">{l.name}</p>
                <p className="mt-1 text-xs text-ink-soft leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center" aria-hidden>
            <div className="w-0.5 h-6 bg-brand-200" />
            <p className="text-sm font-bold text-brand-700">落地成 4 大範疇 · 共 49 項指標（每項配可觀察準則）</p>
            <div className="w-0.5 h-4 bg-brand-200" />
          </div>

          {/* 第二層分支：四範疇（可展開） */}
          <div className="max-w-4xl mx-auto space-y-3">
            {INDEX_DOMAINS.map((d) => (
              <details key={d.code} className="rounded-2xl bg-brand-50/40 border border-brand-100 overflow-hidden">
                <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer font-black text-brand-900">
                  <span className="text-2xl" aria-hidden>{d.emoji}</span>
                  <span className="flex-1">範疇 {d.code}・{d.name}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 text-sm">{d.count} 項指標</span>
                </summary>
                <div className="px-5 pb-5">
                  <ol className="grid md:grid-cols-2 gap-x-6 gap-y-1.5 list-decimal list-inside text-sm text-ink">
                    {d.indicators.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ol>
                  {d.highlights?.map((h) => (
                    <div key={h.title} className="mt-4 rounded-xl bg-white border border-brand-100 p-4">
                      <p className="font-bold text-brand-800 text-sm">⭐ {h.title}</p>
                      <ul className="mt-2 space-y-1.5">
                        {h.items.map((x) => (
                          <li key={x} className="flex gap-2 text-sm text-ink-soft">
                            <span className="text-brand-500 shrink-0" aria-hidden>●</span>
                            {x}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>

          {/* 時數誠實框 */}
          <div className="max-w-4xl mx-auto mt-6 rounded-2xl bg-amber-50 border border-amber-100 p-5 text-sm">
            <p className="text-ink leading-relaxed">
              <strong className="text-brand-900">⏱ 關於「時數」：</strong>
              呢份指標係<strong>自我評估工具</strong>，並<strong>冇規定具體活動時數</strong>——
              時數同人手性嘅支援，來自「三層支援架構」、學習支援津貼同下面嘅專業人手配置。
              每間學校實際做幾多，要睇該校公佈嘅支援措施（下面教你查）。
            </p>
            <p className="mt-2 text-xs text-ink-soft">
              資料來源：
              <a href={INDEX_SOURCE.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                {INDEX_SOURCE.label}
              </a>
              （查證 {INDEX_SOURCE.checkedAt}）
            </p>
          </div>
        </div>
      </section>

      {/* 學校專業人手配置 */}
      <section className="container-page py-12">
        <SectionTitle
          eyebrow="人手配置 · 逐項有官方依據"
          title="🧑‍⚕️ SENCO、心理學家、治療師——邊啲學校有？"
          desc="按現行政策，公營學校嘅專業人手係咁配置嘅（私立／國際學校不受此政策涵蓋）："
        />
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {STAFFING.map((s) => (
            <div key={s.role} className="rounded-2xl bg-white border border-brand-100 p-5">
              <p className="font-black text-brand-900">
                <span aria-hidden>{s.emoji} </span>
                {s.role}
              </p>
              <p className="mt-2 text-sm">
                <span className="inline-block px-2 py-0.5 rounded-md bg-brand-100 text-brand-800 font-bold mr-2">{s.where}</span>
                <span className="inline-block px-2 py-0.5 rounded-md bg-lilac-100 text-lilac-700 font-bold">{s.mode}</span>
              </p>
              <p className="mt-2.5 text-sm text-ink-soft leading-relaxed">{s.note}</p>
              <p className="mt-2 text-xs text-ink-soft">
                依據：
                <a href={s.source.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                  {s.source.label}
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-brand-50/60 border border-brand-100 p-5 text-sm text-ink">
          <p className="font-bold text-brand-900">🔎 點查「你嗰間」學校有咩人手？</p>
          <p className="mt-1.5 leading-relaxed text-ink-soft">
            去{" "}
            <a href="https://www.chsc.hk/" target="_blank" rel="noopener noreferrer" className="text-brand-600 font-bold hover:underline">
              CHSC 小學概覽／幼稚園概覽
            </a>{" "}
            開該校詳頁，睇「<strong>學生支援 → 全校參與照顧學生的多樣性</strong>」一欄——
            學校會寫明有冇校本教育心理學家、校本言語治療師等（2026-07 實測欄位存在）；
            再唔清楚，直接聯絡學校 SENCO 問。
          </p>
        </div>
      </section>

      {/* 考試調適 + 津貼小組 */}
      <section className="bg-white border-y border-brand-100">
        <div className="container-page py-12 grid lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-black text-brand-900">
              📝 讀寫障礙／ADHD：測考調適有咩？
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {EXAM_ACCOMMODATIONS.items.map((x) => (
                <span key={x.t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-sm font-bold text-brand-800">
                  <span aria-hidden>{x.emoji}</span>
                  {x.t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">{EXAM_ACCOMMODATIONS.how}</p>
            <p className="mt-2 text-xs text-ink-soft">
              依據：
              {EXAM_ACCOMMODATIONS.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && "、"}
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                    {s.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-black text-brand-900">
              🧧 學校可以用津貼開自閉症小組嗎？
            </h2>
            <ul className="mt-4 space-y-3">
              {FUNDED_GROUPS.points.map((pt) => (
                <li key={pt} className="flex gap-2.5 text-sm text-ink leading-relaxed">
                  <span className="text-brand-500 shrink-0 mt-0.5" aria-hidden>●</span>
                  {pt}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-ink-soft">
              依據：
              {FUNDED_GROUPS.sources.map((s, i) => (
                <span key={s.url}>
                  {i > 0 && "、"}
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
                    {s.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* 特殊學校 62 所官方名單 */}
      <section className="bg-white border-y border-brand-100">
        <div className="container-page py-12">
          <SectionTitle
            eyebrow={`官方名單 · 共 ${total} 所（2023/24 學年）`}
            title="🎓 資助特殊學校名單（按類別）"
            desc="來源：教育局「融情・特教」網站（2023 年 9 月更新）。入學非自行報名，須經教育局評估轉介——詳見「特殊學校與升學」。"
          />
          <div className="mt-8 space-y-4">
            {Object.entries(SPECIAL_SCHOOLS).map(([cat, schools]) => (
              <details
                key={cat}
                className="rounded-2xl bg-brand-50/40 border border-brand-100 overflow-hidden"
              >
                <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer font-black text-brand-900">
                  <span className="text-2xl" aria-hidden>
                    {CAT_EMOJI[cat] ?? "🏫"}
                  </span>
                  <span className="flex-1">{cat}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700 text-sm">
                    {schools.length} 所
                  </span>
                </summary>
                <ul className="px-5 pb-5 grid md:grid-cols-2 gap-3">
                  {schools.map((s) => (
                    <li
                      key={s.name}
                      className="rounded-xl bg-white border border-brand-50 p-4"
                    >
                      <p className="font-bold text-ink flex items-start justify-between gap-2">
                        <span>{s.name}</span>
                        <span className="shrink-0 text-[11px] px-2 py-0.5 rounded-md bg-lilac-100 text-lilac-700 font-bold">
                          {s.region}
                        </span>
                      </p>
                      <p className="mt-1 text-sm text-ink-soft">{s.address}</p>
                      <p className="mt-1.5 text-sm text-ink-soft">
                        ☎️ {s.tel}
                        {s.website && (
                          <>
                            {" · "}
                            <a
                              href={s.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-600 font-bold hover:underline break-all"
                            >
                              學校網站 ↗
                            </a>
                          </>
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-soft">
            資料來源：
            <a
              href={SP_SCHOOL_SOURCE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline"
            >
              {SP_SCHOOL_SOURCE.label}
            </a>
            （查證 {SP_SCHOOL_SOURCE.checkedAt}）。校長及最新資料以官方名單為準。
          </p>
        </div>
      </section>

      {/* 下一步 */}
      <section className="container-page py-12">
        <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-lilac-50 border border-brand-100 p-8 flex flex-col md:flex-row items-center gap-6">
          <span className="text-5xl" aria-hidden>
            🗺️
          </span>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-black text-brand-900">
              仲未知孩子行雙軌制邊條軌？
            </h2>
            <p className="mt-1.5 text-ink-soft text-sm">
              特殊學校唔係自行報名——由評估到 EDB 轉介嘅流程、融合教育 vs 特殊學校點揀，一頁講晒。
            </p>
          </div>
          <Link
            href="/special-schools"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
          >
            了解雙軌制 →
          </Link>
        </div>
      </section>
    </>
  );
}
