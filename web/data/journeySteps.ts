import type { JourneyStep } from "@/lib/types";

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "察覺",
    who: "家長 · 幼稚園 · 母嬰健康院 · 家庭醫生",
    what:
      "留意孩子的發展里程碑。若發現語言、動作、社交或行為上比同齡明顯落後或有異，先記錄具體情況。",
    tips: [
      "可參考母嬰健康院的兒童發展監察",
      "把觀察到的情況、頻率與例子記下，方便日後評估",
    ],
    links: [
      { label: "衞生署 CAS — 轉介及評估", url: "https://www.dhcas.gov.hk/tc/referral.html" },
    ],
  },
  {
    step: 2,
    title: "轉介評估",
    who: "母嬰健康院 · 註冊西醫 · 心理學家 · 醫院",
    what:
      "取得「六個月內發出的正本轉介信」，致電或親臨所屬地區的兒童體能智力測驗中心，預約護士初步評估。（衞生署 CAS 不接受傳真轉介。）",
    tips: ["轉介信須為六個月內、正本", "服務對象為 12 歲以下兒童"],
    links: [
      { label: "衞生署 兒童體能智力測驗服務", url: "https://www.dhcas.gov.hk/tc/" },
    ],
  },
  {
    step: 3,
    title: "評估與診斷",
    who: "衞生署 兒童體能智力測驗服務（CAS）",
    what:
      "由跨專業團隊評估，判定發展障礙的類別與程度，並提供教育及康復建議。如需醫療報告作申請用途，每份申請收費 HK$960，約需 6 至 8 星期處理。",
    tips: [
      "撤回申請不退款；支票付款待過戶後才開始處理",
      "評估結果是日後編配服務的重要依據",
    ],
    links: [
      { label: "CAS 醫療報告網上申請", url: "https://eform.cefs.gov.hk/form/dh0118/tc/" },
    ],
  },
  {
    step: 4,
    title: "轉介社署",
    who: "社會福利署 — 康復服務中央轉介系統",
    what:
      "由社工或康復服務單位人員，把孩子轉介至社署「康復服務中央轉介系統」統一輪候。2 歲以下兒童可預早登記輪候特殊幼兒中心／兼收計劃。",
    tips: ["及早登記，縮短實際等候", "可按地區選擇心儀服務單位"],
    links: [
      { label: "社署 康復服務中央轉介系統", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/crsrehabwa/" },
    ],
  },
  {
    step: 5,
    title: "輪候（善用等候期）",
    who: "社會福利署 · 自費機構 · NGO",
    what:
      "系統按申請先後及地區編配名額。輪候期間切勿空等：可申領「學習訓練津貼」、使用過渡支援，或安排自費治療延續訓練。",
    tips: [
      "符合資格者可申領學習訓練津貼（SCCC 輪候者不設入息審查）",
      "輪候期是早期介入的關鍵，越早訓練越好",
    ],
    links: [
      { label: "社署 學習訓練津貼", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/tsp/" },
    ],
  },
  {
    step: 6,
    title: "獲配服務",
    who: "社署資助康復服務單位",
    what:
      "獲編配至合適的學前康復服務（到校服務 OPRS／早期教育及訓練中心 EETC／特殊幼兒中心 SCCC／兼收計劃 IP），開始接受康復訓練。",
    tips: ["與服務單位緊密溝通，了解訓練目標", "持續在家延續訓練成效最好"],
    links: [
      { label: "社署 學前康復服務總覽", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/" },
    ],
  },
];
