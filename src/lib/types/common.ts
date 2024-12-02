export interface CTAButton {
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
}

export interface ServiceCard {
    title: string;
    description: string;
    icon: 'server' | 'code' | 'shield' | 'chart' | 'hand';
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
    image?: string;
}

export interface Benefit {
    title: string;
    description: string;
    icon: "clock" | "puzzle" | "shield" | "scale";
}

export interface FooterLink {
    title: string;
    href: string;
}

export interface FooterColumn {
    title: string;
    links: FooterLink[];
}

export interface SocialLink {
    platform: 'linkedin';
    href: string;
}
