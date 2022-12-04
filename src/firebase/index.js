import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC7-O3RTlt-csodmOj7291J5GNXYEfS6AY",
  authDomain: "mca2021-bfa3d.firebaseapp.com",
  projectId: "mca2021-bfa3d",
  storageBucket: "mca2021-bfa3d.appspot.com",
  messagingSenderId: "800275486032",
  appId: "1:800275486032:web:e77ee1a040bc1a56370855",
  //  measurementId: "G-DVSP1X49WB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
