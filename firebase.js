import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBfWg2XorvSXmPoHGweQaucp0c-JXNgeNM",
    authDomain: "whatsapp-clone-9b8f4.firebaseapp.com",
    projectId: "whatsapp-clone-9b8f4",
    storageBucket: "whatsapp-clone-9b8f4.appspot.com",
    messagingSenderId: "37004042252",
    appId: "1:37004042252:web:c788186de890bc5826ce29",
    measurementId: "G-GL1LT6K77V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;