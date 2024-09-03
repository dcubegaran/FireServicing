import firebase from 'firebase/app';

// Replace with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEOv8raVrRUrBFU1Kefu5sbNelvAPD_vQ",
  authDomain: "fire-shield-a4492.firebaseapp.com",
  projectId: "fire-shield-a4492",
  storageBucket: "gs://fire-shield-a4492.appspot.com",
  messagingSenderId: "799590215196",
  appId: "1:799590215196:android:1d3c7a4d29eac4bd6139d9"
};
const firebaseWithApps = firebase as any;

// Initialize Firebase app
if (!firebaseWithApps.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  

export default firebase;
