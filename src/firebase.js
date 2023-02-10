import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDPZMySJDe-Wwaum61ygshCRiihttZ4j8E",
  authDomain: "linkedin-e5a50.firebaseapp.com",
  projectId: "linkedin-e5a50",
  storageBucket: "linkedin-e5a50.appspot.com",
  messagingSenderId: "680550929125",
  appId: "1:680550929125:web:9b541f4561bb595fa9ba0c",
  measurementId: "G-2L0MD3CBQT"
};


const firebaseApp =firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };