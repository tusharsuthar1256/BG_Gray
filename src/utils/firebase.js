// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
     apiKey: import.meta.env.VITE_GOOGLE_AUTH_API_KEY,
     authDomain: import.meta.env.VITE_GOOGLE_AUTH_AUTHDOMAIN,
     projectId: import.meta.env.VITE_GOOGLE_AUTH_PROJECT_ID,
     storageBucket: import.meta.env.VITE_GOOGLE_AUTH_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_GOOGLE_AUTH_MEDDAGING_SENDER_ID,
     appId: import.meta.env.VITE_GOOGLE_AUTH_APP_ID,
     measurementId: import.meta.env.VITE_GOOGLE_AUTH_MEASUREMENT_ID
   };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup, signOut };
