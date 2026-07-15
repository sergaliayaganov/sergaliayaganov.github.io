import {
    db,
    collection,
    addDoc,
    serverTimestamp
} from "./firebase.js";

/* ==========================
   DOM
========================== */

const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");
const openBtn = document.getElementById("openInvitation");

const countdown = document.getElementById("countdown");

const music = document.getElementById("music");

const whatsapp = document.getElementById("whatsappShare");

/* ==========================
   Конверт
========================== */

/* ==========================
   Конверт
========================== */

openBtn.addEventListener("click", () => {

    // Музыканы іске қосу
    music.volume = 0.2;

    music.play().catch(err => {
        console.log("Музыканы ойнату мүмкін болмады:", err);
    });

    // Конвертті жабу
    welcome.classList.add("hide");

    setTimeout(() => {

        welcome.style.display = "none";

        invitation.style.display = "block";

        setTimeout(() => {

            invitation.classList.add("show");

        }, 100);

    }, 900);

});

/* ==========================
   Countdown
========================== */

const weddingDate = new Date("2026-09-05T15:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if(distance<=0){

        countdown.innerHTML="🎉 Той басталды!";

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    countdown.innerHTML=

    `${days} күн ${hours} сағ ${minutes} мин ${seconds} сек`;

}

updateCountdown();

setInterval(updateCountdown,1000);

/* ==========================
   WhatsApp
========================== */

const shareText=

`Сізді Серғалидың зейнетке шығу тойына шақырамыз!

📅 05 қыркүйек 2026
🕒 15:00

📍 Түркістан тойханасы

Толық шақыру:

https://sergaliayaganov.github.io/retirement/`;

whatsapp.href=

`https://wa.me/?text=${encodeURIComponent(shareText)}`;

/* ==========================
   RSVP (Firestore)
========================== */

const guestForm = document.getElementById("guestForm");
const message = document.getElementById("message");

guestForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const guestCount = Number(document.getElementById("guestCount").value);

    if (name === "") {

        message.style.color = "red";
        message.textContent = "Аты-жөніңізді енгізіңіз.";

        return;

    }

    try {

        await addDoc(collection(db, "guests"), {

            name: name,

            phone: phone,

            guestCount: guestCount,

            createdAt: serverTimestamp()

        });

        message.style.color = "green";

        message.innerHTML = "✅ Қатысуыңыз сәтті расталды.<br>Рақмет!";

        guestForm.reset();

        document.getElementById("guestCount").value = 1;

    }

    catch (error) {

        console.error(error);

        message.style.color = "red";

        message.textContent =
            "❌ Деректерді сақтау кезінде қате пайда болды.";

    }

});

/* ==========================
   Scroll Animation
========================== */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".detail,.card,.map,.share-buttons")
.forEach((el) => {

    observer.observe(el);

});

/* ==========================
   Console
========================== */

console.log("Retirement Invitation Loaded Successfully");

/* ==========================
   Browser Title Animation
========================== */

const titles = [

"🌸 Зейнетке шығу тойы",

"🎉 Құрметті қонақ!",

"💛 Сіз шақырылдыңыз"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 3000);

/* ==========================
   Button Ripple Effect
========================== */

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = diameter + "px";
        circle.style.height = diameter + "px";

        circle.style.left =
            e.offsetX - diameter / 2 + "px";

        circle.style.top =
            e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.getElementsByClassName("ripple")[0];

        if (ripple) {

            ripple.remove();

        }

        this.appendChild(circle);

    });

});
