// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
  // apiKey: "AIzaSyAgnPLoGPNePz0bJ2c7iwAy9abl-R_b9f8",
  // authDomain: "best-one-36ee0.firebaseapp.com",
  // projectId: "best-one-36ee0",
  // storageBucket: "best-one-36ee0.appspot.com",
  // messagingSenderId: "953692256859",
  // appId: "1:953692256859:web:50c3b3baae7feb7bd71d7e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
