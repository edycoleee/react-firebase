React Firebase 2023

1. Instalasi React
   npm create vite@latest react-firebase
   REACT, JAVASCRIPT + SWC
   cd react-firebase
   npm install
   npm run dev
   OPEN IN VSCODE

2. Push ke Github
   CREATE REPOSITORY GITHUB

   git init
   git add .
   git commit -m "first commit"
   git remote add origin https://github.com/edycoleee/react-firebase.git
   git push -u origin master

3. Mockup data
   git branch -M pelajaran1
   git checkout pelajaran1
   git commit -m "mockupdata"
   git push -u origin pelajaran1

4. Koneksi ke Firebase
   npm install firebase
   npm install -g firebase-tools

   //src/firebase/firebase.js
   // Import the functions you need from the SDKs you need
   import { initializeApp } from "firebase/app";
   import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

5. Refactoring
   //src/pages/CobaData1.jsx
   //src/App.jsx

6. Install React Router
   React Router 6: Private Routes (alias Protected Routes)
   https://www.robinwieruch.de/react-router-private-routes/

npm install react-router-dom
