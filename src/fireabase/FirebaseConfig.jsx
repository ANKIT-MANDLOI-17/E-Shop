// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAloAtM2nwUZGOd-OY68FZh6xskOKlq1iE",
  authDomain: "e-shope-52cc4.firebaseapp.com",
  projectId: "e-shope-52cc4",
  storageBucket: "e-shope-52cc4.appspot.com",
  messagingSenderId: "1066930779249",
  appId: "1:1066930779249:web:c7c97d8aa740a0a3c517d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };


