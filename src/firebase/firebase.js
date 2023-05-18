//src/firebase/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcfIU7OqJ1wPk8NSwCHAFZlgzSV852H9A",
  authDomain: "rssulfat.firebaseapp.com",
  projectId: "rssulfat",
  storageBucket: "rssulfat.appspot.com",
  messagingSenderId: "1010812547174",
  appId: "1:1010812547174:web:e4b85ec40d27d25aeebda7",
  measurementId: "G-Z4V3TQZ4GZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
