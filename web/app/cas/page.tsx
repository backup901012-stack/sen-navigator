import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "兒童體能智力測驗服務（CAS）與各區中心（CAC）",
  description:
    "衞生署兒童體能智力測驗服務（Child Assessment Service, CAS）一站整理：服務對象、涵蓋的發展障礙類別、轉介與轉介信要求、預約步驟，以及全港兒童體能智力測驗中心（Child Assessment Centre, CAC）——7 間由衞生署管理、1 間由醫院管理局營辦（大口環根德公爵夫人兒童醫院）。",
};

const CONDITIONS = [
  "自閉症譜系障礙", "專注力不足／過度活躍症", "智力障礙", "語言障礙",
  "讀寫障礙", "動作協調障礙", "腦麻痺", "腦創傷",
  "弱聽", "視障", "焦慮症", "整體發展遲緩",
];

// 衞生署轄下兒童體能智力測驗中心（CAC）：7 間
const DH_CENTRES = [
  { name: "中九龍兒童體能智力測驗中心", addr: "九龍城亞皆老街 147L 號 2 字樓", tel: "2246 6633" },
  { name: "尤德夫人兒童體能智力測驗中心（觀塘）", addr: "觀塘茶果嶺道 79 號 3 字樓", tel: "2727 8474" },
  { name: "牛頭角兒童體能智力測驗中心", addr: "牛頭角定安街 60 號牛頭角賽馬會診所 1 字樓", tel: "2921 1028" },
  { name: "下葵涌兒童體能智力測驗中心", addr: "葵涌麗祖路 77 號下葵涌分科診所及特殊教育服務中心 2 字樓", tel: "2370 1887" },
  { name: "尤德夫人兒童體能智力測驗中心（沙田）", addr: "沙田插桅杆街 31–33 號 2 字樓", tel: "2210 1600" },
  { name: "粉嶺兒童體能智力測驗中心", addr: "粉嶺璧峰路 2 號粉嶺健康中心 4 字樓", tel: "2639 1402" },
  { name: "屯門兒童體能智力測驗中心", addr: "屯門青松觀路屯門醫院特別座地下", tel: "2468 5261" },
];

// 醫院管理局營辦的兒童體能智力測驗中心（CAC）：1 間
const HA_CENTRES = [
  {
    name: "大口環根德公爵夫人兒童醫院 — 兒童體能智力測驗中心",
    addr: "香港薄扶林大口環道 12 號（致電確認所屬座數）",
    tel: "2974 0331",
    note: "電郵 dkhcac@ha.org.hk · 由醫院管理局（港島西聯網）營辦",
  },
];

const STEPS = [
  { n: 1, t: "取得轉介", d: "由註冊西醫、母嬰健康院、臨床或教育心理學家轉介；通常先由註冊西醫作初步評估。" },
  { n: 2, t: "備妥轉介信", d: "須為發出日期起六個月內的正本（恕不接受傳真轉介）。" },
  { n: 3, t: "預約初步評估", d: "致電或親臨所屬地區的測驗中心，預約護士初步評估。" },
  { n: 4, t: "專業評估", d: "由跨專業團隊評估，判定發展障礙類別與程度；複雜個案安排多專業團隊評估並監測進展。" },
  { n: 5, t: "建議與跟進", d: "提供教育及康復建議，並設家長訓練課程與工作坊。" },
];

export default function CasPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container-page py-14">
          <p className="text-brand-100 font-bold text-sm mb-2">評估與診斷</p>
          <h1 className="text-3xl sm:text-4xl font-black"><span aria-hidden="true">🔬 </span>兒童體能智力測驗服務（CAS）與各區中心（CAC）</h1>
          <p className="mt-4 max-w-2xl text-brand-50">
            「兒童體能智力測驗服務」（Child Assessment Service，CAS）是政府為 12 歲以下兒童提供的發展評估，
            判定發展障礙的類別與程度；服務透過各區「兒童體能智力測驗中心」（Child Assessment Centre，CAC）提供。
            評估書面報告是日後申請學前康復服務的關鍵依據。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href="https://www.dhcas.gov.hk/tc/referral.html" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold text-sm">官方轉介頁 →</a>
            <a href="https://eform.cefs.gov.hk/form/dh0118/tc/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full bg-white/15 text-white font-bold text-sm">醫療報告網上申請 →</a>
          </div>
        </div>
      </section>

      {/* 涵蓋類別 */}
      <section className="container-page py-12">
        <h2 className="text-2xl font-black text-brand-900">CAS 涵蓋的發展障礙／問題類別</h2>
        <p className="mt-2 text-ink-soft">服務覆蓋 12 歲以下兒童的多種發展障礙與行為問題，包括：</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {CONDITIONS.map((c) => (
            <span key={c} className="px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100 text-sm font-medium">{c}</span>
          ))}
        </div>
      </section>

      {/* 轉介流程 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-6">轉介與評估流程</h2>
        <ol className="space-y-3">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4 rounded-2xl bg-white border border-brand-100 p-5">
              <span className="grid place-items-center w-9 h-9 rounded-full bg-brand-600 text-white font-black shrink-0">{s.n}</span>
              <div>
                <h3 className="font-black text-brand-900">{s.t}</h3>
                <p className="mt-1 text-sm text-ink">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 p-4 text-sm text-ink-soft">
          💡 如需醫療報告作申請用途，每份申請收費 <strong>HK$960</strong>，約需 <strong>6 至 8 星期</strong>處理（撤回申請不退款）。
        </div>
      </section>

      {/* CAS vs CAC 說明 */}
      <section className="container-page pb-4">
        <div className="rounded-2xl bg-brand-50 border border-brand-100 p-5 text-sm text-ink leading-relaxed">
          <p className="font-black text-brand-800 mb-1">「服務」與「中心」點分？</p>
          <p>
            <strong>兒童體能智力測驗服務</strong>（Child Assessment <strong>Service</strong>，CAS）是整體服務名稱；
            實際評估在各區<strong>兒童體能智力測驗中心</strong>（Child Assessment <strong>Centre</strong>，CAC）進行。
            全港共 <strong>8 間</strong> CAC：<strong>7 間由衞生署</strong>管理，
            <strong>1 間由醫院管理局</strong>營辦（大口環根德公爵夫人兒童醫院）。
          </p>
        </div>
      </section>

      {/* 各區中心 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-2">各區兒童體能智力測驗中心（CAC）</h2>
        <p className="text-ink-soft mb-5 text-sm">致電或親臨所屬地區中心預約。完整名單與最新安排以官方為準。</p>

        <h3 className="flex items-center gap-2 text-lg font-black text-brand-800 mb-3">
          <span className="px-2 py-0.5 rounded-md bg-brand-100 text-brand-700 text-xs font-bold">衞生署 · 7 間</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {DH_CENTRES.map((c) => (
            <div key={c.name} className="rounded-2xl bg-white border border-brand-100 p-5">
              <h4 className="font-black text-brand-900">{c.name}</h4>
              <p className="mt-1 text-sm text-ink-soft">📍 {c.addr}</p>
              <a href={`tel:${c.tel.replace(/\s/g, "")}`} className="mt-1 inline-block text-brand-700 font-black">📞 {c.tel}</a>
            </div>
          ))}
        </div>

        <h3 className="flex items-center gap-2 text-lg font-black text-brand-800 mb-3 mt-8">
          <span className="px-2 py-0.5 rounded-md bg-warm-100 text-warm-700 text-xs font-bold">醫院管理局 · 1 間</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {HA_CENTRES.map((c) => (
            <div key={c.name} className="rounded-2xl bg-white border border-warm-200 p-5">
              <h4 className="font-black text-brand-900">{c.name}</h4>
              <p className="mt-1 text-sm text-ink-soft">📍 {c.addr}</p>
              <a href={`tel:${c.tel.replace(/\s/g, "")}`} className="mt-1 inline-block text-brand-700 font-black">📞 {c.tel}</a>
              {c.note && <p className="mt-1 text-xs text-ink-soft">{c.note}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* 下一步 + 來源 */}
      <section className="container-page pb-16">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-xl font-black">評估之後？</h2>
          <p className="mt-2 text-brand-200 text-sm">
            取得評估書面報告後，由社工以「Form 2」轉介至社署中央轉介系統，輪候學前康復服務。
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/grading" className="px-5 py-2.5 rounded-full bg-white text-brand-800 font-bold text-sm">評估與分級（Form 2）→</Link>
            <Link href="/journey" className="px-5 py-2.5 rounded-full bg-warm-500 text-white font-bold text-sm">完整申請流程 →</Link>
          </div>
        </div>
        <div className="mt-6">
          <SourceList
            sources={[
              { label: "衞生署 CAS — 轉介及評估", url: "https://www.dhcas.gov.hk/tc/referral.html", checkedAt: "2026-06" },
              { label: "衞生署 CAS — 服務範圍", url: "https://www.dhcas.gov.hk/tc/scope.html", checkedAt: "2026-06" },
              { label: "衞生署 CAS — 中心資料", url: "https://www.dhcas.gov.hk/tc/center_info.html", checkedAt: "2026-06" },
              { label: "醫管局 — 大口環根德公爵夫人兒童醫院", url: "https://www.ha.org.hk/visitor/ha_visitor_index.asp?Lang=CHIB5&Content_ID=282515", checkedAt: "2026-06-13" },
              { label: "醫療報告網上申請", url: "https://eform.cefs.gov.hk/form/dh0118/tc/", checkedAt: "2026-06" },
            ]}
          />
        </div>
        <p className="mt-3 text-xs text-ink-soft">⚠️ 資料整理自衞生署 CAS 官網及醫院管理局（查證 2026-06；大口環中心 2026-06-13），詳情與最新安排以官方為準。</p>
      </section>
    </>
  );
}
