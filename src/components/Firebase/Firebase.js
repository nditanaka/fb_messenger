import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'fbx-clone.firebaseapp.com',
  databaseURL: 'https://fbx-clone.firebaseio.com',
  projectId: 'fbx-clone',
  storageBucket: 'fbx-clone.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
});

const db = firebaseApp.firestore();

export default db;
