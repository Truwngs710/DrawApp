// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeG-2YK_e50_atoi_wB-UxDe7CoOkHMAw",
  authDomain: "draw-92788.firebaseapp.com",
  projectId: "draw-92788",
  storageBucket: "draw-92788.appspot.com",
  messagingSenderId: "819084824475",
  appId: "1:819084824475:web:c7dc60a0c2ad6a250a9b3e",
  measurementId: "G-37GMXRSQ9E",
};

// Initialize Firebase
if (true) {
  initializeApp(firebaseConfig);
}
export const db = getDatabase();
