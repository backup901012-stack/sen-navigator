import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "兩條路徑流程圖：津貼 vs 自費",
  description:
    "以事件流程圖分項說明香港 SEN 兒童的津貼（政府資助）評估與治療路徑、自費評估與治療路徑，比較服務時間與急切性，並說明兩者可並行。",
};

interface Step {
  t: string;
  d?: string;
  time?: string;
  badge?: string;
}

const GOV: Step[] = [
  { t: "① 察覺發展疑慮", d: "留意里程碑、提示信號。" },
  { t: "② 取得轉介信", d: "由註冊西醫／母嬰健康院／心理學家發出，須六個月內正本（不接受傳真）。" },
  { t: "③ 衞生署 CAS 發展評估", d: "致電或親臨所屬地區中心預約。醫療報告每份 $960。", time: "需輪候；報告約 6–8 週", badge: "輪候" },
  { t: "④ 取得評估書面報告", d: "判定發展障礙類別與程度——申請服務的關鍵。" },
  { t: "⑤ 社工交「Form 2」轉介", d: "經社署「康復服務中央轉介系統」統一輪候；2 歲以下可預早登記。" },
  {
    t: "⑥ 輪候資助學前服務",
    d: "OPRS 到校 ≈ 4 個月｜EETC 早訓 ≈ 5 個月｜IP 兼收 ≈ 6 個月｜SCCC 特殊幼兒中心較長（按各中心「最後獲篩選個案申請日期」）。",
    time: "數月至逾一年",
    badge: "輪候",
  },
  { t: "⑦ 獲配服務", d: "OPRS 免費／SCCC 學費全免／IP 無額外費用／EETC 每年約 $148。", badge: "免費・低收費" },
];

const SELF: Step[] = [
  { t: "① 察覺發展疑慮", d: "留意里程碑、提示信號。" },
  { t: "② 直接預約私營評估", d: "私營臨床／教育心理學家，毋須輪候政府名額。", time: "通常數週內", badge: "較快" },
  { t: "③ 取得評估書面報告", d: "收費因機構而異（例：詳細書面報告約 $2,800 起）。" },
  {
    t: "④ 安排自費治療",
    d: "言語治療（首評 $780–4,000、其後 $590–3,500）、職業／物理治療、ABA、社交小組、密集訓練（如協康會 $4,600–9,900／月）。",
    time: "可即時開始",
    badge: "較快",
  },
  { t: "⑤ 持續訓練 + 定期檢討", d: "把握 0–6 歲早期介入黃金期，與專業保持溝通。", badge: "持續開支" },
];

function Flow({ steps, accent }: { steps: Step[]; accent: "brand" | "warm" }) {
  const dot = accent === "brand" ? "bg-brand-600" : "bg-warm-500";
  const line = accent === "brand" ? "bg-brand-200" : "bg-warm-200";
  return (
    <ol className="relative">
      {steps.map((s, i) => (
        <li key={i} className="relative pl-10 pb-5 last:pb-0">
          {i < steps.length - 1 && (
            <span className={`absolute left-[14px] top-7 bottom-0 w-0.5 ${line}`} />
          )}
          <span className={`absolute left-0 top-1 grid place-items-center w-7 h-7 rounded-full ${dot} text-white text-xs font-black`}>
            {i + 1}
          </span>
          <div className="rounded-2xl bg-white border border-brand-100 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-black text-brand-900">{s.t}</h3>
              {s.badge && (
                <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold ${accent === "brand" ? "bg-brand-50 text-brand-700" : "bg-warm-100 text-warm-700"}`}>
                  {s.badge}
                </span>
              )}
            </div>
            {s.d && <p className="mt-1 text-sm text-ink-soft">{s.d}</p>}
            {s.time && <p className="mt-1 text-xs font-bold text-ink">⏱ 服務時間：{s.time}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function PathwaysPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">流程圖 · 比較</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900"><span aria-hidden="true">🔀 </span>
            兩條路徑：津貼 vs 自費
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            以事件流程圖分項說明<strong className="text-brand-700">政府資助</strong>與
            <strong className="text-warm-600">自費</strong>兩條路徑的評估與治療流程、服務時間與急切性。
            兩條路<strong>可以並行</strong>——邊輪候、邊自費先開始，避免空等。
          </p>
        </div>
      </section>

      {/* 急切性比較 */}
      <section className="container-page py-10">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-brand-50 border border-brand-200 p-5">
            <p className="font-black text-brand-800">政府資助路徑</p>
            <p className="mt-1 text-sm text-ink">💰 平／免費　·　⏳ 較慢（評估＋服務雙重輪候，可長逾一年）</p>
            <p className="mt-1 text-xs text-ink-soft">急切性：宜及早登記，輪候期善用過渡支援。</p>
          </div>
          <div className="rounded-2xl bg-warm-50 border border-warm-200 p-5">
            <p className="font-black text-warm-700">自費路徑</p>
            <p className="mt-1 text-sm text-ink">⚡ 快（數週可開始）　·　💵 較貴（持續開支）</p>
            <p className="mt-1 text-xs text-ink-soft">急切性：把握 0–6 歲黃金期，盡早介入。</p>
          </div>
        </div>
      </section>

      {/* 兩個流程圖 */}
      <section className="container-page pb-12 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-black text-brand-900 mb-4 flex items-center gap-2">
            <span className="w-2 h-6 rounded bg-brand-600 inline-block" />津貼（政府資助）評估與治療
          </h2>
          <Flow steps={GOV} accent="brand" />
          <div className="mt-4 rounded-xl bg-brand-900 text-white p-4 text-sm">
            🔑 輪候期支援：學習訓練津貼（TSP）、家長／親屬資源中心課程、NGO 家長資源中心，
            （有需要可同時自費補充）。
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-black text-warm-700 mb-4 flex items-center gap-2">
            <span className="w-2 h-6 rounded bg-warm-500 inline-block" />自費評估與治療
          </h2>
          <Flow steps={SELF} accent="warm" />
          <div className="mt-4 rounded-xl bg-warm-600 text-white p-4 text-sm">
            🔑 注意：私營收費沒有統一標準，宜核實治療師資歷；中醫等屬輔助、非替代主流治療。
          </div>
        </div>
      </section>

      {/* 並行 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-warm-500 text-white p-6 sm:p-8 text-center">
          <h2 className="text-2xl font-black">最務實做法：兩條路並行</h2>
          <p className="mt-2 max-w-2xl mx-auto">
            一邊交 Form 2 輪候政府資助服務（及早登記），一邊自費先開始評估與訓練，
            把握早期介入，唔好淨係空等。
          </p>
          <div className="mt-5 flex flex-wrap gap-3 justify-center">
            <Link href="/journey" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold text-sm">完整申請流程 →</Link>
            <Link href="/cas" className="px-5 py-2.5 rounded-full bg-white/20 text-white font-bold text-sm">CAS 評估 →</Link>
            <Link href="/directory" className="px-5 py-2.5 rounded-full bg-white/20 text-white font-bold text-sm">自費資源目錄 →</Link>
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <p className="text-xs text-ink-soft bg-amber-50 border border-amber-200 rounded-xl p-4">
          ⚠️ 流程為一般說明；收費與輪候時間會變動（輪候數字多為查證時點快照），實際以衞生署、社署及各機構公佈為準。
          本頁不構成醫療建議。
        </p>
      </section>
    </>
  );
}
