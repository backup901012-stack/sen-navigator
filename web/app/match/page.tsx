import type { Metadata } from "next";
import MatchTool from "@/components/MatchTool";

export const metadata: Metadata = {
  title: "服務配對",
  description:
    "回答幾條簡單問題，為孩子的年齡與需要整理出合適的香港 SEN 學前服務方向（參考用，非診斷）。",
};

export default function MatchPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-warm-50 to-brand-50">
        <div className="container-page py-14">
          <p className="text-warm-600 font-bold text-sm mb-2">服務配對</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">為孩子找方向</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            花約 2 分鐘回答 5 條問題，我哋幫你整理出適合的服務方向與輪候期支援。
            結果僅供參考，正式服務以專業評估及社署編配為準。
          </p>
        </div>
      </section>

      <section className="container-page py-10 max-w-2xl">
        <div className="rounded-2xl bg-white border border-brand-100 p-6 sm:p-8">
          <MatchTool />
        </div>
      </section>
    </>
  );
}
