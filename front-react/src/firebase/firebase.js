import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAXjno_Rm3J0-1hOymizb1NMrtchzMJV8o",
    authDomain: "chicchic-63182.firebaseapp.com",
    projectId: "chicchic-63182",
    storageBucket: "chicchic-63182.appspot.com",
    messagingSenderId: "838027615342",
    appId: "1:838027615342:web:2719f01693401cc4599a7f",
    measurementId: "G-T26CYR5ZFG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
