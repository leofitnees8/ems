// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnE953ZnG_5TGytxqZ5xW-I78IExV1f1E",
  authDomain: "ems-282f0.firebaseapp.com",
  projectId: "ems-282f0",
  storageBucket: "ems-282f0.appspot.com",
  messagingSenderId: "33075424116",
  appId: "1:33075424116:web:75708c6962580f4580ada21",
  measurementId: "G-N67RQEJLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
