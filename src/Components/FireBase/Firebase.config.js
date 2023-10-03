// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm6OCtTBQmOTL3_J1hS207OmYyMfsH_IQ",
  authDomain: "fir-emailaddress.firebaseapp.com",
  projectId: "fir-emailaddress",
  storageBucket: "fir-emailaddress.appspot.com",
  messagingSenderId: "1019597451375",
  appId: "1:1019597451375:web:8021abc56468394d759d9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
