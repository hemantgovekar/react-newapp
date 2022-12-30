
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEW0N1EawjXIz1QFEP2X6chBXNU_6O8eI",
    authDomain: "hmt-clothing-db.firebaseapp.com",
    projectId: "hmt-clothing-db",
    storageBucket: "hmt-clothing-db.appspot.com",
    messagingSenderId: "713059281579",
    appId: "1:713059281579:web:7d2b8a2425bf6e1ad865ee"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 