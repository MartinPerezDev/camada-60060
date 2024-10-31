import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLbfNCjRE0TJXvaqthR3M5jAcYMaQMfS4",
  authDomain: "ecommerce-60060.firebaseapp.com",
  projectId: "ecommerce-60060",
  storageBucket: "ecommerce-60060.appspot.com",
  messagingSenderId: "829419581941",
  appId: "1:829419581941:web:330f8e57e0ec88350830bc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db