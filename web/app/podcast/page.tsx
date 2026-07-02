import type { Metadata } from "next";
import Link from "next/link";
import { PODCAST, PLATFORMS, EPISODES } from "@/data/podcast";
import { SectionTitle } from "@/components/ui";
import Mascot from "@/components/Mascot";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "國語 Podcast — SEN 小孩導航員・國語版",
  description: PODCAST.description,
};

const STATUS_LABEL: Record<string, { t: string; c: string }> = {
  planned: { t: "籌備中", c: "bg-amber-100 text-amber-800" },
  recording: { t: "錄製中", c: "bg-lilac-100 text-lilac-700" },
  published: { t: "已上線", c: "bg-green-100 text-green-800" },
};

export default function PodcastPage() {
  const published = EPISODES.filter((e) => e.status === "published");
  const feedUrl = `${SITE_URL}/podcast/feed.xml`;

  return (
    <>
      {/* 節目 Hero（本頁以標準書面中文書寫——節目對象為以國語為主要語言的家庭） */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-lilac-50">
        <div className="container-page py-14 sm:py-20 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="animate-fade-up">
            <span className="inline-block px-3 py-1 rounded-full bg-lilac-100 text-lilac-700 text-sm font-bold mb-5">
              🎙️ 音頻節目 · 國語（普通話）
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-brand-900 leading-tight">
              {PODCAST.title}
            </h1>
            <p className="mt-3 text-xl font-bold text-brand-700">{PODCAST.slogan}</p>
            <p className="mt-5 text-ink-soft max-w-2xl leading-relaxed">
              {PODCAST.description}
            </p>
            <p className="mt-4 text-sm text-ink-soft max-w-2xl">
              <strong className="text-brand-800">為誰而做：</strong>
              {PODCAST.audience}
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${SITE_URL}/podcast-cover.png`}
              alt="SEN 小孩導航員・國語版 節目封面"
              width={220}
              height={220}
              className="rounded-3xl shadow-xl"
            />
            <span aria-hidden>
              <Mascot size={90} variant="lilac" />
            </span>
          </div>
        </div>
      </section>

      {/* 收聽平台 */}
      <section className="container-page py-12">
        <SectionTitle
          eyebrow="收聽渠道"
          title="節目將在這些平台與你見面"
          desc="節目正在籌備階段。各平台賬號開通後，這裡會即時更新收聽連結。"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {PLATFORMS.map((p) =>
            p.url ? (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
              >
                <span aria-hidden>{p.emoji}</span> {p.name}
              </a>
            ) : (
              <span
                key={p.name}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-brand-100 text-ink-soft font-bold"
              >
                <span aria-hidden className="grayscale opacity-70">
                  {p.emoji}
                </span>
                {p.name}
                <span className="text-[11px] px-2 py-0.5 rounded-md bg-amber-100 text-amber-800">
                  即將上架
                </span>
              </span>
            )
          )}
        </div>
        <div className="mt-5 rounded-2xl bg-brand-50/60 border border-brand-100 p-5 text-sm text-ink-soft">
          <p>
            <strong className="text-brand-800">📡 RSS 訂閱（進階）：</strong>
            節目的官方訂閱源為{" "}
            <code className="px-2 py-0.5 rounded-md bg-white border border-brand-100 text-brand-700 break-all">
              {feedUrl}
            </code>
            ，首集音頻上線後即可在任何 Podcast 應用中直接添加收聽。
          </p>
        </div>
      </section>

      {/* 集數列表 */}
      <section className="bg-white border-y border-brand-100">
        <div className="container-page py-14">
          <SectionTitle
            eyebrow={`第一季 · 共 ${EPISODES.length} 集規劃`}
            title="每集一個主題，把路講清楚"
            desc={
              published.length
                ? undefined
                : "以下為第一季內容規劃，全部翻譯自本站已逐項查證的粵語內容。錄製上線後本頁會即時更新。"
            }
          />
          <ol className="mt-8 grid md:grid-cols-2 gap-4">
            {EPISODES.map((e) => {
              const st = STATUS_LABEL[e.status];
              return (
                <li
                  key={e.ep}
                  className="rounded-2xl bg-brand-50/40 border border-brand-100 p-6 flex flex-col"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="grid place-items-center w-10 h-10 rounded-full bg-brand-100 text-brand-700 font-black">
                      {e.ep}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${st.c}`}
                    >
                      {st.t}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-black text-brand-900">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {e.desc}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2 text-sm text-ink">
                        <span className="text-brand-500 shrink-0" aria-hidden>
                          ●
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {e.status === "published" && e.audioUrl && (
                    <audio
                      controls
                      preload="none"
                      src={e.audioUrl}
                      className="mt-4 w-full"
                    />
                  )}
                  <p className="mt-4 pt-3 border-t border-brand-100 text-xs text-ink-soft">
                    文字版（粵語）：
                    {e.relatedPages.map((r, i) => (
                      <span key={r.href}>
                        {i > 0 && "、"}
                        <Link
                          href={r.href}
                          className="text-brand-600 font-bold hover:underline"
                        >
                          {r.label}
                        </Link>
                      </span>
                    ))}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 為什麼做國語版 */}
      <section className="container-page py-14">
        <div className="rounded-3xl bg-gradient-to-br from-lilac-50 to-brand-50 border border-lilac-100 p-8 sm:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <span className="text-5xl" aria-hidden>
            💬
          </span>
          <div>
            <h2 className="text-2xl font-black text-brand-900">
              為什麼要做國語版？
            </h2>
            <p className="mt-3 text-ink-soft leading-relaxed max-w-3xl">
              香港的 SEN 官方資訊以粵語和書面中英文為主。對以國語為主要語言的家庭來說，
              光是聽懂「兼收位」「T 位」「中央轉介」這些詞，就已經是一道門檻——
              而孩子的黃金介入期不會等人。這個節目把本站已查證的資訊翻譯成國語、
              讀給你聽，讓語言不再是求助路上的第一道牆。
            </p>
            <p className="mt-4 text-xs text-ink-soft">⚠️ {PODCAST.disclaimer}</p>
          </div>
        </div>
      </section>
    </>
  );
}
