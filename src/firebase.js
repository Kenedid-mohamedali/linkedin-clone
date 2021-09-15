import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDOEl25Gj5qdS8c3GymDQiH0xuq9zgjCLQ",
  authDomain: "linkedin-clone-703bf.firebaseapp.com",
  projectId: "linkedin-clone-703bf",
  storageBucket: "linkedin-clone-703bf.appspot.com",
  messagingSenderId: "28673177797",
  appId: "1:28673177797:web:1e7e196ebdf02af33118ac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };