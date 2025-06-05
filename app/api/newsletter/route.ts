import { NextRequest, NextResponse } from "next/server";

// Update this to your business email
const BUSINESS_EMAIL = "info@globaltideexpress.com";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ success: false, error: "Email is required." }, { status: 400 });
  }

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
      from: `Website Newsletter <${BUSINESS_EMAIL}>`,
      to: BUSINESS_EMAIL,
      subject: `New Newsletter Subscription`,
      text: `A new user has subscribed to your newsletter: ${email}`,
      replyTo: email
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
