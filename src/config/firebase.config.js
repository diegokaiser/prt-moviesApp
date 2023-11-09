import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCcepXNFwHU83uNx-Q3GwoBxIyBE1vpXro",
  authDomain: "prt-moviesapp.firebaseapp.com",
  projectId: "prt-moviesapp",
  storageBucket: "prt-moviesapp.appspot.com",
  messagingSenderId: "152231877273",
  appId: "1:152231877273:web:6e4ddd6246320e1e19f608"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
