// 特殊幼兒中心 (SCCC) 實名清單與輪候指標
// 來源：社會福利署「特殊幼兒中心 — 最後獲篩選個案的申請日期」
// 更新日期：2026-04-30（資料以社署為準、會變動）

export interface ScccCentre {
  district: string;      // 分區（中文）
  districtEn: string;    // 分區（英文）
  code: string;          // 中心編號
  nameZh: string;        // 中心名稱（中）
  nameEn: string;        // 中心名稱（英）
  lastApp: string;       // 最後獲篩選個案的申請日期 MM/YYYY
  residential: boolean;  // 是否設住宿
}

/** 社署數據更新日期 */
export const SCCC_UPDATE = "2026-04-30";
/** 推算輪候時長的基準月份（= 更新月份） */
export const SCCC_AS_OF = "2026-04";

export const SCCC_CENTRES: ScccCentre[] = [
  {
    "district": "中西區",
    "districtEn": "Central & Western",
    "code": "PR019",
    "nameZh": "母親的抉擇特殊幼兒住宿中心 (住宿）",
    "nameEn": "(R019) Mother's Choice Wee Care Home (Residential)",
    "lastApp": "07/2025",
    "residential": true
  },
  {
    "district": "灣仔",
    "districtEn": "Wan Chai",
    "code": "PS013",
    "nameZh": "協康會灣仔中心",
    "nameEn": "(S013) HHS Wan Chai Centre",
    "lastApp": "02/2026",
    "residential": false
  },
  {
    "district": "灣仔",
    "districtEn": "Wan Chai",
    "code": "PS028",
    "nameZh": "香港基督教服務處摩理臣山兒童發展中心 (特殊幼兒中心)",
    "nameEn": "(S028) HKCS Morrison Hill Child Development Centre (SCCC Section)",
    "lastApp": "04/2026",
    "residential": false
  },
  {
    "district": "東區",
    "districtEn": "Eastern",
    "code": "PS048",
    "nameZh": "東華三院北角兒童發展中心(以英語為母語的幼兒而設)",
    "nameEn": "(S048) TWGHs North Point Child Development Centre (for English-speaking children)",
    "lastApp": "02/2024",
    "residential": false
  },
  {
    "district": "東區",
    "districtEn": "Eastern",
    "code": "PS015",
    "nameZh": "協康會環翠中心 (特殊幼兒中心)",
    "nameEn": "(S015) HHS Wan Tsui Centre (SCCC Section)",
    "lastApp": "04/2026",
    "residential": false
  },
  {
    "district": "南區",
    "districtEn": "Southern",
    "code": "PR007",
    "nameZh": "香港耀能協會鴨脷洲幼兒中心 (設有住宿部份）",
    "nameEn": "(R007) SAHK Apleichau Pre-school Centre (Residential)",
    "lastApp": "02/2025",
    "residential": true
  },
  {
    "district": "南區",
    "districtEn": "Southern",
    "code": "PS002",
    "nameZh": "協康會慶華中心 (特殊幼兒中心)",
    "nameEn": "(S002) HHS Catherine Lo Centre (SCCC Section)",
    "lastApp": "02/2026",
    "residential": false
  },
  {
    "district": "南區",
    "districtEn": "Southern",
    "code": "PS026",
    "nameZh": "心光幼兒中心 (日間特殊幼兒中心) (為視覺受損兒童而設)",
    "nameEn": "(S026)  Ebenezer Child Care Centre (SCCC Section) (for children with moderate to severe visual impairment or blindness)",
    "lastApp": "02/2026",
    "residential": false
  },
  {
    "district": "南區",
    "districtEn": "Southern",
    "code": "PS049",
    "nameZh": "心光幼兒中心 (日間特殊幼兒中心) (為中度至嚴重殘疾而患有懷疑或輕度視覺受損的兒童而設)",
    "nameEn": "(S049)  Ebenezer Child Care Centre (SCCC Section) (for children of moderate to severe disabilities with suspected or mild visual impairment)",
    "lastApp": "03/2025",
    "residential": false
  },
  {
    "district": "南區",
    "districtEn": "Southern",
    "code": "PR025",
    "nameZh": "心光幼兒中心 (住宿) (為患有中度至嚴重視覺受損或失明的兒童而設)",
    "nameEn": "(R025)  Ebenezer Child Care Centre (Residential)(for children with moderate to severe visual impairment or blindness)",
    "lastApp": "05/2023",
    "residential": true
  },
  {
    "district": "南區",
    "districtEn": "Southern",
    "code": "PR026",
    "nameZh": "心光幼兒中心 (住宿) (為中度至嚴重殘疾而患有懷疑或輕度視覺受損的兒童而設)",
    "nameEn": "(R026) Ebenezer Child Care Centre (Residential section) (for children of moderate to severe disabilities with suspected or mild visual impairment)",
    "lastApp": "08/2022",
    "residential": true
  },
  {
    "district": "南區",
    "districtEn": "Southern",
    "code": "PS007",
    "nameZh": "香港耀能協會鴨脷洲幼兒中心 (日間特殊幼兒中心)",
    "nameEn": "(S007) SAHK Apleichau Pre-school Centre (SCCC Section)",
    "lastApp": "09/2025",
    "residential": false
  },
  {
    "district": "離島區",
    "districtEn": "Islands",
    "code": "PS041",
    "nameZh": "香港小童群益會「樂航」兒童早期發展中心(東涌) (特殊幼兒中心)",
    "nameEn": "(S041) BGCA “SAIL” Early Child Development Centre (Tung Chung) (SCCC section)",
    "lastApp": "01/2026",
    "residential": false
  },
  {
    "district": "離島區",
    "districtEn": "Islands",
    "code": "PS025",
    "nameZh": "協康會東涌中心 (特殊幼兒中心)",
    "nameEn": "(S025) HHS Tung Chung Centre (SCCC Section)",
    "lastApp": "10/2025",
    "residential": false
  },
  {
    "district": "觀塘",
    "districtEn": "Kwun Tong",
    "code": "PS039",
    "nameZh": "香港耀能協會安泰幼兒中心 (特殊幼兒中心)",
    "nameEn": "(S039) SAHK On Tai Pre-school Centre (SCCC section)",
    "lastApp": "01/2025",
    "residential": false
  },
  {
    "district": "觀塘",
    "districtEn": "Kwun Tong",
    "code": "PS038",
    "nameZh": "協康會鯉魚門中心(特殊幼兒中心)",
    "nameEn": "(S038) Heep Hong Society Lei Yue Mun Centre (SCCC section)",
    "lastApp": "05/2025",
    "residential": false
  },
  {
    "district": "觀塘",
    "districtEn": "Kwun Tong",
    "code": "PS003",
    "nameZh": "協康會王石崇傑紀念中心",
    "nameEn": "(S003) HHS Mary Wong Centre",
    "lastApp": "06/2025",
    "residential": false
  },
  {
    "district": "黃大仙",
    "districtEn": "Wong Tai Sin",
    "code": "PS032",
    "nameZh": "保良局曹金霖幼兒學習中心 (特殊幼兒中心)",
    "nameEn": "(S032) PLK Chao King Lin Early Learning Centre (SCCC Section)",
    "lastApp": "02/2026",
    "residential": false
  },
  {
    "district": "黃大仙",
    "districtEn": "Wong Tai Sin",
    "code": "PS033",
    "nameZh": "鄰舍輔導會陳蔭川欣康幼兒中心(特殊幼兒中心)",
    "nameEn": "(S033) NAAC Chan Yin Chuen Child Enrichment Centre (SCCC Section)",
    "lastApp": "02/2026",
    "residential": false
  },
  {
    "district": "黃大仙",
    "districtEn": "Wong Tai Sin",
    "code": "PS043",
    "nameZh": "路德會凝趣兒童發展中心 (特殊幼兒中心)",
    "nameEn": "(S043) Amazing Lutheran Child Development Centre (SCCC section)",
    "lastApp": "02/2026",
    "residential": false
  },
  {
    "district": "黃大仙",
    "districtEn": "Wong Tai Sin",
    "code": "PR018",
    "nameZh": "香港耀能協會賽馬會方心淑引導式教育中心 (住宿部份) (請自行向中心申請)",
    "nameEn": "(R018) SAHK Jockey Club Marion Fang Conductive Learning Centre (Residential) (Direct application to the centre)",
    "lastApp": "03/2025",
    "residential": true
  },
  {
    "district": "黃大仙",
    "districtEn": "Wong Tai Sin",
    "code": "PS018",
    "nameZh": "香港耀能協會賽馬會方心淑引導式教育中心 (日間特殊幼兒中心) (請自行向中心申請)",
    "nameEn": "(S018) SAHK Jockey Club Marion Fang Conductive Learning Centre (SCCC Section) (Direct application to the centre)",
    "lastApp": "03/2025",
    "residential": false
  },
  {
    "district": "黃大仙",
    "districtEn": "Wong Tai Sin",
    "code": "PS008",
    "nameZh": "香港耀能協會橫頭磡幼兒中心",
    "nameEn": "(S008) SAHK Wang Tau Hom Pre-school Centre",
    "lastApp": "04/2026",
    "residential": false
  },
  {
    "district": "九龍城",
    "districtEn": "Kowloon City",
    "code": "PD002",
    "nameZh": "香港聾人福利促進會白普理幼兒中心(為聽覺受損兒童而設）",
    "nameEn": "(D002) HKSD Bradbury Child Care Centre (for hearing impaired children)",
    "lastApp": "07/2025",
    "residential": false
  },
  {
    "district": "深水埗",
    "districtEn": "Shamshuipo",
    "code": "PS047",
    "nameZh": "路德會凝悅兒童發展中心(特殊幼兒中心)",
    "nameEn": "(S047) Bravo Lutheran Child Development Centre (SCCC Section)",
    "lastApp": "02/2026",
    "residential": false
  },
  {
    "district": "深水埗",
    "districtEn": "Shamshuipo",
    "code": "PS022",
    "nameZh": "協康會長沙灣中心",
    "nameEn": "(S022) HHS Cheung Sha Wan Centre",
    "lastApp": "03/2025",
    "residential": false
  },
  {
    "district": "深水埗",
    "districtEn": "Shamshuipo",
    "code": "PS034",
    "nameZh": "香港耀能協會白田幼兒中心 (特殊幼兒中心)",
    "nameEn": "(S034) SAHK Pak Tin Pre-School Centre (SCCC Section)",
    "lastApp": "04/2026",
    "residential": false
  },
  {
    "district": "深水埗",
    "districtEn": "Shamshuipo",
    "code": "PS045",
    "nameZh": "保良局倪文玲(海達)兒童發展中心（特殊幼兒中心）",
    "nameEn": "(S045) Po Leung Kuk Malina Ngai (Hoi Tat) Child Development Centre  (SCCC Section)",
    "lastApp": "04/2026",
    "residential": false
  },
  {
    "district": "深水埗",
    "districtEn": "Shamshuipo",
    "code": "PS024",
    "nameZh": "協康會富昌中心 (特殊幼兒中心)",
    "nameEn": "(S024) HHS Fu Cheong Centre(SCCC Section)",
    "lastApp": "05/2025",
    "residential": false
  },
  {
    "district": "深水埗",
    "districtEn": "Shamshuipo",
    "code": "PS010",
    "nameZh": "香港耀能協會石硤尾幼兒中心 (特殊幼兒中心)",
    "nameEn": "(S010) SAHK Shek Kip Mei Pre-school Centre (SCCC Section)",
    "lastApp": "07/2025",
    "residential": false
  },
  {
    "district": "深水埗",
    "districtEn": "Shamshuipo",
    "code": "PS042",
    "nameZh": "保良局倪文玲(深水埗)兒童發展中心 (特殊幼兒中心)",
    "nameEn": "(S042) Po Leung Kuk Malina Ngai (Sham Shui Po) Child Development Centre (SCCC Section)",
    "lastApp": "10/2025",
    "residential": false
  },
  {
    "district": "荃灣",
    "districtEn": "Tsuen Wan",
    "code": "PS027",
    "nameZh": "香港耀能協會象山幼兒中心 (特殊幼兒中心)",
    "nameEn": "(S027) SAHK Cheung Shan Pre-school Centre (SCCC Section)",
    "lastApp": "01/2026",
    "residential": false
  },
  {
    "district": "荃灣",
    "districtEn": "Tsuen Wan",
    "code": "PR024",
    "nameZh": "仁濟醫院羅氏基金護幼中心暨宿舍 (住宿)",
    "nameEn": "(R024) YCH Law's Foundation Child Care Centre cum Hostel (Residential)",
    "lastApp": "04/2026",
    "residential": true
  },
  {
    "district": "荃灣",
    "districtEn": "Tsuen Wan",
    "code": "PS009",
    "nameZh": "香港耀能協會石圍角幼兒中心",
    "nameEn": "(S009) SAHK Shek Wai Kok Pre-school Centre",
    "lastApp": "08/2025",
    "residential": false
  },
  {
    "district": "荃灣",
    "districtEn": "Tsuen Wan",
    "code": "PS004",
    "nameZh": "協康會大窩口中心 (特殊幼兒中心)",
    "nameEn": "(S004) HHS Tai Wo Hau Centre (SCCC Section)",
    "lastApp": "12/2024",
    "residential": false
  },
  {
    "district": "青衣",
    "districtEn": "Tsing Yi",
    "code": "PS053",
    "nameZh": "仁濟醫院孫蔡吐媚兒童成長發展中心",
    "nameEn": "(S053) YCH Suen Choi To May Child Development Centre",
    "lastApp": "10/2025",
    "residential": false
  },
  {
    "district": "將軍澳",
    "districtEn": "Tseung Kwan O",
    "code": "PS023",
    "nameZh": "協康會陳宗漢紀念中心",
    "nameEn": "(S023) HHS Chan Chung Hon Centre",
    "lastApp": "03/2026",
    "residential": false
  },
  {
    "district": "將軍澳",
    "districtEn": "Tseung Kwan O",
    "code": "PS052",
    "nameZh": "香港聾人福利促進會尚德幼兒中心(為聽覺受損兒童而設）",
    "nameEn": "(S052) HKSD Sheung Tak Child Care Centre (for children of moderate to severe disabilities with suspected, mild or moderate hearing impairment)",
    "lastApp": "05/2024",
    "residential": false
  },
  {
    "district": "將軍澳",
    "districtEn": "Tseung Kwan O",
    "code": "PS030",
    "nameZh": "協康會裕明中心 (特殊幼兒中心)",
    "nameEn": "(S030) HHS Yu Ming Centre (SCCC Section)",
    "lastApp": "09/2025",
    "residential": false
  },
  {
    "district": "將軍澳",
    "districtEn": "Tseung Kwan O",
    "code": "PD001",
    "nameZh": "香港聾人福利促進會尚德幼兒中心(為聽覺受損兒童而設）",
    "nameEn": "(D001) HKSD Sheung Tak Child Care Centre (for hearing impaired children)",
    "lastApp": "10/2025",
    "residential": false
  },
  {
    "district": "將軍澳",
    "districtEn": "Tseung Kwan O",
    "code": "PS044",
    "nameZh": "協康會雍明中心（特殊幼兒中心)",
    "nameEn": "(S044) HHS Yung Ming Centre (SCCC section)",
    "lastApp": "10/2025",
    "residential": false
  },
  {
    "district": "沙田",
    "districtEn": "Shatin",
    "code": "PS051",
    "nameZh": "香港小童群益會「樂航」兒童早期發展中心 (馬鞍山) (特殊幼兒中心)",
    "nameEn": "(S051) BGCA \"SAIL\" Early Child Development Centre (Ma On Shan) (SCCC section)",
    "lastApp": "04/2026",
    "residential": false
  },
  {
    "district": "沙田",
    "districtEn": "Shatin",
    "code": "PS005",
    "nameZh": "協康會秦石中心",
    "nameEn": "(S005) HHS Chun Shek Centre",
    "lastApp": "09/2025",
    "residential": false
  },
  {
    "district": "沙田",
    "districtEn": "Shatin",
    "code": "PS046",
    "nameZh": "救世軍駿洋幼兒中心（特殊幼兒中心）",
    "nameEn": "(S046) The Salvation Army Chun Yeung Child Care Centre  (SCCC Section)",
    "lastApp": "10/2025",
    "residential": false
  },
  {
    "district": "沙田",
    "districtEn": "Shatin",
    "code": "PS011",
    "nameZh": "香港耀能協會隆亨幼兒中心 (特殊幼兒中心)",
    "nameEn": "(S011) SAHK Lung Hang Pre-school Centre (SCCC Section)",
    "lastApp": "11/2025",
    "residential": false
  },
  {
    "district": "沙田",
    "districtEn": "Shatin",
    "code": "PS031",
    "nameZh": "鄰舍輔導會啟康幼兒中心(特殊幼兒中心)",
    "nameEn": "(S031) NAAC Child Enlightenment Centre (SCCC Section)",
    "lastApp": "12/2025",
    "residential": false
  },
  {
    "district": "大埔",
    "districtEn": "Tai Po",
    "code": "PS040",
    "nameZh": "匡智松嶺學前兒童中心 (特殊幼兒中心)",
    "nameEn": "(S040) Hong Chi Pinehill Pre-school Centre (SCCC section)",
    "lastApp": "03/2026",
    "residential": false
  },
  {
    "district": "大埔",
    "districtEn": "Tai Po",
    "code": "PS017",
    "nameZh": "協康會雷瑞德夫人中心",
    "nameEn": "(S017) HHS Alice Louey Centre",
    "lastApp": "09/2025",
    "residential": false
  },
  {
    "district": "大埔",
    "districtEn": "Tai Po",
    "code": "PR001",
    "nameZh": "匡智會匡智松嶺學前兒童中心 (住宿）",
    "nameEn": "(R001) HCA Hong Chi Pinehill Pre-school Centre (Residential)",
    "lastApp": "12/2025",
    "residential": true
  },
  {
    "district": "大埔",
    "districtEn": "Tai Po",
    "code": "PS037",
    "nameZh": "匡智會匡智廣福學前兒童中心 (特殊幼兒中心)",
    "nameEn": "(S037) HCA Hong Chi Kwong Fuk Pre-School Centre (SCCC Section)",
    "lastApp": "12/2025",
    "residential": false
  },
  {
    "district": "北區(上水及粉嶺)",
    "districtEn": "North (Sheung Shui, Fanling)",
    "code": "PS014",
    "nameZh": "協康會天平中心",
    "nameEn": "(S014) HHS Tin Ping Centre",
    "lastApp": "01/2025",
    "residential": false
  },
  {
    "district": "北區(上水及粉嶺)",
    "districtEn": "North (Sheung Shui, Fanling)",
    "code": "PS020",
    "nameZh": "香港基督教服務處祥華特殊幼兒中心",
    "nameEn": "(S020) HKCS Cheung Wah Special Child Care Centre",
    "lastApp": "11/2024",
    "residential": false
  },
  {
    "district": "元朗",
    "districtEn": "Yuen Long",
    "code": "PS021",
    "nameZh": "協康會水邊圍中心",
    "nameEn": "(S021) HHS Shui Pin Wai Centre",
    "lastApp": "04/2024",
    "residential": false
  },
  {
    "district": "元朗",
    "districtEn": "Yuen Long",
    "code": "PS029",
    "nameZh": "保良局倪文玲(元朗)兒童發展中心 (特殊幼兒中心)",
    "nameEn": "(S029) Po Leung Kuk Malina Ngai (Yuen Long) Child Development Centre (SCCC Section)",
    "lastApp": "05/2024",
    "residential": false
  },
  {
    "district": "屯門",
    "districtEn": "Tuen Mun",
    "code": "PS001",
    "nameZh": "香港明愛樂興幼兒中心",
    "nameEn": "(S001) Caritas Lok Hing Child Care Centre",
    "lastApp": "02/2025",
    "residential": false
  },
  {
    "district": "屯門",
    "districtEn": "Tuen Mun",
    "code": "PS016",
    "nameZh": "中華基督教會香港區會屯門特殊幼兒中心",
    "nameEn": "(S016) HKCCCC Tuen Mun Special Child Care Centre",
    "lastApp": "03/2025",
    "residential": false
  },
  {
    "district": "屯門",
    "districtEn": "Tuen Mun",
    "code": "PS036",
    "nameZh": "鄰舍輔導會景康幼兒中心 (特殊幼兒中心)",
    "nameEn": "(S036) NAAC Child Advancement Centre (SCCC Section)",
    "lastApp": "06/2024",
    "residential": false
  },
  {
    "district": "屯門",
    "districtEn": "Tuen Mun",
    "code": "PS050",
    "nameZh": "協康會上海總會菁田中心（特殊幼兒中心）",
    "nameEn": "(S050) HHS Shanghai Fraternity Association Ching Tin Center (SCCC Section)",
    "lastApp": "11/2024",
    "residential": false
  },
  {
    "district": "天水圍",
    "districtEn": "Tin Shui Wai",
    "code": "PS035",
    "nameZh": "東華三院廖烈武伉儷兒童發展中心 (特殊幼兒中心)",
    "nameEn": "(S035) TWGHs Mr and Mrs Liu Lit Mo Child Development Centre (SCCC Section)",
    "lastApp": "02/2024",
    "residential": false
  }
];

/** 以 lastApp 推算「由申請到獲篩選」約多少個月（逐間、非平均） */
export function monthsWaited(lastApp: string): number | null {
  const m = lastApp.match(/^(\d{1,2})\/(\d{4})$/);
  if (!m) return null;
  const appM = parseInt(m[1], 10), appY = parseInt(m[2], 10);
  const [ay, am] = SCCC_AS_OF.split("-").map(Number);
  return (ay - appY) * 12 + (am - appM);
}
