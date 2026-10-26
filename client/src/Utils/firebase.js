// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewbot-b32b6.firebaseapp.com",
  projectId: "interviewbot-b32b6",
  storageBucket: "interviewbot-b32b6.firebasestorage.app",
  messagingSenderId: "192901208698",
  appId: "1:192901208698:web:5ab07e33118ae2ca51f9c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider}