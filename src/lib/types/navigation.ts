export interface NavItem {
    title: string;
    href: string;
    children?: NavItem[];
}

export const navigationItems: NavItem[] = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'About', href: '/about' },
    { title: 'Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
];

export const supportButton = {
    title: 'Get Help',
    href: '/support'
};