import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAn_RQXbXrpz09djImijDaZHoE2lz5mgmY",
    authDomain: "ecom-db-d4e1d.firebaseapp.com",
    databaseURL: "https://ecom-db-d4e1d.firebaseio.com",
    projectId: "ecom-db-d4e1d",
    storageBucket: "",
    messagingSenderId: "532817928281",
    appId: "1:532817928281:web:6ac581d3c4f45178e79148",
    measurementId: "G-GK7CEG5T43"
  };

  export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`)
       const snapShot = await userRef.get();

       if(!snapShot.exists){
         const {displayName, email} = userAuth;
         const createdAt = new  Date();
       
       try {
         await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         })   
       } catch (error) {
         console.log('error creating user', error.message);
         
       }
       
       
  }
  return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;