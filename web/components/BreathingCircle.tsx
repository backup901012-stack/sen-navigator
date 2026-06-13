"use client";

import { useState } from "react";

/**
 * 靜觀呼吸圈（4-6 延長呼氣、舒緩副交感）：
 * 唔批判咁覺察當下——理解別人之前，先安頓自己。
 * 純 CSS 動畫，reduced-motion / 低感官模式自動轉靜態文字引導。
 */
export default function BreathingCircle() {
  const [on, setOn] = useState(false);

  return (
    <div className="rounded-2xl bg-brand-50 border border-brand-100 p-6 sm:p-8 text-center">
      <p className="font-black text-brand-900 text-lg">開始之前，一齊深呼吸</p>
      <p className="mt-1 text-sm text-ink-soft">
        靜觀，就是不加批判地覺察當下。理解別人之前，先安頓好自己的情緒。
      </p>

      <div className="mt-6 grid place-items-center h-52" aria-hidden>
        <div className="relative grid place-items-center">
          <span className={`breathe-ring ${on ? "breathe-on" : ""}`} />
          <span className="absolute text-white font-black text-sm drop-shadow">
            {on ? "放鬆…" : "準備好了嗎？"}
          </span>
        </div>
      </div>

      <button
        onClick={() => setOn((v) => !v)}
        aria-pressed={on}
        className="px-6 py-3 min-h-11 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm"
      >
        {on ? "完成 · 停止" : "跟我一起呼吸"}
      </button>

      <p className="mt-4 text-xs text-ink-soft">
        圈脹大時用鼻吸氣（約 4 秒）· 圈縮小時慢慢呼氣（約 6 秒）。重複幾次，感受身體放鬆。
      </p>
    </div>
  );
}
