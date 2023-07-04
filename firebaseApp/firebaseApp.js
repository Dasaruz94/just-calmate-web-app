// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ7RuIO5LRS23eXPHkOvDa8dLdTjjW8JY",
  authDomain: "taskmanager-11e73.firebaseapp.com",
  projectId: "taskmanager-11e73",
  storageBucket: "taskmanager-11e73.appspot.com",
  messagingSenderId: "1078972634189",
  appId: "1:1078972634189:web:b9f57e5ccc60e62b60f804"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const initFirebase = () =>{
    return app;
};