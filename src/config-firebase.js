// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_API_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_API_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_API_MEASUREMENTID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// export const auth = app.auth()
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;