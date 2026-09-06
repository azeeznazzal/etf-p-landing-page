// Firebase Configuration for ETF-P (Halal ETF Investing in Jordan)
// Strictly ZERO secrets or API keys stored in client source code.
//
// On Firebase Hosting, project configuration is dynamically provided at runtime
// by Firebase's reserved script `/__/firebase/init.js`.
//
// For local testing or GitHub Pages, client uses secure local persistence and graceful fallback.

(function() {
  // Helper to check if Firebase App and Firestore are initialized and active
  window.isFirebaseConfigured = function() {
    return typeof firebase !== 'undefined' && 
           Array.isArray(firebase.apps) && 
           firebase.apps.length > 0;
  };

  // Helper to get Firestore instance safely
  window.getFirebaseDb = function() {
    if (window.isFirebaseConfigured()) {
      try {
        return firebase.firestore();
      } catch (e) {
        console.warn('Firestore initialization warning:', e);
        return null;
      }
    }
    return null;
  };
})();
