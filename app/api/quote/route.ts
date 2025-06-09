import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  pickupLocation: string;
  deliveryLocation: string;
  itemType: string;
  weight: string;
  dimensions: string;
  deliverySpeed: 'standard' | 'express' | 'same-day';
  name: string;
  email: string;
  phone: string;
  company?: string;
  additionalInfo?: string;
}

const emailConfig = {
  host: process.env.SMTP_HOST || "s3559.usc1.stableserver.net",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.BUSINESS_EMAIL || "info@globaltideexpress.com",
    pass: process.env.EMAIL_PASSWORD || "@Qwerty7890",
  },
  tls: {
    rejectUnauthorized: false
  }
};

export async function POST(req: NextRequest) {
  const formData: FormData = await req.json();
  
  // Format the details in a clean, table-like structure
  const quoteDetails = `
    Quote Request Details
    ====================

    Contact Information
    ------------------
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
    Company: ${formData.company || 'Not provided'}
    
    Shipping Details
    ---------------
    From: ${formData.pickupLocation}
    To: ${formData.deliveryLocation}
    Delivery Speed: ${formData.deliverySpeed}
    Item Type: ${formData.itemType}
    
    Package Details
    --------------
    Weight: ${formData.weight} kg
    Dimensions: ${formData.dimensions}
    
    Additional Information
    --------------------
    ${formData.additionalInfo || "None provided"}
  `.trim();

  const transporter = nodemailer.createTransport(emailConfig);

  try {
    // First verify the connection
    console.log('Verifying SMTP connection...');
    const verifyResult = await transporter.verify();
    console.log('SMTP verification result:', verifyResult);

    // Then try to send the email
    console.log('Attempting to send quote request email...');
    const info = await transporter.sendMail({
      from: `"Website Quote Request" <${emailConfig.auth.user}>`,
      to: emailConfig.auth.user,
      subject: `New Quote Request - ${formData.itemType} from ${formData.name}`,
      text: quoteDetails,
      replyTo: formData.email
    });

    console.log('Quote request email sent successfully:', {
      messageId: info.messageId,
      response: info.response
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      code: (error as any)?.code,
      command: (error as any)?.command,
      response: (error as any)?.response
    });

    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send quote request email'
    }, { status: 500 });
  }
}
