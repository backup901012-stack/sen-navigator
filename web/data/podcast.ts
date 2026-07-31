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
    "為在香港、以國語（普通話）為主要語言的家庭而設的資訊節目。我們會把附有來源的香港 SEN（特殊教育需要）兒童學前資源——政府服務、評估流程、輪候資料、訓練方法——在錄製前重新核對，再整理成國語音頻。",
  audience:
    "新來港家庭、跨境家庭，以及所有以國語為主要語言、正在為孩子尋找香港 SEN 支援的照顧者。",
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
    title: "懷疑有 SEN：有什麼即時可以報讀、要留意哪些機構？",
    desc: "還在排評估？懷疑階段就有可以做的事：哪類課程可以即時報讀、怎麼用官方名單和站內目錄找機構、報讀前先看什麼。",
    points: [
      "三個即時方向：問學校現有支援、社區機構課程、自費訓練",
      "找機構只用兩個來源：官方名單與站內資源目錄",
      "報讀前快篩三問：實證、收費與退出安排、孩子承受度",
    ],
    relatedPages: [
      { href: "/directory", label: "資源目錄" },
      { href: "/match", label: "服務方向整理工具" },
    ],
    status: "planned",
  },
  {
    ep: 2,
    title: "遠水救不了近火：輪候期的津貼與雙軌自救",
    desc: "政府服務要輪候，但黃金期不等人。這集講輪候期就能申請的學習訓練津貼資格去哪核對，以及雙軌並行實際怎麼操作。",
    points: [
      "TSP 學習訓練津貼是什麼、全部資格與入息審查例外",
      "各區特殊幼兒中心編配資料怎麼讀",
      "政府服務與自費支援是否並行的核對清單",
    ],
    relatedPages: [
      { href: "/pathways", label: "津貼 vs 自費流程圖" },
      { href: "/sccc", label: "特殊幼兒中心編配資料" },
    ],
    status: "planned",
  },
  {
    ep: 3,
    title: "評估這樣排最快：兒童體能智力測驗全流程",
    desc: "評估是拿服務的入場券，排錯隊最浪費時間。拆解衞生署 CAS 的轉介與評估流程：誰可以轉介、怎麼按住址分區，一步不繞路。",
    points: [
      "CAS（服務）與 CAC（中心）的分別：衞生署 7 間中心，醫管局另有兒童評估服務",
      "誰可以轉介、如何按住址分區，以及 Form 2 與另行申請醫事報告的分別",
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
    title: "政府四大學前康復服務：怎樣選對隊、排對隊",
    desc: "到校學前康復、早期教育及訓練中心、特殊幼兒中心、幼稚園兼收——名字很像，排錯隊等於白等。對象、形式、費用逐項比較，幫你選對隊。",
    points: [
      "四大服務的對象、形式、費用逐項比較",
      "哪些服務一般經中央轉介、哪些另有申請安排",
      "怎樣按專業服務建議與各項資格核對可查詢方向",
    ],
    relatedPages: [
      { href: "/services", label: "政府學前康復服務" },
      { href: "/match", label: "服務方向整理工具" },
    ],
    status: "planned",
  },
  {
    ep: 5,
    title: "孩子是不是慢了？用里程碑判斷有多急",
    desc: "說話比別人慢、叫名字不回頭——是正常差異，還是要馬上行動？用 0–6 歲發展里程碑逐項對照，判斷現在有多急。",
    points: [
      "語言及六大範疇發展里程碑重點",
      "M-CHAT-R/F 官方兩階段篩查是什麼、適合誰使用",
      "「篩查不等於診斷」——結果該怎麼看",
    ],
    relatedPages: [
      { href: "/milestones", label: "發展里程碑" },
      { href: "/screening", label: "M-CHAT-R/F 官方資料" },
    ],
    status: "planned",
  },
  {
    ep: 6,
    title: "孩子情緒升高時：先安全，再觀察",
    desc: "在地鐵裡孩子突然大哭或拍自己的頭，單憑外表不能判斷原因。這一集講當下如何先顧安全、觀察背景，也照顧家長自己。",
    points: [
      "為何不應只憑一次表現二分『崩潰』與『鬧脾氣』",
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
    ep: 7,
    title: "拆解孩子的感覺密碼：三種反應類型與一分鐘應對",
    desc: "掩耳朵、坐不住、老是撞來撞去——行為背後可能是感覺訊息處理的差異。認識三種常見反應方式，每種給你一分鐘可以先做的事。",
    points: [
      "八個感覺系統與三種常見反應方式：過度反應、反應較少、尋求刺激",
      "每種類型的「一分鐘即時方向」——安全先行、孩子自願，不是處方",
      "感覺處理差異不是獨立診斷：何時該找職業治療師全面評估",
    ],
    relatedPages: [
      { href: "/sensory", label: "感覺統合與本體感覺" },
      { href: "/directory", label: "資源目錄" },
    ],
    status: "planned",
  },
  {
    ep: 8,
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
    ep: 9,
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
    ep: 10,
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
  {
    ep: 11,
    title: "SEN 青年的青春期：獨立生活怎麼練？",
    desc: "孩子長大了，錢不會管、衛生做不好、家務不肯分擔？把獨立生活拆成可以練的小步：按實際規劃、先肯定感受，再認識支援獨立生活技能的社區機構。",
    points: [
      "四個獨立生活範疇：財務管理、個人衛生、負責任與分擔家務",
      "按實際規劃、肯定感受：把大目標拆成做得到的小步",
      "支援獨立生活技能的社區機構與計劃（含自閉症人士支援中心）怎麼找",
    ],
    relatedPages: [
      { href: "/special-schools", label: "特殊學校與升學" },
      { href: "/parents", label: "家長特區" },
    ],
    status: "planned",
  },
];
