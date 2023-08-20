// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtTtO6YniZNTGQYRlh_7kcmI2X32YaCl4",
  authDomain: "fir-test-28a62.firebaseapp.com",
  databaseURL: "https://fir-test-28a62-default-rtdb.firebaseio.com",
  projectId: "fir-test-28a62",
  storageBucket: "fir-test-28a62.appspot.com",
  messagingSenderId: "185037478918",
  appId: "1:185037478918:web:a7128b472b9871abd77787",
  measurementId: "G-YWFXRRP9YP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)