// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcPhZeZDbhc8mico1VeSTcZGTbsFF3ZOM",
  authDomain: "winners-app-2eaf2.firebaseapp.com",
  projectId: "winners-app-2eaf2",
  storageBucket: "winners-app-2eaf2.appspot.com",
  messagingSenderId: "725233861407",
  appId: "1:725233861407:web:13521e190730c56098662a",
  measurementId: "G-MX7PNWGS9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;