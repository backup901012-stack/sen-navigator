import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "感覺統合與本體感覺（科普）",
  description:
    "家長易明的感覺統合（Sensory Integration）與本體感覺（Proprioception）科普：八大感覺、感覺處理失調的三種模式、常見表徵、與 SEN／自閉症的關係，以及在家可做的本體覺活動。",
};

const SENSES = [
  { icon: "👁️", name: "視覺", en: "Sight" },
  { icon: "👂", name: "聽覺", en: "Hearing" },
  { icon: "👃", name: "嗅覺", en: "Smell" },
  { icon: "👅", name: "味覺", en: "Taste" },
  { icon: "✋", name: "觸覺", en: "Touch" },
  { icon: "🤸", name: "前庭覺", en: "Vestibular（平衡與動作）" },
  { icon: "💪", name: "本體覺", en: "Proprioception（身體位置）" },
  { icon: "🫀", name: "內感受", en: "Interoception（體內訊號）" },
];

const PATTERNS = [
  { t: "過度反應（敏感／逃避）", d: "對聲音、觸感、光線等特別敏感，容易感到不安、掩耳、抗拒、逃避。", c: "bg-warm-50 border-warm-200" },
  { t: "反應不足（遲鈍）", d: "對刺激反應較弱，好像「無感覺」、唔覺痛、叫極無反應、較被動。", c: "bg-brand-50 border-brand-200" },
  { t: "尋求刺激", d: "不停郁動、鍾意旋轉、碰撞、大力擁抱、咬嘢，似乎「停唔到」。", c: "bg-amber-50 border-amber-200" },
];

const PROPRIO_SIGNS = [
  "動作笨拙、經常撞到傢俬或跌倒",
  "寫字／用力時太大力或太輕（控制力度困難）",
  "鍾意大力擁抱、推撞、跳、咬嘢",
  "身體意識弱：唔睇就唔知手腳喺邊",
  "學新動作（如踩單車、跳繩）特別慢，動作計劃困難",
  "坐姿懶散、容易攤喺枱面",
];

const VESTIB_SIGNS = [
  "怕盪鞦韆、搖晃、腳離地；或相反，極度尋求旋轉而唔覺暈",
  "平衡差、容易跌、上落樓梯小心翼翼",
  "郁動時情緒或專注容易受影響",
];

const HOME_ACTIVITIES = [
  "「重量活動」：推／拉／搬有重量的物件（如搬書、推購物車）",
  "攀爬、爬行、跳彈床、攀架",
  "大力擁抱、用枕頭／毛毯捲起來輕壓",
  "玩泥膠、搓麵團、擠壓減壓球",
  "幫手做家務：抹枱、拖地、提購物袋",
];

export default function SensoryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">基礎認識 · 科普</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            感覺統合與本體感覺
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            好多 SEN 兒童（尤其自閉症）都有「感覺處理」上的困難。明白咩係感覺統合、
            特別係容易被忽略的<strong className="text-brand-700">本體覺</strong>同
            <strong className="text-brand-700">前庭覺</strong>，有助你理解孩子的行為，唔好誤會佢「曳」或「扭計」。
          </p>
        </div>
      </section>

      {/* 咩係感覺統合 */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">咩係「感覺統合」？</h2>
          <p className="mt-3 text-ink leading-relaxed">
            感覺統合（Sensory Integration）係指大腦把來自身體各個感官的訊息「組織」起來、
            令我哋可以順暢咁回應環境同完成日常動作。呢個概念由職業治療師
            <strong> A. Jean Ayres 博士（1920–1989）</strong>提出。當大腦處理感覺訊息出現困難，
            就可能影響專注、情緒、動作協調同學習——這就是常聽到的「感覺統合／感覺處理失調」。
          </p>
        </div>
      </section>

      {/* 八大感覺 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-2">其實人有「八大感覺」</h2>
        <p className="text-ink-soft mb-6">
          除咗熟悉的五感，Ayres 指出仲有兩個「隱藏」的感覺系統——前庭覺同本體覺；
          後來再加入「內感受」。最常被忽略、又最影響 SEN 孩子的，正正係本體覺同前庭覺。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SENSES.map((s) => (
            <div key={s.name} className="rounded-2xl bg-white border border-brand-100 p-4 text-center">
              <div className="text-3xl">{s.icon}</div>
              <p className="mt-2 font-black text-brand-900">{s.name}</p>
              <p className="text-xs text-ink-soft">{s.en}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 本體覺重點 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">重點：本體感覺（Proprioception）</h2>
          <p className="mt-3 text-brand-100 leading-relaxed">
            本體覺係嚟自<strong className="text-white">肌肉、關節同筋腱</strong>的感覺，
            令我哋唔使望都知道身體各部分喺邊、用緊幾大力。佢直接影響：
          </p>
          <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl bg-white/10 p-4"><p className="font-bold">動作計劃</p><p className="text-brand-100 mt-1">學新動作、協調手腳</p></div>
            <div className="rounded-xl bg-white/10 p-4"><p className="font-bold">力度控制</p><p className="text-brand-100 mt-1">寫字、攞嘢唔會太大力／太輕</p></div>
            <div className="rounded-xl bg-white/10 p-4"><p className="font-bold">身體意識</p><p className="text-brand-100 mt-1">知道自己企喺邊、唔撞到人</p></div>
          </div>
        </div>
      </section>

      {/* 三種模式 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-6">感覺處理失調的三種常見模式</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {PATTERNS.map((p) => (
            <div key={p.t} className={`rounded-2xl border p-5 ${p.c}`}>
              <h3 className="font-black text-brand-900">{p.t}</h3>
              <p className="mt-2 text-sm text-ink">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 表徵 */}
      <section className="container-page pb-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white border border-brand-100 p-6">
          <h2 className="text-xl font-black text-brand-900">本體覺失調 — 常見表徵</h2>
          <ul className="mt-3 space-y-2">
            {PROPRIO_SIGNS.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink"><span className="text-brand-500">·</span>{s}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white border border-brand-100 p-6">
          <h2 className="text-xl font-black text-brand-900">前庭覺失調 — 常見表徵</h2>
          <ul className="mt-3 space-y-2">
            {VESTIB_SIGNS.map((s, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink"><span className="text-brand-500">·</span>{s}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-soft">※ 有以上表徵唔代表一定有問題，重點係「是否影響日常生活與學習」。</p>
        </div>
      </section>

      {/* 與 SEN 關係 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-50/60 border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">同 SEN／自閉症有咩關係？</h2>
          <ul className="mt-3 space-y-2 text-ink">
            <li className="flex gap-2"><span className="text-brand-500">✓</span>研究指出，<strong>高達九成</strong>自閉症人士有感覺處理困難。</li>
            <li className="flex gap-2"><span className="text-brand-500">✓</span>DSM-5（2013）已把「對感官刺激的異常反應」列入<strong>自閉症診斷準則</strong>之一。</li>
            <li className="flex gap-2"><span className="text-brand-500">✓</span>感覺處理困難亦常見於 ADHD、發展協調障礙（DCD）等。</li>
          </ul>
        </div>
      </section>

      {/* 點幫 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">可以點幫孩子？</h2>
          <p className="mt-3 text-ink">
            專業上由<strong>職業治療師（OT）</strong>評估，並可提供感覺統合訓練（Ayres Sensory Integration®）。
            在家亦可多做「<strong>本體覺活動／重量活動</strong>」，有助孩子安定情緒、提升專注：
          </p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-2">
            {HOME_ACTIVITIES.map((a, i) => (
              <li key={i} className="flex gap-2 text-sm text-ink bg-brand-50/50 border border-brand-100 rounded-lg p-3"><span className="text-brand-500">💪</span>{a}</li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/directory" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm">搵職業治療資源 →</Link>
            <Link href="/journey" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">了解評估流程 →</Link>
          </div>
        </div>
      </section>

      {/* 誠實提醒 + 來源 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink-soft">
          ⚠️ <strong>重要提醒：</strong>「感覺處理障礙」目前並非 DSM-5 的獨立診斷；
          感官問題可單獨出現，亦可伴隨自閉症等情況。本頁為科普資訊，<strong>不能作診斷之用</strong>；
          如有疑慮，應由職業治療師或專業人員評估。
          <div className="mt-3">
            <SourceList
              sources={[
                { label: "Sensory processing disorder — Wikipedia（Ayres、DSM-5、八感）", url: "https://en.wikipedia.org/wiki/Sensory_processing_disorder", checkedAt: "2026-06" },
                { label: "ASAT — Ayres Sensory Integration 介紹", url: "https://asatonline.org/for-parents/learn-more-about-specific-treatments/sensory-integrative-therapy-sensory-integration-si-or-sit/", checkedAt: "2026-06" },
                { label: "Child Mind Institute — 感覺處理是否診斷的討論", url: "https://childmind.org/article/the-debate-over-sensory-processing/", checkedAt: "2026-06" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
