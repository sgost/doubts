// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMpDGKR-zFk0p2ZJgJe5n2_s8USXmdi6I",
    authDomain: "leave-tracker-2bcd5.firebaseapp.com",
    projectId: "leave-tracker-2bcd5",
    storageBucket: "leave-tracker-2bcd5.appspot.com",
    messagingSenderId: "232535910229",
    appId: "1:232535910229:web:cffd139a832a477c8ab1dc",
    measurementId: "G-LKD4R5QG5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider()