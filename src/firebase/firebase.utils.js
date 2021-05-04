import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC630AgLs6CS6DRe60EIWNudGj1U0RF8tA",
    authDomain: "crwn-db-fcd63.firebaseapp.com",
    projectId: "crwn-db-fcd63",
    storageBucket: "crwn-db-fcd63.appspot.com",
    messagingSenderId: "1067819811017",
    appId: "1:1067819811017:web:80db0797cc859973b04d18",
    measurementId: "G-1MS4SGY2MR"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const  firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;