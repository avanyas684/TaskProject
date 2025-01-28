// Import required modules
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHrAHtPzTb-2Vl-vbgLZFJqncwwuZ3Z_Y",
  authDomain: "task-management-8b07c.firebaseapp.com",
  projectId: "task-management-8b07c",
  storageBucket: "task-management-8b07c.firebasestorage.app",
  messagingSenderId: "101546260761",
  appId: "1:101546260761:web:016286fb53c6241b98ed88",
  measurementId: "G-E557VCTQFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and set up Google provider
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Google sign-in function
export const signInWithGoogle = () => signInWithPopup(auth, provider);
