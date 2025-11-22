// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD30Eg-_wKia3LK8yprBDkhVUJOG-0qbEI",
  authDomain: "algeriaportal2026.firebaseapp.com",
  projectId: "algeriaportal2026",
  storageBucket: "algeriaportal2026.firebasestorage.app",
  messagingSenderId: "238364728006",
  appId: "1:238364728006:web:1721c78fe39bd27d2c55c7",
  measurementId: "G-R2Q30H48EY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);