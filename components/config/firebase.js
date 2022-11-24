// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB51cJquu0eCNTgy7kmNy_sTAjMhGJGd2w",
  authDomain: "restu-65ebf.firebaseapp.com",
  projectId: "restu-65ebf",
  storageBucket: "restu-65ebf.appspot.com",
  messagingSenderId: "983901487898",
  appId: "1:983901487898:web:1e866f5327fd2d776b62a3",
  measurementId: "G-E40V5HS3WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export{auth}