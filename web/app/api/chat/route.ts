import { FAQ_ITEMS } from "@/data/faq";

export const runtime = "nodejs";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `你是「SEN 小孩導航員」網站的 AI 助理，服務香港 SEN（特殊教育需要）兒童的家長。

規則：
1. 只回答與香港 SEN 學前資源相關的問題（政府學前康復服務、評估、轉介、輪候、自費課程等）。其他話題請禮貌引導回主題。
2. 用繁體中文（香港用語）、語氣親切、易明、簡潔。
3. 絕不捏造數字、收費、輪候時間或政策。不確定就說「建議向官方／機構直接查證」並提供官方方向。
4. 你不是醫生或治療師，不作診斷。涉及孩子狀況時，建議家長安排專業評估（衞生署兒童體能智力測驗服務）。
5. 適時引導用戶到網站功能：服務配對 (/match)、資源目錄 (/directory)、申請流程 (/journey)、評估與分級 (/grading)。
6. 重要事實可附「資料以官方公開資訊整理、僅供參考」的提醒。

以下是常見問題參考資料，可據此回答：
${FAQ_ITEMS.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n")}`;

const FALLBACK = `多謝你嘅提問！AI 即時對話功能暫未啟用（需設定 API 金鑰）。

你可以即時用以下方式搵答案：
• 查看「常見問題」，已涵蓋評估、服務分別、收費、輪候等
• 用「服務配對」工具，輸入孩子資料即有方向建議
• 「申請流程」頁有完整六步指引

如急需協助，建議直接聯絡衞生署兒童體能智力測驗服務或社會福利署。`;

// 基本記憶體限流（每實例、防濫用刷 API；正式環境建議改用 Upstash/Redis）
const RATE = new Map<string, { count: number; ts: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 15;

function rateLimited(req: Request): boolean {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const rec = RATE.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    RATE.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  if (rateLimited(req)) {
    return Response.json(
      { reply: "查詢太頻繁，請稍候片刻再試。", rateLimited: true },
      { status: 429 }
    );
  }

  let messages: ChatMessage[] = [];
  try {
    const body = await req.json();
    messages = Array.isArray(body.messages) ? body.messages : [];
  } catch {
    return Response.json({ error: "invalid body" }, { status: 400 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ reply: FALLBACK, fallback: true });
  }

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-haiku-4-5-20251001",
        max_tokens: 1024,
        system: SYSTEM_PROMPT,
        messages: messages.slice(-10).map((m) => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!res.ok) {
      return Response.json({ reply: FALLBACK, fallback: true });
    }
    const data = await res.json();
    const reply =
      data?.content?.map((c: { text?: string }) => c.text || "").join("") ||
      FALLBACK;
    return Response.json({ reply });
  } catch {
    return Response.json({ reply: FALLBACK, fallback: true });
  }
}
