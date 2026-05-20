import nodemailer from "nodemailer";
import type { StoredLead } from "@/lib/types";
import { formatLeadMessage } from "@/lib/telegram";

export async function sendEmailLead(lead: StoredLead) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 0);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.LEADS_EMAIL_TO;

  if (!host || !port || !user || !pass || !to) {
    return { configured: false, sent: false };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: user,
    to,
    subject: "Новая заявка с сайта «Шиномонтаж Планета»",
    text: formatLeadMessage(lead),
  });

  return { configured: true, sent: true };
}
