import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { PRIVATE_AWS_ACCESS_KEY_ID, PRIVATE_AWS_SECRET_ACCESS_KEY, PRIVATE_AWS_REGION, PRIVATE_AWS_SUPPORT_EMAIL, PRIVATE_AWS_CONFIGURATION_SET_NAME } from '$env/static/private';

const sesClient = new SESClient({
    region: PRIVATE_AWS_REGION,
    credentials: {
        accessKeyId: PRIVATE_AWS_ACCESS_KEY_ID,
        secretAccessKey: PRIVATE_AWS_SECRET_ACCESS_KEY,
    }
});

export async function sendSupportNotification(formData: Record<string, string>) {
    const { firstName, lastName, email, subject, message, priority } = formData;

    const emailParams = {
        Source: PRIVATE_AWS_SUPPORT_EMAIL,
        Destination: {
            ToAddresses: [PRIVATE_AWS_SUPPORT_EMAIL]
        },
        ConfigurationSetName: PRIVATE_AWS_CONFIGURATION_SET_NAME,
        Message: {
            Subject: {
                Data: `New Support Request: ${priority.toUpperCase()} - ${subject || 'No Subject'}`
            },
            Body: {
                Text: {
                    Data: `
                    !!Contact:${email}!!    
                    !!Priority: ${priority}!!
                    From: ${firstName} ${lastName} (${email})
                    !!AddDetailDescription:${message}!!
                    `.trim()
                }
            }
        }
    };

    try {

        await sesClient.send(new SendEmailCommand(emailParams));
        return true;
    } catch (error) {
        console.error('Failed to send email. Full error:', error);
        return false;
    }
} 