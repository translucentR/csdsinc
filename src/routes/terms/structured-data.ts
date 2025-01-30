export const termsSchema = {
    "@context": "https://schema.org",
    "@type": "TermsOfService",
    "name": "CSDS Terms of Service",
    "version": "1.0",
    "lastReviewed": "2025-01-30",
    "audience": {
        "@type": "Audience",
        "audienceType": "Business customers and service users"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Computer Systems Development Services",
        "email": "legal@csdsinc.net"
    },
    "mainEntity": {
        "@type": "WebPage",
        "name": "Terms of Service",
        "description": "Terms and conditions for using CSDS IT services and solutions.",
        "significantLink": [
            {
                "@type": "WebPage",
                "name": "Agreement to Terms",
                "description": "Terms of service acceptance requirements"
            },
            {
                "@type": "WebPage",
                "name": "Services",
                "description": "IT services and solutions provided"
            },
            {
                "@type": "WebPage",
                "name": "Service Level Agreements",
                "description": "Service hours and response times"
            },
            {
                "@type": "WebPage",
                "name": "Payment Terms",
                "description": "Payment and invoicing terms"
            },
            {
                "@type": "WebPage",
                "name": "Intellectual Property",
                "description": "Ownership and protection of service content"
            },
            {
                "@type": "WebPage",
                "name": "Limitation of Liability",
                "description": "Liability limitations for service usage"
            }
        ],
        "potentialAction": {
            "@type": "ContactAction",
            "name": "Contact Legal Team",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "mailto:legal@csdsinc.net",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform"
                ]
            }
        },
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "availabilityStarts": "2024-01-30",
            "businessFunction": "https://schema.org/ProvideService",
            "validFrom": "2024-01-30"
        }
    }
};
