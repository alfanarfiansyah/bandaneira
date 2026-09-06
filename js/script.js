/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});



/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll("section[id]");

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

});



/* =========================================================
   NEWSLETTER
========================================================= */

const newsletterForm =
    document.querySelector(".newsletter-form");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            newsletterForm.querySelector("input").value;

        if (email.trim() === "") {

            alert("Silakan masukkan email Anda.");

            return;

        }

        alert(
            "Terima kasih! Email " +
            email +
            " berhasil didaftarkan."
        );

        newsletterForm.reset();

    });

}



/* =========================================================
   BOOKING WHATSAPP
========================================================= */

function bookingWhatsApp(packageName) {

    const phone = "6281234567890";

    const message =
        "Halo Banda Neira Travel & Tour,%0A%0A" +
        "Saya ingin mendapatkan informasi mengenai paket " +
        packageName +
        ".%0A%0ATerima kasih.";

    window.open(
        "https://wa.me/" + phone + "?text=" + message,
        "_blank"
    );

}