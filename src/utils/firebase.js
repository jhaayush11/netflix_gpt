// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAybzO64TrWMw6hymGY5JlTX0raJZ52Gww",
  authDomain: "netflixgpt-3dc1f.firebaseapp.com",
  projectId: "netflixgpt-3dc1f",
  storageBucket: "netflixgpt-3dc1f.appspot.com",
  messagingSenderId: "567459308499",
  appId: "1:567459308499:web:6b8a56c099a99590c50526",
  measurementId: "G-5DCBJ2N29N",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
