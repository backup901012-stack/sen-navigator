// 「SEN 小孩導航員・國語版」Podcast 節目資料
// 賬號本體 = RSS feed（/podcast/feed.xml），外接平台（Spotify / Apple 等）都由 RSS 分發。
// 新一集：喺 EPISODES 加一項；錄好音上載後填 audioUrl + publishedAt + durationSec，
// status 改 "published"，該集就會自動入 RSS、平台自動同步。

export interface PodcastPlatform {
  name: string;
  /** 未開通 = null（頁面顯示「即將上架」，唔捏造連結） */
  url: string | null;
  emoji: string;
}

export interface PodcastEpisode {
  /** 集數（第 1 季由 1 開始） */
  ep: number;
  title: string;
  /** 一句話簡介（節目頁 + RSS description） */
  desc: string;
  /** 本集重點（3-4 點） */
  points: string[];
  /** 對應本站粵語內容頁（節目 = 站內已查證內容的國語翻譯） */
  relatedPages: { href: string; label: string }[];
  status: "planned" | "recording" | "published";
  /** 以下發佈後先填 */
  audioUrl?: string;
  publishedAt?: string; // ISO 日期
  durationSec?: number;
  /** 音頻檔案大小（bytes、RSS enclosure length 必需——上載後 ls -l 攞真值） */
  audioBytes?: number;
}

export const PODCAST = {
  title: "SEN 小孩導航員・國語版",
  slogan: "用國語，把香港 SEN 學前資訊講給你聽",
  description:
    "為在香港、以國語（普通話）為主要語言的家庭而設的資訊節目。我們把本站已逐項查證的香港 SEN（特殊教育需要）兒童學前資源——政府服務、評估流程、輪候攻略、訓練方法——翻譯成國語音頻，每集一個主題，通勤路上就能聽懂。",
  audience:
    "新來港家庭、跨境家庭、雙非家庭，以及所有以國語為主要語言、正在為孩子尋找香港 SEN 支援的照顧者。",
  language: "zh-cmn（國語／普通話）",
  disclaimer:
    "本節目為獨立資訊整合內容，非政府或任何機構的官方節目；內容僅供參考，申請詳情請以官方公佈為準。",
};

export const PLATFORMS: PodcastPlatform[] = [
  { name: "Spotify", url: null, emoji: "🟢" },
  { name: "Apple Podcasts", url: null, emoji: "🟣" },
  { name: "YouTube", url: null, emoji: "🔴" },
  { name: "小宇宙", url: null, emoji: "🌌" },
];

export const EPISODES: PodcastEpisode[] = [
  {
    ep: 1,
    title: "什麼是 SEN？香港學前支援全景圖",
    desc: "初來香港或剛開始接觸 SEN？一集聽懂香港的支援體系長什麼樣、錢從哪裡來、路要怎麼走。",
    points: [
      "SEN（特殊教育需要）在香港的定義與常見類別",
      "政府資助 vs 自費服務的雙軌全景",
      "由察覺到接受服務的 6 步路線圖",
    ],
    relatedPages: [
      { href: "/understanding", label: "認識・同理" },
      { href: "/journey", label: "申請流程地圖" },
    ],
    status: "planned",
  },
  {
    ep: 2,
    title: "孩子是不是發展慢了？里程碑與早期信號",
    desc: "說話比別人慢、叫名字不回頭——哪些是正常差異、哪些值得留意？用 0–6 歲發展里程碑逐項對照。",
    points: [
      "語言及六大範疇發展里程碑重點",
      "M-CHAT-R 早期篩查是什麼、適合誰做",
      "「篩查不等於診斷」——結果該怎麼看",
    ],
    relatedPages: [
      { href: "/milestones", label: "發展里程碑" },
      { href: "/screening", label: "M-CHAT-R 篩查" },
    ],
    status: "planned",
  },
  {
    ep: 3,
    title: "去哪裡評估？兒童體能智力測驗全流程",
    desc: "懷疑孩子有需要，第一步去哪裡？拆解衞生署兒童體能智力測驗服務（CAS）的轉介與評估流程。",
    points: [
      "CAS（服務）與 CAC（中心）的分別、全港 8 間中心",
      "誰可以轉介、評估等多久、報告拿到後做什麼",
      "政府評估 vs 自費評估怎麼選",
    ],
    relatedPages: [
      { href: "/cas", label: "CAS 與各區中心" },
      { href: "/grading", label: "評估與分級制度" },
    ],
    status: "planned",
  },
  {
    ep: 4,
    title: "政府四大學前康復服務逐一拆解",
    desc: "到校學前康復、早期教育及訓練中心、特殊幼兒中心、幼稚園兼收——名字很像，到底差在哪？",
    points: [
      "四大服務的對象、形式、費用逐項比較",
      "中央轉介系統怎麼排位",
      "怎樣按孩子程度判斷服務方向",
    ],
    relatedPages: [
      { href: "/services", label: "政府學前康復服務" },
      { href: "/match", label: "服務配對工具" },
    ],
    status: "planned",
  },
  {
    ep: 5,
    title: "輪候期怎麼辦?過渡津貼與雙軌並行",
    desc: "排隊要等一年半載，孩子的黃金期等不起。輪候期間有什麼津貼、什麼該做、什麼別踩坑。",
    points: [
      "TSP 學習訓練津貼（俗稱 T 位）是什麼、誰合資格",
      "各區特殊幼兒中心輪候現況怎麼查",
      "津貼與自費雙軌並行的規劃思路",
    ],
    relatedPages: [
      { href: "/pathways", label: "津貼 vs 自費流程圖" },
      { href: "/sccc", label: "特殊幼兒中心輪候" },
    ],
    status: "planned",
  },
  {
    ep: 6,
    title: "自費訓練怎麼選？常見方法與避坑指南",
    desc: "ABA、TEACCH、感覺統合……市面課程五花八門、收費差距極大。哪些有實證、哪些要小心？",
    points: [
      "常見訓練方法逐個認識（實證程度如何）",
      "食療、另類療法為什麼要謹慎",
      "選機構、比收費的實用清單",
    ],
    relatedPages: [
      { href: "/training-methods", label: "常見訓練方法" },
      { href: "/directory", label: "資源目錄" },
    ],
    status: "planned",
  },
  {
    ep: 7,
    title: "情緒崩潰不是鬧脾氣：家長的應對心法",
    desc: "在地鐵裡孩子突然大哭打自己的頭，旁人的目光像針一樣。這一集講怎麼接住孩子、也接住自己。",
    points: [
      "崩潰（meltdown）與鬧脾氣的分別",
      "低喚醒應對與共同調節的實用步驟",
      "家長自己的情緒，也需要被照顧",
    ],
    relatedPages: [
      { href: "/scenarios", label: "情緒應對情境訓練" },
      { href: "/parents", label: "家長特區" },
    ],
    status: "planned",
  },
  {
    ep: 8,
    title: "6 歲以後的路：特殊學校與融合教育",
    desc: "學前服務到 6 歲就停，之後呢？拆解香港雙軌制：主流學校融合教育與特殊學校怎麼安排。",
    points: [
      "雙軌制：融合教育 vs 特殊學校",
      "特殊學校不是自行報名——EDB 評估轉介流程",
      "62 所特殊學校的類別與支援",
    ],
    relatedPages: [
      { href: "/special-schools", label: "特殊學校與升學" },
    ],
    status: "planned",
  },
];
