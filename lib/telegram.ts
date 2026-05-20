import type { StoredLead } from "@/lib/types";

const TELEGRAM_API_URL = "https://api.telegram.org/bot";

export function formatLeadMessage(lead: StoredLead) {
  return [
    "Новая заявка с сайта «Шиномонтаж Планета»",
    "",
    `Имя: ${lead.name || "не указано"}`,
    `Телефон: ${lead.phone}`,
    `Автомобиль: ${lead.car || "не указано"}`,
    `Услуга: ${lead.service || "не указано"}`,
    `Желаемое время: ${lead.desiredTime || "не указано"}`,
    `Размер шин: ${lead.tireSize || "не указано"}`,
    `Комментарий: ${lead.comment || "не указано"}`,
    `Страница/форма: ${lead.formType}`,
    `Дата и время заявки: ${lead.createdAt}`,
    "",
    "Источник:",
    "Лендинг шиномонтажа",
  ].join("\n");
}

export async function sendTelegramLead(lead: StoredLead) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram is not configured: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is empty");
    return { configured: false, sent: false };
  }

  const response = await fetch(`${TELEGRAM_API_URL}${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatLeadMessage(lead),
      disable_web_page_preview: true,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Telegram sendMessage failed: ${response.status} ${text}`);
  }

  return { configured: true, sent: true };
}
