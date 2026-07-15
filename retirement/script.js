import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// ==========================
// Кері санау таймері
// ==========================

const weddingDate = new Date("2026-09-05T15:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("countdown").innerHTML =
            "🎉 Той басталды!";

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("countdown").innerHTML =
        `${days} күн ${hours} сағат ${minutes} минут ${seconds} секунд`;
}

updateCountdown();

setInterval(updateCountdown, 1000);


// ==========================
// RSVP
// ==========================

const form = document.getElementById("guestForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const guestCount =
        parseInt(document.getElementById("guestCount").value);

    if (name === "") {

        alert("Аты-жөніңізді енгізіңіз!");

        return;
    }

    try {

        await addDoc(collection(db, "guests"), {

            name: name,

            phone: phone,

            guestCount: guestCount,

            createdAt: serverTimestamp()

        });

        document.getElementById("message").innerHTML =
            "✅ Рақмет! Қатысуыңыз тіркелді.";

        form.reset();

        document.getElementById("guestCount").value = 1;

    }

    catch (error) {

        console.error(error);

        document.getElementById("message").innerHTML =
            "❌ Қате орын алды.";

    }

});
