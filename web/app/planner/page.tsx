import type { Metadata } from "next";
import PlannerBoard from "@/components/PlannerBoard";

export const metadata: Metadata = {
  title: "我的規劃清單",
  description: "把合適的服務、流程步驟與資源加入規劃清單，逐項跟進孩子的支援進度。",
};

export default function PlannerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">紀錄 · 跟進</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900">我的規劃清單</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            把服務、流程步驟與資源集中在一處，逐項打勾跟進。可加入自訂待辦，也可列印帶去諮詢。
          </p>
        </div>
      </section>

      <section className="container-page py-10 max-w-2xl">
        <PlannerBoard />
      </section>
    </>
  );
}
