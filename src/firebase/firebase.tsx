import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    //ADD DATABASE CONFIG
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default}