export const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@type": "Organization",
        "name": "Computer Systems Development Services",
        "alternateName": "CSDS",
        "foundingDate": "1994",
        "description": "Started in 1994, Computer Systems Development Services is a complete technology solution provider. We are 100% committed to making sure business owners have the most reliable and professional IT service in Cleveland.",
        "areaServed": "Cleveland Metropolitan Area",
        "email": "info@csdsinc.net",
        "telephone": "216-529-9019",
        "knowsAbout": [
            {
                "@type": "PropertyValue",
                "name": "Peace of Mind",
                "value": "Our clients describe us as trustworthy, fast, and very responsive to their daily needs"
            },
            {
                "@type": "PropertyValue",
                "name": "Resources",
                "value": "Our 24x7 Network Operations Center employs over 700 technicians"
            },
            {
                "@type": "PropertyValue",
                "name": "Security",
                "value": "Prioritizing a security-first mindset to protect your business"
            },
            {
                "@type": "PropertyValue",
                "name": "Uptime",
                "value": "CSDS will have your backup server running in 15 minutes or less"
            },
            {
                "@type": "PropertyValue",
                "name": "Access & Availability",
                "value": "Our clients say that we respond quickly to all of their computer related questions and needs"
            }
        ],
        "slogan": "Our custom service packages deliver what you need while respecting the boundaries of your budget. Computer Systems Development Services is your business partner.",
        "potentialAction": [
            {
                "@type": "Action",
                "name": "Get Started Today",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://csdsinc.net/contact",
                    "actionPlatform": ["http://schema.org/DesktopWebPlatform"]
                }
            },
            {
                "@type": "ViewAction",
                "name": "Learn More",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://csdsinc.net/services",
                    "actionPlatform": ["http://schema.org/DesktopWebPlatform"]
                }
            }
        ]
    }
};
