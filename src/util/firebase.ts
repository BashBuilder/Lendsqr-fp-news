import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, OAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCElKPBFXSZKCNJeUajYgFTTUfXOVoo3q0",
  authDomain: "lendsqr-fp-news-ef72c.firebaseapp.com",
  projectId: "lendsqr-fp-news-ef72c",
  storageBucket: "lendsqr-fp-news-ef72c.firebasestorage.app",
  messagingSenderId: "5585564632",
  appId: "1:5585564632:web:6fe3e1ed53b4729fd2f8ad",
  measurementId: "G-0MNNDCW6MD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
async function initializeAnalytics(app) {
  if (await isSupported()) {
    analytics = getAnalytics(app);
  }
}

initializeAnalytics(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

export { app, analytics, auth, googleProvider, appleProvider };
