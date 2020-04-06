import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAfstvqXEHSjuKSLi5IgUTaihTk_zqPNQ",
    authDomain: "crwn-db-d75d5.firebaseapp.com",
    databaseURL: "https://crwn-db-d75d5.firebaseio.com",
    projectId: "crwn-db-d75d5",
    storageBucket: "crwn-db-d75d5.appspot.com",
    messagingSenderId: "406744105002",
    appId: "1:406744105002:web:7610e2bfd4e4dae9764353",
    measurementId: "G-79RHJP0TBL"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth
      const createdAt = new Date()    

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })

        }catch(error){
          console.log('error creating user', error.message)
        }
    
    }
    
    return userRef;

    console.log(snapShot)
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;