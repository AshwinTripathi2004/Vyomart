// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginvyomart.firebaseapp.com",
  projectId: "loginvyomart",
  storageBucket: "loginvyomart.firebasestorage.app",
  messagingSenderId: "954205138868",
  appId: "1:954205138868:web:90766466962d0210450ce1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };