 import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getFirestore } from "firebase/firestore";

   
const firebaseConfig = {
  apiKey: "AIzaSyBozoi1KjscjsjhSyOZoYK8q4QgeSFhz-I",
  authDomain: "practice-937ee.firebaseapp.com",
  projectId: "practice-937ee",
  storageBucket: "practice-937ee.appspot.com",
  messagingSenderId: "495518198972",
  appId: "1:495518198972:web:1c5809abf9ab7c5de934b9",
  measurementId: "G-NXY5KZBX0P"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// export const db = getFirestore(app);

export default app