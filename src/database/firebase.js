import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'
import { getStorage, ref } from "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPcqI5CQLSStm1UV7HjN_WF7iNXWt-tzQ",
  authDomain: "latinhotweb-2563b.firebaseapp.com",
  projectId: "latinhotweb-2563b",
  storageBucket: "latinhotweb-2563b.appspot.com",
  messagingSenderId: "1070772122087",
  appId: "1:1070772122087:web:718207105f165d81bd8d42",
  measurementId: "G-8WS5TS5KR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const reference = ref()
