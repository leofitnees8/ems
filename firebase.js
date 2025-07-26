// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnES93NzE5TGxtyqZ5xW-I78IExV1f1eE",
  authDomain: "ems-282f0.firebaseapp.com",
  projectId: "ems-282f0",
  storageBucket: "ems-282f0.appspot.com",
  messagingSenderId: "33075424116",
  appId: "1:33075424116:web:7578b6c965280f450ada21",
  measurementId: "G-NG7KRQEUJB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
