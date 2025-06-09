# Deploying to cPanel

## Prerequisites
- cPanel access with Node.js support
- Node.js version 18.x or higher
- Email account set up in cPanel

## Environment Variables Setup

1. In your cPanel dashboard:
   - Navigate to "Software" > "Node.js"
   - Click on "Create Application" or "Setup Node.js App"

2. Set the following environment variables in Node.js App settings:
   ```
   SMTP_HOST=s3559.usc1.stableserver.net
   SMTP_PORT=465
   BUSINESS_EMAIL=info@globaltideexpress.com
   EMAIL_PASSWORD=your-email-password
   ```

## Build and Deployment Steps

1. Prepare your application locally:
   ```powershell
   # Install dependencies
   pnpm install
   
   # Build the application
   pnpm run build
   
   # Create a deployment package
   New-Item -ItemType Directory -Path deployment -Force
   Copy-Item -Path ".next","package.json","pnpm-lock.yaml","public","next.config.mjs" -Destination deployment -Recurse
   ```

2. Upload to cPanel:
   - Use File Manager or FTP to upload the contents of the `deployment` folder
   - Recommended location: `public_html/your-app-folder`

3. Configure Node.js App in cPanel:
   - Application Root: /home/username/public_html/your-app-folder
   - Application URL: https://yourdomain.com (or subdomain)
   - Application startup file: node_modules/next/dist/bin/next
   - Node.js version: 18.x or higher
   - NPM Run Script:
     ```bash
     npm install --production
     npm start
     ```

## Email Configuration Testing

1. Test the contact form:
   - Fill out and submit the contact form
   - Check your business email for the test message
   - Verify all form fields are included in the email

2. Test the quote request form:
   - Submit a test quote request
   - Verify the email includes all shipping details
   - Check reply-to functionality

## Monitoring and Maintenance

1. Regular checks:
   - Monitor Node.js application logs
   - Check email delivery success rates
   - Review security settings

2. Updates:
   - Keep Node.js version current
   - Update npm packages regularly
   - Rotate email passwords periodically

## Troubleshooting

1. Email Issues:
   - Verify SMTP settings in environment variables
   - Check cPanel email quota and limits
   - Review Node.js application logs for errors

2. Application Errors:
   - Check Node.js application logs
   - Verify environment variables are set correctly
   - Ensure all dependencies are installed

## Security Best Practices

1. Email Security:
   - Use strong passwords
   - Enable SSL/TLS for email
   - Regularly update credentials

2. Application Security:
   - Keep dependencies updated
   - Use HTTPS only
   - Set appropriate CORS policies
   - Monitor for suspicious activities

## Additional Notes

- Always backup your application before updates
- Keep a local copy of environment variables
- Document any custom configurations
- Set up monitoring for application uptime
- Configure error notifications

## Production-Ready Checks

1. Before deploying:
   - Run `pnpm build` to verify build success
   - Test all forms locally
   - Check for any console errors
   - Verify email templates

2. After deploying:
   - Test the live site thoroughly
   - Verify all environment variables
   - Check email functionality
   - Monitor application logs
   - Test on multiple devices/browsers
