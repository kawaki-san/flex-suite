import firebase from 'firebase'

const firebaseConfig = {
   
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage();

export { db, auth,storage };
