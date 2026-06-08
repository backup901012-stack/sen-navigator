import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "家長特區",
  description:
    "為 SEN 家長而設：辨識孩子發展的提示信號、教養 SEN 小孩的常見誤區，以及家長自己的情緒自我認知與生命教育，並提供「陪我講」18111 精神健康支援熱線。",
};

const SIGNS = [
  { age: "0–12 個月", items: ["很少眼神接觸、少有社交性微笑", "對叫名字沒反應、對聲音反應弱", "1 歲前沒有牙牙學語或手勢（如指物、揮手）"] },
  { age: "1–2 歲", items: ["16 個月仍未說第一個有意思的單字", "2 歲仍未講兩個字的短句", "少有指物分享、少模仿、少假想遊戲"] },
  { age: "2–4 歲", items: ["語言、理解明顯比同齡慢", "難跟簡單指示、難與同齡互動", "重複行為、極度固執、對感官刺激過敏或遲鈍"] },
  { age: "任何年齡", items: ["已有的能力出現倒退（語言、社交、動作）", "餵食／吞嚥、肌張力或動作協調明顯異常", "情緒行為持續影響日常生活與學習"] },
];

const MYTHS = [
  { myth: "「大個啲自然會好，再等等啦。」", truth: "發展遲緩越早介入越好。觀望可能錯過黃金期；有疑慮應盡早評估，而非單純等待。" },
  { myth: "「唔好評估，驚畀人標籤。」", truth: "評估是為了understanding孩子的需要、配對合適支援，不是貼標籤。及早了解反而能更好地保護孩子。" },
  { myth: "「佢扭計／曳，鬧嚴啲就會乖。」", truth: "SEN 孩子的『問題行為』很多時是需要未被滿足或感覺／情緒困難的訊號。先理解背後原因，比單純責罰有效。" },
  { myth: "「同人比較，催谷追返上。」", truth: "每個孩子步伐不同，過度比較與催谷會增加壓力。設合理目標、欣賞小進步更有助成長。" },
  { myth: "「治療交晒畀治療師／學校就得。」", truth: "家長日常的回應與練習同樣關鍵。把治療策略融入生活，效果會更持久。" },
  { myth: "「我要做完美父母，唔可以出錯。」", truth: "沒有完美父母。穩定、被愛、肯修補的關係，比『零失誤』更重要。照顧好自己，才有力照顧孩子。" },
];

const SELF = [
  { icon: "🫁", t: "先戴好自己的氧氣罩", d: "照顧者也需要被照顧。先照顧自己的身心，才有持續的力量陪伴孩子。" },
  { icon: "🌱", t: "覺察並接納情緒", d: "疲累、內疚、憤怒、悲傷都是正常的。先承認情緒，而不是壓抑或責怪自己。" },
  { icon: "🤝", t: "唔使一個人扛", d: "向伴侶、家人、家長互助小組或專業求助，是力量不是軟弱。" },
  { icon: "🧭", t: "找回自己的人生意義", d: "你不只是『SEN 孩子的家長』。保留一點屬於自己的時間、興趣與關係，是生命教育的一部分。" },
];

export default function ParentsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-warm-50 to-brand-50">
        <div className="container-page py-14">
          <p className="text-warm-600 font-bold text-sm mb-2">家長特區</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">陪孩子成長，也照顧好自己</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            這裡為 SEN 家長整合三件事：學會<strong className="text-brand-700">辨識</strong>孩子的發展信號、
            避開常見的<strong className="text-brand-700">教養誤區</strong>，以及好好照顧
            <strong className="text-brand-700">自己的情緒</strong>。你並不孤單。
          </p>
        </div>
      </section>

      {/* 1. 辨識 */}
      <section className="container-page py-12">
        <h2 className="text-2xl font-black text-brand-900">① 辨識：留意這些「提示信號」</h2>
        <p className="mt-2 text-ink-soft">
          以下是值得留意的一般信號（非診斷清單）。出現不代表一定有問題，但<strong>持續或明顯</strong>時，宜及早諮詢專業。
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {SIGNS.map((s) => (
            <div key={s.age} className="rounded-2xl bg-white border border-brand-100 p-5">
              <h3 className="font-black text-brand-900">{s.age}</h3>
              <ul className="mt-2 space-y-1.5">
                {s.items.map((x, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink"><span className="text-warm-500">·</span>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/milestones" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm">📊 語言發展里程碑 →</Link>
          <Link href="/screening" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">🧒 自閉症早期篩查 →</Link>
          <Link href="/journey" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">評估與轉介流程 →</Link>
        </div>
      </section>

      {/* 2. 教養誤區 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900">② 教養 SEN 小孩的常見誤區</h2>
        <div className="mt-6 space-y-3">
          {MYTHS.map((m, i) => (
            <div key={i} className="rounded-2xl bg-white border border-brand-100 p-5">
              <p className="flex gap-2 text-ink font-bold"><span className="text-warm-500">❌</span>{m.myth}</p>
              <p className="mt-2 flex gap-2 text-ink-soft"><span className="text-green-600">✅</span>{m.truth}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-soft">※ 以上為一般教養參考，並非針對個別孩子的建議；個別情況宜諮詢專業人員。</p>
      </section>

      {/* 3. 家長情緒 / 生命教育 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">③ 家長自己：情緒自我認知與生命教育</h2>
          <p className="mt-2 text-brand-100">
            照顧 SEN 孩子是一條長路。學會認識與照顧自己的情緒，本身就是一種生命教育。
          </p>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            {SELF.map((s) => (
              <div key={s.t} className="rounded-xl bg-white/10 p-4">
                <div className="text-2xl">{s.icon}</div>
                <p className="mt-1 font-bold">{s.t}</p>
                <p className="text-sm text-brand-100 mt-0.5">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 陪我講 18111 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-warm-50 to-brand-50 border-2 border-brand-200 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">需要傾訴？「陪我講 Shall We Talk」18111</h2>
          <p className="mt-3 text-ink">
            「陪我講（Shall We Talk）」是政府推動精神健康的平台，旗下
            <strong className="text-brand-700">「情緒通」18111</strong> 是 24 小時一站式精神健康支援熱線
            （電話及 WhatsApp）。任何背景、任何年齡都可致電——
            <strong>照顧者本身同樣可以求助</strong>，有需要會轉介合適服務。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="tel:18111" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-600 text-white font-black">📞 致電 18111</a>
            <a href="https://www.shallwetalk.hk/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">陪我講 Shall We Talk →</a>
            <Link href="/prc" className="px-6 py-3 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">各區家長資源中心 →</Link>
            <Link href="/directory" className="px-6 py-3 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">更多支援資源 →</Link>
          </div>
          <p className="mt-4 text-xs text-ink-soft">
            如有即時危險或輕生念頭，請致電 999，或撒瑪利亞防止自殺會 2896 0000（24 小時）。
          </p>
        </div>
      </section>
    </>
  );
}
