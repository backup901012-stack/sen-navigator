import Link from "next/link";
import type { SourceRef, Confidence } from "@/lib/types";

export function SectionTitle({
  eyebrow,
  title,
  desc,
  center,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-brand-600 font-bold text-sm tracking-wide mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl font-black text-brand-900 leading-snug">
        {title}
      </h2>
      {desc && <p className="mt-3 text-ink-soft">{desc}</p>}
    </div>
  );
}

const FUNDING_STYLE: Record<string, string> = {
  free: "bg-green-100 text-green-800",
  subsidised: "bg-brand-100 text-brand-800",
  "self-pay": "bg-warm-100 text-warm-700",
  mixed: "bg-amber-100 text-amber-800",
};
const FUNDING_LABEL: Record<string, string> = {
  free: "免費",
  subsidised: "資助",
  "self-pay": "自費",
  mixed: "混合",
};

export function FundingBadge({ funding }: { funding: string }) {
  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
        FUNDING_STYLE[funding] ?? "bg-gray-100 text-gray-700"
      }`}
    >
      {FUNDING_LABEL[funding] ?? funding}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded-md text-xs bg-brand-50 text-brand-700 border border-brand-100">
      {children}
    </span>
  );
}

export function ConfidenceNote({ confidence }: { confidence: Confidence }) {
  if (confidence === "high") return null;
  const map = {
    medium: { t: "資料以一般公開資訊整理，細節請向機構確認", c: "text-amber-700" },
    pending: { t: "此項資料待官方來源確認", c: "text-warm-600" },
  } as const;
  const m = map[confidence];
  return <p className={`text-xs ${m.c} mt-1`}>※ {m.t}</p>;
}

export function SourceList({ sources }: { sources: SourceRef[] }) {
  if (!sources?.length) return null;
  return (
    <div className="mt-3 pt-3 border-t border-brand-50">
      <p className="text-[11px] font-bold text-ink-soft mb-1">資料來源</p>
      <ul className="space-y-0.5">
        {sources.map((s, i) => (
          <li key={i} className="text-[11px] text-ink-soft">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:underline break-all"
            >
              {s.label}
            </a>
            <span className="text-gray-400">（查證 {s.checkedAt}）</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CardLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-[--radius-card] bg-white border border-brand-100 p-6 card-hover ${className}`}
    >
      {children}
    </Link>
  );
}
