// Podcast RSS feed（節目「賬號」本體）— 提交此 URL 到 Spotify / Apple Podcasts 等平台即完成上架。
// 靜態導出：build 時生成 /podcast/feed.xml；只收錄 status=published 且有 audioUrl 的集數。
import { PODCAST, EPISODES } from "@/data/podcast";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function fmtDuration(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return h ? `${h}:${mm}:${ss}` : `${m}:${ss}`;
}

export async function GET() {
  const pageUrl = `${SITE_URL}/podcast`;
  const items = EPISODES.filter((e) => e.status === "published" && e.audioUrl)
    .sort((a, b) => b.ep - a.ep)
    .map((e) => {
      const pub = e.publishedAt
        ? new Date(`${e.publishedAt}T00:00:00+08:00`).toUTCString()
        : "";
      return `    <item>
      <title>${esc(`EP${e.ep}｜${e.title}`)}</title>
      <description>${esc(e.desc)}</description>
      <link>${pageUrl}</link>
      <guid isPermaLink="false">sen-navigator-podcast-ep${e.ep}</guid>
      ${pub ? `<pubDate>${pub}</pubDate>` : ""}
      <enclosure url="${esc(e.audioUrl!)}" type="audio/mpeg" length="${e.audioBytes ?? 0}"/>
      <itunes:episode>${e.ep}</itunes:episode>
      <itunes:explicit>false</itunes:explicit>
      ${e.durationSec ? `<itunes:duration>${fmtDuration(e.durationSec)}</itunes:duration>` : ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
     xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(PODCAST.title)}</title>
    <description>${esc(PODCAST.description)}</description>
    <link>${pageUrl}</link>
    <atom:link href="${pageUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>zh-cmn</language>
    <copyright>© SEN 小孩導航員</copyright>
    <itunes:author>SEN 小孩導航員</itunes:author>
    <itunes:image href="${SITE_URL}/podcast-cover.png"/>
    <image>
      <url>${SITE_URL}/podcast-cover.png</url>
      <title>${esc(PODCAST.title)}</title>
      <link>${pageUrl}</link>
    </image>
    <itunes:summary>${esc(PODCAST.description)}</itunes:summary>
    <itunes:type>episodic</itunes:type>
    <itunes:explicit>false</itunes:explicit>
    <itunes:category text="Kids &amp; Family">
      <itunes:category text="Parenting"/>
    </itunes:category>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
