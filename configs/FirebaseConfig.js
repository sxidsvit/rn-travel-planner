// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// import { getAnalytics } from "firebase/analytics"; 


const apiKey = process.env.FIREBASE_API_KEY
console.log('FIREBASE_API_KEY - apiKey: ', apiKey);

const firebaseConfig = {
  apiKey: `AIzaSyB1YquE6sZxiY5gWL94OLLxEDd22sXRAfQ`,
  authDomain: "asp-ads.firebaseapp.com",
  databaseURL: "https://asp-ads.firebaseio.com",
  projectId: "asp-ads",
  storageBucket: "asp-ads.appspot.com",
  messagingSenderId: "252025369069",
  appId: "1:252025369069:web:2f84c6b7566d919ff577e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);