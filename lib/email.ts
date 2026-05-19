import nodemailer from "nodemailer";
import type { QuoteFormData } from "./validation";

export async function sendQuoteEmail(data: QuoteFormData) {
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: (Number(process.env.SMTP_PORT) || 465) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const timestamp = new Date().toISOString();

  const body = `NEW QUOTE REQUEST

Company:        ${data.companyName}
Contact:        ${data.contactName}
Email:          ${data.email}
Phone:          ${data.phone || "—"}
Country:        ${data.country}

Products:       ${data.productsOfInterest}
Quantity:       ${data.estimatedQuantity}
Lead time:      ${data.targetLeadTime || "—"}

Notes:
${data.notes || "—"}

---
Sent from the website quote form at ${timestamp}.`;

  await transport.sendMail({
    from: process.env.QUOTE_FROM,
    to: process.env.QUOTE_TO,
    replyTo: data.email,
    subject: `Quote request — ${data.companyName} (${data.country})`,
    text: body,
  });
}
