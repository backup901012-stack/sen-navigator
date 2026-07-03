import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "多元智能（科普）",
  description:
    "家長易明的多元智能理論（Multiple Intelligences）科普：哈佛 Howard Gardner 提出的八種智能、每種智能的表現與在家培養方向，以及如何用「強項視角」陪伴 SEN 孩子建立自信。",
};

/** Howard Gardner 多元智能理論的八種智能（1983 提出語文等七種、1999 加入自然觀察） */
const INTELLIGENCES = [
  {
    icon: "📖",
    name: "語文智能",
    en: "Linguistic",
    color: "#b45309",
    desc: "對文字、語言敏感，鍾意聽故事、講嘢、認字、玩文字遊戲。",
    nurture: ["親子共讀、講故事", "玩接龍、估謎語、改編歌詞", "鼓勵用說話表達感受"],
  },
  {
    icon: "🔢",
    name: "邏輯數學智能",
    en: "Logical-mathematical",
    color: "#0f766e",
    desc: "鍾意數字、規律、因果，鍾意問「點解」、砌邏輯、分類排序。",
    nurture: ["玩數數、配對、分類遊戲", "煮食量度、購物找續", "一齊砌積木、走迷宮"],
  },
  {
    icon: "🎨",
    name: "空間智能",
    en: "Spatial",
    color: "#9333ea",
    desc: "對圖像、顏色、空間敏感，鍾意畫畫、砌模型、睇地圖、認路。",
    nurture: ["畫畫、剪貼、玩黏土", "砌拼圖、樂高、積木", "睇圖書、認路線"],
  },
  {
    icon: "🤸",
    name: "肢體動覺智能",
    en: "Bodily-kinesthetic",
    color: "#0369a1",
    desc: "用身體學習，手腳靈活、坐唔定，鍾意郁動、運動、做手作。",
    nurture: ["跳舞、球類、攀爬", "手工、串珠、摺紙", "用動作／角色扮演學習"],
  },
  {
    icon: "🎵",
    name: "音樂智能",
    en: "Musical",
    color: "#be123c",
    desc: "對聲音、節奏、旋律敏感，鍾意唱歌、聽音樂、敲打出拍子。",
    nurture: ["一齊唱歌、拍手打拍子", "玩簡單樂器、敲擊", "用歌仔記知識（如數字歌）"],
  },
  {
    icon: "🤝",
    name: "人際智能",
    en: "Interpersonal",
    color: "#0d9488",
    desc: "善於理解他人情緒、與人相處，鍾意合作、照顧人、做小領袖。",
    nurture: ["安排合作遊戲、輪流玩", "鼓勵幫手、照顧細佬妹", "傾偈識別他人感受"],
  },
  {
    icon: "🪞",
    name: "內省智能",
    en: "Intrapersonal",
    color: "#7c3aed",
    desc: "了解自己的情緒、喜好與限制，鍾意獨處、有自己想法、自我反思。",
    nurture: ["一齊講今日心情", "畫情緒臉、做選擇", "尊重佢需要的獨處空間"],
  },
  {
    icon: "🌱",
    name: "自然觀察智能",
    en: "Naturalist",
    color: "#15803d",
    desc: "對大自然、動植物敏感，鍾意觀察、分類、親近泥土與小動物。",
    nurture: ["去公園、行山、種植物", "觀察天氣、昆蟲、葉子", "玩動植物分類圖卡"],
  },
];

export default function IntelligencesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">基礎認識 · 科普</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900"><span aria-hidden="true">🌈 </span>多元智能</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            每個孩子聰明的方式都唔同。哈佛大學教育心理學家
            <strong className="text-brand-700"> Howard Gardner</strong>{" "}
            提出的「多元智能理論」提醒我哋：智能不止「讀書叻」一種。
            對 SEN 孩子嚟講，<strong className="text-brand-700">睇見佢的強項</strong>，
            往往係建立自信、打開學習動力的鎖匙。
          </p>
        </div>
      </section>

      {/* 咩係多元智能 */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">咩係「多元智能」？</h2>
          <p className="mt-3 text-ink leading-relaxed">
            多元智能理論（Theory of Multiple Intelligences）由
            <strong> Howard Gardner</strong> 喺 1983 年著作《Frames of Mind》提出。
            佢認為傳統 IQ 測驗只量度到語文同邏輯數學能力，太過狹窄；
            人其實有多種<strong>相對獨立</strong>的智能，每個人都係由唔同強弱組合而成的
            「智能光譜」。最初提出七種，1999 年再加入<strong>自然觀察智能</strong>，
            合共八種。
          </p>
          <p className="mt-3 text-ink-soft text-sm leading-relaxed">
            重點唔係幫孩子「貼標籤」分類，而係<strong>多一個角度欣賞佢</strong>——
            就算讀寫有困難，佢可能喺動手、空間、音樂或人際上好有天份。
          </p>
        </div>
      </section>

      {/* 八種智能 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-2">八種智能 · 各有所長</h2>
        <p className="text-ink-soft mb-6">
          冇高低之分，只係「方式」唔同。試吓觀察孩子最投入、最發光的係邊幾種？
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {INTELLIGENCES.map((it) => (
            <div
              key={it.name}
              className="rounded-2xl bg-white border border-brand-100 p-5"
              style={{ borderTopWidth: 4, borderTopColor: it.color }}
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{it.icon}</div>
                <div>
                  <p className="font-black text-brand-900">{it.name}</p>
                  <p className="text-xs text-ink-soft">{it.en}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink">{it.desc}</p>
              <div className="mt-3">
                <p className="text-xs font-bold" style={{ color: it.color }}>
                  在家可以咁培養：
                </p>
                <ul className="mt-1 space-y-1">
                  {it.nurture.map((n, i) => (
                    <li key={i} className="flex gap-2 text-sm text-ink">
                      <span style={{ color: it.color }}>·</span>
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 強項視角 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">用「強項視角」陪 SEN 孩子</h2>
          <p className="mt-3 text-brand-100 leading-relaxed">
            SEN 的支援好多時聚焦喺「弱項」——補唔足、追進度。多元智能提醒我哋，
            同時要<strong className="text-white">由強項出發</strong>：
          </p>
          <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-bold">先建立自信</p>
              <p className="text-brand-100 mt-1">由佢叻的地方獲得成功感，先有動力面對難的地方</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-bold">用強項學弱項</p>
              <p className="text-brand-100 mt-1">如用音樂／動作幫記字、用畫圖幫理解</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-bold">減少自我否定</p>
              <p className="text-brand-100 mt-1">「我唔係蠢，只係叻的方式唔同」</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-50/60 border border-brand-100 p-6 sm:p-8">
          <h2 className="text-2xl font-black text-brand-900">下一步</h2>
          <p className="mt-3 text-ink">
            觀察到孩子的強項與需要後，可以進一步了解專業評估與適合的服務方向。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/match"
              className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm"
            >
              做服務配對 →
            </Link>
            <Link
              href="/ot-confidence"
              className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200"
            >
              如何建立自信 →
            </Link>
            <Link
              href="/parents"
              className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200"
            >
              家長特區 →
            </Link>
          </div>
        </div>
      </section>

      {/* 誠實提醒 + 來源 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink-soft">
          ⚠️ <strong>科普提醒：</strong>多元智能屬於一套有影響力的
          <strong>教育理論</strong>，亦有學者質疑其實證基礎、認為部分「智能」更接近
          「能力／才華」。本頁旨在提供「欣賞孩子多元強項」的角度，
          <strong>並非診斷或評估工具</strong>；孩子的發展與支援需要，應由專業人員評估。
          <div className="mt-3">
            <SourceList
              sources={[
                {
                  label: "Theory of multiple intelligences — Wikipedia（Gardner、八種智能、1983/1999）",
                  url: "https://en.wikipedia.org/wiki/Theory_of_multiple_intelligences",
                  checkedAt: "2026-06",
                },
                {
                  label: "Howard Gardner — Wikipedia",
                  url: "https://en.wikipedia.org/wiki/Howard_Gardner",
                  checkedAt: "2026-06",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
