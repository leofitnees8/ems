// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAHwhmB5ppbyHNR7gUaDnybG4e9nAhAkg",
  authDomain: "leoo-89ed3.firebaseapp.com",
  projectId: "leoo-89ed3",
  storageBucket: "leoo-89ed3.appspot.com",
  messagingSenderId: "615783098059",
  appId: "1:615783098059:web:bc06574a9282633cff288e",
  measurementId: "G-JWQ7YN2V9Q"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
