import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
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
    const pdfBuffer = await getPDFBuffer('it-support-pricing-guide.pdf');
    const emailParams = {
        Source: PRIVATE_AWS_SUPPORT_EMAIL,
        Destination: { ToAddresses: [email] },
        Message: {
            Subject: { Data: 'Your IT Support Pricing Guide from CSDS' },
            Body: {
                Text: {
                    Data: `Hello ${name},\n\nThank you for your interest in CSDS's IT services. Please find attached our guide on "What You Should Expect To Pay For IT Support For Your Business".\n\nIf you have any questions, please don't hesitate to contact us.\n\nBest regards,\nCSDS Team`
                }
            },
            Attachments: [{
                Filename: "CSDS-IT-Support-Pricing-Guide.pdf",
                Content: btoa(String.fromCharCode(...pdfBuffer)),
                ContentType: "application/pdf"
            }]
        }
    };

    try {
        await sesClient.send(new SendEmailCommand(emailParams));
        return true;
    } catch (error) {
        console.error('Failed to send PDF email:', error);
        return false;
    }
} 