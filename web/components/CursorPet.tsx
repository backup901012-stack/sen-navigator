"use client";

import { useEffect, useRef } from "react";

/**
 * 星塵尾巴 — 跟隨滑鼠嘅溫馨卡通小星（彈簧延遲 lerp）+ 點擊爆三粒迷你星
 * 桌面限定（pointer: fine）、prefers-reduced-motion 自動唔啟動、
 * pointer-events: none 完全唔影響操作。
 */
export default function CursorPet() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(pointer: fine)").matches
    )
      return;

    const el = ref.current;
    if (!el) return;
    el.style.display = "block";

    let mx = -100, my = -100, x = -100, y = -100;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      x += (mx - x) * 0.16;
      y += (my - y) * 0.16;
      el.style.transform = `translate(${x + 12}px, ${y + 14}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const burst = (e: MouseEvent) => {
      for (let i = 0; i < 3; i++) {
        const s = document.createElement("span");
        s.className = "cursor-spark";
        s.textContent = "✦";
        s.style.left = `${e.clientX}px`;
        s.style.top = `${e.clientY}px`;
        s.style.setProperty("--dx", `${(Math.random() - 0.5) * 70}px`);
        s.style.setProperty("--dy", `${-20 - Math.random() * 50}px`);
        s.style.color = ["#62bd9b", "#ea66a2", "#a87fcd"][i % 3];
        document.body.appendChild(s);
        setTimeout(() => s.remove(), 700);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("click", burst);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", burst);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="cursor-pet"
      style={{ display: "none" }}
    >
      ✦
    </div>
  );
}
