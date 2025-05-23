import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { PRIVATE_AWS_ACCESS_KEY_ID, PRIVATE_AWS_SECRET_ACCESS_KEY, PRIVATE_AWS_REGION, PRIVATE_AWS_SUPPORT_EMAIL, PRIVATE_AWS_CONFIGURATION_SET_NAME, PRIVATE_DOWNLOAD_GUIDE_EMAIL } from '$env/static/private';

const sesClient = new SESClient({
    region: PRIVATE_AWS_REGION,
    credentials: {
        accessKeyId: PRIVATE_AWS_ACCESS_KEY_ID,
        secretAccessKey: PRIVATE_AWS_SECRET_ACCESS_KEY,
    }
});

const priorityMapping: Record<string, string> = {
    'normal': 'Priority 3 - Normal Response',
    'high': 'Priority 2 - Quick Response',
    'urgent': 'Priority 1 - Emergency Response'
};

export async function sendSupportNotification(formData: Record<string, string>) {
    const { firstName, lastName, email, subject, message, priority } = formData;

    const priorityLabel = priorityMapping[priority] || 'Priority 3 - Normal Response';
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
                    !!Priority: ${priorityLabel}!!
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

export async function sendDownloadGuideEmailInternally(formData: Record<string, string>) {
    const { name, email, phone, company } = formData;

    // Build email body with required fields
    let emailBody = `
    Name: ${name}
    Email: ${email}`;

    // Add optional fields if they exist
    if (phone) emailBody += `\nPhone: ${phone}`;
    if (company) emailBody += `\nCompany: ${company}`;

    const emailParams = {
        Source: PRIVATE_AWS_SUPPORT_EMAIL,
        Destination: {
            ToAddresses: [PRIVATE_DOWNLOAD_GUIDE_EMAIL]
        },
        ConfigurationSetName: PRIVATE_AWS_CONFIGURATION_SET_NAME,
        Message: {
            Subject: {
                Data: `New Download Guide Request`
            },
            Body: {
                Text: {
                    Data: emailBody.trim()
                }
            }
        }
    };

    try {

        await sesClient.send(new SendEmailCommand(emailParams));
        return true;
    } catch (error) {
        console.error('Failed to send Download Guide email. Full error:', error);
        return false;
    }
} 