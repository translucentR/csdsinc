/**
 * Microsoft Clarity Consent Testing Script
 * 
 * Run this in the browser console to test the implementation
 * Usage: Copy and paste this entire script into the browser console
 */

console.log('🔍 Microsoft Clarity Consent Testing Script');
console.log('==========================================');

// Test 1: Check if region detection utility is available
async function testRegionDetection() {
  console.log('\n📍 Testing Region Detection...');
  
  try {
    // Try to import the region detection utility
    const { getRegionInfo } = await import('/src/lib/utils/region-detection.js');
    const regionInfo = await getRegionInfo();
    
    console.log('✅ Region detection working');
    console.log('Region Info:', regionInfo);
    
    if (regionInfo.requiresConsent) {
      console.log('🚨 User is in a consent-required region');
    } else {
      console.log('✅ User is not in a consent-required region');
    }
    
    return regionInfo;
  } catch (error) {
    console.error('❌ Region detection failed:', error);
    return null;
  }
}

// Test 2: Check Clarity integration
function testClarityIntegration() {
  console.log('\n🔍 Testing Clarity Integration...');
  
  if (typeof window.clarity === 'undefined') {
    console.error('❌ Clarity not loaded');
    return false;
  }
  
  console.log('✅ Clarity is loaded');
  
  // Test consent API
  try {
    window.clarity('consent', true);
    console.log('✅ Clarity consent API working (granted)');
    
    window.clarity('consent', false);
    console.log('✅ Clarity consent API working (denied)');
    
    // Test metadata setting
    window.clarity('set', 'test_compliance', 'true');
    console.log('✅ Clarity metadata API working');
    
    return true;
  } catch (error) {
    console.error('❌ Clarity API error:', error);
    return false;
  }
}

// Test 3: Check Google Consent Mode
function testGoogleConsentMode() {
  console.log('\n🔍 Testing Google Consent Mode...');
  
  if (typeof window.gtag === 'undefined') {
    console.warn('⚠️ Google Analytics not loaded (may be expected in dev)');
    return false;
  }
  
  console.log('✅ Google Analytics loaded');
  
  try {
    // Test consent mode
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    console.log('✅ Google Consent Mode working (granted)');
    
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
    console.log('✅ Google Consent Mode working (denied)');
    
    return true;
  } catch (error) {
    console.error('❌ Google Consent Mode error:', error);
    return false;
  }
}

// Test 4: Check stored preferences
function testStoredPreferences() {
  console.log('\n💾 Testing Stored Preferences...');
  
  const preferences = localStorage.getItem('cookie-preferences');
  const regionInfo = sessionStorage.getItem('region-info');
  
  console.log('Cookie Preferences:', preferences ? JSON.parse(preferences) : 'None stored');
  console.log('Region Info:', regionInfo ? JSON.parse(regionInfo) : 'None stored');
  
  if (preferences) {
    console.log('✅ Cookie preferences are stored');
  } else {
    console.log('⚠️ No cookie preferences stored (expected on first visit)');
  }
  
  if (regionInfo) {
    console.log('✅ Region info is cached');
  } else {
    console.log('⚠️ No region info cached (expected on first visit)');
  }
}

// Test 5: Simulate EU user experience
function simulateEUUser() {
  console.log('\n🇪🇺 Simulating EU User Experience...');
  
  // Clear existing preferences
  localStorage.removeItem('cookie-preferences');
  sessionStorage.removeItem('region-info');
  
  // Set mock EU region info
  const mockEURegion = {
    requiresConsent: true,
    countryCode: 'DE',
    detectionMethod: 'test'
  };
  
  sessionStorage.setItem('region-info', JSON.stringify(mockEURegion));
  
  console.log('✅ Simulated EU user (Germany)');
  console.log('💡 Reload the page to see EU-specific consent banner');
  
  // Show cookie preferences banner
  window.dispatchEvent(new Event('show-cookie-preferences'));
}

// Test 6: Test consent flow
function testConsentFlow() {
  console.log('\n🔄 Testing Consent Flow...');
  
  // Test granting consent
  const testPreferences = {
    necessary: true,
    analytics: true
  };
  
  localStorage.setItem('cookie-preferences', JSON.stringify(testPreferences));
  console.log('✅ Consent granted (test)');
  
  // Test denying consent
  const denyPreferences = {
    necessary: true,
    analytics: false
  };
  
  localStorage.setItem('cookie-preferences', JSON.stringify(denyPreferences));
  console.log('✅ Consent denied (test)');
  
  console.log('💡 Check Clarity dashboard for consent signals');
}

// Run all tests
async function runAllTests() {
  console.log('🚀 Running all tests...\n');
  
  const regionInfo = await testRegionDetection();
  const clarityWorking = testClarityIntegration();
  const googleWorking = testGoogleConsentMode();
  
  testStoredPreferences();
  
  console.log('\n📊 Test Summary:');
  console.log('================');
  console.log('Region Detection:', regionInfo ? '✅' : '❌');
  console.log('Clarity Integration:', clarityWorking ? '✅' : '❌');
  console.log('Google Consent Mode:', googleWorking ? '✅' : '⚠️');
  
  if (regionInfo && regionInfo.requiresConsent) {
    console.log('\n🚨 IMPORTANT: User is in EU/UK/CH - consent is required!');
  }
  
  console.log('\n🛠️ Additional Commands:');
  console.log('- simulateEUUser() - Test EU user experience');
  console.log('- testConsentFlow() - Test consent granting/denial');
  console.log('- window.dispatchEvent(new Event("show-cookie-preferences")) - Show consent banner');
}

// Make functions available globally for manual testing
window.testClarityConsent = {
  runAllTests,
  testRegionDetection,
  testClarityIntegration,
  testGoogleConsentMode,
  testStoredPreferences,
  simulateEUUser,
  testConsentFlow
};

// Auto-run tests
runAllTests();

console.log('\n💡 All test functions are available as window.testClarityConsent.*');
console.log('Example: window.testClarityConsent.simulateEUUser()');
