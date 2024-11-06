import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZU5NIj8KbE90pQ-I2OsmY3xxTQtVLcpU",
  authDomain: "expodemoapp-6a554.firebaseapp.com",
  projectId: "expodemoapp-6a554",
  storageBucket: "expodemoapp-6a554.firebasestorage.app",
  messagingSenderId: "897788196486",
  appId: "1:897788196486:web:3fb4d95856c48409380307"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);