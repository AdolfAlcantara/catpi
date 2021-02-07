import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    //ADD DATABASE CONFIG
    apiKey: "AIzaSyCjeJ8UPHo7LyCL7L4gzUuKRKqBKw3jcZU",
    authDomain: "catpi-3e710.firebaseapp.com",
    databaseURL: "https://catpi-3e710-default-rtdb.firebaseio.com",
    projectId: "catpi-3e710",
    storageBucket: "catpi-3e710.appspot.com",
    messagingSenderId: "56667271284",
    appId: "1:56667271284:web:4df94eb17efbd18ac36121"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default}