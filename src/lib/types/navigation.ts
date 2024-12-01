export interface NavItem {
    title: string;
    href: string;
    children?: NavItem[];
}

export const navigationItems: NavItem[] = [
    { title: 'Home', href: '/' },
    {
        title: 'Services',
        href: '/services',
        children: [
            { title: 'Managed IT', href: '/services/managed-it' },
            { title: 'Cloud Solutions', href: '/services/cloud' },
            { title: 'Cybersecurity', href: '/services/security' },
        ]
    },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
]; 