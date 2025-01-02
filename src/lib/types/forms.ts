// Basic form status and field types
export type FormStatus = 'idle' | 'validating' | 'submitting' | 'success' | 'error';

// Base interfaces for all forms
export interface BaseFormData {
    firstName: string;
    lastName: string;
    company?: string;
    email: string;
    message: string;
}

export interface BaseFormErrors {
    firstName?: string;
    lastName?: string;
    company?: string;
    email?: string;
    message?: string;
    form?: string;
}

export interface BaseFormActionData {
    status: FormStatus;
    message?: string;
    errors?: BaseFormErrors;
    values?: Partial<BaseFormData>;
}

// Contact form specific types
export interface ContactFormData extends BaseFormData {
    phone?: string;
}

export interface ContactFormErrors extends BaseFormErrors {
    phone?: string;
}

export interface ContactFormActionData extends BaseFormActionData {
    errors?: ContactFormErrors;
    values?: Partial<ContactFormData>;
}

// Support form specific types
export interface SupportFormData extends BaseFormData {
    website?: string;
    phone?: string;
    mobile?: string;
    priority?: "normal" | "high" | "urgent";
    subject?: string;
}

export interface SupportFormErrors extends BaseFormErrors {
    website?: string;
    phone?: string;
    mobile?: string;
    priority?: string;
    subject?: string;
}

export interface SupportFormActionData extends BaseFormActionData {
    errors?: SupportFormErrors;
    values?: Partial<SupportFormData>;
}