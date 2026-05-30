```javascript
// ===============================
// AUTO YEAR
// ===============================
document.getElementById("year").textContent =
new Date().getFullYear();

// ===============================
// MOBILE MENU
// ===============================
const navToggle =
document.getElementById("nav-toggle");

const siteNav =
document.getElementById("site-nav");

navToggle.addEventListener("click", () => {

    siteNav.classList.toggle("active");

    const expanded =
    navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute(
        "aria-expanded",
        !expanded
    );
});

// ===============================
// CLOSE MENU AFTER CLICK
// ===============================
document
.querySelectorAll(".site-nav a")
.forEach(link => {

    link.addEventListener("click", () => {

        siteNav.classList.remove("active");

        navToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================
const header =
document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 25px rgba(0,0,0,.1)";

    }else{

        header.style.boxShadow =
        "0 2px 20px rgba(0,0,0,.05)";
    }

});

// ===============================
// REVEAL ANIMATION
// ===============================
const reveals =
document.querySelectorAll(
".section, .project-card, .skill"
);

const revealOnScroll = () => {

    reveals.forEach(item => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.style.opacity = "1";
            item.style.transform =
            "translateY(0)";

        }

    });

};

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform =
    "translateY(40px)";
    item.style.transition =
    "all 0.8s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

// ===============================
// CONTACT FORM
// ===============================
const form =
document.querySelector(".contact-form");

form.addEventListener("submit", e => {

    e.preventDefault();

    alert(
        "Thank you! Your message has been received."
    );

    form.reset();

});
```
