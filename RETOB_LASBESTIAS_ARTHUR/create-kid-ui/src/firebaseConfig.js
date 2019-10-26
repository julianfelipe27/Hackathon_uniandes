import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAB5-PuMbCIKPM00bGK9G3toBYPU1CYw3o",
    authDomain: "hackathon-2ab93.firebaseapp.com",
    databaseURL: "https://hackathon-2ab93.firebaseio.com",
    projectId: "hackathon-2ab93",
    storageBucket: "hackathon-2ab93.appspot.com",
    messagingSenderId: "538388597059",
    appId: "1:538388597059:web:89f5edf45722bbb43507f6",
    measurementId: "G-KD2KJGHKL2"
  }
firebase.initializeApp(config)

const db = firebase.firestore()

// firebase collections
const usersCollection = db.collection('Usuario')

export {
    db,
    usersCollection,
} 