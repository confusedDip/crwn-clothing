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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapshot = await userRef.get()


        if(!snapshot.exists){
                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        });
                }catch(err){
                        console.log("Error creating a new user", err.message);
                }       
        }

        return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const  firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;