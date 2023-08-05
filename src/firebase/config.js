// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFgJbjAqckumoYpv4s9cF_x6xtJIJxDK4",
  authDomain: "dracarnis-26d45.firebaseapp.com",
  projectId: "dracarnis-26d45",
  storageBucket: "dracarnis-26d45.appspot.com",
  messagingSenderId: "515237045653",
  appId: "1:515237045653:web:30e055881c7d07fd05429c",
  measurementId: "G-1FZ242E0N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)