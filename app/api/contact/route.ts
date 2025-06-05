import { NextRequest, NextResponse } from "next/server";

// Update this to your business email
const BUSINESS_EMAIL = "info@globaltideexpress.com";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  // Compose the email content
  const mailText = `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
  `;

  // Use Node.js built-in 'nodemailer' for sending emails (works in Node.js environments)
  // On cPanel, you can use SMTP settings provided by your host
  const nodemailer = require("nodemailer");

  // Replace with your cPanel SMTP credentials
  const transporter = nodemailer.createTransport({
    host: "s3559.usc1.stableserver.net", // or your cPanel SMTP server
    port: 465, // or 587 for TLS
    secure: true, // true for 465, false for 587
    auth: {
      user: BUSINESS_EMAIL, // your business email
      pass: "@Qwerty7890" // your email password
    }
  });

  try {
    await transporter.sendMail({
      from: `Website Contact <${BUSINESS_EMAIL}>`,
      to: BUSINESS_EMAIL,
      subject: `Contact Form: ${subject}`,
      text: mailText,
      replyTo: email
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
