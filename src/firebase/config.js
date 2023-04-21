
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDV-OJGk5hYb1zhjXxFyybkFN7CB79puXs",
    authDomain: "react-js-1-796bc.firebaseapp.com",
    projectId: "react-js-1-796bc",
    storageBucket: "react-js-1-796bc.appspot.com",
    messagingSenderId: "488096309449",
    appId: "1:488096309449:web:95bf02e54e5e9e330d6d18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)