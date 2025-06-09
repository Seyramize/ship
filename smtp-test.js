const nodemailer = require('nodemailer');
const dns = require('dns');
const { promisify } = require('util');

const resolveMx = promisify(dns.resolveMx);

async function testSMTP() {
  // Call the function immediately when the script is run
  console.log('Starting SMTP test...\n');
  
  const config = {
    host: "s3559.usc1.stableserver.net",
    port: 465,
    secure: true,
    auth: {
      user: "info@globaltideexpress.com",
      pass: "@Qwerty7890"
    },
    tls: {
      rejectUnauthorized: false
    }
  };

  // Simulate a quote form submission
  const testQuoteData = {
    name: "John Smith",
    email: "john@example.com",
    phone: "123-456-7890",
    company: "Test Company Inc.",
    pickupLocation: "123 Pickup St, New York, NY 10001",
    deliveryLocation: "456 Delivery Ave, Los Angeles, CA 90001",
    itemType: "Electronics",
    weight: "25.5",
    dimensions: "60 x 40 x 30",
    deliverySpeed: "express",
    additionalInfo: "Fragile items, handle with care"
  };

  // Format the quote details similarly to the actual form
  const quoteDetails = `
    Quote Request Details
    ====================

    Contact Information
    ------------------
    Name: ${testQuoteData.name}
    Email: ${testQuoteData.email}
    Phone: ${testQuoteData.phone}
    Company: ${testQuoteData.company || 'Not provided'}
    
    Shipping Details
    ---------------
    From: ${testQuoteData.pickupLocation}
    To: ${testQuoteData.deliveryLocation}
    Delivery Speed: ${testQuoteData.deliverySpeed}
    Item Type: ${testQuoteData.itemType}
    
    Package Details
    --------------
    Weight: ${testQuoteData.weight} kg
    Dimensions: ${testQuoteData.dimensions} cm
    
    Additional Information
    --------------------
    ${testQuoteData.additionalInfo || "None provided"}
  `.trim();

  try {
    console.log('\nTesting quote request email with config:', {
      ...config,
      auth: { user: config.auth.user, pass: '****' }
    });

    const transporter = nodemailer.createTransport(config);
    
    console.log('\nVerifying connection...');
    const verify = await transporter.verify();
    console.log('Connection verification:', verify);
    
    console.log('\nAttempting to send test quote request...');
    const info = await transporter.sendMail({
      from: `"Website Quote Request" <${config.auth.user}>`,
      to: config.auth.user,
      subject: `New Quote Request - ${testQuoteData.itemType} from ${testQuoteData.name}`,
      text: quoteDetails,
      replyTo: testQuoteData.email
    });
    
    console.log('\nQuote request email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Server response:', info.response);
    console.log('\nEmail content preview:');
    console.log('----------------------------------------');
    console.log(quoteDetails);
    console.log('----------------------------------------');
  } catch (error) {
    console.error('\nError details:');
    console.error('Name:', error.name);
    console.error('Message:', error.message);
    if (error.code) console.error('Error code:', error.code);
    if (error.command) console.error('Failed command:', error.command);
    if (error.response) console.error('Server response:', error.response);  }
}

// Run the test automatically
testSMTP().catch(console.error);

testSMTP().catch(console.error);
