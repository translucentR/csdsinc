import { PRIVATE_KEAP_API_KEY } from '$env/static/private';
import type { ContactFormData } from '$lib/types/forms';

async function findCompanyByName(companyName: string) {
    const keapApiUrl = 'https://api.infusionsoft.com/crm/rest/v2/companies';
    const searchParams = new URLSearchParams({
        'filter': `company_name==${companyName}`,
        'fields': 'id,company_name',
        'page_size': '1'
    });

    try {
        const response = await fetch(`${keapApiUrl}?${searchParams}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${PRIVATE_KEAP_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Keap API error: ${response.statusText}\n${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return data.companies?.[0] || null;
    } catch (error) {
        console.error('Failed to search for company:', error);
        throw error;
    }
}

async function createCompany(companyName: string) {
    const keapApiUrl = 'https://api.infusionsoft.com/crm/rest/v2/companies';

    try {
        const response = await fetch(keapApiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PRIVATE_KEAP_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name: companyName
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Keap API error: ${response.statusText}\n${JSON.stringify(errorData)}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to create company:', error);
        throw error;
    }
}

async function getOrCreateCompany(companyName: string) {
    try {
        // First, try to find the company
        const existingCompany = await findCompanyByName(companyName);
        if (existingCompany) {
            return existingCompany;
        }

        // If company doesn't exist, create it
        return await createCompany(companyName);
    } catch (error) {
        console.error('Failed to get or create company:', error);
        throw error;
    }
}

export async function createKeapContact(formData: ContactFormData) {
    const keapApiUrl = 'https://api.infusionsoft.com/crm/rest/v2/contacts';

    // If company name is provided, get or create the company first
    let companyData;
    if (formData.company) {
        try {
            companyData = await getOrCreateCompany(formData.company);
        } catch (error) {
            console.error('Failed to process company:', error);
            // Continue without company if there's an error
        }
    }

    const contact = {
        given_name: formData.firstName,
        family_name: formData.lastName,
        email_addresses: [
            {
                email: formData.email,
                field: 'EMAIL1',
                opt_in_reason: "Filled out a form:Contact Us Web Form",
            }
        ],
        phone_numbers: formData.phone ? [
            {
                number: formData.phone,
                field: 'PHONE1',
            }
        ] : [],
        company: companyData ? {
            id: companyData.id,
            company_name: companyData.company_name
        } : undefined,
        source_type: 'WEBFORM',
        custom_fields: [
            {
                id: '43', // Message
                content: formData.message
            },
            {
                id: '1', // Person Type
                content: 'Lead: Raw'
            },
            {
                id: '7', // Original Lead Source
                content: "Contact Us Opt-In"
            },
        ],
        contact_type: "Lead",
        leadsource_id: "17",
        owner_id: "3508" // Rich's ID
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
            const errorData = await response.json();
            throw new Error(`Keap API error: ${response.statusText}\n${JSON.stringify(errorData)}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to create Keap contact:', error);
        throw error;
    }
} 