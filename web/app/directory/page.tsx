import type { Metadata } from "next";
import DirectoryExplorer from "@/components/DirectoryExplorer";

export const metadata: Metadata = {
  title: "資源目錄",
  description:
    "可搜尋、可篩選的香港 SEN 學前資源目錄，整合政府資助服務、評估、NGO 與自費訓練課程。",
};

export default function DirectoryPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-50 to-white">
        <div className="container-page py-14">
          <p className="text-brand-600 font-bold text-sm mb-2">資源規劃</p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900"><span aria-hidden="true">🗂️ </span>資源目錄</h1>
          <p className="mt-4 max-w-2xl text-ink-soft">
            一個地方睇齊政府資助服務、評估、NGO 與自費課程。用搜尋與篩選快速找到適合孩子的資源，
            喜歡的可加入「我的規劃清單」。
          </p>
        </div>
      </section>

      <section className="container-page py-10">
        <DirectoryExplorer />
      </section>
    </>
  );
}
