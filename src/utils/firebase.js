// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdHgdfnMVpezCY2C5h6MbWq-9TOXfyTe8",
  authDomain: "moviesnetflix-6ed82.firebaseapp.com",
  projectId: "moviesnetflix-6ed82",
  storageBucket: "moviesnetflix-6ed82.appspot.com",
  messagingSenderId: "947357601921",
  appId: "1:947357601921:web:7b719d8d2268db242c7d80",
  measurementId: "G-K9S3KV25LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()