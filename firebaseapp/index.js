// Initialize Firebase
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCg3sSnIyn1ClrqSRoy4zSjOgIWUP1S8kM',
  authDomain: 'yanguel-2d8e7.firebaseapp.com',
  databaseURL: 'https://yanguel-2d8e7.firebaseio.com',
  projectId: 'yanguel-2d8e7',
  storageBucket: 'yanguel-2d8e7.appspot.com',
  messagingSenderId: '366483520995'
}

let firebaseApp

if (firebase.apps.length === 0) {
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.apps[0]
}

export default firebaseApp
