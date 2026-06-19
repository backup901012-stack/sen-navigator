import type { Metadata } from "next";
import ScenarioTrainer from "@/components/ScenarioTrainer";
import BreathingCircle from "@/components/BreathingCircle";
import {
  THESIS,
  SCENARIO_INTRO,
  PRINCIPLES,
  SELFCHECK_INTRO,
  SELFCHECK_STEPS,
  SELFCHECK_CONTRAST,
  SELFCHECK_OUTRO,
  PARENT_VENT_TITLE,
  PARENT_VENT_CHILD,
  PARENT_VENT_SELF,
  PARENT_VENT_TIPS,
  REFRAME_INTRO,
  FASTFORWARD_METAPHOR,
  REFRAME_POINTS,
  ANTI_HOSTILITY,
  BYSTANDER_INTRO,
  BYSTANDER_TACTICS,
  BYSTANDER_SCRIPTS,
  SCENARIO_SOURCES,
} from "@/data/scenarios";

export const metadata: Metadata = {
  title: "情緒應對情境訓練（SEN 教養實務）",
  description:
    "由 SEN 家長角度出發的情境應對題庫：12 個真實場景（地鐵感官超載、超市扭計、校門轉換、餐廳過敏、挫折爆發、公園衝動、改路崩潰、手足妒忌、咬人溝通、熄機過渡、剪髮抗拒、輸唔起），逐一練習「點回應先幫到孩子」。三層回饋（好回應／要小心／應避免）附實證原理，並串聯家長自我情緒整理與面對途人說教投訴的壓力應對。",
};

export default function ScenariosPage() {
  return (
    <>
      {/* 點題（全頁最頂）：知道自己企喺邊 */}
      <section className="bg-brand-900 text-white">
        <div className="container-page py-12 sm:py-14">
          <p className="text-warm-300 font-bold text-sm tracking-wide">{THESIS.eyebrow}</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black leading-tight">
            {THESIS.headline}
          </h2>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl text-brand-50 leading-relaxed">
            {THESIS.lead}
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-4xl">
            <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
              <p className="font-black text-warm-200 mb-1.5">🤍 畀家長嘅信心</p>
              <p className="text-sm text-brand-50 leading-relaxed">{THESIS.forParent}</p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-5">
              <p className="font-black text-warm-200 mb-1.5">🌏 畀社會嘅一份責任</p>
              <p className="text-sm text-brand-50 leading-relaxed">{THESIS.forSociety}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-gradient-to-br from-warm-50 to-brand-50">
        <div className="container-page py-14">
          <p className="text-warm-600 font-bold text-sm mb-2">家長特區 · 情境訓練</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            情緒應對情境訓練
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft leading-relaxed">
            真實場景，練習「點回應先幫到孩子」。冇考試、冇分數——只係喺風暴真係發生之前，
            畀你心入面多一個穩陣嘅方向。
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">
              12 個真實情境
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">
              三層回饋 · 附原理
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">
              串聯面對途人壓力
            </span>
          </div>
        </div>
      </section>

      {/* 免責 */}
      <section className="container-page pt-8 max-w-3xl">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink">
          <p className="font-bold text-amber-800 mb-1">畀家長嘅話</p>
          <p className="leading-relaxed">
            呢個係教養嘅「練習同打氣」工具，<strong>唔係診斷或治療指引</strong>。
            每個孩子都唔同，個別處理請諮詢職業治療師、臨床心理學家或協康會等專業。
            你睇緊呢頁，已經係好用心嘅家長。
          </p>
        </div>
      </section>

      {/* 五大原則 */}
      <section className="container-page py-8 max-w-4xl">
        <h2 className="text-2xl font-black text-brand-900">開始前：五個貫穿全部情境嘅原則</h2>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white border border-brand-100 p-5 card-hover"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl shrink-0" aria-hidden>
                  {p.icon}
                </span>
                <div>
                  <p className="font-black text-brand-900">{p.title}</p>
                  <p className="text-sm text-ink-soft mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 互動訓練 */}
      <section className="container-page pb-8 max-w-3xl">
        <p className="text-ink-soft leading-relaxed mb-6">{SCENARIO_INTRO}</p>
        <ScenarioTrainer />
      </section>

      {/* 下一步：先整理自己情緒 */}
      <section className="bg-white border-y border-brand-100">
        <div className="container-page py-12 max-w-4xl">
          <p className="text-warm-600 font-bold text-sm mb-2">做完情境之後 · 最關鍵嘅一步</p>
          <h2 className="text-2xl sm:text-3xl font-black text-brand-900">
            回應孩子之前，先安頓返自己
          </h2>
          <p className="mt-4 text-ink leading-relaxed">{SELFCHECK_INTRO}</p>

          {/* 三步 */}
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {SELFCHECK_STEPS.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl bg-brand-50 border border-brand-100 p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden>
                    {s.icon}
                  </span>
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-600 text-white font-black text-sm shrink-0">
                    {i + 1}
                  </span>
                </div>
                <p className="font-black text-brand-900 mt-2">{s.title}</p>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* 面子 vs 孩子 對照 */}
          <div className="mt-8 rounded-2xl overflow-hidden border-2 border-brand-100">
            <div className="grid grid-cols-2">
              <div className="bg-rose-50 p-4 sm:p-5 border-r border-brand-100">
                <p className="font-black text-rose-700">😶‍🌫️ 係「面子／路人」拉住我</p>
              </div>
              <div className="bg-green-50 p-4 sm:p-5">
                <p className="font-black text-green-700">💚 係「孩子需要」帶住我</p>
              </div>
            </div>
            {SELFCHECK_CONTRAST.map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-t border-brand-100">
                <div className="p-4 sm:p-5 border-r border-brand-100 text-sm text-ink leading-relaxed">
                  {row.face}
                </div>
                <div className="p-4 sm:p-5 text-sm text-ink leading-relaxed">
                  {row.child}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-ink leading-relaxed bg-brand-50 border border-brand-100 rounded-xl p-5">
            {SELFCHECK_OUTRO}
          </p>

          {/* 重要提醒：唔好喺孩子身上爆，但你可以有自己嘅情緒 */}
          <div className="mt-8 rounded-2xl border-2 border-warm-200 overflow-hidden">
            <div className="bg-warm-500 text-white px-5 py-3">
              <p className="font-black text-lg">💛 {PARENT_VENT_TITLE}</p>
            </div>
            <div className="p-5 sm:p-6 bg-white">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-rose-50 border border-rose-200 p-5">
                  <p className="font-black text-rose-700 mb-2">
                    發脾氣、咒罵、暴力 ⇏ 解決問題
                  </p>
                  <p className="text-sm text-ink leading-relaxed">{PARENT_VENT_CHILD}</p>
                </div>
                <div className="rounded-xl bg-green-50 border border-green-200 p-5">
                  <p className="font-black text-green-700 mb-2">
                    但你被允許有自己嘅情緒
                  </p>
                  <p className="text-sm text-ink leading-relaxed">{PARENT_VENT_SELF}</p>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {PARENT_VENT_TIPS.map((t) => (
                  <div
                    key={t.title}
                    className="rounded-xl bg-brand-50 border border-brand-100 p-4"
                  >
                    <div className="flex items-start gap-2.5">
                      <span className="text-2xl shrink-0" aria-hidden>
                        {t.icon}
                      </span>
                      <div>
                        <p className="font-bold text-brand-900 text-sm">{t.title}</p>
                        <p className="text-sm text-ink-soft mt-1 leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 呼吸圈：當下用得着 */}
          <div className="mt-8">
            <p className="font-bold text-brand-900 mb-3">
              如果而家都覺得心口好緊——同我哋一齊呼吸幾下：
            </p>
            <BreathingCircle />
          </div>
        </div>
      </section>

      {/* 拆解誤解：情緒唔係短片 */}
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-12 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl font-black text-brand-900">
            拆解一個誤解：唔係家長唔識教
          </h2>
          <p className="mt-4 text-ink leading-relaxed">{REFRAME_INTRO}</p>

          {/* 短片比喻 highlight */}
          <div className="mt-6 rounded-2xl bg-white border-2 border-brand-200 p-6 sm:p-7">
            <p className="font-black text-brand-900 text-lg mb-2">
              📱 情緒，唔係一條可以「跳過」嘅短片
            </p>
            <p className="text-ink leading-relaxed">{FASTFORWARD_METAPHOR}</p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {REFRAME_POINTS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white/70 border border-brand-100 p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl shrink-0" aria-hidden>
                    {p.icon}
                  </span>
                  <div>
                    <p className="font-black text-brand-900">{p.title}</p>
                    <p className="text-sm text-ink-soft mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 反厭童／辱罵 */}
          <h3 className="mt-10 text-xl font-black text-brand-900">
            當「厭童」變成對孩子嘅辱罵
          </h3>
          <div className="mt-4 grid sm:grid-cols-3 gap-4">
            {ANTI_HOSTILITY.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl bg-white border border-brand-100 p-5"
              >
                <span className="text-3xl" aria-hidden>
                  {a.icon}
                </span>
                <p className="font-black text-brand-900 mt-2">{a.title}</p>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 面對途人壓力 */}
      <section className="container-page py-12 max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-black text-brand-900">
          串聯篇：面對途人嘅說教同投訴
        </h2>
        <p className="mt-4 text-ink-soft leading-relaxed">{BYSTANDER_INTRO}</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {BYSTANDER_TACTICS.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl bg-white border border-brand-100 p-5 card-hover"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl shrink-0" aria-hidden>
                  {t.icon}
                </span>
                <div>
                  <p className="font-black text-brand-900">{t.title}</p>
                  <p className="text-sm text-ink-soft mt-1 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 隨身小抄 */}
        <div className="mt-8 rounded-2xl bg-brand-600 text-white p-6 sm:p-7">
          <p className="font-black text-lg mb-3">🗂️ 隨身應對小抄</p>
          <ul className="space-y-2">
            {BYSTANDER_SCRIPTS.map((s, i) => (
              <li key={i} className="flex gap-2 leading-relaxed">
                <span aria-hidden className="shrink-0">▸</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 來源 */}
      <section className="container-page pb-14 max-w-4xl">
        <details className="rounded-2xl bg-brand-50 border border-brand-100 p-5">
          <summary className="font-bold text-brand-900 cursor-pointer">
            內容依據（實證框架來源）
          </summary>
          <ul className="mt-3 space-y-1.5 text-sm">
            {SCENARIO_SOURCES.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-ink-soft leading-relaxed">
            本題庫整合自閉症／SEN 教養嘅實證框架（崩潰vs扭計、共同調節、低喚醒法、感官調節、
            情緒教練五步、協康會在地策略），並非個別個案指引。情緒應對因孩子而異，請以專業評估為準。
          </p>
        </details>
      </section>
    </>
  );
}
