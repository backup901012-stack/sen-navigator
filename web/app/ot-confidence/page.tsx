import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "職業治療如何幫 SEN 兒童建立自信（基礎認識）",
  description:
    "認識職業治療（OT）如何透過提升日常功能、剛剛好的挑戰與成功經驗，幫 SEN 兒童建立自信與自我效能，以及家長在家可做的鼓勵方法。",
};

const HOW = [
  { icon: "🎯", t: "「剛剛好的挑戰」", d: "把任務難度調校到孩子「踮起腳就做到」——夠難有挑戰、又唔會太難而放棄，讓孩子不斷體驗「我做到了」。" },
  { icon: "🧩", t: "分解任務、循序漸進", d: "把大目標拆成小步，每完成一步即有成就感，慢慢累積能力與信心。" },
  { icon: "🎲", t: "遊戲為本", d: "在孩子喜歡的活動中練習技能，減低壓力、提升動機，成功來得更自然。" },
  { icon: "🌀", t: "先穩定感覺與情緒", d: "透過感覺統合調節，讓孩子先夠安定，先有餘裕去嘗試新事物（見「感覺統合」科普）。" },
  { icon: "✋", t: "提升自理與小肌肉", d: "學識穿衣、扣鈕、用餐具、書寫前技巧——「我可以自己做」就是自信的根源。" },
  { icon: "🛠️", t: "環境與工具調適", d: "用合適工具（如加粗筆桿、防滑墊）減少挫敗，讓孩子靠自己也能成功。" },
];

const HOME = [
  "讚「努力」與「過程」多於「結果」（例：你好專心試咗好多次！）",
  "給有限度的選擇，讓孩子有掌控感（例：先做 A 定 B？）",
  "容許失敗、鼓勵再試，把錯誤視為學習",
  "慶祝小進步，具體說出他做得好的地方",
  "減少代勞，給時間讓孩子自己完成",
];

export default function OtConfidencePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">基礎認識 · 職業治療</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            職業治療如何幫 SEN 兒童建立自信
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            自信唔係「讚」出嚟，而係由一次次<strong className="text-brand-700">「我做得到」</strong>的成功經驗累積出嚟。
            職業治療（OT）正正透過提升孩子的日常能力，幫佢哋建立信心與自我效能。
          </p>
        </div>
      </section>

      {/* 自信從何而來 */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">自信從何而來？</h2>
          <p className="mt-3 text-ink leading-relaxed">
            孩子的自信，很大程度來自<strong>「能力感」</strong>——當佢發現自己有能力完成一件事，
            就會相信「我得嘅」，進而願意嘗試更多。SEN 孩子若經常遇到失敗與挫折，容易形成
            「我唔得」的負面想法；職業治療的目標，正是<strong>透過成功經驗扭轉呢個循環</strong>，
            由能力建立信心。
          </p>
        </div>
      </section>

      {/* OT 點做 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-6">職業治療常用的方法</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HOW.map((h) => (
            <div key={h.t} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="text-3xl">{h.icon}</div>
              <h3 className="mt-2 font-black text-brand-900">{h.t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 家長在家可做 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">家長在家可以點做？</h2>
          <ul className="mt-4 space-y-2 text-brand-100 text-sm">
            {HOME.map((x, i) => (
              <li key={i} className="flex gap-2"><span className="text-warm-300">✓</span>{x}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-brand-200">
            重點：讓孩子靠自己成功，比替佢做好更能建立長遠自信。
          </p>
        </div>
      </section>

      {/* 連結 */}
      <section className="container-page pb-12">
        <div className="flex flex-wrap gap-3">
          <Link href="/directory" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm">搵職業治療資源 →</Link>
          <Link href="/sensory" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">感覺統合科普 →</Link>
          <Link href="/parents" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">家長特區 →</Link>
        </div>
      </section>

      <section className="container-page pb-16">
        <p className="text-xs text-ink-soft bg-amber-50 border border-amber-200 rounded-xl p-4">
          ⚠️ 本頁為一般教育資訊，介紹職業治療建立自信的常見原則，<strong>不能作診斷或治療指引</strong>。
          孩子的個別需要與訓練計劃，請由註冊職業治療師評估及制定。
        </p>
      </section>
    </>
  );
}
