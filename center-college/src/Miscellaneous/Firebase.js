import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBxS-hjuy8a67XazO35YPtf4gvRNKWq3WM",
    authDomain: "center-college.firebaseapp.com",
    projectId: "center-college",
    storageBucket: "center-college.firebasestorage.app",
    messagingSenderId: "111549126257",
    appId: "1:111549126257:web:7409934b1b042603baedd0",
    measurementId: "G-WE9EV9RHQW"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const database = getDatabase(app);

export { auth, firestore, database };