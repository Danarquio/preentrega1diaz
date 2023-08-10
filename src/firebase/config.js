
import { initializeApp } from "firebase/app";

import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFgJbjAqckumoYpv4s9cF_x6xtJIJxDK4",
  authDomain: "dracarnis-26d45.firebaseapp.com",
  projectId: "dracarnis-26d45",
  storageBucket: "dracarnis-26d45.appspot.com",
  messagingSenderId: "515237045653",
  appId: "1:515237045653:web:30e055881c7d07fd05429c",
  measurementId: "G-1FZ242E0N5"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)