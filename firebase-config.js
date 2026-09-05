// Firebase Configuration for ETF-P (Halal ETF Investing in Jordan)
// Ready for Firebase Hosting & Firestore on the Spark (Free Tier) Plan

const firebaseConfig = {
  apiKey: "AIzaSy_YOUR_API_KEY_HERE",
  authDomain: "etf-p-waitlist.firebaseapp.com",
  projectId: "etf-p-waitlist",
  storageBucket: "etf-p-waitlist.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

window.isFirebaseConfigured = function() {
  return firebaseConfig.apiKey !== "AIzaSy_YOUR_API_KEY_HERE";
};
