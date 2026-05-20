import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { NextRequest, NextResponse } from "next/server";
import { sendEmailLead } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendTelegramLead } from "@/lib/telegram";
import type { StoredLead } from "@/lib/types";
import { leadFormSchema, sanitizeLeadInput } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT = {
  limit: 5,
  windowMs: 10 * 60 * 1000,
};

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit(ip, RATE_LIMIT);

  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message: "Слишком много заявок подряд. Попробуйте отправить форму чуть позже.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimit.retryAfter),
        },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Не удалось прочитать данные формы." },
      { status: 400 },
    );
  }

  const sanitizedInput = sanitizeLeadInput(body);
  const parsed = leadFormSchema.safeParse(sanitizedInput);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Проверьте обязательные поля и согласия.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({
      ok: true,
      message: "Заявка отправлена. Мастер свяжется с вами для уточнения времени и услуги.",
    });
  }

  const lead: StoredLead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ip,
    userAgent: request.headers.get("user-agent") || "unknown",
    formType: parsed.data.formType,
    name: parsed.data.name || "",
    phone: parsed.data.phone,
    car: parsed.data.car || "",
    service: parsed.data.service || "",
    desiredTime: parsed.data.desiredTime || "",
    tireSize: parsed.data.tireSize || "",
    comment: parsed.data.comment || "",
    pageUrl: parsed.data.pageUrl || "",
    personalDataConsent: true,
    privacyPolicyConsent: true,
  };

  let saved = false;
  let telegramSent = false;
  let emailSent = false;

  try {
    await saveLead(lead);
    saved = true;
  } catch (error) {
    console.error("Failed to save lead locally", error);
  }

  try {
    const telegram = await sendTelegramLead(lead);
    telegramSent = telegram.sent;
  } catch (error) {
    console.error("Failed to send lead to Telegram", error);
  }

  try {
    const email = await sendEmailLead(lead);
    emailSent = email.sent;
  } catch (error) {
    console.error("Failed to send lead by email", error);
  }

  if (!saved && !telegramSent && !emailSent) {
    return NextResponse.json(
      {
        ok: false,
        message: "Заявку не удалось сохранить. Пожалуйста, позвоните нам напрямую.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Заявка отправлена. Мастер свяжется с вами для уточнения времени и услуги.",
    delivery: {
      saved,
      telegramSent,
      emailSent,
    },
  });
}

function getClientIp(request: NextRequest) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

async function saveLead(lead: StoredLead) {
  const filePath = join(process.cwd(), "data", "leads.json");
  await mkdir(dirname(filePath), { recursive: true });

  let leads: StoredLead[] = [];
  try {
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      leads = parsed as StoredLead[];
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }

  leads.push(lead);
  await writeFile(filePath, `${JSON.stringify(leads, null, 2)}\n`, "utf8");
}
