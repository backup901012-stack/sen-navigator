import Link from "next/link";
import { PILLARS, SITE } from "@/lib/site";
import { SectionTitle, CardLink } from "@/components/ui";
import { PILLAR_ICONS, IconBank, IconChart, IconPuzzle } from "@/components/icons";
import Mascot from "@/components/Mascot";
import AudienceTriage from "@/components/AudienceTriage";

const PAINS = [
  "孩子發展好似比同齡慢，唔知去邊度評估？",
  "聽過「到校學前康復服務」、「特殊幼兒中心」，但分唔清有咩分別？",
  "排政府服務要等好耐，等緊嘅時間可以做啲咩？",
  "自費治療種類多、收費差好遠，唔知點揀。",
];

const JOURNEY_MINI = [
  { n: 1, t: "察覺", d: "留意發展里程碑" },
  { n: 2, t: "評估", d: "兒童體能智力測驗" },
  { n: 3, t: "診斷", d: "專業評估與報告" },
  { n: 4, t: "轉介", d: "中央轉介系統" },
  { n: 5, t: "輪候", d: "善用等候期" },
  { n: 6, t: "服務", d: "接受康復訓練" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="container-page py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-bold mb-5">
              香港 SEN 兒童學前資源 · 一站式導航
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-brand-900 leading-tight">
              {SITE.tagline}
            </h1>
            <p className="mt-5 text-lg text-ink-soft max-w-xl">
              由察覺、評估、轉介到訓練，
              <span className="text-brand-700 font-bold">SEN 小孩導航員</span>
              幫你整合政府學前康復服務、評估分級制度，以及自費訓練課程，
              讓你清楚下一步點行。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#for-you"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors shadow-lg shadow-brand-600/20"
              >
                👋 揀啱你嘅起點
              </a>
              <Link
                href="/match"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-brand-50 text-brand-700 font-bold border border-brand-200 transition-colors"
              >
                🎯 為孩子配對服務
              </Link>
            </div>
            <p className="mt-5 text-xs text-ink-soft">
              ⚠️ 本平台為獨立資訊整合工具，非官方網站，資料僅供參考。
            </p>
          </div>

          <div className="animate-fade-up relative">
            <div className="absolute -top-16 right-4 hidden sm:block" aria-hidden>
              <Mascot size={108} />
            </div>
            <div className="bg-white rounded-3xl border border-brand-100 shadow-xl shadow-brand-900/5 p-6">
              <p className="font-bold text-brand-800 mb-4">孩子的支援之路</p>
              <ol className="space-y-3">
                {JOURNEY_MINI.map((s) => (
                  <li key={s.n} className="flex items-center gap-3">
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-brand-100 text-brand-700 font-black text-sm shrink-0">
                      {s.n}
                    </span>
                    <span className="font-bold text-ink">{s.t}</span>
                    <span className="text-sm text-ink-soft">— {s.d}</span>
                  </li>
                ))}
              </ol>
              <Link
                href="/journey"
                className="mt-5 inline-block text-brand-600 font-bold text-sm hover:underline"
              >
                查看完整流程地圖 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 前導分流：邊個最似而家嘅你？ */}
      <section id="for-you" className="container-page py-14 scroll-mt-20">
        <SectionTitle
          center
          eyebrow="唔使睇晒成個網站"
          title="邊個最似而家嘅你？"
          desc="撳一下，即刻攞到為你而設嘅路線——每步只需幾分鐘。"
        />
        <div className="mt-8">
          <AudienceTriage />
        </div>
      </section>

      {/* 認識・同理 橋樑入口（寫給每一位） */}
      <section className="container-page pt-6 pb-2">
        <Link
          href="/understanding"
          className="block rounded-2xl bg-gradient-to-br from-warm-50 to-brand-50 border border-warm-100 p-6 sm:p-8 card-hover"
        >
          <div className="flex items-center gap-5 flex-wrap">
            <span aria-hidden className="shrink-0">
              <Mascot size={72} variant="pink" />
            </span>
            <div className="flex-1 min-w-[15rem]">
              <p className="text-warm-700 font-bold text-sm">寫給每一位</p>
              <h2 className="mt-1 text-xl sm:text-2xl font-black text-brand-900">
                每個孩子，都值得被理解
              </h2>
              <p className="mt-1.5 text-sm text-ink-soft">
                開始覺得孩子有點不同？想認識 SEN？還是在街上遇到、不知如何反應？
                由靜觀情緒與同理出發，這一頁，寫給你。
              </p>
            </div>
            <span className="px-5 py-2.5 rounded-full bg-warm-500 text-white font-bold text-sm shrink-0">
              認識・同理 →
            </span>
          </div>
        </Link>
      </section>

      {/* 同理痛點 */}
      <section className="container-page py-16">
        <SectionTitle
          center
          eyebrow="我們明白你的處境"
          title="面對 SEN，最難的往往是「唔知由邊度開始」"
        />
        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PAINS.map((p, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-2xl bg-brand-50/60 border border-brand-100 p-5"
            >
              <span className="text-warm-500 text-xl shrink-0">❝</span>
              <p className="text-ink">{p}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-ink-soft">
          這個平台，就是為了幫你把這些問題逐一拆解。
        </p>
      </section>

      {/* 早期篩查入口 */}
      <section className="container-page pb-4">
        <div className="rounded-3xl bg-gradient-to-br from-warm-50 to-brand-50 border border-brand-100 p-8 sm:p-10 flex flex-col md:flex-row items-center gap-6">
          <span className="text-5xl">🧒</span>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-black text-brand-900">擔心孩子的發展？由一個簡單篩查開始</h2>
            <p className="mt-2 text-ink-soft">
              用國際常用的 <strong>M-CHAT-R</strong> 自閉症早期篩查（適用 16–30 個月），20 條問題、約 5 分鐘，即時知道下一步方向。
              <span className="text-ink-soft">（篩查不等於診斷）</span>
            </p>
          </div>
          <Link
            href="/screening"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
          >
            開始免費篩查 →
          </Link>
        </div>
      </section>

      {/* 5 大服務模式 */}
      <section className="bg-white border-y border-brand-100">
        <div className="container-page py-16">
          <SectionTitle
            center
            eyebrow="導航員為你做的 5 件事"
            title="從查詢到跟進，一條龍陪你規劃"
            desc="參考「照顧導航員」服務模式，為 SEN 家庭量身打造。"
          />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((p) => (
              <CardLink key={p.num} href={p.href}>
                <div className="flex items-start justify-between">
                  <span className="text-3xl grid place-items-center w-12 h-12 rounded-2xl bg-brand-50 text-brand-600">
                    {PILLAR_ICONS[p.num]?.({ size: 28 }) ?? p.icon}
                  </span>
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-50 text-brand-600 font-black text-sm">
                    {p.num}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-black text-brand-900">{p.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{p.desc}</p>
                <span className="mt-4 inline-block text-brand-600 font-bold text-sm">
                  {p.cta} →
                </span>
              </CardLink>
            ))}
          </div>
        </div>
      </section>

      {/* 三大入口 */}
      <section className="container-page py-16">
        <SectionTitle
          center
          eyebrow="主要資源板塊"
          title="政府服務、評估制度、自費課程，一次睇清"
        />
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <CardLink
            href="/services"
            className="bg-gradient-to-br from-brand-600 to-brand-700 !border-brand-700 text-white"
          >
            <span className="text-3xl grid place-items-center w-12 h-12 rounded-2xl bg-white/15 text-white">
              <IconBank size={28} />
            </span>
            <h3 className="mt-4 text-xl font-black">政府學前康復服務</h3>
            <p className="mt-2 text-sm text-brand-50">
              到校學前康復服務、特殊幼兒中心、早期教育及訓練中心、兼收計劃等資助服務一覽。
            </p>
            <span className="mt-4 inline-block font-bold text-sm">了解服務 →</span>
          </CardLink>

          <CardLink href="/grading">
            <span className="text-3xl grid place-items-center w-12 h-12 rounded-2xl bg-lilac-100 text-lilac-700">
              <IconChart size={28} />
            </span>
            <h3 className="mt-4 text-xl font-black text-brand-900">評估與分級制度</h3>
            <p className="mt-2 text-sm text-ink-soft">
              兒童體能智力測驗、需求評估如何決定服務、中央轉介系統怎樣運作。
            </p>
            <span className="mt-4 inline-block text-brand-600 font-bold text-sm">了解制度 →</span>
          </CardLink>

          <CardLink href="/directory">
            <span className="text-3xl grid place-items-center w-12 h-12 rounded-2xl bg-warm-100 text-warm-700">
              <IconPuzzle size={28} />
            </span>
            <h3 className="mt-4 text-xl font-black text-brand-900">自費訓練課程</h3>
            <p className="mt-2 text-sm text-ink-soft">
              言語治療、職業治療、行為訓練、社交小組等自費選項，輪候期間的支援。
            </p>
            <span className="mt-4 inline-block text-brand-600 font-bold text-sm">瀏覽課程 →</span>
          </CardLink>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-900">
        <div className="container-page py-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            唔使一個人面對。由一條問題開始。
          </h2>
          <p className="mt-3 text-brand-200">
            花 2 分鐘回答幾條問題，我哋幫你整理出適合孩子的資源方向。
          </p>
          <Link
            href="/match"
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-warm-500 hover:bg-warm-600 text-white font-bold transition-colors"
          >
            🎯 開始服務配對
          </Link>
        </div>
      </section>
    </>
  );
}
