// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "dholiya-estate.firebaseapp.com",
  projectId: "dholiya-estate",
  storageBucket: "dholiya-estate.appspot.com",
  messagingSenderId: "826485849762",
  appId: "1:826485849762:web:90a997cb2d5f985564a1fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);