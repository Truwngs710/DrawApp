// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoYWGPMKwaf6AUmezNF2PcXaIdS6FT2bU",
  authDomain: "draw-e787f.firebaseapp.com",
  databaseURL: "https://draw-e787f-default-rtdb.firebaseio.com",
  projectId: "draw-e787f",
  storageBucket: "draw-e787f.appspot.com",
  messagingSenderId: "994276236477",
  appId: "1:994276236477:web:1095fc8f84a58aed116bd4",
  measurementId: "G-XP1PKS60QX"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const db = getDatabase();
