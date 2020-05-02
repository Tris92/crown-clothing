import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB4Kiiw4T7qb6yvlz16yVDE7-nzK556Uow",
    authDomain: "crown-clothing-db-26ae6.firebaseapp.com",
    databaseURL: "https://crown-clothing-db-26ae6.firebaseio.com",
    projectId: "crown-clothing-db-26ae6",
    storageBucket: "crown-clothing-db-26ae6.appspot.com",
    messagingSenderId: "2220569075",
    appId: "1:2220569075:web:5f05485fd093e40a2b2286",
    measurementId: "G-2G9YF9MECC"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
