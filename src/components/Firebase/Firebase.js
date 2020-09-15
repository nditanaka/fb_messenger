import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXt3qTLzyR2fmzG_3LX09Aw5ekTVEm0Bw",
    authDomain: "fbx-clone.firebaseapp.com",
    databaseURL: "https://fbx-clone.firebaseio.com",
    projectId: "fbx-clone",
    storageBucket: "fbx-clone.appspot.com",
    messagingSenderId: "622305207300",
    appId: "1:622305207300:web:2437eda7f729eaa0670151",
    measurementId: "G-C5HQ374H47"
});

const db = firebaseApp.firestore();

export default db;