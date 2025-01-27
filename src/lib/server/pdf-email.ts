import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { getPDFBuffer } from './s3';
import { PRIVATE_AWS_ACCESS_KEY_ID, PRIVATE_AWS_SECRET_ACCESS_KEY, PRIVATE_AWS_REGION, PRIVATE_AWS_SUPPORT_EMAIL } from '$env/static/private';

const sesClient = new SESClient({
    region: PRIVATE_AWS_REGION,
    credentials: {
        accessKeyId: PRIVATE_AWS_ACCESS_KEY_ID,
        secretAccessKey: PRIVATE_AWS_SECRET_ACCESS_KEY,
    }
});

export async function sendPDFEmail(email: string, name: string) {
    try {
        const pdfBuffer = await getPDFBuffer('it-support-pricing-guide.pdf');
        const boundary = 'boundary-' + Date.now().toString(36);

        const message = [
            `Content-Type: multipart/mixed; boundary="${boundary}"`,
            '',
            `--${boundary}`,
            'Content-Type: multipart/alternative; boundary="alt-' + boundary + '"',
            '',
            `--alt-${boundary}`,
            'Content-Type: text/plain; charset=utf-8',
            '',
            `Hi ${name},

I wanted to personally share the CSDS IT Support Pricing Guide with you. This isn't just another document—it's the cornerstone of what we stand for at CSDS. Packed with decades of insight, it's designed to help business owners like you navigate the often-complicated world of IT services with confidence.

This guide reveals:
• The 3 most common IT service models—and why one stands out as the smartest, most cost-effective choice.
• The hidden fees and "gotcha" clauses you must avoid in service contracts.
• 21 critical questions to ask any IT provider to ensure they're the right fit for your business.

One section I urge you to read is the breakdown of managed IT services vs. break-fix support. It highlights how proactive maintenance prevents downtime, saves money, and keeps your business running smoothly—a philosophy we live by.

If ensuring your IT infrastructure is secure, efficient, and free of unexpected costs is a priority, this guide is exactly what you need. Taking a few moments to review it could save you countless hours of frustration and significant expense.

Feel free to reply if you have any questions—I'd be happy to walk through how we can help.

Looking forward to hearing your thoughts!

Best regards,
CSDS Team`,
            '',
            `--alt-${boundary}`,
            'Content-Type: text/html; charset=utf-8',
            '',
            `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
    <p>Hi ${name},</p>
    
    <p>I wanted to personally share the CSDS IT Support Pricing Guide with you. This isn't just another document—it's the cornerstone of what we stand for at CSDS. Packed with decades of insight, it's designed to help business owners like you navigate the often-complicated world of IT services with confidence.</p>
    
    <p><strong>This guide reveals:</strong></p>
    <ul style="padding-left: 20px;">
        <li>The 3 most common IT service models—and why one stands out as the smartest, most cost-effective choice.</li>
        <li>The hidden fees and "gotcha" clauses you must avoid in service contracts.</li>
        <li>21 critical questions to ask any IT provider to ensure they're the right fit for your business.</li>
    </ul>
    
    <p>One section I urge you to read is the breakdown of managed IT services vs. break-fix support. It highlights how proactive maintenance prevents downtime, saves money, and keeps your business running smoothly—a philosophy we live by.</p>
    
    <p>If ensuring your IT infrastructure is secure, efficient, and free of unexpected costs is a priority, this guide is exactly what you need. Taking a few moments to review it could save you countless hours of frustration and significant expense.</p>
    
    <p>Feel free to reply if you have any questions—I'd be happy to walk through how we can help.</p>
    
    <p>Looking forward to hearing your thoughts!</p>
    
    <p>Best regards,<br>CSDS Team</p>
</body>
</html>`,
            '',
            `--alt-${boundary}--`,
            '',
            `--${boundary}`,
            'Content-Type: application/pdf',
            'Content-Transfer-Encoding: base64',
            'Content-Disposition: attachment; filename="CSDS-IT-Support-Pricing-Guide.pdf"',
            '',
            Buffer.from(pdfBuffer).toString('base64'),
            '',
            `--${boundary}--`
        ].join('\r\n');

        const emailParams = {
            RawMessage: {
                Data: Buffer.from(
                    `From: ${PRIVATE_AWS_SUPPORT_EMAIL}\r\n` +
                    `To: ${email}\r\n` +
                    `Subject: Essential Reading for Your IT Success\r\n` +
                    message
                )
            }
        };

        await sesClient.send(new SendRawEmailCommand(emailParams));
        return true;
    } catch (error) {
        console.error('Failed to send PDF email:', error);
        return false;
    }
} 