export interface ResourceLink {
  label: string;
  url: string;
  note?: string;
}
export interface ResourceGroup {
  title: string;
  items: ResourceLink[];
}

export const RESOURCE_GROUPS: ResourceGroup[] = [
  {
    title: "政府官方",
    items: [
      { label: "社署 — 學前康復服務總覽", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/" },
      { label: "社署 — 到校學前康復服務 OPRS", url: "https://www.swd.gov.hk/oprs/index_tc.htm" },
      { label: "社署 — 早期教育及訓練中心 EETC", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/earlyeduca/" },
      { label: "社署 — 特殊幼兒中心 SCCC", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/specialchi/" },
      { label: "社署 — 兼收弱能兒童計劃 IP", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/integrated2/" },
      { label: "社署 — 學習訓練津貼 TSP", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_serpresch/tsp/" },
      { label: "社署 — 康復服務中央轉介系統及輪候冊", url: "https://www.swd.gov.hk/tc/pubsvc/rehab/cat_crsrehab/crsrehabwa/" },
      { label: "衞生署 — 兒童體能智力測驗服務 CAS", url: "https://www.dhcas.gov.hk/tc/" },
      { label: "CAS — 轉介及評估", url: "https://www.dhcas.gov.hk/tc/referral.html" },
      { label: "CAS — 醫療報告網上申請", url: "https://eform.cefs.gov.hk/form/dh0118/tc/" },
      { label: "教育局 — 融合教育及特殊教育資訊網（SEN 類別）", url: "https://sense.edb.gov.hk/tc/types-of-special-educational-needs/" },
    ],
  },
  {
    title: "公開數據（即時數字）",
    items: [
      { label: "data.gov.hk — 弱能兒童學前服務輪候人次", url: "https://data.gov.hk/tc-data/dataset/hk-swd-rm-ps-waiting-list-for-day-service", note: "每月更新，最新輪候數字" },
      { label: "data.gov.hk — 到校學前康復服務名單", url: "https://data.gov.hk/tc-data/dataset/hk-swd-rm-list-of-oprs", note: "營辦機構完整名單" },
    ],
  },
  {
    title: "政策文件（名額與輪候沿革）",
    items: [
      { label: "立法會 — 學前康復服務答覆（2022-12-14）", url: "https://www.info.gov.hk/gia/general/202212/14/P2022121400203.htm" },
      { label: "立法會 — 特殊幼兒中心答覆（2024-03-27）", url: "https://www.info.gov.hk/gia/general/202403/27/P2024032700217.htm" },
    ],
  },
  {
    title: "消費者保障 / 自費收費參考",
    items: [
      { label: "消委會 — 言語治療服務收費調查", url: "https://www.consumer.org.hk/tc/article/538-speech-therapy-services/538-therapy-observation" },
    ],
  },
  {
    title: "實用 NGO（主要服務營辦機構）",
    items: [
      { label: "協康會 Heep Hong", url: "https://www.heephong.org/" },
      { label: "香港保護兒童會", url: "https://www.hkspc.org/" },
      { label: "香港基督教服務處", url: "https://www.hkcs.org/" },
      { label: "復康會 RehabGuide 一站式指南", url: "https://www.rehabguide.hk/" },
    ],
  },
];
