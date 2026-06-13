import Link from "next/link";
import { SITE } from "@/lib/site";
import pkg from "../package.json";
import Mascot from "@/components/Mascot";

export default function SiteFooter() {
  return (
    <footer className="bg-brand-900 text-brand-100 no-print">
      {/* 吉祥物家族企喺波浪上（每頁可見、純裝飾） */}
      <div aria-hidden className="relative h-0 container-page hidden sm:block">
        <div className="absolute left-4 -top-[4.5rem] flex items-end gap-0">
          <Mascot size={64} variant="pink" />
          <Mascot size={78} variant="mint" />
          <Mascot size={60} variant="lilac" />
        </div>
      </div>
      <div className="container-page py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="grid place-items-center w-9 h-9 rounded-xl bg-white text-brand-800 text-lg font-black">
              導
            </span>
            <span className="font-black text-lg text-white">{SITE.name}</span>
          </div>
          <p className="text-sm text-brand-200 max-w-md leading-relaxed">
            為香港 SEN 兒童家長而設的學前資源導航平台。我們整合並指引你前往官方與社區資源，
            陪你走好孩子的每一步。
          </p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3 text-sm">快速連結</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-white">政府學前服務</Link></li>
            <li><Link href="/sccc" className="hover:text-white">特殊幼兒中心輪候（分區）</Link></li>
            <li><Link href="/milestones" className="hover:text-white">語言發展里程碑</Link></li>
            <li><Link href="/grading" className="hover:text-white">評估與分級</Link></li>
            <li><Link href="/sensory" className="hover:text-white">感覺統合科普</Link></li>
            <li><Link href="/brain" className="hover:text-white">童年經歷與腦部成長</Link></li>
            <li><Link href="/odd" className="hover:text-white">對立反抗症 ODD</Link></li>
            <li><Link href="/ot-confidence" className="hover:text-white">職業治療建立自信</Link></li>
            <li><Link href="/tcm" className="hover:text-white">中醫輔助支援</Link></li>
            <li><Link href="/journey" className="hover:text-white">申請流程</Link></li>
            <li><Link href="/pathways" className="hover:text-white">津貼 vs 自費流程圖</Link></li>
            <li><Link href="/directory" className="hover:text-white">資源目錄</Link></li>
            <li><Link href="/resources" className="hover:text-white">權威資源連結</Link></li>
            <li><Link href="/understanding" className="hover:text-white">認識・同理・靜觀</Link></li>
            <li><Link href="/special-schools" className="hover:text-white">特殊學校與升學（6 歲以上）</Link></li>
            <li><Link href="/training-methods" className="hover:text-white">常見訓練方法</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-3 text-sm">支援工具</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/parents" className="hover:text-white">家長特區</Link></li>
            <li><Link href="/screening" className="hover:text-white">自閉症早期篩查 (M-CHAT-R)</Link></li>
            <li><Link href="/match" className="hover:text-white">服務配對</Link></li>
            <li><Link href="/faq" className="hover:text-white">常見問題 / AI 助理</Link></li>
            <li><Link href="/consult" className="hover:text-white">預約諮詢</Link></li>
            <li><Link href="/planner" className="hover:text-white">我的規劃清單</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="container-page py-5 text-xs text-brand-300 flex flex-col sm:flex-row justify-between gap-2">
          <p>
            ⚠️ 本平台為獨立資訊整合工具，非政府或任何機構的官方網站。所有資料僅供參考，
            申請與最新詳情請以官方公佈為準。
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {SITE.name} · v{pkg.version}
          </p>
        </div>
      </div>
    </footer>
  );
}
