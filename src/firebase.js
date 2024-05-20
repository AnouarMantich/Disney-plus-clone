import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABGyk7fjHjT24IItUw4OJvJt0k2LGbEeM",

  authDomain: "disneyplus-clone-4f3a8.firebaseapp.com",

  projectId: "disneyplus-clone-4f3a8",

  storageBucket: "disneyplus-clone-4f3a8.appspot.com",

  messagingSenderId: "23450445602",

  appId: "1:23450445602:web:e2a9b125bfb33e7508677b",

  measurementId: "G-9Y7VBNRYBZ",
};
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();
const provider = new GoogleAuthProvider();

// const provider = new firebase.auth();
// const storage = firebase.storage();

export { auth, provider };
export default db;
