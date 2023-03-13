// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvBov_eQjT9iJmNuKJgoIpWIoaP0b_JyQ",
  authDomain: "pokemon-de6fb.firebaseapp.com",
  projectId: "pokemon-de6fb",
  storageBucket: "pokemon-de6fb.appspot.com",
  messagingSenderId: "533879354156",
  appId: "1:533879354156:web:7a955d0a17ece0bbb13289",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
