import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyDo7QD3IJjRa2df-yAwzB16qG1-hmA1s",
  authDomain: "expoproject-564b0.firebaseapp.com",
  projectId: "expoproject-564b0",
  storageBucket: "expoproject-564b0.firebasestorage.app",
  messagingSenderId: "734203552203",
  appId: "1:734203552203:web:2648fa4092191ac091564e",
  measurementId: "G-P2JW5RGXVJ"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
export const analytics = getAnalytics(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);