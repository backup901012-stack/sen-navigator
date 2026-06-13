"use client";

import { useEffect, useState } from "react";

/**
 * 低感官模式（Codex+Gemini 雙評審共識 #1 建議）：
 * SEN 兒童常有感官過載，一鍵關閉裝飾動效（天空漂移/星塵鼠標/呼吸暈染/
 * 進場動畫/吉祥物動作），內容與功能全保留。偏好記喺 localStorage。
 */
const KEY = "sen-calm";

export default function CalmToggle() {
  const [calm, setCalm] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(KEY) === "1";
    setCalm(saved);
    document.documentElement.classList.toggle("calm", saved);
  }, []);

  const toggle = () => {
    const next = !calm;
    setCalm(next);
    localStorage.setItem(KEY, next ? "1" : "0");
    document.documentElement.classList.toggle("calm", next);
  };

  return (
    <button
      onClick={toggle}
      aria-pressed={calm}
      title="低感官模式：關閉裝飾動畫、減少視覺刺激"
      className={`inline-flex items-center gap-1.5 px-3 py-2 min-h-11 rounded-full text-sm font-bold border-2 whitespace-nowrap shrink-0 transition-colors ${
        calm
          ? "bg-brand-700 border-brand-700 text-white"
          : "bg-white border-brand-200 text-brand-700 hover:border-brand-400"
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
      </svg>
      {mounted && calm ? "安靜中" : "低感官"}
    </button>
  );
}
