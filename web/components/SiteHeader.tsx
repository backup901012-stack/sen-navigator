"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { IconClipboard } from "@/components/icons";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-brand-100 no-print">
      <div className="container-page flex items-center justify-between h-16 gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span
            aria-hidden
            className="grid place-items-center w-9 h-9 rounded-xl bg-brand-600 text-white text-lg font-black"
          >
            導
          </span>
          <span className="font-black text-lg text-brand-800 tracking-tight">
            {SITE.name}
          </span>
        </Link>

        {/* 桌面導覽 */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`px-3 py-2 rounded-lg text-[15px] font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-soft hover:bg-brand-50 hover:text-brand-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/planner"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-warm-500 hover:bg-warm-600 text-white font-bold text-sm transition-colors"
          >
            <IconClipboard size={17} /> 我的規劃
          </Link>
        </div>

        {/* 手機選單按鈕 */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg text-brand-800 hover:bg-brand-50"
          aria-label="開啟選單"
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* 手機導覽 */}
      {open && (
        <nav className="lg:hidden border-t border-brand-100 bg-white">
          <div className="container-page py-3 flex flex-col gap-1">
            {NAV.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`px-3 py-3 rounded-lg text-base font-medium ${
                  isActive(l.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-ink hover:bg-brand-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/planner"
              onClick={() => setOpen(false)}
              className="mt-1 px-3 py-3 rounded-lg text-base font-bold bg-warm-500 text-white text-center inline-flex items-center justify-center gap-1.5"
            >
              <IconClipboard size={18} /> 我的規劃清單
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
