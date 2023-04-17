// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSLbySuTPMS5ZnmYLdgplHlxKP5CqenXM",
  authDomain: "todoapp-359a3.firebaseapp.com",
  projectId: "todoapp-359a3",
  storageBucket: "todoapp-359a3.appspot.com",
  messagingSenderId: "29222586236",
  appId: "1:29222586236:web:236aec521c40067ffbc6f9",
  measurementId: "G-R7ZJ4EQ777"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);








export const db = getFirestore(app);