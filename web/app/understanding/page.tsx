import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";
import BreathingCircle from "@/components/BreathingCircle";
import Mascot from "@/components/Mascot";
import { IconHeart, IconSprout, IconSearch, IconHands } from "@/components/icons";

export const metadata: Metadata = {
  title: "每個孩子都值得被理解 — 認識・同理・靜觀",
  description:
    "寫給每一位：開始覺得孩子有點不同的家長、想認識 SEN 的朋友、在公眾場合遇到特殊需要孩子而不知如何反應的人。由神經多樣性、靜觀情緒與同理出發，理解 SEN 孩子與家庭，一起建立更包容的社會。",
};

export default function UnderstandingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-warm-50">
        <div className="container-page py-14 relative">
          <div className="max-w-2xl">
            <p className="text-brand-600 font-bold text-sm mb-2">認識 · 同理 · 靜觀</p>
            <h1 className="text-3xl sm:text-4xl font-black text-brand-900 leading-tight"><span aria-hidden="true">💛 </span>
              每個孩子，都值得被理解
            </h1>
            <p className="mt-5 text-lg text-ink-soft">
              無論你是<strong className="text-brand-700">開始覺得孩子有點不同</strong>的家長、
              <strong className="text-brand-700">想認識 SEN</strong> 的朋友，
              還是<strong className="text-brand-700">在街上、商場遇到、不知如何反應</strong>的你——
              這一頁，是寫給你的。
            </p>
            <p className="mt-3 text-sm text-ink-soft">
              理解，從來不必一步到位。慢慢來，由放鬆自己開始。
            </p>
          </div>
          <div className="absolute -top-2 right-6 hidden md:block" aria-hidden>
            <Mascot size={104} variant="pink" />
          </div>
        </div>
      </section>

      {/* 靜觀呼吸 */}
      <section className="container-page py-12">
        <BreathingCircle />
      </section>

      {/* 三條路徑 */}
      <section className="container-page pb-4">
        <h2 className="text-2xl font-black text-brand-900 text-center">你是哪一位？</h2>
        <p className="mt-2 text-center text-ink-soft text-sm">揀一條最貼近你的路徑，我們一起慢慢看。</p>
      </section>

      {/* 路徑 A：怕標籤的家長 */}
      <section id="parent" className="container-page pb-8">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8 card-hover">
          <div className="flex items-start gap-4">
            <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-warm-100 text-warm-700">
              <IconSprout size={28} />
            </span>
            <div>
              <h3 className="text-xl font-black text-brand-900">「我覺得我的孩子，好似有少少不同」</h3>
              <p className="mt-1 text-sm text-ink-soft">給開始察覺、卻又害怕「貼標籤」的家長</p>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-ink leading-relaxed">
            <p>
              <strong className="text-brand-700">願意了解，本身就是踏出一步。</strong>這裡不會評價你，
              也不必急著做任何決定——你只是在認識自己的孩子。
            </p>
            <p>
              <strong>「了解」不等於「定性」。</strong>及早認識孩子的需要，是為了更早地幫到他，
              不是要為他貼上一個標籤。許多家長最後都說：「如果早一點明白就好了。」
            </p>
            <p>
              在「神經多樣性」（neurodiversity）的角度，自閉症、專注力不足等，是大腦發展的
              <strong className="text-brand-700">差異</strong>，而不是「不正常」。每個孩子都有自己的步伐與長處。
            </p>
            <p className="text-sm text-ink-soft">
              你可以先慢慢、私下地了解，不必急著做任何決定，也沒有人會知道你來看過。
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/screening" className="px-4 py-2 rounded-full bg-brand-600 text-white font-bold text-sm">先做早期篩查（私下進行）→</Link>
            <Link href="/faq" className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">常見問題 →</Link>
            <Link href="/journey" className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">了解申請流程 →</Link>
          </div>
        </div>
      </section>

      {/* 路徑 B：想了解的大眾 */}
      <section id="learn" className="container-page pb-8">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8 card-hover">
          <div className="flex items-start gap-4">
            <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-brand-100 text-brand-700">
              <IconSearch size={28} />
            </span>
            <div>
              <h3 className="text-xl font-black text-brand-900">「我想了解 SEN／自閉症是什麼」</h3>
              <p className="mt-1 text-sm text-ink-soft">給願意多走一步、認識身邊不同孩子的你</p>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-ink leading-relaxed">
            <p>
              <strong>SEN</strong>（特殊教育需要）不是一種病，而是一群在學習、溝通、感官或情緒上
              <strong className="text-brand-700">有不同需要</strong>的孩子。自閉症、過度活躍、讀寫障礙都屬於此。
            </p>
            <p>
              <strong className="text-brand-700">行為背後，總有原因。</strong>
              一個孩子摀著耳朵、不肯看人、突然大叫，往往不是「曳」或「冇家教」，
              而是他的感官或溝通方式跟大多數人不一樣。
            </p>
            <p>
              神經多樣性提醒我們：<strong>差異不是缺陷。</strong>
              理解得越多，世界對這些孩子就越友善。
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/brain" className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">童年經歷與腦部成長 →</Link>
            <Link href="/sensory" className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">感覺統合是什麼 →</Link>
            <Link href="/intelligences" className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">多元智能 →</Link>
          </div>
        </div>
      </section>

      {/* 路徑 C：公眾場合遇到 */}
      <section id="public" className="container-page pb-8">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8 card-hover">
          <div className="flex items-start gap-4">
            <span className="shrink-0 grid place-items-center w-12 h-12 rounded-2xl bg-lilac-100 text-lilac-700">
              <IconHands size={28} />
            </span>
            <div>
              <h3 className="text-xl font-black text-brand-900">「我在街上、商場遇到，不知如何反應」</h3>
              <p className="mt-1 text-sm text-ink-soft">給想釋出善意、卻不確定怎樣做才對的你</p>
            </div>
          </div>

          {/* Meltdown vs 扭計 */}
          <div className="mt-5">
            <p className="font-black text-brand-900 mb-3">先分清：「失控」不是「扭計」</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
                <p className="font-black text-amber-800">扭計（tantrum）</p>
                <ul className="mt-2 text-sm text-ink space-y-1 list-disc list-inside">
                  <li>有目的：想得到某樣東西</li>
                  <li>會留意大人反應</li>
                  <li>得到回應後通常會停止</li>
                </ul>
              </div>
              <div className="rounded-xl bg-warm-50 border border-warm-200 p-4">
                <p className="font-black text-warm-700">失控（meltdown）</p>
                <ul className="mt-2 text-sm text-ink space-y-1 list-disc list-inside">
                  <li>是感官／情緒<strong>超載</strong>的反應</li>
                  <li>不受自己控制，並非故意</li>
                  <li>需要時間與空間才能平復</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 三件小事 */}
          <div className="mt-6">
            <p className="font-black text-brand-900 mb-3">你可以做的三件小事</p>
            <div className="grid sm:grid-cols-3 gap-3 text-sm">
              <div className="rounded-xl bg-brand-50/60 border border-brand-100 p-4">
                <p className="font-black text-brand-700">① 不批判</p>
                <p className="mt-1 text-ink-soft">不要盯著看、不要投以責備的眼神。一個不批判的態度，已經是溫柔。</p>
              </div>
              <div className="rounded-xl bg-brand-50/60 border border-brand-100 p-4">
                <p className="font-black text-brand-700">② 給空間</p>
                <p className="mt-1 text-ink-soft">讓一讓路、降低週圍的聲量與刺激，給孩子和家長一點喘息。</p>
              </div>
              <div className="rounded-xl bg-brand-50/60 border border-brand-100 p-4">
                <p className="font-black text-brand-700">③ 平常心</p>
                <p className="mt-1 text-ink-soft">一個自然的微笑，或一句「需要幫手嗎？」——比起同情的目光或圍觀，平常心更教人安心。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 同理，不是同情（心理輔導核心） */}
      <section id="empathy" className="container-page pb-8">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8 card-hover">
          <h2 className="text-2xl font-black text-brand-900">同理，不是同情</h2>
          <p className="mt-2 text-ink leading-relaxed">
            心理輔導裡有個重要分別：<strong className="text-brand-700">同理（empathy）</strong>是平等地與你同在、不加批判；
            <strong>同情（sympathy）</strong>則是隔著距離說一句「好慘」。
            對 SEN 家庭來說，被當成「可憐」或「偉大」，往往比被忽略更有壓力——
            他們要的，只是被當成<strong className="text-brand-700">平常</strong>。
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-warm-50 border border-warm-200 p-4">
              <p className="font-black text-warm-700">這些話，先收起來</p>
              <ul className="mt-2 space-y-1.5 text-ink list-disc list-inside">
                <li>「你個小朋友好可憐」（憐憫）</li>
                <li>「你哋父母真係好偉大、好堅強」（神化的壓力）</li>
                <li>「係咪管教問題？」（指責）</li>
                <li>「不如試吓⋯⋯」未經邀請的建議（說教）</li>
                <li>不停盯著看、把焦點放在「他有多不同」</li>
              </ul>
            </div>
            <div className="rounded-xl bg-brand-50 border border-brand-100 p-4">
              <p className="font-black text-brand-700">試試這樣</p>
              <ul className="mt-2 space-y-1.5 text-ink list-disc list-inside">
                <li>把他當成普通孩子，平常心相處</li>
                <li>聆聽多於給意見，不急著「幫手解決」</li>
                <li>需要時才問一句「需要幫手嗎？」</li>
                <li>不評價、不追問，給家庭自在的空間</li>
                <li>明白行為背後有原因，而非「冇家教」</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            參考心理輔導中 empathy 與 sympathy 的分別（Brené Brown）；同理心四要素：換位思考、不加批判、辨識情緒、表達理解（Theresa Wiseman）。
          </p>
        </div>
      </section>

      {/* 給家長的話 + 去污名 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-white/15 text-warm-300">
              <IconHeart size={22} />
            </span>
            <h2 className="text-xl font-black">最後，想說的是</h2>
          </div>
          <p className="text-brand-100 leading-relaxed">
            SEN 家庭要的，從來不是同情或讚嘆，而是<strong className="text-white">被當成「平常」</strong>——
            孩子可以做自己，家長不必被神化、也不必向誰解釋。多一分理解，少一分指點，就已經足夠。
          </p>
          <p className="mt-3 text-brand-200 text-sm">
            而照顧者，同樣值得被照顧。情緒撐不住時，可致電 24 小時「情緒通」
            <a href="tel:18111" className="text-white font-black underline">18111</a>（陪我講 Shall We Talk）。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/parents" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold text-sm">家長特區・情緒自我照顧 →</Link>
            <Link href="/match" className="px-5 py-2.5 rounded-full bg-warm-500 text-white font-bold text-sm">為孩子找方向 →</Link>
          </div>
        </div>

        <div className="mt-6">
          <SourceList
            sources={[
              { label: "National Autistic Society — Meltdowns（公眾指引）", url: "https://www.autism.org.uk/advice-and-guidance/behaviour/meltdowns/all-audiences", checkedAt: "2026-06-13" },
              { label: "神經多樣性（Neurodiversity）概念", url: "https://zh.wikipedia.org/zh-hk/%E7%A5%9E%E7%B6%93%E5%A4%9A%E6%A8%A3%E6%80%A7", checkedAt: "2026-06-13" },
              { label: "協康會 — 自閉症譜系障礙", url: "https://www.heephong.org/child-development-and-training/useful-advice/autism-spectrum-disorders", checkedAt: "2026-06-13" },
              { label: "陪我講 Shall We Talk — 情緒通 18111", url: "https://www.shallwetalk.hk/", checkedAt: "2026-06-13" },
            ]}
          />
        </div>
        <p className="mt-3 text-xs text-ink-soft">
          ⚠️ 本頁為公眾教育與同理心建立之用，內容屬一般資訊，不構成診斷或醫療建議。
        </p>
      </section>
    </>
  );
}
