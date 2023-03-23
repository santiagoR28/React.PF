import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVBpE2lzQIg7R4fI4JD9ODv81v4e1Aws8",
  authDomain: "testraectsanti.firebaseapp.com",
  projectId: "testraectsanti",
  storageBucket: "testraectsanti.appspot.com",
  messagingSenderId: "856441770560",
  appId: "1:856441770560:web:7381955aed3471f94bc5a5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
