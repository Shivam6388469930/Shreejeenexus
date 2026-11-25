import nodemailer from "nodemailer";
import type { ContactMessage } from "./db";

// Create reusable transporter
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactNotificationEmails(
  message: ContactMessage
): Promise<{ success: boolean; emailSent: boolean; error?: string }> {
  const transporter = getTransporter();

  // If SMTP is not yet configured in environment variables
  if (!transporter) {
    console.warn(
      "⚠️ [Nodemailer] SMTP settings not configured in .env (SMTP_HOST, SMTP_USER, SMTP_PASS). Skipping email dispatch; message is safely stored in database."
    );
    return {
      success: true,
      emailSent: false,
      error: "SMTP credentials not configured in environment",
    };
  }

  const fromEmail = process.env.SMTP_FROM || `"Shreejee Nexus" <${process.env.SMTP_USER}>`;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER || "info@shreejeenexus.com";

  // 1. Email to Admin
  const adminMailOptions = {
    from: fromEmail,
    to: receiverEmail,
    replyTo: message.email,
    subject: `🔔 New Contact Inquiry: ${message.name} (${message.service})`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f2f7f5; color: #0b4f5c; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid rgba(11,79,92,0.15); overflow: hidden; box-shadow: 0 4px 12px rgba(11,79,92,0.08); }
            .header { background: #0b4f5c; padding: 24px 32px; color: #f2f7f5; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 700; }
            .content { padding: 32px; }
            .row { margin-bottom: 16px; border-bottom: 1px solid #f2f7f5; padding-bottom: 12px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8c8c8c; font-weight: 700; margin-bottom: 4px; }
            .val { font-size: 15px; color: #0b4f5c; font-weight: 600; }
            .message-box { background: #f2f7f5; border-left: 4px solid #f5b82e; padding: 16px; border-radius: 8px; margin-top: 20px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; }
            .footer { padding: 20px 32px; background: #fcfcfc; border-top: 1px solid #eee; font-size: 12px; color: #777; text-align: center; }
            .badge { display: inline-block; background: rgba(245,184,46,0.25); color: #0b4f5c; padding: 4px 12px; border-radius: 100px; font-weight: 700; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Shreejee Nexus • New Website Inquiry</h1>
            </div>
            <div class="content">
              <div class="row">
                <div class="label">Client Name</div>
                <div class="val">${escapeHtml(message.name)}</div>
              </div>
              <div class="row">
                <div class="label">Email Address</div>
                <div class="val"><a href="mailto:${escapeHtml(message.email)}" style="color:#0b4f5c;">${escapeHtml(message.email)}</a></div>
              </div>
              <div class="row">
                <div class="label">Phone</div>
                <div class="val">${message.phone ? escapeHtml(message.phone) : "Not provided"}</div>
              </div>
              <div class="row">
                <div class="label">Company</div>
                <div class="val">${message.company ? escapeHtml(message.company) : "Not provided"}</div>
              </div>
              <div class="row">
                <div class="label">Requested Service</div>
                <div class="val"><span class="badge">${escapeHtml(message.service)}</span></div>
              </div>
              <div class="label" style="margin-top:20px;">Project Message</div>
              <div class="message-box">${escapeHtml(message.message)}</div>
            </div>
            <div class="footer">
              Received on ${new Date(message.createdAt).toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST • Message ID: ${message.id}
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // 2. Receipt email to User
  const userMailOptions = {
    from: fromEmail,
    to: message.email,
    subject: `We've received your inquiry - Shreejee Nexus`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f2f7f5; color: #0b4f5c; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid rgba(11,79,92,0.15); overflow: hidden; box-shadow: 0 4px 12px rgba(11,79,92,0.08); }
            .header { background: #0b4f5c; padding: 28px 32px; color: #f2f7f5; text-align: center; }
            .header h1 { margin: 0; font-size: 24px; font-weight: 800; }
            .header p { margin: 6px 0 0 0; color: #f5b82e; font-weight: 600; font-size: 13px; }
            .content { padding: 32px; font-size: 15px; line-height: 1.6; color: #333333; }
            .cta-btn { display: inline-block; background: #f5b82e; color: #0b4f5c; padding: 12px 24px; border-radius: 10px; font-weight: 700; text-decoration: none; margin-top: 16px; }
            .footer { padding: 20px 32px; background: #f2f7f5; font-size: 12px; color: #777; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Shreejee Nexus</h1>
              <p>Research-led insights. Connected growth.</p>
            </div>
            <div class="content">
              <h2 style="color:#0b4f5c; font-size:20px; margin-top:0;">Hello ${escapeHtml(message.name)},</h2>
              <p>Thank you for reaching out to Shreejee Nexus. We have received your inquiry regarding <strong>${escapeHtml(message.service)}</strong>.</p>
              <p>Our client solutions team is reviewing your project details. A dedicated specialist will get back to you within <strong>one business day</strong> with recommended next steps.</p>
              <p>In the meantime, feel free to explore our case studies and thought leadership on our website.</p>
              <p style="margin-top:24px;">Warm regards,<br /><strong>The Shreejee Nexus Team</strong><br /><a href="mailto:info@shreejeenexus.com" style="color:#0b4f5c;">info@shreejeenexus.com</a></p>
            </div>
            <div class="footer">
              &copy; 2026 Shreejee Nexus • Ahmedabad, India | Dubai, UAE
            </div>
          </div>
        </body>
      </html>
    `,
  };

  try {
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions),
    ]);
    return { success: true, emailSent: true };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error("❌ [Nodemailer] Error sending email:", errMsg);
    return { success: false, emailSent: false, error: errMsg };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

