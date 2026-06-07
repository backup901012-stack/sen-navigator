"use client";

import { useEffect, useState } from "react";
import { addToPlan, isInPlan, removeFromPlan } from "@/lib/plan";
import type { PlanItem } from "@/lib/types";

export default function AddToPlanButton({
  item,
  size = "md",
}: {
  item: Omit<PlanItem, "done" | "addedAt">;
  size?: "sm" | "md";
}) {
  const [added, setAdded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setAdded(isInPlan(item.id));
    const h = () => setAdded(isInPlan(item.id));
    window.addEventListener("plan-changed", h);
    return () => window.removeEventListener("plan-changed", h);
  }, [item.id]);

  const toggle = () => {
    if (added) removeFromPlan(item.id);
    else addToPlan(item);
    setAdded(!added);
  };

  const pad = size === "sm" ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm";

  return (
    <button
      onClick={toggle}
      aria-pressed={added}
      className={`inline-flex items-center gap-1.5 rounded-full font-bold transition-colors ${pad} ${
        added
          ? "bg-green-100 text-green-700 hover:bg-green-200"
          : "bg-brand-50 text-brand-700 hover:bg-brand-100 border border-brand-200"
      }`}
    >
      {!mounted ? "＋ 加入規劃" : added ? "✓ 已加入規劃" : "＋ 加入規劃"}
    </button>
  );
}
