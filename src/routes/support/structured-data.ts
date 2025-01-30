export const supportSchema = {
    "@context": "https://schema.org",
    "@type": "CustomerService",
    "name": "CSDS Support Center",
    "description": "Get the IT support you need, when you need it. Choose from our various support options below.",
    "serviceType": "Technical Support",
    "availableChannel": [
        {
            "@type": "ServiceChannel",
            "name": "Phone Support",
            "serviceUrl": "tel:2165299019,102",
            "servicePhone": "216-529-9019 ext. 102",
            "availableLanguage": "English",
            "serviceSmsNumber": null,
            "servicePostalAddress": null
        },
        {
            "@type": "ServiceChannel",
            "name": "Remote Support",
            "serviceUrl": "https://csds.screenconnect.com/",
            "description": "Get help from our technicians remotely"
        }
    ],
    "potentialAction": [
        {
            "@type": "ContactAction",
            "name": "Submit Support Request",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://csdsinc.net/support",
                "inLanguage": "en",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform"
                ]
            }
        },
        {
            "@type": "ViewAction",
            "name": "Start Remote Session",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://csds.screenconnect.com/",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform"
                ]
            }
        }
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "telephone": "216-529-9019",
        "email": "info@csdsinc.net",
        "availableLanguage": "English"
    }
};
