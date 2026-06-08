import type { Metadata } from "next";
import Link from "next/link";
import ScccWaiting from "@/components/ScccWaiting";

export const metadata: Metadata = {
  title: "特殊幼兒中心輪候（按分區）",
  description:
    "按香港 18 區整理特殊幼兒中心 (SCCC) 的輪候情況，逐間列出「最後獲篩選個案的申請日期」，採用社署最新實名數據，非平均輪候時間。",
};

export default function ScccPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-600 to-brand-700 text-white">
        <div className="container-page py-14">
          <p className="text-brand-100 font-bold text-sm mb-2">特殊幼兒中心 (SCCC) · 逐間實名數據</p>
          <h1 className="text-3xl sm:text-4xl font-black">按分區看特殊幼兒中心輪候</h1>
          <p className="mt-4 max-w-2xl text-brand-50">
            用社署最新「最後獲篩選個案的申請日期」，逐間中心、按香港分區呈現實際輪候情況，
            幫你比較心儀地區邊間排得快。
          </p>
          <Link
            href="/services#sccc"
            className="mt-5 inline-block text-white/90 font-bold text-sm hover:underline"
          >
            ← 了解特殊幼兒中心是什麼
          </Link>
        </div>
      </section>

      <section className="container-page py-10">
        <ScccWaiting />
      </section>
    </>
  );
}
