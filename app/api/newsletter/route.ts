import { NextRequest, NextResponse } from "next/server";

// Email configuration that works in both development and production
const emailConfig = {
  host: process.env.SMTP_HOST || "s3559.usc1.stableserver.net",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // use SSL
  auth: {
    user: process.env.BUSINESS_EMAIL || "info@globaltideexpress.com",
    pass: process.env.EMAIL_PASSWORD || "@Qwerty7890",
  },
  tls: {
    rejectUnauthorized: false
  }
};

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
  }

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport(emailConfig);

  try {
    await transporter.sendMail({
      from: `Website Newsletter <${emailConfig.auth.user}>`,
      to: emailConfig.auth.user,
      subject: `New Newsletter Subscription`,
      text: `A new user has subscribed to your newsletter: ${email}`,
      replyTo: email
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Email error:", errorMessage);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
