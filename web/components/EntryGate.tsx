"use client";

/**
 * 入場閘門（EntryGate）— 開站即彈出嘅最頂層持份者分流（老闆 2026-07-02 指定：
 * 似年齡閘門嘅 modal 形式、四張粉彩卡「可複選」、柔粉彩 neumorphism 質感）。
 * 行為：首次到訪自動彈出；揀完（或跳過）記住 localStorage、之後唔再自動彈；
 * 任何頁可用 window CustomEvent "sen-open-gate" 重開（GateOpener 按鈕）。
 * 無障礙：role=dialog、ESC 關、body scroll lock、prefers-reduced-motion 由 CSS 層兜。
 */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PERSONAS } from "@/data/personas";

const STORE_KEY = "sen-entry-v1";

export default function EntryGate() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [selected, setSelected] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 每次開閘 / 換步（step1→step2）都把 modal 捲返最頂：
  // 否則喺 step1 捲到底撳「攞路線」後，step2 會停喺舊捲動位置、一入見唔到頂部標題同路線開頭，
  // 令人以為「揀完去錯/搵唔到學校連結」。捲返頂 → 用戶由標題順住往下睇。
  useEffect(() => {
    if (open) scrollRef.current?.scrollTo(0, 0);
  }, [open, step]);

  // 第一視覺階段：每個瀏覽 session 開站先見抽卡（本 session 內唔重複）；
  // 已揀過嘅身份由 localStorage 預先剔返。
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
      if (Array.isArray(saved))
        setSelected(saved.filter((x) => typeof x === "string"));
    } catch {
      /* 壞數據當無 */
    }
    try {
      if (!sessionStorage.getItem("sen-entry-seen")) setOpen(true);
    } catch {
      /* storage 唔可用就唔自動彈、唔阻內容 */
    }
  }, []);

  // 全站重開事件（GateOpener 按鈕觸發）
  useEffect(() => {
    const reopen = () => {
      try {
        const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
        if (Array.isArray(saved)) setSelected(saved.filter((x) => typeof x === "string"));
      } catch {
        /* 壞數據當無 */
      }
      setStep(1);
      setOpen(true);
    };
    window.addEventListener("sen-open-gate", reopen);
    return () => window.removeEventListener("sen-open-gate", reopen);
  }, []);

  // 開啟時鎖 body 捲動 + ESC 關
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function save(ids: string[]) {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(ids));
    } catch {
      /* 唔阻流程 */
    }
  }

  function toggle(id: string) {
    setSelected((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
    );
  }

  function enter() {
    save(selected);
    if (selected.length) setStep(2);
    else close();
  }

  function skip() {
    save(selected);
    close();
  }

  function close() {
    try {
      sessionStorage.setItem("sen-entry-seen", "1");
    } catch {
      /* 唔阻流程 */
    }
    // 順手解除 body 捲動鎖：離開閘門（尤其係揀路線連結跳頁）之後，
    // 盡量確保目標頁可以正常捲動——防手機上目標頁「載到但捲唔到、睇落好似空白」。
    // （[open] effect 嘅 cleanup 之後仍會 restore prev，兩者一致、唔會衝突。）
    try {
      document.body.style.overflow = "";
    } catch {
      /* 唔阻流程 */
    }
    setOpen(false);
    setStep(1);
  }

  if (!open) return null;

  const chosen = PERSONAS.filter((p) => selected.includes(p.id));

  return (
    <div
      ref={scrollRef}
      className="fixed inset-0 z-[100] overflow-y-auto bg-gradient-to-br from-brand-50 via-paper to-warm-50"
      role="dialog"
      aria-modal="true"
      aria-label="揀你嘅身份，快啲搵到啱你嘅內容"
    >
      {/* 全屏第一視覺階段（不透明、唔露底下頁面）：柔粉彩暈染裝飾 */}
      <div aria-hidden className="pointer-events-none fixed inset-0">
        <span className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-brand-200/50 blur-2xl" />
        <span className="absolute top-1/3 -left-28 w-80 h-80 rounded-full bg-lilac-200/45 blur-2xl" />
        <span className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-warm-200/40 blur-2xl" />
      </div>

      {/* 舞台內容 — 頂對齊 + 可捲動：手機上內容長過螢幕時，頂部標題（如「你嘅路線準備好喇」）
          唔會被 grid/flex 垂直置中頂出視窗外、亦唔會被裁走；用戶一入就見到標題，順住往下捲。 */}
      <div className="relative flex min-h-full flex-col items-center justify-start p-4 sm:p-8">
        <div className="w-full max-w-5xl py-6 animate-fade-up">
        {step === 1 ? (
          <>
            <div className="text-center max-w-xl mx-auto">
              <p className="flex items-center justify-center gap-2 font-black text-brand-800">
                <span className="grid place-items-center w-9 h-9 rounded-xl bg-brand-600 text-white text-lg">
                  導
                </span>
                SEN 小孩導航員
              </p>
              <p className="mt-4 text-sm font-bold text-brand-600">
                歡迎嚟到香港 SEN 學前資源一站式導航
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl font-black text-brand-900 leading-snug">
                邊個係而家嘅你？
              </h1>
              <p className="mt-2 text-sm text-ink-soft">
                可以揀多過一個——我哋即刻幫你執好啱你嘅內容，唔使睇晒成個網站。
              </p>
            </div>

            {/* 五張粉彩卡（可複選） */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {PERSONAS.map((p) => {
                const on = selected.includes(p.id);
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="checkbox"
                    aria-checked={on}
                    onClick={() => toggle(p.id)}
                    className={`relative text-left rounded-2xl bg-white overflow-hidden card-hover cursor-pointer transition-shadow ${
                      on ? "ring-4 ring-brand-400" : ""
                    }`}
                  >
                    {/* 卡頂粉彩漸變 */}
                    <span
                      className="block h-20 sm:h-24"
                      style={{ background: p.gradient }}
                      aria-hidden
                    />
                    <span
                      className="absolute top-3 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl drop-shadow-sm"
                      aria-hidden
                    >
                      {p.emoji}
                    </span>
                    {/* 選取圓剔 */}
                    <span
                      className={`absolute top-2.5 right-2.5 grid place-items-center w-7 h-7 rounded-full text-sm font-black transition-colors ${
                        on
                          ? "bg-brand-500 text-white"
                          : "bg-white/90 text-transparent border-2 border-brand-200"
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span className="block p-3.5 sm:p-4">
                      <span className="block font-black text-sm sm:text-base text-brand-900 leading-snug">
                        {p.label}
                      </span>
                      <span className="mt-1.5 hidden sm:block text-xs text-ink-soft leading-relaxed">
                        「{p.quote}」
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* 行動列 */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={enter}
                disabled={selected.length === 0}
                className={`px-8 py-3.5 rounded-full font-bold text-white transition-colors ${
                  selected.length
                    ? "bg-brand-600 hover:bg-brand-700"
                    : "bg-brand-200 cursor-not-allowed"
                }`}
              >
                {selected.length
                  ? `攞我嘅路線（揀咗 ${selected.length} 個）→`
                  : "揀咗先可以攞路線"}
              </button>
              <button
                type="button"
                onClick={skip}
                className="px-6 py-3 rounded-full font-bold text-brand-700 bg-white border border-brand-200 hover:bg-brand-50 transition-colors"
              >
                先隨便睇睇
              </button>
            </div>
            <p className="mt-4 text-center text-[11px] text-ink-soft">
              ⚠️ 本平台為獨立資訊整合工具，非官方網站，資料僅供參考。
            </p>
          </>
        ) : (
          <>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-black text-brand-900">
                你嘅路線準備好喇 ✨
              </h2>
              <p className="mt-2 text-sm text-ink-soft">
                👇 撳下面<strong className="text-brand-700">任何一步</strong>，就直接帶你去嗰版——由邊步開始都得。
              </p>
            </div>
            <div className="mt-6 space-y-5">
              {chosen.map((p) => (
                <div
                  key={p.id}
                  className="rounded-2xl bg-white p-5 sm:p-6"
                >
                  <p className="font-bold text-brand-800">
                    {p.emoji} {p.greeting}
                  </p>
                  <ol className="mt-3 grid sm:grid-cols-2 gap-2.5">
                    {p.steps.map((s, i) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={close}
                          className="group flex items-center gap-2.5 rounded-xl bg-brand-50/70 ring-1 ring-brand-100 hover:ring-brand-300 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:bg-brand-50 p-3 transition-all h-full shadow-sm"
                        >
                          <span className="grid place-items-center w-7 h-7 rounded-full bg-brand-500 text-white font-black text-xs shrink-0">
                            {i + 1}
                          </span>
                          <span className="flex-1 min-w-0">
                            <span className="flex items-center gap-2 flex-wrap">
                              <span className="font-bold text-sm text-ink">
                                {s.title}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white text-ink-soft">
                                ⏱ {s.time}
                              </span>
                            </span>
                            <span className="block mt-0.5 text-xs text-ink-soft leading-relaxed">
                              {s.desc}
                            </span>
                          </span>
                          <span
                            aria-hidden
                            className="shrink-0 self-center text-brand-500 font-black text-lg transition-transform group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5"
                          >
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={close}
                className="px-6 py-3 rounded-full font-bold text-brand-700 bg-white border border-brand-200 hover:bg-brand-50 transition-colors"
              >
                唔跟路線，自己四圍睇
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-3 rounded-full font-bold text-brand-700 bg-white border border-brand-200 hover:bg-brand-50 transition-colors"
              >
                ← 重新揀身份
              </button>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  );
}
