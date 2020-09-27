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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) {
        return;
    }else{
        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = userRef.get();

        if(!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            } catch(e) {
                console.log('Error creating the user')
            }
        }
        return userRef;
    }
}

export const addCollectionAndDocuments  = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey); 

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformmedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return transformmedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc
    }, {})
}

firebase.initializeApp(config);

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject)
    });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase