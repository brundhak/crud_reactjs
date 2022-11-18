import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCKsOKGEb-DqF8Rr6WEy0df3oUIqYG1hhE",
  authDomain: "bru-crud.firebaseapp.com",
  projectId: "bru-crud",
  storageBucket: "bru-crud.appspot.com",
  messagingSenderId: "55102741954",
  appId: "1:55102741954:web:a3cbb4b050c8dbf8030a5b"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const storage = getStorage(app);
export const db = getFirestore(app);

