import * as firebase from "firebase/app";
import "firebase/auth"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
const app = firebase.initializeApp({
    apiKey: "REACT_APP_FIREBASE_KEY",
    authDomain: "REACT_APP_FIREBASE_DOMAIN",
    databaseURL: "REACT_APP_FIREBASE_DATABASE",
    projectId: "REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "REACT_APP_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "REACT_APP_FIREBASE_SENDER_ID",
    appId: "REACT_APP_FIREBASE_APP_ID",
    measurementId: "REACT_APP_FIREBASE_MEASUREMENT_ID"
  });

export default app;