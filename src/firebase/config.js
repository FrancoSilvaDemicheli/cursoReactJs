    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD_sGfn8pqH8ScU4sbYWaJ8CHi3SIDcZo",
  authDomain: "react-js-1d35e.firebaseapp.com",
  projectId: "react-js-1d35e",
  storageBucket: "react-js-1d35e.appspot.com",
  messagingSenderId: "374760204727",
  appId: "1:374760204727:web:61b578e81b6586c8fc6032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)