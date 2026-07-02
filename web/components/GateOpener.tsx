"use client";

/** 重開入場閘門嘅按鈕（EntryGate 監聽 "sen-open-gate" 事件） */
export default function GateOpener({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent("sen-open-gate"))}
    >
      {children}
    </button>
  );
}
