import firebase from "firebase/compat/app";
import "firebase/compat/database";
var config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
};
const firebaseApp = firebase.initializeApp(config);
const database = firebase.database(firebaseApp);

export default database;
