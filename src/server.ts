
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { atom, useAtom, useSetAtom } from 'jotai';
import { toast } from "sonner";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByCdxnMvyDPZCu0XP7O_r1cIWGjUVix4k",
  authDomain: "refresh-icons.firebaseapp.com",
  projectId: "refresh-icons",
  storageBucket: "refresh-icons.appspot.com",
  messagingSenderId: "730662992922",
  appId: "1:730662992922:web:1110aced5ba1c69bf565a3",
  measurementId: "G-HY863XH9JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export const accountState = atom("");

export const signInWitPopup = (setState: (state: string) => void) => {
    const auth = getAuth();
    
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (!credential) return;
            
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...

            setState(user.email || "");
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            
            toast.error(`${errorCode}: ${errorMessage}`);
        });
};
