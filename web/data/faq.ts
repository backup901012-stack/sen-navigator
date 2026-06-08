import type { FaqItem } from "@/lib/types";

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-sen",
    category: "基礎認識",
    q: "咩係 SEN？我個孩子算唔算？",
    a: "SEN 即「特殊教育需要」(Special Educational Needs)。教育局界定 9 大類別，包括自閉症、注意力不足／過度活躍症、智力發展障礙、言語障礙、特殊學習困難等。學前階段亦常見「整體發展遲緩」「語言發展遲緩」。是否屬於 SEN 須由專業評估判定，若你察覺孩子發展比同齡明顯落後，建議先安排評估。",
    sources: [
      { label: "教育局 — SEN 類別", url: "https://sense.edb.gov.hk/tc/types-of-special-educational-needs/", checkedAt: "2026-06" },
    ],
  },
  {
    id: "where-assess",
    category: "評估",
    q: "去邊度做評估？要幾錢？",
    a: "政府方面由衞生署「兒童體能智力測驗服務 (CAS)」為 12 歲以下兒童評估。需要六個月內的正本轉介信（可由母嬰健康院、註冊西醫、心理學家或醫院發出）。若需醫療報告作申請用途，每份申請收費 HK$960，約 6 至 8 星期處理。亦可選擇自費到私營機構評估，收費因機構而異。",
    sources: [
      { label: "衞生署 CAS — 轉介及評估", url: "https://www.dhcas.gov.hk/tc/referral.html", checkedAt: "2026-06" },
    ],
  },
  {
    id: "grading",
    category: "制度",
    q: "聽人講 SEN 有「分級」，係點分？",
    a: "香港其實沒有對外公布的「等級 1／2／3」統一標籤。家長口中的「分級」實際是三個機制：① 按評估判定的殘疾程度，對應不同服務類型（輕度 → 兼收計劃／到校服務；中度至嚴重 → 特殊幼兒中心）；② 到校服務 (OPRS) 內部有第一層／第二層支援；③ 衞生署 CAS 的評估會判定發展障礙類別與程度。簡單講，服務強度是按評估結果而定，並非家長自行選擇等級。",
  },
  {
    id: "form2",
    category: "評估",
    q: "點樣先排到政府學前康復服務？聽過要 Form 2？",
    a: "要輪候政府資助學前康復服務，須經「康復服務中央轉介系統 — 學前兒童康復服務」，而轉介需要「Form 2」轉介信。Form 2 由社工（醫務社工／綜合家庭服務中心／主流幼稚園社工）提交，並須附上評估「書面報告」。即係話要先有評估報告先攞到 Form 2——取得報告有兩條路：① 政府資助評估（衞生署 CAS，免費／低收費但要輪候）；② 自費評估（私營心理學家，較快、收費因機構而異）。常用工具如香港學前兒童綜合發展評估（約 3 歲 4 個月至 6 歲）、美林-帕爾默兒童智力測驗修訂版 M-P-R（約 1 個月至 6 歲 3 個月）。具體程序以社署實務指引為準。",
    sources: [
      { label: "社署 — 康復服務中央轉介系統", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/centralref/", checkedAt: "2026-06" },
      { label: "RehabGuide — 學前兒童評估及轉介", url: "https://www.rehabguide.hk/evaluation_ss.php?id=1", checkedAt: "2026-06" },
    ],
  },
  {
    id: "services-diff",
    category: "服務",
    q: "到校服務、特殊幼兒中心、早訓中心、兼收計劃有咩分別？",
    a: "簡單分：到校服務 (OPRS) 是專業團隊走入幼稚園、校本支援輕度個案；早期教育及訓練中心 (EETC) 為初生至 6 歲做早期介入；特殊幼兒中心 (SCCC) 是全日制、針對中度至嚴重需要；兼收計劃 (IP) 讓輕度殘疾幼兒在普通幼稚園主流環境中接受支援。四者均經社署中央轉介系統統一輪候。",
    sources: [
      { label: "社署 — 學前康復服務總覽", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/", checkedAt: "2026-06" },
    ],
  },
  {
    id: "free",
    category: "費用",
    q: "政府學前康復服務收唔收費？",
    a: "大致免費或極低收費：到校服務 (OPRS) 免費；特殊幼兒中心學費全免（校巴按機構收費）；兼收計劃除幼稚園原有收費外無額外費用；早期教育及訓練中心每年基本費用約 HK$148。",
    sources: [
      { label: "社署 — 學前康復服務總覽", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/", checkedAt: "2026-06" },
    ],
  },
  {
    id: "waiting",
    category: "輪候",
    q: "輪候要等幾耐？等緊可以做啲咩？",
    a: "輪候時間因服務而異，特殊幼兒中心一般等候較長。輪候期間切勿空等：可申領「學習訓練津貼」（特殊幼兒中心輪候者不設入息審查）、使用過渡支援，或安排自費治療延續訓練。早期介入越早越好。最新輪候數字可參閱 data.gov.hk 每月更新資料。",
    sources: [
      { label: "社署 — 學習訓練津貼", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/tsp/", checkedAt: "2026-06" },
      { label: "data.gov.hk — 學前服務輪候人次", url: "https://data.gov.hk/tc-data/dataset/hk-swd-rm-ps-waiting-list-for-day-service", checkedAt: "2026-06" },
    ],
  },
  {
    id: "early-register",
    category: "輪候",
    q: "可唔可以提早登記輪候？",
    a: "可以。2 歲以下兒童可預早登記輪候特殊幼兒中心及兼收計劃。及早登記有助縮短實際等候時間。",
    sources: [
      { label: "社署 — 康復服務中央轉介系統", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/crsrehabwa/", checkedAt: "2026-06" },
    ],
  },
  {
    id: "private-fee",
    category: "自費",
    q: "自費治療點收費？點揀機構？",
    a: "香港私營兒童治療沒有官方統一收費表，言語治療據消委會 2021 年調查，首次評估約 $780–$4,000、其後每次約 $590–$3,500；職業治療、物理治療、ABA 等則因機構而異。選擇時建議核實治療師的學歷與資格（部分專業屬自願註冊），並比較收費與訓練內容。",
    sources: [
      { label: "消委會 — 言語治療收費調查", url: "https://www.consumer.org.hk/tc/article/538-speech-therapy-services/538-therapy-observation", checkedAt: "2026-06" },
    ],
  },
];

export const FAQ_CATEGORIES = ["基礎認識", "評估", "制度", "服務", "費用", "輪候", "自費"];
