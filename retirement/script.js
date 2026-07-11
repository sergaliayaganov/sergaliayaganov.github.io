import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getFirestore,

collection,

addDoc,

getDocs

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "YOUR_API_KEY",

authDomain: "YOUR_PROJECT.firebaseapp.com",

projectId: "YOUR_PROJECT",

storageBucket: "YOUR_PROJECT.appspot.com",

messagingSenderId: "XXXXXXXX",

appId: "XXXXXXXX"

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
