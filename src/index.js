import { initializeApp } from 'firebase/app';
import {
    CollectionReference,
    getFirestore, collection, getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDPGIKDOraFAdTGIWYvHHgfUPX1If3tU7Q",
    authDomain: "fir-9-dojo-6fc10.firebaseapp.com",
    projectId: "fir-9-dojo-6fc10",
    storageBucket: "fir-9-dojo-6fc10.appspot.com",
    messagingSenderId: "651821369165",
    appId: "1:651821369165:web:d21beaaea053a39d839904"
};

// Init firebase app
initializeApp(firebaseConfig);

// Init firebasae services
const db = getFirestore(); 

// Collection Reference
const colRef = collection(db, 'books');

// Get collection data

getDocs(colRef)
    .then( snapshot => {
        let books = [];
        snapshot.docs.forEach( doc => {
            books.push({ ...doc.data(), id: doc.id });
        })
        console.log(books);
    })
    .catch(err => console.log(err));