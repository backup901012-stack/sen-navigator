// 資助特殊學校名單（2023/2024、共 62 所）
// 來源：教育局「融情・特教」官方 PDF（2023 年 9 月更新、2026-07 抓取核對）
// https://sense.edb.gov.hk/uploads/page/special-education/categories-and-numbers-of-special-schools/list%20of%20aided%20sp%20schs%202324_tc.pdf
// 類別數目與 EDB 公開統計吻合：智障 43／群育 8／肢體傷殘 7／視障 2／聽障 1／醫院 1

export interface SpecialSchool {
  name: string;
  region: "香港島" | "九龍" | "新界";
  address: string;
  tel: string;
  website: string;
}

export const SP_SCHOOL_SOURCE = {
  label: "教育局 融情・特教：資助特殊學校名單（2023/2024）",
  url: "https://sense.edb.gov.hk/tc/special-education/categories-and-numbers-of-special-schools.html",
  checkedAt: "2026-07",
};

export const SPECIAL_SCHOOLS: Record<string, SpecialSchool[]> = {
  "智障兒童學校": [
    { name: "道慈佛社楊日霖紀念學校", region: "新界", address: "新界元朗天水圍天柏路6號", tel: "2617 8738", website: "http://www.yyl.edu.hk" },
    { name: "明愛賽馬會樂仁學校", region: "九龍", address: "九龍深水埗永康街121號", tel: "2742 4470", website: "http://www.lys.edu.hk" },
    { name: "明愛樂進學校", region: "新界", address: "新界沙田文禮路39號", tel: "2609 1135", website: "http://www.lokjun.edu.hk" },
    { name: "明愛樂勤學校", region: "新界", address: "新界天水圍天壇街17號", tel: "2528 5955", website: "http://www.lokkan.edu.hk" },
    { name: "明愛樂義學校", region: "香港島", address: "香港鯉景灣鯉景道51號", tel: "2886 1102", website: "http://lokyi.edu.hk/" },
    { name: "明愛樂群學校", region: "新界", address: "新界沙田穗禾路31號", tel: "2691 1281", website: "http://www.crs.edu.hk" },
    { name: "慈恩學校", region: "九龍", address: "九龍土瓜灣浙江街13號", tel: "2386 2010", website: "http://www.chiyun.edu.hk/" },
    { name: "才俊學校", region: "新界", address: "新界沙田大圍顯泰街2號", tel: "2608 2677", website: "http://www.choijun.edu.hk/" },
    { name: "基督教中國佈道會聖道學校", region: "九龍", address: "九龍油塘鯉魚門道60號", tel: "2750 2549", website: "http://www.holyword.edu.hk" },
    { name: "靈實恩光學校", region: "新界", address: "新界將軍澳安達臣道301號", tel: "2703 1722", website: "http://www.sunnyside.edu.hk" },
    { name: "香海正覺蓮社佛教普光學校", region: "新界", address: "新界粉嶺欣盛里2號", tel: "2669 4411", website: "http://www.pokwong.edu.hk" },
    { name: "匡智獅子會晨崗學校", region: "香港島", address: "香港跑馬地藍塘道159號", tel: "2575 4789", website: "http://www.hclions.edu.hk" },
    { name: "匡智翠林晨崗學校", region: "新界", address: "新界將軍澳翠林邨", tel: "2706 1881", website: "http://www.hcmstl.edu.hk" },
    { name: "匡智屯門晨崗學校", region: "新界", address: "新界屯門育青里2號", tel: "2455 3038", website: "http://www.mhs.edu.hk" },
    { name: "匡智屯門晨輝學校", region: "新界", address: "新界屯門青麟路2號", tel: "2462 0850", website: "http://www.hctmhope.edu.hk" },
    { name: "匡智元朗晨樂學校", region: "新界", address: "新界元朗元朗體育路11號", tel: "2551 1588", website: "http://www.yljoy.edu.hk/" },
    { name: "匡智屯門晨曦學校", region: "新界", address: "新界屯門育青里2號", tel: "2455 1615", website: "http://www.hctmml.edu.hk" },
    { name: "匡智元朗晨曦學校", region: "新界", address: "新界元朗錦綉花園荔枝北路133號", tel: "2482 2820", website: "http://www.hcmlsyl.edu.hk" },
    { name: "匡智松嶺學校", region: "新界", address: "新界大埔南坑大埔市地段第34號", tel: "2664 7437", website: "http://www.hcphs.edu.hk" },
    { name: "匡智松嶺第二校", region: "新界", address: "新界大埔南坑丈量約份第11約地段第1691號", tel: "2667 0911", website: "http://www.hcp2.edu.hk/" },
    { name: "匡智松嶺第三校", region: "新界", address: "新界大埔南坑", tel: "2665 5189", website: "https://admin.hcp3.edu.hk/" },
    { name: "匡智紹邦晨輝學校", region: "新界", address: "新界東涌松滿路9號", tel: "2570 2322", website: "http://www.hcspms.edu.hk/" },
    { name: "匡智張玉瓊晨輝學校", region: "新界", address: "新界葵涌荔景山路220號", tel: "2785 5623", website: "http://www.hcwmc.edu.hk" },
    { name: "天保民學校", region: "九龍", address: "九龍九龍塘聯福道11號", tel: "2336 5151", website: "http://www.mrs.edu.hk" },
    { name: "保良局陳麗玲(百周年)學校", region: "九龍", address: "九龍土瓜灣浙江街15號", tel: "2759 9381", website: "http://www.plkcs.edu.hk" },
    { name: "保良局羅氏信託學校", region: "新界", address: "新界元朗公園南路26號", tel: "2481 0828", website: "http://www.plklfs.edu.hk/" },
    { name: "保良局陳百強伉儷青衣學校", region: "新界", address: "新界青衣青芊街2號", tel: "2434 9922", website: "https://www.plkcpktys.edu.hk" },
    { name: "保良局余李慕芬紀念學校", region: "香港島", address: "香港北角和富道19號", tel: "2566 3805", website: "http://www.plkylmf.edu.hk" },
    { name: "禮賢會恩慈學校", region: "九龍", address: "九龍黃大仙鑽石山鳳德邨", tel: "2328 0362", website: "http://www.rcgs.edu.hk" },
    { name: "香港西區扶輪社匡智晨輝學校", region: "香港島", address: "香港柴灣興華邨第二期1號校舍", tel: "2558 8302", website: "http://www.rchchope.edu.hk/" },
    { name: "三水同鄉會劉本章學校", region: "新界", address: "新界葵涌葵盛邨第十座學校第三座校舍", tel: "2426 8474", website: "http://www.lpc.edu.hk" },
    { name: "路德會救主學校", region: "九龍", address: "九龍深水埗大埔道288號", tel: "2729 3929", website: "http://www.sls.edu.hk" },
    { name: "沙田公立學校", region: "新界", address: "新界沙田大圍積輝街15號", tel: "2691 1492", website: "http://www.shatinpublicschool.edu.hk" },
    { name: "中華基督教會基順學校", region: "九龍", address: "九龍觀塘順利邨(Ａ區)第一期屋邨小學校舍", tel: "2342 9818", website: "http://www.ccckss.edu.hk" },
    { name: "中華基督教會望覺堂啟愛學校", region: "九龍", address: "九龍深水埗深旺道110號", tel: "2393 0119", website: "http://www.cccmkckos.edu.hk/" },
    { name: "香港四邑商工總會陳南昌紀念學校", region: "新界", address: "新界葵涌榮芳路22號", tel: "2615 9048", website: "http://www.cncms.edu.hk" },
    { name: "賽馬會匡智學校", region: "香港島", address: "香港灣仔活道29號", tel: "2574 1134", website: "http://www.jchcs.edu.hk" },
    { name: "香港心理衛生會 - 臻和學校", region: "九龍", address: "九龍深水埗歌和老街53號", tel: "2777 3081", website: "http://www.mhahk-cws.edu.hk" },
    { name: "救世軍石湖學校", region: "新界", address: "新界上水石湖墟馬會道第八區", tel: "2670 0800", website: "http://www.shekwusch.edu.hk" },
    { name: "將軍澳培智學校", region: "新界", address: "新界將軍澳陶樂路9號", tel: "2349 7065", website: "http://www.puichi.edu.hk" },
    { name: "東華三院包玉星學校", region: "九龍", address: "九龍旺角西洋菜南街111號", tel: "2465 8887", website: "https://www.twghclpsp.edu.hk/" },
    { name: "東華三院群芳啟智學校", region: "九龍", address: "九龍石硤尾大坑東南山邨道28號", tel: "2778 7928", website: "http://www.twghkfkcsp.edu.hk" },
    { name: "東華三院徐展堂學校", region: "香港島", address: "香港華富邨瀑布灣道25號", tel: "2875 3077", website: "http://www.twghtttsp.edu.hk" },
  ],
  "視障兒童學校": [
    { name: "心光恩望學校", region: "香港島", address: "香港薄扶林薄扶林道131號", tel: "2817 0503", website: "http://www.ebenezer-enhs.edu.hk/" },
    { name: "心光學校", region: "香港島", address: "香港薄扶林薄扶林道131號", tel: "2817 6076", website: "http://www.ebenezer-es.edu.hk" },
  ],
  "聽障兒童學校": [
    { name: "路德會啟聾學校", region: "新界", address: "新界葵涌興盛路89號", tel: "2489 8298", website: "http://www.lsd.edu.hk" },
  ],
  "肢體傷殘兒童學校": [
    { name: "香港基督教服務處培愛學校", region: "新界", address: "新界屯門恆貴街6及8號", tel: "2490 2955", website: "http://www.pos.edu.hk/" },
    { name: "香港紅十字會甘迺迪中心", region: "香港島", address: "香港大口環大口環道15及17號", tel: "2817 0131", website: "http://www.jfk.edu.hk/" },
    { name: "香港紅十字會瑪嘉烈戴麟趾學校", region: "九龍", address: "九龍黃大仙牛池灣平定道東10號", tel: "2817 4832", website: "http://www.mts.edu.hk" },
    { name: "香港紅十字會雅麗珊郡主學校", region: "九龍", address: "九龍觀塘復康徑8及9號", tel: "2340 0911", website: "http://www.pas.edu.hk/" },
    { name: "香港耀能協會羅怡基紀念學校", region: "新界", address: "新界葵涌葵合街22號", tel: "2424 7766", website: "http://www.bmkms.edu.hk" },
    { name: "香港耀能協會賽馬會田綺玲學校", region: "新界", address: "新界大埔富忠里1號", tel: "2348 9506", website: "http://www.jcefs.edu.hk/" },
    { name: "香港耀能協會高福耀紀念學校", region: "新界", address: "新界沙田禾輋邨豐禾里2號", tel: "2697 6885", website: "http://www.kfims.edu.hk" },
  ],
  "群育學校": [
    { name: "明愛樂恩學校", region: "九龍", address: "九龍觀塘彩興路20號", tel: "2310 0440", website: "http://www.cmts.edu.hk" },
    { name: "明愛培立學校", region: "九龍", address: "九龍清水灣道6010地段", tel: "2320 3884", website: "http://www.pelletier.edu.hk" },
    { name: "香港青少年培育會陳南昌紀念學校", region: "香港島", address: "香港香港仔南朗山道38號", tel: "2518 0751", website: "http://www.hkjcc.edu.hk" },
    { name: "瑪利灣學校", region: "香港島", address: "香港香港仔南朗山道32號", tel: "2554 0168", website: "http://www.marycove.edu.hk" },
    { name: "香港扶幼會則仁中心學校", region: "九龍", address: "九龍深水埗歌和老街47號", tel: "2778 3981", website: "http://www.cycschool.edu.hk" },
    { name: "香港扶幼會許仲繩紀念學校", region: "九龍", address: "九龍深水埗東沙島街150號", tel: "2778 8061", website: "http://www.sbchcsms.edu.hk" },
    { name: "香港扶幼會盛德中心學校", region: "九龍", address: "九龍觀塘利安里2號Ａ", tel: "2711 4800", website: "http://www.shingtak.edu.hk" },
    { name: "東灣莫羅瑞華學校", region: "新界", address: "新界屯門旺賢街12號", tel: "2980 2383", website: "http://www.tws.edu.hk" },
  ],
  "醫院學校": [
    { name: "香港紅十字會醫院學校", region: "香港島", address: "香港西九龍海庭道19號9樓907室", tel: "2892 2885", website: "http://www.hkrchs.edu.hk" },
  ],
};