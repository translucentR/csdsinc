/**
 * Region Detection Utility for Microsoft Clarity Cookie Consent Compliance
 * 
 * This utility helps identify users from regions that require explicit consent
 * for Microsoft Clarity (EEA, UK, and Switzerland) as per the October 31, 2025 requirement.
 */

// List of EEA countries, UK, and Switzerland that require explicit consent
const CONSENT_REQUIRED_COUNTRIES = new Set([
    // EEA Countries
    'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IS', 'IE', 'IT', 'LV', 'LI', 'LT', 'LU', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
    // United Kingdom
    'GB',
    // Switzerland
    'CH'
]);

export interface RegionInfo {
    requiresConsent: boolean;
    countryCode: string | null;
    detectionMethod: 'timezone' | 'api' | 'unknown';
}

/**
 * Detect if the user is in a region that requires explicit consent for Clarity
 */
export async function detectUserRegion(): Promise<RegionInfo> {
    // First try timezone-based detection (fast, works offline)
    const timezoneResult = detectRegionByTimezone();
    if (timezoneResult.countryCode) {
        return timezoneResult;
    }

    // Fallback to IP-based detection (requires network)
    try {
        const apiResult = await detectRegionByAPI();
        return apiResult;
    } catch (error) {
        console.warn('Failed to detect region via API:', error);

        // Conservative approach: if we can't detect, assume consent is required
        return {
            requiresConsent: true,
            countryCode: null,
            detectionMethod: 'unknown'
        };
    }
}

/**
 * Fast timezone-based region detection
 * This provides a good approximation for European regions
 */
function detectRegionByTimezone(): RegionInfo {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        // European timezones that likely indicate consent-required regions
        const europeanTimezones = [
            'Europe/London', 'Europe/Dublin', // UK/Ireland
            'Europe/Zurich', 'Europe/Geneva', // Switzerland
            'Europe/Vienna', 'Europe/Berlin', 'Europe/Paris', 'Europe/Rome',
            'Europe/Madrid', 'Europe/Amsterdam', 'Europe/Brussels', 'Europe/Prague',
            'Europe/Warsaw', 'Europe/Stockholm', 'Europe/Helsinki', 'Europe/Oslo',
            'Europe/Copenhagen', 'Europe/Budapest', 'Europe/Bucharest', 'Europe/Sofia',
            'Europe/Athens', 'Europe/Lisbon', 'Europe/Ljubljana', 'Europe/Bratislava',
            'Europe/Tallinn', 'Europe/Riga', 'Europe/Vilnius', 'Europe/Luxembourg',
            'Europe/Malta', 'Europe/Nicosia', 'Europe/Zagreb', 'Europe/Reykjavik'
        ];

        const isEuropeanTimezone = europeanTimezones.some(tz => timezone.startsWith(tz));

        // Map specific timezones to country codes
        let countryCode: string | null = null;
        if (timezone.startsWith('Europe/London') || timezone.startsWith('Europe/Dublin')) {
            countryCode = 'GB'; // Assume UK for London timezone (conservative)
        } else if (timezone.startsWith('Europe/Zurich') || timezone.startsWith('Europe/Geneva')) {
            countryCode = 'CH';
        } else if (isEuropeanTimezone) {
            // For other European timezones, we can't be certain of the exact country
            // but it's likely in a consent-required region
            countryCode = 'EU'; // Generic EU indicator
        }

        return {
            requiresConsent: isEuropeanTimezone,
            countryCode,
            detectionMethod: 'timezone'
        };
    } catch (error) {
        console.warn('Timezone detection failed:', error);
        return {
            requiresConsent: true, // Conservative default
            countryCode: null,
            detectionMethod: 'unknown'
        };
    }
}

/**
 * API-based region detection using a free geolocation service
 * This is more accurate but requires a network request
 */
async function detectRegionByAPI(): Promise<RegionInfo> {
    try {
        // Using ipapi.co which provides free geolocation without requiring API keys
        const response = await fetch('https://ipapi.co/json/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        const countryCode = data.country_code;

        return {
            requiresConsent: CONSENT_REQUIRED_COUNTRIES.has(countryCode),
            countryCode,
            detectionMethod: 'api'
        };
    } catch (error) {
        throw new Error(`Region detection API failed: ${error}`);
    }
}

/**
 * Check if a specific country code requires consent
 */
export function requiresConsent(countryCode: string): boolean {
    return CONSENT_REQUIRED_COUNTRIES.has(countryCode.toUpperCase());
}

/**
 * Get a cached region detection result
 * This helps avoid repeated API calls during the same session
 */
export function getCachedRegionInfo(): RegionInfo | null {
    try {
        const cached = sessionStorage.getItem('region-info');
        if (cached) {
            const parsed = JSON.parse(cached);
            // Validate the cached data structure
            if (typeof parsed.requiresConsent === 'boolean' &&
                typeof parsed.detectionMethod === 'string') {
                return parsed;
            }
        }
    } catch (error) {
        console.warn('Failed to read cached region info:', error);
    }
    return null;
}

/**
 * Cache region detection result for the session
 */
export function setCachedRegionInfo(regionInfo: RegionInfo): void {
    try {
        sessionStorage.setItem('region-info', JSON.stringify(regionInfo));
    } catch (error) {
        console.warn('Failed to cache region info:', error);
    }
}

/**
 * Get region info with caching
 */
export async function getRegionInfo(): Promise<RegionInfo> {
    // Check cache first
    const cached = getCachedRegionInfo();
    if (cached) {
        return cached;
    }

    // Detect and cache
    const regionInfo = await detectUserRegion();
    setCachedRegionInfo(regionInfo);
    return regionInfo;
}
