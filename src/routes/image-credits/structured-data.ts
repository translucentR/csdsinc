export const imageCreditsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Image Credits',
    description: 'Image credits and attributions for photos used on the CSDS website.',
    url: '/image-credits',
    mainEntity: {
        '@type': 'CreativeWork',
        name: 'Image Credits and Attributions',
        description: 'Acknowledgment of photographers and creators whose work enhances our website.',
        author: {
            '@type': 'Organization',
            name: 'Computer Systems Development Services'
        }
    }
}; 