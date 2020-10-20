import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBD2r9hDzYxUfwatOEdNk3sLK-eMyF7pWM",
    authDomain: "messenger-clone-d40d4.firebaseapp.com",
    databaseURL: "https://messenger-clone-d40d4.firebaseio.com",
    projectId: "messenger-clone-d40d4",
    storageBucket: "messenger-clone-d40d4.appspot.com",
    messagingSenderId: "354588534552",
    appId: "1:354588534552:web:c61c12c122e7995f9aa06d"
})

const db = firebaseApp.firestore()

export default db