import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Motion from "@/components/Motion";
import Buddy from "@/components/Buddy";
import CursorPet from "@/components/CursorPet";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SEN 小孩導航員 — 香港特殊教育需要學前資源導航",
    template: "%s｜SEN 小孩導航員",
  },
  description:
    "為香港 SEN（特殊教育需要）兒童家長而設的學前資源導航平台。一站整合政府學前康復服務、評估與轉介流程，以及自費訓練課程，助家長規劃孩子的支援之路。",
  keywords: [
    "SEN",
    "特殊教育需要",
    "香港",
    "學前康復服務",
    "到校學前康復服務",
    "特殊幼兒中心",
    "早期教育及訓練中心",
    "兒童體能智力測驗",
    "言語治療",
    "自閉症",
    "發展遲緩",
  ],
  openGraph: {
    title: "SEN 小孩導航員",
    description: "香港 SEN 兒童學前資源一站式導航：政府服務、評估流程、自費課程。",
    type: "website",
    locale: "zh_HK",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-HK">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* 兒童化圓體：Nunito（拉丁/數字）+ justfont 粉圓 Huninn（中文、open 粉圓 2.1 可商用）+ Noto Sans TC 後備 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&family=Huninn&family=Noto+Sans+TC:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-dvh flex flex-col">
        <Motion />
        <Buddy />
        <CursorPet />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-brand-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          跳至主要內容
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
