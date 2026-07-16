// Firebase App
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// Firestore
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyB9oEdAGpIaPtNZjFvsfIAKVFKOzrIdvE4",

    authDomain: "shezhire-site.firebaseapp.com",

    projectId: "shezhire-site",

    storageBucket: "shezhire-site.firebasestorage.app",

    messagingSenderId: "714823841418",

    appId: "1:714823841418:web:99333d2aba6d57857b1f73",

    measurementId: "G-8V6NR3MHYC"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    serverTimestamp
};
