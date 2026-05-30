// ================= BOOK APPOINTMENT BUTTON =================

const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", () => {

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

});

// ================= EXPLORE BUTTON =================

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

});

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Appointment Booked Successfully!");

    contactForm.reset();

});

// ================= HEADER SHADOW ON SCROLL =================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    }
    else{

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";

    }

});

// ================= CARD ANIMATION =================

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});

// ================= INITIAL CARD STYLE =================

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.6s ease";

});