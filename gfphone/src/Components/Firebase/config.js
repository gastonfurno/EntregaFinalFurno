import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAHuIN_P30DV-N-dD7zoPv-a8cQ44qLT10",
  authDomain: "gfphone-d37e7.firebaseapp.com",
  projectId: "gfphone-d37e7",
  storageBucket: "gfphone-d37e7.appspot.com",
  messagingSenderId: "224436217739",
  appId: "1:224436217739:web:01509ff30b2029128b718e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);