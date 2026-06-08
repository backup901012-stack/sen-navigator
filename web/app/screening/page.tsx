import type { Metadata } from "next";
import MchatScreener from "@/components/MchatScreener";
import { MCHAT_INTRO } from "@/data/mchat";

export const metadata: Metadata = {
  title: "自閉症早期篩查（M-CHAT-R）",
  description:
    "適用於 16 至 30 個月幼兒的自閉症譜系障礙篩查（M-CHAT-R/F 繁體版）。20 條問題，即時計分與下一步建議。篩查不等於診斷。",
};

export default function ScreeningPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-warm-50">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">察覺 · 早期篩查</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">
            幼兒自閉症早期篩查（M-CHAT-R）
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">{MCHAT_INTRO}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">適用 16–30 個月</span>
            <span className="px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">20 條問題 · 約 5 分鐘</span>
            <span className="px-3 py-1 rounded-full bg-white border border-brand-200 text-brand-700 font-bold">即時結果</span>
          </div>
        </div>
      </section>

      <section className="container-page py-8 max-w-3xl">
        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5 text-sm text-ink mb-6">
          <p className="font-bold text-amber-800 mb-1">作答前必讀</p>
          <p>
            請就子女「<strong>通常</strong>」的表現作答。如果只見過子女偶爾有某行為、但並不經常這樣做，請答「否」。
            本工具為<strong>篩查</strong>、不能作診斷；結果僅供參考，任何疑慮請諮詢專業人員。
          </p>
        </div>
        <MchatScreener />
      </section>
    </>
  );
}
