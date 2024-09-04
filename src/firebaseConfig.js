import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_pf-mTg7yPbjmpaQEpvW6CixVWF1D8wo",
  authDomain: "lista-app-6ef6f.firebaseapp.com",
  projectId: "lista-app-6ef6f",
  storageBucket: "lista-app-6ef6f.appspot.com",
  messagingSenderId: "835918980546",
  appId: "1:835918980546:web:39828043fe25064ee4a25b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
