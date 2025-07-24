import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjMCqNdxveFs7W2xfckOH4xdB1rSQrv9c",
  authDomain: "fithub-2f57f.firebaseapp.com",
  projectId: "fithub-2f57f",
  storageBucket: "fithub-2f57f.firebasestorage.app",
  messagingSenderId: "720251466519",
  appId: "1:720251466519:web:f91663bed57a73c937bd52",
  measurementId: "G-DJ7PMR817W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db, signInWithEmailAndPassword, sendEmailVerification };