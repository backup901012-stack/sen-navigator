import { chromium, webkit, devices } from "file:///D:/npm-global/node_modules/playwright/index.mjs";
const BASE="http://127.0.0.1:8099/sen-navigator";
const OUT="C:/Users/ADMINI~1/AppData/Local/Temp/claude/D--Users-Desktop--------SEN-----/552d6015-e86c-44e1-8ea5-9f2fe340711f/scratchpad";
// 桌面 1178 截 step2 新版
const b=await chromium.launch({channel:"chrome",headless:true});
let p=await (await b.newContext({viewport:{width:1178,height:820}})).newPage();
await p.goto(BASE+"/",{waitUntil:"load"}); await p.waitForTimeout(1500);
await p.locator('button[role="checkbox"]',{hasText:"關愛共融政策"}).first().click(); await p.waitForTimeout(300);
await p.locator("button",{hasText:"攞我嘅路線"}).first().click(); await p.waitForTimeout(700);
await p.screenshot({path:`${OUT}/step2_new_1178.png`}); // 視窗大小、非 fullPage
const firstStep=await p.locator('[role="dialog"] ol li a').first().innerText();
console.log("第一條路線:",firstStep.replace(/\s+/g," ").slice(0,30));
await b.close();
// 手機 WebKit 測「小學」路線導航
const wb=await webkit.launch({headless:true});
p=await (await wb.newContext({...devices["iPhone 13"]})).newPage();
await p.goto(BASE+"/",{waitUntil:"load"}); await p.waitForTimeout(1500);
await p.locator('button[role="checkbox"]',{hasText:"關愛共融政策"}).first().tap(); await p.waitForTimeout(300);
await p.locator("button",{hasText:"攞我嘅路線"}).first().tap(); await p.waitForTimeout(700);
const link=p.locator('[role="dialog"] a',{hasText:"搵有共融支援嘅小學"}).first();
const href=await link.getAttribute("href");
await link.tap(); await p.waitForTimeout(3000);
const url=p.url(); const has507=(await p.locator("body").innerText()).includes("507");
console.log(`小學路線 href=${href} → 導航後 URL=${url.replace(BASE,"")} 有507間=${has507}`);
await wb.close();
