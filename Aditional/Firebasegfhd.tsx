/*import firebase from 'firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

// Type definitions for Firebase app and firestore
interface FirebaseApp extends firebase.app.App {
  auth(): firebase.auth.Auth;
  firestore(): firebase.firestore.Firestore;
}

const firebaseConfig = {
  // Your Firebase project configuration goes here
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const app = firebase.app() as FirebaseApp;

export const auth = app.auth();
export const db = app.firestore();
*/