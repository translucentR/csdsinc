export interface ContactFormData {
    firstName: string;
    lastName: string;
    company?: string;
    email: string;
    phone?: string;
    message: string;
}

export interface ContactFormErrors {
    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string;
    phone?: string;
    message?: string;
    form?: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ContactFormActionData {
    errors?: ContactFormErrors;
    values?: Partial<ContactFormData>;
    success?: boolean;
}

export interface SupportFormData {
    firstName: string;
    lastName: string;
    company?: string;
    website?: string;
    email: string;
    phone?: string;
    mobile?: string;
    priority?: "normal" | "high" | "urgent";
    subject?: string;
    message: string;
}

export interface SupportFormErrors {
    firstName?: string;
    lastName?: string;
    company?: string;
    website?: string;
    email?: string;
    phone?: string;
    mobile?: string;
    priority?: "normal" | "high" | "urgent";
    subject?: string;
    message?: string;
    form?: string;
}

export interface SupportFormActionData {
    errors?: SupportFormErrors;
    values?: Partial<SupportFormData>;
    success?: boolean;
}