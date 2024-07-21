// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-flow-e4e04.firebaseapp.com",
  projectId: "task-flow-e4e04",
  storageBucket: "task-flow-e4e04.appspot.com",
  messagingSenderId: "709093761621",
  appId: "1:709093761621:web:00cf75e96b9a899d306adc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
