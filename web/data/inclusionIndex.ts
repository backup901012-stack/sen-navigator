// 「照顧學生個別差異～共融校園指標」樹圖數據 + 學校實際支援事實
// 指標來源：教育局《照顧學生個別差異～共融校園指標》2008 年 8 月第三版
// （港版 Index for Inclusion；2026-07 由官方 PDF 全文抽取核對）
// 人手/調適/津貼來源：各教育局通告及官方網頁（逐項附 source、2026-07 查證）

export const INDEX_SOURCE = {
  label: "教育局《照顧學生個別差異～共融校園指標》（2008 第三版）",
  // 教育局原載點已下架、改引家長智 Net（教育局家長網站）存檔（2026-07 實測有效）
  url: "https://siteparentprodstor.blob.core.windows.net/uploads/inclusive/7d96001ee77533716ca63408b8556003202/indicators-082008_tc.pdf",
  checkedAt: "2026-07",
};

/** 三個層面（文件原文框架） */
export const THREE_LAYERS = [
  { emoji: "💗", name: "建立共融文化", desc: "每一名成員均受重視；師生、家長、管理層一起建設包容互勵嘅校園。" },
  { emoji: "📜", name: "制訂共融政策", desc: "「共融」信念滲透喺學校政策；各類支援從學生成長需要出發。" },
  { emoji: "🛠️", name: "推動共融措施", desc: "措施反映文化與政策；教學同支援結合、消除學習及參與障礙。" },
];

export interface IndexDomain {
  code: string;
  emoji: string;
  name: string;
  count: number;
  /** 全部指標標題（照官方文件） */
  indicators: string[];
  /** 「實際支援學生」重點：具體可觀察準則例子（照官方文件） */
  highlights?: { title: string; items: string[] }[];
}

export const INDEX_DOMAINS: IndexDomain[] = [
  {
    code: "I",
    emoji: "🏢",
    name: "管理與組織",
    count: 10,
    indicators: [
      "員工發展活動有助教職員照顧學生的個別差異",
      "校方有協調各種支援措施",
      "校內氣氛融洽，無分彼此",
      "教職員與學校管理委員會合作無間",
      "教職員的專業知識獲充分運用",
      "學校的「特殊教育需要」政策正是共融校園政策",
      "學校協助所有新入職的員工融入校園",
      "員工的聘任和晉升安排均獲公平處理",
      "學校盡量改善校舍，方便所有人使用",
      "學校公平分配資源，以支援共融校園的建設",
    ],
    highlights: [
      {
        title: "支援學生嘅組織性安排（I.ii / I.vi / I.ix）",
        items: [
          "設立「學生支援小組」協調各項支援、委派主任級教師統籌",
          "盡早向有需要學生提供支援，唔使等專家評估先開始",
          "致力減少喺課堂時間將學生抽離本班",
          "校舍設施照顧聽障、視障、肢體傷殘人士需要",
        ],
      },
    ],
  },
  {
    code: "II",
    emoji: "📖",
    name: "學與教",
    count: 15,
    indicators: [
      "教職員設法消除學生在學習及參與上的障礙",
      "學校安排各類教學小組，讓所有學生都受到重視",
      "所有學生均能參與課堂學習",
      "教師一同制訂、推行與檢討教學計劃",
      "校方善用學生的差異，作為學與教的資源",
      "教職員發展資源，以支援學生的學習和參與",
      "課堂教學能切合學生的個別差異",
      "課堂能幫助學生了解個別差異",
      "教師關注為所有學生提供學習支援和參與機會",
      "教學助理關注為所有學生提供學習支援和參與機會",
      "學生積極投入學習",
      "學生進行協作學習",
      "所有學生均參與課外活動",
      "校方能藉着評估，提升所有學生的表現",
      "藉着家課促進所有學生的學習",
    ],
    highlights: [
      {
        title: "課程規劃嘅具體要求（II.vii 可觀察準則）",
        items: [
          "堂課包括個人課業、二人一組、分組活動同全班活動",
          "課堂活動多元化：討論、口頭匯報、寫作、繪畫、解難、圖書館、視聽教材、實作及資訊科技",
          "學生可用唔同方式記錄課業：數碼媒體、圖像、相片或錄音",
          "課堂切合學生唔同嘅學習速度同學習形式",
        ],
      },
      {
        title: "支援學生嘅人力運用（II.i / II.ii）",
        items: [
          "運用家長義工、朋輩導師、協作學習消除學習障礙",
          "教學小組盡量避免按成績分組、學生有平等轉組機會、小組經常重組",
        ],
      },
    ],
  },
  {
    code: "III",
    emoji: "🌤️",
    name: "校風及學生支援",
    count: 18,
    indicators: [
      "教職員、學校管理委員、學生和家長對共融校園的信念存有共識",
      "所有學生均受重視",
      "校方為新來港學生協調各種支援措施",
      "學生關顧政策是配合課程發展及學習支援政策的",
      "欺凌行為已減少",
      "停課處分的壓力已減少",
      "課堂管理建基於互相尊重",
      "校方幫助新入學的學生適應學校環境",
      "各種妨礙學生上學的因素已減少",
      "學校致力減少帶有歧視成分的措施",
      "學校對本區的學生來者不拒",
      "學校遵循《殘疾歧視條例》的《教育實務守則》，消減阻礙學生學習的屏障",
      "教職員與家長建立伙伴關係",
      "學校善用社區資源",
      "教職員和學生之間互相尊重",
      "學生互相幫助",
      "教職員合作無間",
      "校方對所有學生均寄望甚殷",
    ],
  },
  {
    code: "IV",
    emoji: "🌟",
    name: "學生表現",
    count: 6,
    indicators: [
      "學生有正面的自我形象",
      "學生積極學習",
      "學生的學業成績有進步",
      "學生的多元智能得以發展",
      "學生積極參與學校的活動",
      "學生已掌握各種學習技巧",
    ],
  },
];

/** 學校專業人手配置（按現行政策、逐項附官方依據） */
export const STAFFING = [
  {
    emoji: "🧑‍🏫",
    role: "特殊教育需要統籌主任（SENCO）",
    where: "所有公營普通中小學",
    mode: "常駐（校內教師職位）",
    note: "2019/20 學年起全面設立；取錄較多 SEN 學生嘅學校職級提升。搵學校支援，第一個接觸點就係 SENCO。",
    source: { label: "教育局通告第 8/2019 號", url: "https://applications.edb.gov.hk/circular/upload/EDBC/EDBC19008C.pdf" },
  },
  {
    emoji: "🧠",
    role: "校本教育心理學家（EP）",
    where: "所有公營普通中小學",
    mode: "定期到校（非常駐）",
    note: "校本教育心理服務 2016/17 起覆蓋全港公營中小學；「優化」版（EP 對學校 1:4、每學年到校不少於 30 日）分批擴展至取錄較多 SEN 學生嘅學校。",
    source: { label: "立法會教育事務委員會文件（2023-07）", url: "https://www.legco.gov.hk/yr2023/chinese/panels/ed/papers/ed20230707cb4-653-5-c.pdf" },
  },
  {
    emoji: "🗣️",
    role: "校本言語治療師（ST）",
    where: "公營普通中小學（分階段全面）",
    mode: "常額職位（約兩校一組共用 1 位）",
    note: "「加強校本言語治療服務」2019/20 學年起分階段推行，學校組合（多為兩校一組）開設常額校本言語治療師職位。",
    source: { label: "教育局通告第 13/2019 號", url: "https://applications.edb.gov.hk/circular/upload/EDBC/EDBC19013C.pdf" },
  },
  {
    emoji: "🖐️",
    role: "職業治療師（OT）／物理治療師（PT）",
    where: "資助特殊學校（按類別配置）",
    mode: "常駐專職醫療團隊",
    note: "公營普通（主流）學校並無常額 OT／PT 編制；OT／PT 常駐於資助特殊學校（連同護士等專職團隊、按學校類別配置）。主流學校學生嘅 OT／PT 服務一般經醫管局或自費途徑。",
    source: { label: "教育局 融情・特教（特殊學校）", url: "https://sense.edb.gov.hk/tc/special-education/categories-and-numbers-of-special-schools.html" },
  },
];

/** 考試及評估調適（讀寫障礙／ADHD 等） */
export const EXAM_ACCOMMODATIONS = {
  items: [
    { emoji: "⏱️", t: "延長作答時間" },
    { emoji: "🔍", t: "放大試卷字體" },
    { emoji: "🚪", t: "獨立或小組試室" },
    { emoji: "📢", t: "讀卷（讀題）服務" },
    { emoji: "✍️", t: "調適答題方式（如電腦作答）" },
    { emoji: "☕", t: "小休安排" },
  ],
  how: "校內測考：所有公營學校喺「全校參與」模式下，應按專業評估報告（如教育心理學家評估）為讀寫障礙、ADHD 等學生提供合理調適——冇公開「邊間學校做」名單，因為每間公營學校都有責任做；具體安排帶評估報告搵 SENCO 傾。公開試（DSE 等）：由考評局「特別考試安排」統一處理，經學校申請。",
  sources: [
    { label: "教育局《全校參與模式融合教育運作指南》", url: "https://sense.edb.gov.hk/uploads/page/integrated-education/guidelines/ie_guide_ch.pdf" },
    { label: "考評局 特別考試安排", url: "https://www.hkeaa.edu.hk/tc/candidates/special_needs_candidates/" },
  ],
};

/** 津貼與外購小組（ASD 社交／情緒課程） */
export const FUNDED_GROUPS = {
  points: [
    "學習支援津貼（LSG）：公營普通學校按取錄 SEN 學生嘅人數同支援層級獲恆常津貼，可用嚟增聘人手或外購專業服務（教育局通告第 6/2019 號）。",
    "「全校參與分層支援有自閉症的學生」計劃：2011/12 起試行、2020/21 學年起常規化——第二層支援由學校與非政府機構（NGO）協作，NGO 專業人員到校為自閉症學生開辦社交認知、人際溝通、情緒管理等小組訓練（即係社交故事小組／情緒紓緩課程呢類）。",
    "係咪「定期」開組視乎每間學校點運用資源——學校須喺網頁公佈支援 SEN 學生嘅措施（周年計劃／支援措施摘要），入學前可以上校網睇+直接問 SENCO。",
  ],
  sources: [
    { label: "教育局通告第 6/2019 號（學習支援津貼）", url: "https://applications.edb.gov.hk/circular/upload/EDBC/EDBC19006C.pdf" },
    { label: "融情・特教：全校參與分層支援有自閉症的學生", url: "https://sense.edb.gov.hk/tc/types-of-special-educational-needs/autism-spectrum-disorder/support-measures.html" },
  ],
};
