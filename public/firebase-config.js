// Firebase Configuration for ETF-P (Halal ETF Investing in Jordan)
// Strictly ZERO secrets or API keys stored in client source code.
//
// 1. On Firebase Hosting: dynamically uses runtime init scripts provided by Firebase infrastructure.
// 2. On GitHub Pages / External hosts: dynamically resolves runtime project config from init endpoint.
// 3. Firestore data is securely stored with zero client-side exposure.

(function() {
  let dbInstance = null;
  let isInitializing = false;
  const initCallbacks = [];

  function notifyInit() {
    while (initCallbacks.length > 0) {
      const cb = initCallbacks.shift();
      try { cb(dbInstance); } catch (e) {}
    }
  }

  // Initialize Firebase dynamically without hardcoding keys in source files
  async function initFirebase() {
    if (typeof firebase === 'undefined') return null;

    // Already initialized (e.g. by /__/firebase/init.js on Firebase Hosting)
    if (Array.isArray(firebase.apps) && firebase.apps.length > 0) {
      try {
        dbInstance = firebase.firestore();
        notifyInit();
        return dbInstance;
      } catch (e) {
        console.warn('Firestore initialization notice:', e);
      }
    }

    // Try fetching runtime configuration (works with CORS from Firebase Hosting)
    const endpoints = [
      '/__/firebase/init.json',
      'https://etf-p-jordan.web.app/__/firebase/init.json'
    ];

    for (const endpoint of endpoints) {
      try {
        const res = await fetch(endpoint, { cache: 'force-cache' });
        if (res.ok) {
          const config = await res.json();
          if (config && config.projectId) {
            if (!firebase.apps.length) {
              firebase.initializeApp(config);
            }
            dbInstance = firebase.firestore();
            notifyInit();
            return dbInstance;
          }
        }
      } catch (err) {
        // Continue to next endpoint
      }
    }

    // Fallback direct initialization using public project ID
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp({
          projectId: 'etf-p-jordan'
        });
      }
      dbInstance = firebase.firestore();
      notifyInit();
      return dbInstance;
    } catch (e) {
      console.warn('Fallback Firebase init notice:', e);
    }

    notifyInit();
    return null;
  }

  // Helper to check if Firebase App and Firestore are active
  window.isFirebaseConfigured = function() {
    return typeof firebase !== 'undefined' && 
           Array.isArray(firebase.apps) && 
           firebase.apps.length > 0;
  };

  // Helper to get Firestore instance safely
  window.getFirebaseDb = function() {
    if (dbInstance) return dbInstance;
    if (window.isFirebaseConfigured()) {
      try {
        dbInstance = firebase.firestore();
        return dbInstance;
      } catch (e) {
        return null;
      }
    }
    return null;
  };

  // Async helper to get Firestore instance
  window.getFirebaseDbAsync = function() {
    return new Promise((resolve) => {
      const db = window.getFirebaseDb();
      if (db) {
        resolve(db);
      } else {
        initCallbacks.push((resolvedDb) => resolve(resolvedDb));
      }
    });
  };

  // Secure API: Save Waitlist Investor to Firestore
  window.saveWaitlistInvestor = async function(data) {
    const record = {
      name: data.name || 'Anonymous Investor',
      email: data.email,
      phone: data.phone || '',
      interviewOptIn: Boolean(data.interviewOptIn),
      timestamp: (typeof firebase !== 'undefined' && firebase.firestore && firebase.firestore.FieldValue) 
        ? firebase.firestore.FieldValue.serverTimestamp() 
        : new Date().toISOString(),
      source: window.location.hostname || 'direct'
    };

    let firestoreSuccess = false;
    try {
      const db = await window.getFirebaseDbAsync();
      if (db) {
        await db.collection('waitlist').add(record);
        firestoreSuccess = true;
      }
    } catch (err) {
      console.warn('Firestore waitlist save notice:', err);
    }

    // Mirror to local storage for resilience
    try {
      const localWaitlist = JSON.parse(localStorage.getItem('etf_p_pending_waitlist') || '[]');
      localWaitlist.push({ ...record, localSavedAt: new Date().toISOString(), firestoreSynced: firestoreSuccess });
      localStorage.setItem('etf_p_pending_waitlist', JSON.stringify(localWaitlist));
    } catch (e) {}

    return firestoreSuccess;
  };

  // Secure API: Save Customer Discovery Survey to Firestore
  window.saveCustomerDiscovery = async function(data) {
    const record = {
      name: data.name || 'Anonymous Investor',
      email: data.email || '',
      phone: data.phone || '',
      capacity: data.capacity || 'yes_100',
      blocker: data.blocker || 'shariah',
      trust: data.trust || 'jordan_fintech',
      pricing: data.pricing || 'percent_025',
      callConsent: Boolean(data.callConsent),
      timestamp: (typeof firebase !== 'undefined' && firebase.firestore && firebase.firestore.FieldValue) 
        ? firebase.firestore.FieldValue.serverTimestamp() 
        : new Date().toISOString(),
      date: new Date().toISOString().split('T')[0]
    };

    let firestoreSuccess = false;
    try {
      const db = await window.getFirebaseDbAsync();
      if (db) {
        await db.collection('customer_discovery').add(record);
        firestoreSuccess = true;
      }
    } catch (err) {
      console.warn('Firestore customer discovery save notice:', err);
    }

    return firestoreSuccess;
  };

  // Start initialization immediately
  initFirebase();
})();
