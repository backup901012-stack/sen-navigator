import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="text-6xl">🧭</p>
      <h1 className="mt-4 text-3xl font-black text-brand-900">搵唔到呢一頁</h1>
      <p className="mt-3 text-ink-soft">
        頁面可能已移動或不存在。返回首頁，或由以下入口繼續。
      </p>
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        <Link href="/" className="px-6 py-3 rounded-full bg-brand-600 text-white font-bold">
          返回首頁
        </Link>
        <Link href="/match" className="px-6 py-3 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200">
          🎯 服務配對
        </Link>
        <Link href="/directory" className="px-6 py-3 rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200">
          資源目錄
        </Link>
      </div>
    </div>
  );
}
