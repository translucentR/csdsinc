import { PRIVATE_KEAP_API_KEY } from '$env/static/private';
import type { ContactFormData } from '$lib/types/forms';

export async function createKeapContact(formData: ContactFormData) {
    const keapApiUrl = 'https://api.infusionsoft.com/crm/rest/v1/contacts';

    const contact = {
        given_name: formData.firstName,
        family_name: formData.lastName,
        email_addresses: [
            {
                email: formData.email,
                field: 'EMAIL1'
            }
        ],
        phone_numbers: formData.phone ? [
            {
                number: formData.phone,
                field: 'PHONE1'
            }
        ] : [],
        company: formData.company ? {
            name: formData.company
        } : undefined,
        notes: formData.message
    };

    try {
        const response = await fetch(keapApiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${PRIVATE_KEAP_API_KEY}`
            },
            body: JSON.stringify(contact)
        });

        if (!response.ok) {
            throw new Error(`Keap API error: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to create Keap contact:', error);
        throw error;
    }
} 