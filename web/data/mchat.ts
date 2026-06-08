// M-CHAT-R/F™ 幼兒自閉症篩查表（修訂版及跟進版）繁體中文版 2018
// © 2009 Diana Robins, Deborah Fein & Marianne Barton
// 來源：www.mchatscreen.com（可免費用於臨床、研究及教育）
// 適用：16 至 30 個月幼兒。本工具為「篩查」，不能作診斷之用。

export interface MchatItem {
  no: number;
  text: string;
  example?: string;
  /** 代表「有風險」的答案：除第 2、5、12 題為「是」外，其餘皆為「否」 */
  riskAnswer: "yes" | "no";
}

export const MCHAT_ITEMS: MchatItem[] = [
  { no: 1, text: "如果你指向房間內的某樣東西，你的子女會注視它嗎？", example: "你指著一個玩具或動物時，你的子女會看著這個玩具或動物嗎？", riskAnswer: "no" },
  { no: 2, text: "你有沒有想過你的子女可能是聾的？", riskAnswer: "yes" },
  { no: 3, text: "你的子女玩假想遊戲嗎？", example: "假裝從空的杯子喝水，假裝打電話，假裝餵洋娃娃或毛公仔。", riskAnswer: "no" },
  { no: 4, text: "你的子女喜歡攀爬嗎？", example: "攀傢俬、遊樂場設施、或樓梯。", riskAnswer: "no" },
  { no: 5, text: "你的子女會在自己的眼睛附近作出一些異常的手指擺動嗎？", example: "你的子女會在自己眼睛附近擺動手指嗎？", riskAnswer: "yes" },
  { no: 6, text: "你的子女會用一隻手指指著物件以表達需要或尋求協助嗎？", example: "指著他／她觸碰不到的小食或玩具。", riskAnswer: "no" },
  { no: 7, text: "你的子女會用一根手指指著有趣的東西向你展示嗎？", example: "指向天空中的飛機或馬路上的貨車。", riskAnswer: "no" },
  { no: 8, text: "你的子女對其他孩子感興趣嗎？", example: "你的子女注視其他孩子、對他們笑或走近他們嗎？", riskAnswer: "no" },
  { no: 9, text: "你的子女純粹因與你分享而不是尋求幫助，而把東西拿過來給你看，或是會把東西舉著讓你看嗎？", example: "給你看一朵花，一隻動物毛公仔，或是一輛玩具貨車。", riskAnswer: "no" },
  { no: 10, text: "當你叫子女的名字時，他／她會有反應嗎？", example: "他／她會抬頭，說話或咿呀學語，或停止正在做的事情。", riskAnswer: "no" },
  { no: 11, text: "當你向子女微笑時，他／她會向你回以微笑嗎？", riskAnswer: "no" },
  { no: 12, text: "你的子女會因日常的噪音感到不安嗎？", example: "你的子女會因吸塵機或大聲的音樂而尖叫或哭嗎？", riskAnswer: "yes" },
  { no: 13, text: "你的子女會走路嗎？", riskAnswer: "no" },
  { no: 14, text: "當你和子女說話、與他／她遊戲、或替他／她穿衣時，他／她會看著你的眼睛嗎？", riskAnswer: "no" },
  { no: 15, text: "你的子女會嘗試模仿你做的事嗎？", example: "模仿你揮手再見，鼓掌，或發出有趣的聲音嗎？", riskAnswer: "no" },
  { no: 16, text: "如果你轉頭去看某些東西，你的子女會環顧周圍看你在看什麼嗎？", riskAnswer: "no" },
  { no: 17, text: "你的子女會嘗試令你去注視他／她嗎？", example: "他／她會因等待你的讚賞而看著你，或是會跟你說「看」、「看我」嗎？", riskAnswer: "no" },
  { no: 18, text: "當你告訴你的子女做某事時，他／她能理解嗎？", example: "如果你不用手指指著，你的子女能理解「把書放在椅子上」或「把毯子給我」嗎？", riskAnswer: "no" },
  { no: 19, text: "如果有新的事情發生，你的子女會望著你的臉，去看看你有什麼感覺嗎？", example: "如果他／她聽到奇怪或有趣的聲音，他／她會望向你的臉嗎？", riskAnswer: "no" },
  { no: 20, text: "你的子女喜歡動態活動嗎？", example: "被你搖來搖去或坐在你膝蓋上顛跳。", riskAnswer: "no" },
];

export interface MchatResult {
  band: "low" | "medium" | "high";
  title: string;
  color: string;
  advice: string;
}

/** 依官方計分：總分 = 有風險答案數目 */
export function scoreBand(score: number): MchatResult {
  if (score <= 2)
    return {
      band: "low",
      title: "低風險（0–2 分）",
      color: "green",
      advice:
        "目前篩查結果為低風險。如子女小於 24 個月，建議在兩歲時再篩查一次。若日後觀察到發展上的疑慮，仍應諮詢專業人員。",
    };
  if (score <= 7)
    return {
      band: "medium",
      title: "中等風險（3–7 分）",
      color: "amber",
      advice:
        "建議進行 M-CHAT-R/F 的「跟進問卷」（第二階段），以進一步釐清有風險的回答。跟進宜由專業人員（如醫生、心理學家、社工）協助進行；如跟進後分數仍為 2 分或以上，應轉介子女作診斷評估及評估早期介入需要。",
    };
  return {
    band: "high",
    title: "高風險（8–20 分）",
    color: "warm",
    advice:
      "可跳過跟進問卷，建議盡快轉介子女作診斷評估，並評估早期介入（康復服務）的需要。及早介入對發展非常重要。",
  };
}

export const MCHAT_INTRO =
  "M-CHAT-R/F 是國際常用的幼兒自閉症譜系障礙（ASD）篩查工具，適用於 16 至 30 個月的幼兒。它是「篩查」工具，用以及早識別需要進一步評估的孩子——篩查結果不等於診斷，最終須由專業人員評估判定。";

export const MCHAT_SOURCE = {
  label: "M-CHAT-R/F™ © 2009 Robins, Fein & Barton — www.mchatscreen.com",
  url: "https://mchatscreen.com/",
};
