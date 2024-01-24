// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuLHZL1_KCP2B7icSlqOXHxg_uCC4lI7E",
  authDomain: "react-auth-74fad.firebaseapp.com",
  projectId: "react-auth-74fad",
  storageBucket: "react-auth-74fad.appspot.com",
  messagingSenderId: "951971429203",
  appId: "1:951971429203:web:a7dad9b585989dee79bfa6",
  measurementId: "G-1875WNLT4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth()
export {auth , provider , app}