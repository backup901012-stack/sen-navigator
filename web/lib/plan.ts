"use client";

import type { PlanItem } from "@/lib/types";

const KEY = "sen-plan-v1";

export function getPlan(): PlanItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

function save(items: PlanItem[]) {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent("plan-changed"));
}

export function isInPlan(id: string): boolean {
  return getPlan().some((i) => i.id === id);
}

export function addToPlan(item: Omit<PlanItem, "done" | "addedAt">) {
  const items = getPlan();
  if (items.some((i) => i.id === item.id)) return;
  items.push({ ...item, done: false, addedAt: Date.now() });
  save(items);
}

export function removeFromPlan(id: string) {
  save(getPlan().filter((i) => i.id !== id));
}

export function toggleDone(id: string) {
  save(getPlan().map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
}

export function clearPlan() {
  save([]);
}
