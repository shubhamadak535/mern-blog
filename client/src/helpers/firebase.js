// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getEnv } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API'),
  authDomain: "mern-blog-f045f.firebaseapp.com",
  projectId: "mern-blog-f045f",
  storageBucket: "mern-blog-f045f.firebasestorage.app",
  messagingSenderId: "882017924139",
  appId: "1:882017924139:web:b3a8869620a957fcbaa66e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }