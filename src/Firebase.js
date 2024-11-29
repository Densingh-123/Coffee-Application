// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCewB39-W3RZYkbcW5y_dvJVsXa2nggYi4",
  authDomain: "cof-auth.firebaseapp.com",
  projectId: "cof-auth",
  storageBucket: "cof-auth.appspot.com",
  messagingSenderId: "919323841141",
  appId: "1:919323841141:web:cd43d5f170ca4080f11e3c",
  measurementId: "G-018Y1SPK2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };
