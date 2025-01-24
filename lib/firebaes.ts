import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCjLU05hcDSpKgf_pPfu888KFOEfOhM9yQ",
    authDomain: "qefgasdfad.firebaseapp.com",
    projectId: "qefgasdfad",
    storageBucket: "qefgasdfad.firebasestorage.app",
    messagingSenderId: "275258082573",
    appId: "1:275258082573:web:65d8e4042c557411ee5c44",
    measurementId: "G-W5G6BC5HNK"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

