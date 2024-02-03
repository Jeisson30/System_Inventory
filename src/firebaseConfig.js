// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAnalytics } from "firebase/analytics";
//import { DisabledByDefaultOutlined } from "@mui/icons-material";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDkkw0Kei-SIkUttjUXYzcKBvcMnFELAU",
  authDomain: "system-inventory-ad6a8.firebaseapp.com",
  projectId: "system-inventory-ad6a8",
  storageBucket: "system-inventory-ad6a8.appspot.com",
  messagingSenderId: "323737219762",
  appId: "1:323737219762:web:dfeba81352feaefd760fab",
  measurementId: "G-Q6ZDQPQX1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//const analytics = getAnalytics(app);

export { app, auth }