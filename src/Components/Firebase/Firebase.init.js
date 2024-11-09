// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMZjXJSlj_5epH822WCo2qoWlYXjhCCls",
  authDomain: "email-password-auth-aa68a.firebaseapp.com",
  projectId: "email-password-auth-aa68a",
  storageBucket: "email-password-auth-aa68a.firebasestorage.app",
  messagingSenderId: "952611202254",
  appId: "1:952611202254:web:30740a6362e963a6d75c9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
