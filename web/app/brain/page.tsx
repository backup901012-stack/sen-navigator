import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "童年經歷與腦部成長（科普）",
  description:
    "家長易明的兒童腦部發展科普：經歷如何塑造腦袋、神經可塑性、毒性壓力、依附與安全感、核心思想、成長思維，以及對 SEN 家庭的啟示——正向關係與早期介入是保護因子。",
};

const PILLARS = [
  { icon: "🌱", t: "經歷塑造腦袋", d: "腦中的神經網絡由日常經歷一次次「行」出來；正面或負面經歷愈多，相關「路徑」就愈寬、愈自動化（習慣成自然）。" },
  { icon: "🧠", t: "腦袋像泥膠（神經可塑性）", d: "腦袋可以改變。年紀愈小可塑性愈高、學得愈快，但同時較脆弱；好經歷帶來益處，創傷則傷得較深。腦袋可重塑，但需要時間與耐性。" },
  { icon: "💗", t: "愛與安全感", d: "與照顧者建立親密、穩定的依附關係，讓孩子有「安全感」，是心智健康成長的基礎。" },
];

const SIGNS_TOXIC = [
  "杏仁核（情緒「警鐘」）長期過度反應，孩子像「驚弓之鳥」",
  "壓力荷爾蒙（皮質醇）長期過量＝「毒性壓力」，會損害腦部、情緒管理與認知",
  "負責理智的前額葉與情緒的杏仁核之間連結受損 → 難以調節情緒",
  "創傷記憶以畫面／聲音／身體感覺儲存，遇刺激會「重播」→ 突然情緒失控",
];

const HELP = [
  { t: "表達愛的四部曲", d: "被注意 → 被明白 → 被接納 → 被關顧。讀懂孩子行為與情緒背後的需要，並恰當回應。" },
  { t: "來回互動（如打乒乓球）", d: "你一句、我一句的真正交流；父母像一面鏡子，幫孩子為抽象的感覺命名、學會覺察與調節情緒。" },
  { t: "照顧好自己", d: "父母有足夠的精神健康，先有心力回應孩子；情緒困擾宜及早求助與治療。" },
  { t: "成長思維", d: "相信能力與心態都可以慢慢成長。對有特殊學習需要的孩子，耐性陪伴＋良好環境，就是最好的「護心符」。" },
];

export default function BrainPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">基礎認識 · 科普</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">童年經歷與腦部成長</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            孩子的腦袋並非一成不變——它由每天的經歷「塑造」出來。明白這一點，有助你理解
            SEN 孩子的行為與情緒，並知道<strong className="text-brand-700">正向關係與早期介入</strong>
            點解咁重要。
          </p>
        </div>
      </section>

      {/* 三大概念 */}
      <section className="container-page py-12">
        <div className="grid md:grid-cols-3 gap-4">
          {PILLARS.map((p) => (
            <div key={p.t} className="rounded-2xl bg-white border border-brand-100 p-6">
              <div className="text-3xl">{p.icon}</div>
              <h2 className="mt-3 font-black text-brand-900">{p.t}</h2>
              <p className="mt-2 text-sm text-ink leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-soft">
          ※ 基因好比種子，也需要合適的環境與經歷才會「啟動」；先天加上後天經歷，共同影響發展。
        </p>
      </section>

      {/* 壓力與警鐘 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">壓力、「警鐘」與毒性壓力</h2>
          <p className="mt-3 text-brand-100 leading-relaxed">
            腦中的杏仁核就像一個「警鐘」：遇到危機會響起，令人驚恐、焦慮，身體進入
            「打、逃或僵」（fight／flight／freeze）。適量壓力正常，但<strong className="text-white">長期、過量</strong>
            的壓力對發展中的腦袋有害。
          </p>
          <ul className="mt-4 space-y-2 text-sm text-brand-100">
            {SIGNS_TOXIC.map((s, i) => (
              <li key={i} className="flex gap-2"><span className="text-warm-300">⚠</span>{s}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-brand-200">
            好消息：穩定、被愛的關係能緩衝壓力，幫孩子的「警鐘」在危機過後安定下來。
          </p>
        </div>
      </section>

      {/* 核心思想 + 脾性 */}
      <section className="container-page pb-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white border border-brand-100 p-6">
          <h2 className="text-xl font-black text-brand-900">孩子的「核心思想」</h2>
          <p className="mt-2 text-sm text-ink">童年經歷會慢慢形成孩子兩個核心信念：</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="rounded-lg bg-brand-50/60 border border-brand-100 p-3"><strong>我是怎樣的人？</strong>（自我價值）—— 我值得被愛嗎？我有能力嗎？</li>
            <li className="rounded-lg bg-brand-50/60 border border-brand-100 p-3"><strong>世界是怎樣的？</strong>（世界觀）—— 有人值得信任嗎？環境可以掌控嗎？</li>
          </ul>
          <p className="mt-3 text-xs text-ink-soft">孩子常傾向「自我歸因」（怪責自己），父母日常的評價、語氣與眼神，份量都很重。</p>
        </div>
        <div className="rounded-2xl bg-white border border-brand-100 p-6">
          <h2 className="text-xl font-black text-brand-900">天生脾性（Temperament）</h2>
          <p className="mt-2 text-sm text-ink">
            每個孩子天生脾性不同。<strong>高度敏感</strong>的孩子（例如特別在意衣物質料、食物溫度、聲音大小、味道濃淡）
            會特別容易受負面經歷所傷，但在良好環境亦特別容易受益。
          </p>
          <Link href="/sensory" className="mt-3 inline-block text-brand-600 font-bold text-sm hover:underline">
            延伸：感覺統合與本體感覺 →
          </Link>
        </div>
      </section>

      {/* 點幫 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-6">父母可以點幫？</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {HELP.map((h) => (
            <div key={h.t} className="rounded-2xl bg-white border border-brand-100 p-5">
              <h3 className="font-black text-brand-900">{h.t}</h3>
              <p className="mt-2 text-sm text-ink">{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 對 SEN 啟示 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-50/60 border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">對 SEN 家庭的啟示</h2>
          <p className="mt-3 text-ink">
            ADHD、讀寫障礙、自閉症等孩子各有獨特需要。腦袋的可塑性意味著：
            <strong>及早介入＋持續的正向關係，本身就是強大的保護因子</strong>。
            訓練與治療固然重要，每天被理解、被接納的經歷同樣會「塑造」孩子的腦袋。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/screening" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm">早期篩查 →</Link>
            <Link href="/journey" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">評估與介入流程 →</Link>
            <Link href="/consult" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">尋求支援 →</Link>
          </div>
        </div>
      </section>

      {/* 來源 + 免責 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink-soft">
          ⚠️ 本頁為科普資訊整理，<strong>不能作醫療或診斷之用</strong>；如有疑慮，請諮詢專業人員。
          內容概念綜合自下列公開教育資源（以原文為準）：
          <div className="mt-3">
            <SourceList
              sources={[
                { label: "青山醫院 精神健康學院（IMH）《童年經歷與腦部成長》小冊子 — www.imh.org.hk", url: "https://www3.ha.org.hk/cph/imh/", checkedAt: "2026-06" },
                { label: "哈佛大學 兒童發展中心（Center on the Developing Child）", url: "https://developingchild.harvard.edu/", checkedAt: "2026-06" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
