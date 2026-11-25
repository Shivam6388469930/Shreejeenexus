import { NextRequest, NextResponse } from "next/server";
import { saveContactMessage } from "@/lib/db";
import { sendContactNotificationEmails } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required" },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string") {
      return NextResponse.json(
        { error: "Service selection is required" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { error: "Message content is required" },
        { status: 400 }
      );
    }

    // 1. Save to persistent storage
    const savedMessage = await saveContactMessage({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? String(phone).trim() : "",
      company: company ? String(company).trim() : "",
      service: service.trim(),
      message: message.trim(),
    });

    // 2. Dispatch email notifications asynchronously using Nodemailer
    let emailResult = { emailSent: false };
    try {
      emailResult = await sendContactNotificationEmails(savedMessage);
    } catch (mailErr) {
      console.error("Non-fatal mailer error:", mailErr);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. We will get in touch shortly.",
        messageId: savedMessage.id,
        emailDelivered: emailResult.emailSent,
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("Error processing contact form:", errMsg);
    return NextResponse.json(
      { error: "Failed to submit message. Please try again." },
      { status: 500 }
    );
  }
}

