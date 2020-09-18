import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA6c_VjrnKTKdJZz0ih-BLneugnFr55xJw",
    authDomain: "react-shop-d1974.firebaseapp.com",
    databaseURL: "https://react-shop-d1974.firebaseio.com",
    projectId: "react-shop-d1974",
    storageBucket: "react-shop-d1974.appspot.com",
    messagingSenderId: "921144209070",
    appId: "1:921144209070:web:a47b6829b9212c3b66c73f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase