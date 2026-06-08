import type { JourneyStep } from "@/lib/types";

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    step: 1,
    title: "察覺",
    who: "家長 · 幼稚園 · 母嬰健康院 · 家庭醫生",
    what:
      "留意孩子的發展里程碑。若發現語言、動作、社交或行為上比同齡明顯落後或有異，先記錄具體情況。",
    tips: [
      "可先用網站的「自閉症早期篩查（M-CHAT-R）」初步了解（適用 16–30 個月）",
      "可參考母嬰健康院的兒童發展監察",
      "把觀察到的情況、頻率與例子記下，方便日後評估",
    ],
    links: [
      { label: "自閉症早期篩查（M-CHAT-R）", url: "/screening" },
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
    title: "評估與診斷（取得書面報告）",
    who: "衞生署 CAS（政府資助）或 私營心理學家（自費）",
    what:
      "由專業評估判定發展障礙的類別與程度，並出具「書面報告」——這份報告是日後申請服務的關鍵。取得報告有兩條路：① 政府資助評估（衞生署 CAS，免費／低收費但要輪候）；② 自費評估（私營臨床／教育心理學家，較快、收費因機構而異）。",
    tips: [
      "常用標準工具：香港學前兒童綜合發展評估（約 3 歲 4 個月至 6 歲）、美林-帕爾默兒童智力測驗修訂版 M-P-R（約 1 個月至 6 歲 3 個月）",
      "自費評估可較快攞到報告、更早開始輪候；宜核實評估者資歷及報告是否為社署接受",
      "CAS 如需醫療報告作申請用途，每份 HK$960、約 6 至 8 星期處理",
    ],
    links: [
      { label: "CAS 醫療報告網上申請", url: "https://eform.cefs.gov.hk/form/dh0118/tc/" },
      { label: "RehabGuide 學前兒童評估及轉介", url: "https://www.rehabguide.hk/evaluation_ss.php?id=1" },
    ],
  },
  {
    step: 4,
    title: "轉介社署（交 Form 2）",
    who: "社會福利署 — 康復服務中央轉介系統",
    what:
      "由社工（醫務社工／綜合家庭服務中心／主流幼稚園社工）提交「Form 2」轉介信、並附上第 3 步的評估書面報告，把孩子轉介至「康復服務中央轉介系統 — 學前兒童康復服務」統一輪候。2 歲以下可預早登記輪候特殊幼兒中心／兼收計劃。",
    tips: [
      "Form 2 必須附評估書面報告，所以要先完成第 3 步",
      "及早登記，縮短實際等候；可按地區選擇心儀服務單位",
    ],
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
