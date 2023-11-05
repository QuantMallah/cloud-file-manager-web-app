// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloud-file-manager-4d770.firebaseapp.com",
  projectId: "cloud-file-manager-4d770",
  storageBucket: "cloud-file-manager-4d770.appspot.com",
  messagingSenderId: "997902999524",
  appId: "1:997902999524:web:cf6b7a551d6854174831f1",
  measurementId: "G-V7H46JR8MS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);