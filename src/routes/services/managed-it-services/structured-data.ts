export const managedItSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Managed IT Services",
    "provider": {
        "@type": "Organization",
        "name": "CSDS"
    },
    "description": "Focus on your business while we handle your technology. Our comprehensive managed IT services provide 24/7 monitoring, proactive maintenance, and expert support to keep your systems running smoothly.",
    "serviceType": [
        "24/7 System Monitoring",
        "Help Desk Support",
        "Network Management",
        "Security Updates & Patches",
        "Backup & Recovery",
        "Performance Optimization"
    ],
    "areaServed": "Greater Cleveland Area",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Managed IT Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "24/7 System Monitoring",
                    "description": "Round-the-clock monitoring of your IT infrastructure to prevent issues before they impact your business."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Help Desk Support",
                    "description": "Expert technical support available when you need it, with fast response times and knowledgeable technicians."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Network Management",
                    "description": "Complete network administration, optimization, and maintenance to ensure reliable connectivity."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Security Updates & Patches",
                    "description": "Automated security updates and patch management to keep your systems protected from threats."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Backup & Recovery",
                    "description": "Comprehensive data backup solutions with quick recovery options to minimize downtime."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Performance Optimization",
                    "description": "Continuous performance monitoring and optimization to keep your systems running at peak efficiency."
                }
            }
        ]
    }
}; 
