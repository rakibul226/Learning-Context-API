// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH8x9wqcdeb6w2py_deDrNyd8D4clqm3o",
  authDomain: "m-9-conceptutal-session-01.firebaseapp.com",
  projectId: "m-9-conceptutal-session-01",
  storageBucket: "m-9-conceptutal-session-01.appspot.com",
  messagingSenderId: "928863350307",
  appId: "1:928863350307:web:4e456f6b06005b47744b96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
