// 持份者分流資料（入場閘門 EntryGate 用）
// 四類持份者、可複選；每類配一條 4 步路線（全部指向站內已查證內容）。

export interface PersonaStep {
  href: string;
  title: string;
  desc: string;
  time: string;
}

export interface Persona {
  id: string;
  emoji: string;
  label: string;
  quote: string;
  /** 卡頂粉彩漸變（對應老闆質感圖四色：奶油/湖水/霧藍/塵粉） */
  gradient: string;
  greeting: string;
  steps: PersonaStep[];
}

export const PERSONAS: Persona[] = [
  {
    id: "noticing",
    emoji: "🌱",
    label: "開始覺得孩子有啲唔同",
    quote: "講嘢好似慢過人、又唔多應人⋯⋯係咪我諗多咗？",
    gradient: "linear-gradient(160deg, #f0e6cd, #faf5ea)",
    greeting: "唔係你諗多咗，肯留意已經係好開始：",
    steps: [
      { href: "/milestones", title: "對照發展里程碑", desc: "0–6 歲語言及六大範疇，睇下孩子係咪真係慢。", time: "3 分鐘" },
      { href: "/screening", title: "做個免費早期篩查", desc: "國際常用 M-CHAT-R（16–30 個月），20 條問題即出方向。", time: "5 分鐘" },
      { href: "/cas", title: "了解去邊度正式評估", desc: "兒童體能智力測驗服務（CAS）點轉介、各區中心一覽。", time: "4 分鐘" },
      { href: "/journey", title: "睇清成條路點行", desc: "由察覺到接受服務的 6 步流程地圖，心裡有底。", time: "5 分鐘" },
    ],
  },
  {
    id: "waiting",
    emoji: "🧭",
    label: "評咗估，等緊政府服務",
    quote: "報告攞咗，話要輪候⋯⋯跟住其實要做啲咩？",
    gradient: "linear-gradient(160deg, #a5d8cc, #e0f2ee)",
    greeting: "輪候期唔使乾等。睇明份報告、知道等幾耐、諗定後備：",
    steps: [
      { href: "/grading", title: "睇明評估報告同分級", desc: "評估結果點決定服務種類、中央轉介系統點運作。", time: "5 分鐘" },
      { href: "/services", title: "認清各項政府服務", desc: "到校學前康復、特殊幼兒中心、E 位兼收逐樣拆解。", time: "6 分鐘" },
      { href: "/sccc", title: "查各區輪候現況", desc: "特殊幼兒中心逐間最後獲篩選日期，估算大約等幾耐。", time: "2 分鐘" },
      { href: "/pathways", title: "比較津貼 vs 自費兩條路", desc: "輪候期間可以點雙軌並行，一張流程圖睇晒。", time: "4 分鐘" },
    ],
  },
  {
    id: "training",
    emoji: "🎒",
    label: "想搵訓練幫孩子進步",
    quote: "唔想白等，坊間課程咁多、收費差咁遠，點揀好？",
    gradient: "linear-gradient(160deg, #b3cee2, #e7f0f7)",
    greeting: "揀訓練之前，先配對方向、識睇方法：",
    steps: [
      { href: "/match", title: "為孩子配對服務方向", desc: "答幾條問題，按年齡同需要配對合適嘅服務組合。", time: "2 分鐘" },
      { href: "/training-methods", title: "認識常見訓練方法", desc: "ABA、TEACCH、感統⋯⋯邊啲有實證、邊啲要留神。", time: "5 分鐘" },
      { href: "/directory", title: "篩選資源目錄", desc: "政府、NGO 同自費課程一個目錄搜晒，可以逐項篩。", time: "自行瀏覽" },
      { href: "/parents", title: "去家長特區攞實戰貼士", desc: "情緒應對訓練、感覺統合科普，屋企都做到嘅練習。", time: "自行瀏覽" },
    ],
  },
  {
    id: "inclusion",
    emoji: "🤝",
    label: "想了解關愛共融政策・學校",
    quote: "學校話會支援共融，實際上係點做？信唔信得過？",
    gradient: "linear-gradient(160deg, #c5dab8, #eef5e8)",
    greeting: "共融唔係口號。睇清政策點運作、學校實際有咩支援：",
    steps: [
      { href: "/special-schools", title: "睇明雙軌制與學校安排", desc: "融合教育 vs 特殊學校、EDB 點安排，共融學校支援現實講白。", time: "6 分鐘" },
      { href: "/services", title: "認識到校支援服務", desc: "到校學前康復服務（OPRS）：跨專業團隊點入校支援孩子同老師。", time: "5 分鐘" },
      { href: "/intelligences", title: "了解共融背後嘅理念", desc: "多元智能：每個孩子強項唔同，共融教育嘅根基。", time: "4 分鐘" },
      { href: "/inclusion-schools", title: "睇關愛共融・學校列表", desc: "62 所特殊學校官方名單逐間睇，仲教你點查主流學校嘅共融支援。", time: "3 分鐘" },
    ],
  },
  {
    id: "ally",
    emoji: "🏫",
    label: "我係老師／親友／街坊",
    quote: "身邊有 SEN 小朋友，想支持但驚講錯嘢做錯嘢。",
    gradient: "linear-gradient(160deg, #ecc5d6, #f9edf2)",
    greeting: "你嘅理解，對一個 SEN 家庭嚟講好重要：",
    steps: [
      { href: "/understanding", title: "認識・同理", desc: "點解同理唔等於同情、遇到時點反應先算尊重。", time: "6 分鐘" },
      { href: "/intelligences", title: "了解多元智能", desc: "每個孩子強項唔同——換個角度睇「唔同」。", time: "4 分鐘" },
      { href: "/faq", title: "常見問題快答", desc: "SEN 係咩、會唔會「好返」？基礎疑問一次過解。", time: "3 分鐘" },
      { href: "/resources", title: "收藏權威資源連結", desc: "官方同專業機構連結一覽，轉發俾有需要嘅家庭。", time: "1 分鐘" },
    ],
  },
];
