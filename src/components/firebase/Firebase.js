import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6P2RowVYbwP_vrwdXHC5vNOv2VWVcU5g",
  authDomain: "react-pf-coder.firebaseapp.com",
  projectId: "react-pf-coder",
  storageBucket: "react-pf-coder.appspot.com",
  messagingSenderId: "690549138714",
  appId: "1:690549138714:web:2cc05e0ad4c0f77475b8a3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
