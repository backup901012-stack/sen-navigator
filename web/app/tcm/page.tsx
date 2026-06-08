import type { Metadata } from "next";
import Link from "next/link";
import { SourceList } from "@/components/ui";

export const metadata: Metadata = {
  title: "中醫輔助支援（基礎認識）",
  description:
    "認識中醫對兒童青少年（先天／後天腦損傷、腦麻痺、自閉症、唐氏綜合症、罕有病等）的輔助角色：常見療法、誠實的療效說明與安全注意，以及醫道惠民中醫義診資源。",
};

const MODALITIES = [
  { icon: "📍", t: "針灸", d: "以針刺穴位，部分用於腦損傷、腦麻痺等的輔助。" },
  { icon: "👐", t: "推拿 / 骨傷", d: "手法治療，針對肌張力、姿勢、活動能力等。" },
  { icon: "🌿", t: "中藥（濃縮顆粒）", d: "由註冊中醫按體質辨證處方。" },
  { icon: "🩺", t: "內科調理", d: "整體體質調理，須由註冊中醫評估。" },
];

export default function TcmPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">基礎認識 · 輔助支援</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            中醫輔助支援
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            除了主流的評估、治療與康復服務，部分家長亦會為孩子（如先天／後天腦損傷、腦麻痺、
            自閉症、唐氏綜合症、罕有病等）<strong className="text-brand-700">考慮中醫作為輔助</strong>。
            本頁助你客觀了解中醫的角色與注意事項。
          </p>
        </div>
      </section>

      {/* 誠實定位 */}
      <section className="container-page py-12">
        <div className="rounded-2xl bg-amber-50 border-2 border-amber-200 p-6">
          <h2 className="text-xl font-black text-amber-800">先講清楚：中醫是「輔助」，不是「替代」</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink">
            <li className="flex gap-2"><span className="text-warm-500">·</span>中醫對發展障礙的療效，現有科研證據仍然有限、未有定論。</li>
            <li className="flex gap-2"><span className="text-warm-500">·</span>應視為主流評估、早期介入及康復訓練<strong>以外的輔助選項</strong>，切勿取代。</li>
            <li className="flex gap-2"><span className="text-warm-500">·</span>開始前先諮詢孩子的主診醫生，並選擇<strong>香港註冊中醫</strong>。</li>
            <li className="flex gap-2"><span className="text-warm-500">·</span>留意孩子反應，與醫療團隊保持溝通；本頁不構成醫療建議。</li>
          </ul>
        </div>
      </section>

      {/* 常見療法 */}
      <section className="container-page pb-12">
        <h2 className="text-2xl font-black text-brand-900 mb-6">常見的中醫療法（家長常聽到）</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MODALITIES.map((m) => (
            <div key={m.t} className="rounded-2xl bg-white border border-brand-100 p-5">
              <div className="text-3xl">{m.icon}</div>
              <h3 className="mt-2 font-black text-brand-900">{m.t}</h3>
              <p className="mt-1 text-sm text-ink-soft">{m.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-soft">
          以上為一般介紹；是否適合、如何進行，須由註冊中醫按個別情況評估。
        </p>
      </section>

      {/* 義診資源 */}
      <section className="container-page pb-12">
        <div className="rounded-2xl bg-brand-900 text-white p-6 sm:p-8">
          <h2 className="text-2xl font-black">中醫義診資源：醫道惠民 Community Med Care</h2>
          <p className="mt-3 text-brand-100 leading-relaxed">
            稅例第 88 條非牟利慈善病人組織，為 <strong className="text-white">0–30 歲</strong>有先天及後天腦損傷、
            自閉症、唐氏綜合症、罕有病的兒童青少年，提供<strong className="text-white">以中醫骨傷科為主的中醫義診</strong>
            （針灸／骨傷／推拿／內科，另備中藥濃縮顆粒），並為香港中文大學中醫學院臨床訓練基地。
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-bold">元州街總館</p>
              <p className="text-brand-100">深水埗元州街 75 號地下</p>
              <a href="tel:24788808" className="text-white font-black">📞 2478 8808</a>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="font-bold">福華街分館</p>
              <p className="text-brand-100">深水埗福華街 189 號地下</p>
              <a href="tel:24788868" className="text-white font-black">📞 2478 8868</a>
            </div>
          </div>
          <a href="https://communitymedcare.org/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-white font-bold hover:underline">
            醫道惠民官方網站 →
          </a>
        </div>
      </section>

      {/* 下一步 */}
      <section className="container-page pb-12">
        <div className="flex flex-wrap gap-3">
          <Link href="/directory" className="px-5 py-2.5 rounded-full bg-brand-600 text-white font-bold text-sm">資源目錄 →</Link>
          <Link href="/match" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">服務配對 →</Link>
          <Link href="/journey" className="px-5 py-2.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm border border-brand-200">主流評估流程 →</Link>
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink-soft">
          ⚠️ 本頁為資訊整理，<strong>不構成醫療建議、不能作診斷或治療指引</strong>。中醫屬輔助、非替代主流醫療；
          開始任何治療前請諮詢專業人員並選擇香港註冊中醫。
          <div className="mt-3">
            <SourceList
              sources={[
                { label: "醫道惠民 Community Med Care — 關於我們", url: "https://communitymedcare.org/about/", checkedAt: "2026-06" },
                { label: "香港中醫藥管理委員會 — 註冊中醫查詢", url: "https://www.cmchk.org.hk/", checkedAt: "2026-06" },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
