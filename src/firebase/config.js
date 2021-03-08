import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBgOdqSRj4tK3me7LKGRp2WZgFfi_gp1z8",
    authDomain: "crud-fire-us.firebaseapp.com",
    projectId: "crud-fire-us",
    storageBucket: "crud-fire-us.appspot.com",
    messagingSenderId: "528272940199",
    appId: "1:528272940199:web:cd6bc917f1781482a90f82"
  }

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {db, googleAuthProvider, firebase}