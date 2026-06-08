// 津助的家長／親屬資源中心（全港 23 間）
// 來源：社會福利署「List of 23 PRCs」（2025-07-11）家長提供之名單整理，2026-06
// 標記：mentalRecovery = 服務對象為精神復元人士的照顧者；em = 設少數族裔（EM）服務單位

export interface PrcCentre {
  district: string;
  name: string;
  address: string;
  tel: string;
  mentalRecovery?: boolean;
  em?: boolean;
}
export interface PrcRegion {
  region: string;
  centres: PrcCentre[];
}

export const PRC_REGIONS: PrcRegion[] = [
  {
    region: "香港島",
    centres: [
      { district: "中西區", name: "明愛家長資源中心（明愛）", address: "香港堅道 2-8 號明愛大廈 101 室", tel: "2843 4627", em: true },
      { district: "南區", name: "協康會大口環家長資源中心", address: "香港薄扶林大口環道 19 號 7 樓", tel: "3158 8371" },
      { district: "離島", name: "鄰舍輔導會樂聚家長資源中心", address: "新界大嶼山東涌逸東邨 1 號停車場一樓", tel: "3500 7160" },
      { district: "東區", name: "賽馬會家長資源中心", address: "香港筲箕灣愛東邨愛東樓地下 G1 室", tel: "2827 2830" },
      { district: "灣仔", name: "聖雅各福群會家庭喜聚", address: "香港灣仔軒尼詩道 288 號英皇集團中心 10 樓 1004 室", tel: "3614 6144" },
      { district: "灣仔", name: "聖雅各福群會家庭喜 Connect（精神復元照顧者）", address: "香港灣仔石水渠街 85 號 5 樓", tel: "5173 6996", mentalRecovery: true },
    ],
  },
  {
    region: "九龍東",
    centres: [
      { district: "黃大仙", name: "白普理家長資源中心（香港基督教服務處）", address: "九龍黃大仙東頭邨耀東樓地下翼", tel: "2718 7778" },
      { district: "觀塘", name: "香港基督教服務處 To-gather 家長資源中心（觀塘）", address: "九龍九龍灣宏開道 8 號其士商業中心 10 樓 1017-1018 室", tel: "3993 1055", em: true },
      { district: "西貢", name: "香港聾人福利促進會家長資源中心", address: "新界將軍澳唐俊街 21 號寶盈花園商場 1 樓 S16 號鋪", tel: "2178 1166" },
      { district: "九龍東", name: "浸信會愛羣社會服務處 — 精神復元人士照顧者資源及服務中心", address: "九龍彩虹牛池灣街地下 C 翼", tel: "2560 0651", mentalRecovery: true },
    ],
  },
  {
    region: "九龍西",
    centres: [
      { district: "九龍城", name: "明愛樂融家長資源中心（明愛）", address: "九龍紅磡（彩虹牛池灣街 37-39 號）紅磡商場中心 A 座 11 樓 09 室", tel: "3619 3977" },
      { district: "油尖旺", name: "協康會海富家長資源中心", address: "九龍旺角海富道海富苑海仁閣一樓", tel: "2777 5588", em: true },
      { district: "深水埗", name: "香港基督教服務處 To-gather 家長資源中心（深水埗）", address: "九龍長沙灣元洲街 362 號南昌薈一樓 1 及 2 號鋪", tel: "2483 9308" },
      { district: "九龍西", name: "東華三院「歇一歇」照顧者資源中心（精神復元照顧者）", address: "九龍深水埗昌華街富研樓 5 樓", tel: "5561 0516", mentalRecovery: true },
    ],
  },
  {
    region: "新界東",
    centres: [
      { district: "沙田", name: "救世軍「結伴行」家長資源中心", address: "新界火炭山尾街 18-24 號沙田商業中心 10 樓 1003、1005 及 1018 室", tel: "3614 5452" },
      { district: "大埔", name: "香港傷健協會情誼家長／親屬資源中心", address: "新界大埔寶湖道 3 號寶湖花園 105-105A 地下", tel: "2656 2138" },
      { district: "北區", name: "協康會粉嶺家長資源中心", address: "新界粉嶺祥華邨祥智樓 B 翼地下", tel: "2656 6211" },
      { district: "新界東", name: "新生精神康復會「家‧安泰」照顧者資源中心（精神復元照顧者）", address: "新界沙田美林邨美椿樓地下 1-8 室", tel: "2770 4488" },
    ],
  },
  {
    region: "新界西",
    centres: [
      { district: "荃灣", name: "香港耀能協會石圍角家長資源中心", address: "新界荃灣石圍角邨第一座停車場大樓 2 樓 202 室", tel: "2492 4200" },
      { district: "葵青", name: "明愛樂揚家長資源中心（明愛）", address: "新界葵涌興芳路 223 號都會廣場二座 11 樓 1107-08 室", tel: "3611 0861", em: true },
      { district: "屯門", name: "育智中心", address: "新界屯門友愛邨愛勇樓 124-125 號", tel: "2440 2413" },
      { district: "元朗", name: "聖雅各福群會家庭喜聚（天水圍）", address: "新界天水圍天恆邨停車場大樓 B 翼 5 樓", tel: "3921 3998", em: true },
      { district: "新界西", name: "香港聖公會「裕民」家長／親屬資源中心（精神復元照顧者）", address: "新界屯門寶恩臺 82 號康恩園", tel: "5529 0801", mentalRecovery: true },
    ],
  },
];

export const PRC_TOTAL = PRC_REGIONS.reduce((n, r) => n + r.centres.length, 0);
