// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase конфигурациясы
const firebaseConfig = {
    apiKey: "AIzaSyB9oEdAGpIaPtNZjFvsfIAKVFKOzrIdvE4",
    authDomain: "shezhire-site.firebaseapp.com",
    projectId: "shezhire-site",
    storageBucket: "shezhire-site.firebasestorage.app",
    messagingSenderId: "714823841418",
    appId: "1:714823841418:web:99333d2aba6d57857b1f73",
    measurementId: "G-8V6NR3MHYC"
};

// Firebase іске қосу
const app = initializeApp(firebaseConfig);

// Firestore іске қосу
const db = getFirestore(app);

// Басқа файлдарға шығару
export { db };
