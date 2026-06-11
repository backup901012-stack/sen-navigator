"use client";

import { useEffect } from "react";

/**
 * 全站動畫引擎（fail-safe 設計：任何失敗模式都退化成「內容直接可見」）
 * - 預設：所有內容可見（CSS 無全域隱藏規則）
 * - 首屏元素：mount 後即時加 .iv → 階梯彈入
 * - 視口外元素：先加 .pre（隱藏）→ IntersectionObserver 入場換 .iv（彈入）
 * - 兜底：3 秒後仍是 .pre 的元素一律轉 .iv（IO 失靈都唔會匿埋內容）
 * - prefers-reduced-motion：完全不啟動
 * 對應 CSS 在 globals.css「動畫層」。
 */
const TARGETS = [
  '[class~="bg-white"][class~="rounded-2xl"]',
  '[class~="bg-white"][class~="rounded-xl"]',
  '[class~="bg-brand-50"][class~="rounded-2xl"]',
  '[class~="bg-amber-50"][class~="rounded-2xl"]',
  '[class~="bg-warm-50"][class~="rounded-2xl"]',
  '[class~="bg-brand-900"][class~="rounded-2xl"]',
  '[class~="bg-brand-900"][class~="rounded-3xl"]',
  "main h2",
].join(",");

export default function Motion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("motion");

    const reveal = (el: HTMLElement, delayMs: number) => {
      el.style.animationDelay = `${delayMs}ms`;
      el.classList.remove("pre");
      el.classList.add("iv");
    };

    const io = new IntersectionObserver(
      (entries) => {
        let batch = 0;
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          reveal(e.target as HTMLElement, Math.min(batch * 70, 420));
          io.unobserve(e.target);
          batch++;
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -4% 0px" }
    );

    const seen = new WeakSet<Element>();
    const observeAll = () => {
      const vh = window.innerHeight || 800;
      let batch = 0;
      document.querySelectorAll(TARGETS).forEach((node) => {
        if (seen.has(node)) return;
        seen.add(node);
        const el = node as HTMLElement;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 1.12 && r.bottom > 0) {
          // 首屏：即時階梯彈入
          reveal(el, Math.min(batch * 80, 480));
          batch++;
        } else {
          // 視口外：先藏、入場先彈
          el.classList.add("pre");
          io.observe(el);
        }
      });
    };
    observeAll();

    // 動態內容（配對結果/FAQ 篩選/規劃清單）一樣有進場動畫
    const mo = new MutationObserver(() => observeAll());
    mo.observe(document.body, { childList: true, subtree: true });

    // 兜底：IO 萬一失靈、3 秒後強制顯示所有仍隱藏的元素
    const failsafe = window.setInterval(() => {
      document.querySelectorAll<HTMLElement>(".pre").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < (window.innerHeight || 800) && r.bottom > 0) reveal(el, 0);
      });
    }, 3000);

    return () => {
      io.disconnect();
      mo.disconnect();
      window.clearInterval(failsafe);
      root.classList.remove("motion");
      document.querySelectorAll(".pre").forEach((el) => el.classList.remove("pre"));
    };
  }, []);

  return null;
}
