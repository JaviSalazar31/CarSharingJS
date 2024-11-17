// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC1y73ELhkeT7PBnMjMaIaSTvJM_ltb63g",
  authDomain: "tiendajs-a3f60.firebaseapp.com",
  projectId: "tiendajs-a3f60",
  storageBucket: "tiendajs-a3f60.firebasestorage.app",
  messagingSenderId: "211120456261",
  appId: "1:211120456261:web:e19630456368b6536e192c"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);
export { db };
