interface ResponsiveImage {
    mobile: {
        src: string;
        width: number;
        height: number;
    };
    tablet: {
        src: string;
        width: number;
        height: number;
    };
    desktop: {
        src: string;
        width: number;
        height: number;
    };
    alt: string;
}

/**
 * Creates a responsive image object with consistent aspect ratios
 * @param baseSrc - The base filename (without extension)
 * @param alt - Alt text for the image
 * @param extension - File extension (default: 'avif')
 * @param aspectRatio - Aspect ratio as [width, height] (default: [16, 9])
 * @returns ResponsiveImage object
 */
export function createResponsiveImage(
    baseSrc: string,
    alt: string,
    extension: string = 'avif',
    aspectRatio: [number, number] = [16, 9]
): ResponsiveImage {
    const [ratioW, ratioH] = aspectRatio;

    // Calculate heights based on aspect ratio
    const mobileHeight = Math.round((640 * ratioH) / ratioW);
    const tabletHeight = Math.round((1024 * ratioH) / ratioW);
    const desktopHeight = Math.round((1920 * ratioH) / ratioW);

    return {
        mobile: {
            src: `${baseSrc}.${extension}`,
            width: 640,
            height: mobileHeight
        },
        tablet: {
            src: `${baseSrc}.${extension}`,
            width: 1024,
            height: tabletHeight
        },
        desktop: {
            src: `${baseSrc}.${extension}`,
            width: 1920,
            height: desktopHeight
        },
        alt
    };
}

/**
 * Creates a responsive image object with different images for each breakpoint
 * @param images - Object with mobile, tablet, and desktop image specs
 * @param alt - Alt text for the image
 * @returns ResponsiveImage object
 */
export function createResponsiveImageSet(
    images: {
        mobile: { src: string; width: number; height: number; };
        tablet: { src: string; width: number; height: number; };
        desktop: { src: string; width: number; height: number; };
    },
    alt: string
): ResponsiveImage {
    return {
        ...images,
        alt
    };
} 