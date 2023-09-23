// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjq7aPTP-ZF0h2hR25D_pMtQMAypzBTA4",
  authDomain: "reactcd-4d8f2.firebaseapp.com",
  projectId: "reactcd-4d8f2",
  storageBucket: "reactcd-4d8f2.appspot.com",
  messagingSenderId: "105700072821",
  appId: "1:105700072821:web:34d8f3751169e9b1b6c73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)