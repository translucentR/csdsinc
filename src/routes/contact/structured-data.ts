export const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact CSDS",
    "description": "We're excited to hear from you! Whether you're looking to transform your IT infrastructure or simply want to learn more about our services, we're here to help.",
    "mainEntity": {
        "@type": "Organization",
        "name": "Computer Systems Development Services",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "216-529-9019",
            "email": "info@csdsinc.net",
            "contactType": "customer service",
            "areaServed": "Cleveland Metropolitan Area",
            "availableLanguage": "English",
            "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "17:00"
            }
        },
        "potentialAction": [
            {
                "@type": "ContactAction",
                "name": "Send Message",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://csdsinc.net/contact",
                    "inLanguage": "en",
                    "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform"
                    ]
                }
            },
            {
                "@type": "ViewAction",
                "name": "View Support Center",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://csdsinc.net/support",
                    "actionPlatform": [
                        "http://schema.org/DesktopWebPlatform"
                    ]
                }
            }
        ]
    }
};
