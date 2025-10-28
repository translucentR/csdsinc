# Microsoft Clarity Cookie Consent Implementation

This document outlines the implementation of Microsoft Clarity's cookie consent requirements to comply with the October 31, 2025 enforcement deadline for EEA, UK, and Switzerland traffic.

## Overview

Microsoft Clarity now requires explicit consent signals for users from the European Economic Area (EEA), United Kingdom, and Switzerland. This implementation ensures compliance while maintaining full functionality for users in other regions.

## Implementation Components

### 1. Region Detection (`src/lib/utils/region-detection.ts`)

**Purpose**: Automatically detect if users are from regions requiring explicit consent.

**Methods**:
- **Timezone-based detection**: Fast, works offline, provides good approximation
- **IP-based detection**: More accurate, requires network request to ipapi.co
- **Caching**: Results cached in sessionStorage to avoid repeated API calls

**Supported Regions**:
- All EEA countries (27 EU members + Iceland, Liechtenstein, Norway)
- United Kingdom (GB)
- Switzerland (CH)

### 2. Enhanced Cookie Consent Component (`src/lib/components/CookieConsent.svelte`)

**New Features**:
- Automatic region detection on component mount
- Region-specific messaging for EU users
- Enhanced Clarity consent API integration
- Compliance metadata tracking

**Consent Metadata Sent to Clarity**:
- `consent_region`: User's country code or "EU"
- `consent_method`: "explicit" or "denied"
- `consent_timestamp`: ISO timestamp of consent decision
- `detection_method`: How region was detected ("timezone", "api", or "unknown")

### 3. Analytics Initialization (`src/app.html`)

**Enhanced Features**:
- Google Consent Mode v2 integration
- Automatic consent application on script load
- Proper consent queuing for Clarity
- Conservative default (consent denied until explicitly granted)

### 4. TypeScript Declarations (`src/app.d.ts`)

**Updates**:
- Enhanced Clarity API method signatures
- Extended Google Consent Mode options
- Support for compliance metadata

## Compliance Features

### For EEA/UK/Switzerland Users:
1. **Explicit Consent Required**: Analytics cookies disabled by default
2. **Clear Messaging**: Special notice about consent requirements
3. **Metadata Tracking**: Compliance information sent to Clarity
4. **Proper API Usage**: Uses Clarity's official consent API

### For Other Regions:
1. **Standard Behavior**: Existing cookie consent flow maintained
2. **No Additional Restrictions**: Full analytics functionality available
3. **Performance Optimized**: Minimal overhead for non-EU users

## Testing Instructions

### 1. Test Region Detection

```javascript
// In browser console
import { getRegionInfo } from '/src/lib/utils/region-detection.js';
const region = await getRegionInfo();
console.log('Region Info:', region);
```

### 2. Test EU User Experience

**Method 1: Timezone Simulation**
1. Change system timezone to Europe/London or Europe/Zurich
2. Clear localStorage and sessionStorage
3. Reload the page
4. Verify special EU messaging appears

**Method 2: VPN Testing**
1. Use VPN to connect from EU/UK/Switzerland
2. Clear browser storage
3. Test consent flow
4. Check browser console for Clarity metadata

### 3. Verify Clarity Integration

**In Browser Console:**
```javascript
// Check if Clarity is loaded
console.log('Clarity loaded:', typeof window.clarity !== 'undefined');

// Check consent status
window.clarity('consent', true); // Grant consent
window.clarity('consent', false); // Deny consent

// Verify metadata (for EU users)
window.clarity('set', 'test_key', 'test_value');
```

### 4. Test Google Consent Mode

**In Browser Console:**
```javascript
// Check consent mode status
gtag('consent', 'update', {
  'analytics_storage': 'granted'
});

// Verify integration
console.log('Google Analytics disabled:', window['ga-disable-G-B07QT9XZBS']);
```

## Monitoring and Validation

### 1. Browser Console Logs
- Region detection results
- Consent decisions
- Clarity API calls
- Error messages

### 2. Clarity Dashboard
- Monitor consent rates by region
- Check for compliance metadata
- Verify proper session handling

### 3. Google Analytics
- Consent Mode reporting
- Regional traffic analysis
- Cookie usage patterns

## Troubleshooting

### Common Issues:

1. **Region Detection Fails**
   - Falls back to conservative approach (assumes consent required)
   - Check network connectivity for API-based detection
   - Verify timezone settings for timezone-based detection

2. **Clarity Not Loading**
   - Check browser console for script errors
   - Verify production domain restrictions
   - Ensure proper consent signals are sent

3. **Consent Not Persisting**
   - Check localStorage functionality
   - Verify cookie domain settings
   - Clear browser storage and retry

### Debug Commands:

```javascript
// Clear all stored preferences
localStorage.removeItem('cookie-preferences');
sessionStorage.removeItem('region-info');

// Force show cookie banner
window.dispatchEvent(new Event('show-cookie-preferences'));

// Check stored data
console.log('Preferences:', localStorage.getItem('cookie-preferences'));
console.log('Region:', sessionStorage.getItem('region-info'));
```

## Deployment Checklist

- [ ] Test region detection with EU/UK/CH timezones
- [ ] Verify Clarity consent API integration
- [ ] Test Google Consent Mode functionality
- [ ] Validate compliance metadata transmission
- [ ] Check performance impact on non-EU users
- [ ] Monitor Clarity dashboard for proper consent signals
- [ ] Test cookie clearing functionality
- [ ] Verify proper error handling and fallbacks

## Compliance Notes

1. **Conservative Approach**: When in doubt, the system assumes consent is required
2. **Explicit Consent**: Only "opt-in" consent is accepted for EU users
3. **Metadata Tracking**: All consent decisions are logged with timestamps
4. **API Compliance**: Uses Microsoft's official Clarity consent API
5. **Google Integration**: Properly integrated with Google Consent Mode v2

## Support

For issues or questions:
1. Check browser console for error messages
2. Review Clarity dashboard for consent data
3. Contact Microsoft Clarity support at clarityms@microsoft.com
4. Reference this implementation in support requests

## Implementation Date

Implemented: October 28, 2025
Compliance Deadline: October 31, 2025
Status: Ready for production deployment
