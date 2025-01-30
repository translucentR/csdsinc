export const privacyPolicySchema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",
    "name": "CSDS Privacy Policy",
    "version": "1.0",
    "lastReviewed": "2025-01-30",
    "audience": {
        "@type": "Audience",
        "audienceType": "Business customers and website visitors"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Computer Systems Development Services",
        "email": "privacy@csdsinc.net"
    },
    "mainEntity": {
        "@type": "WebPage",
        "name": "Privacy Policy",
        "description": "CSDS privacy policy detailing information collection, usage, sharing, and security practices.",
        "significantLink": [
            {
                "@type": "WebPage",
                "name": "Information Collection",
                "description": "Details about personal and company information collected"
            },
            {
                "@type": "WebPage",
                "name": "Information Usage",
                "description": "How we use collected information for services and communication"
            },
            {
                "@type": "WebPage",
                "name": "Information Sharing",
                "description": "Policy on sharing information with third parties"
            },
            {
                "@type": "WebPage",
                "name": "Security Measures",
                "description": "Technical and organizational security measures"
            }
        ],
        "potentialAction": {
            "@type": "ContactAction",
            "name": "Contact Privacy Team",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "mailto:privacy@csdsinc.net",
                "actionPlatform": [
                    "http://schema.org/DesktopWebPlatform"
                ]
            }
        }
    }
};
