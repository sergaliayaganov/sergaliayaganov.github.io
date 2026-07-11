import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getFirestore,

collection,

addDoc,

getDocs

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyB9oEdAGpIaPtNZjFvsfIAKVFKOzrIdvE4",
  authDomain: "shezhire-site.firebaseapp.com",
 databaseURL: "https://shezhire-site-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "shezhire-site",
  storageBucket: "shezhire-site.firebasestorage.app",
  messagingSenderId: "714823841418",
  appId: "1:714823841418:web:99333d2aba6d57857b1f73",
  measurementId: "G-8V6NR3MHYC"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.registerGuest = async function(){

const name=document.getElementById("name").value;

const guest=document.getElementById("guest").value;

if(name==""){

alert("Атыңызды енгізіңіз");

return;

}

await addDoc(collection(db,"guests"),{

name:name,

guest:guest

});

alert("Тіркелдіңіз!");

loadGuests();

}

async function loadGuests(){

const list=document.getElementById("guestList");

list.innerHTML="";

const querySnapshot=await getDocs(collection(db,"guests"));

querySnapshot.forEach((doc)=>{

const data=doc.data();

list.innerHTML+=`<li>${data.name} - Қонақ саны: ${data.guest}</li>`;

});

}

loadGuests();
