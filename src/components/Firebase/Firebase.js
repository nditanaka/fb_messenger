import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'fbx-clone.firebaseapp.com',
  databaseURL: 'https://fbx-clone.firebaseio.com',
  projectId: 'fbx-clone',
  storageBucket: 'fbx-clone.appspot.com',
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: MEASUREMENT_ID,
});

const db = firebaseApp.firestore();

export default db;
