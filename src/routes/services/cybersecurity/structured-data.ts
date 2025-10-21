export const cybersecuritySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cybersecurity & Threat Protection",
    "provider": {
        "@type": "Organization",
        "name": "CSDS"
    },
    "description": "Protect your business from cyber threats with our comprehensive security solutions. From endpoint protection to employee training, we provide the defense your organization needs in today's digital landscape.",
    "serviceType": [
        "Security Assessments",
        "Endpoint Protection",
        "Email Security",
        "Firewall Management",
        "Employee Training",
        "Incident Response"
    ],
    "areaServed": "Greater Cleveland Area",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Cybersecurity Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Security Assessments",
                    "description": "Comprehensive security audits to identify vulnerabilities and strengthen your defenses against cyber threats."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Endpoint Protection",
                    "description": "Advanced endpoint security solutions that protect all your devices from malware, ransomware, and other threats."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Email Security",
                    "description": "Robust email filtering and protection to prevent phishing attacks, spam, and malicious attachments."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Firewall Management",
                    "description": "Professional firewall configuration and management to control network access and prevent unauthorized intrusions."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Employee Training",
                    "description": "Security awareness training to educate your team about cyber threats and best practices for staying safe online."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Incident Response",
                    "description": "Rapid response and recovery services to minimize damage and restore operations after a security incident."
                }
            }
        ]
    }
}; 
