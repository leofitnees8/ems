// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnE9S3nZG_5TGxtyqZ5xW-I78IExV1f1E",
  authDomain: "ems-282f0.firebaseapp.com",
  projectId: "ems-282f0",
  storageBucket: "ems-282f0.firebasestorage.app",
  messagingSenderId: "33075424116",
  appId: "1:33075424116:web:75708c6962580f450ada21",
  measurementId: "G-NG7KRQEJLB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
