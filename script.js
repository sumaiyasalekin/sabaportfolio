// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {

        // Open / close mobile menu
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");

            // Change hamburger icon to X
            menuBtn.classList.toggle("fa-bars");
            menuBtn.classList.toggle("fa-xmark");
        });

        // Close mobile menu when a navigation link is clicked
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuBtn.classList.add("fa-bars");
                menuBtn.classList.remove("fa-xmark");
            });
        });
    }


    /* =========================================
       TYPING / ROLE ROTATION
    ========================================= */

    const roles = [
        "Software Developer",
        "Frontend Developer",
        "UI/UX Designer",
        "AI/ML Enthusiast"
    ];

    let roleIndex = 0;

    const textElement = document.getElementById("changingText");

    if (textElement) {

        setInterval(() => {

            roleIndex = (roleIndex + 1) % roles.length;

            textElement.textContent = roles[roleIndex];

        }, 3000);
    }


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm = document.getElementById("portfolioContactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            alert("Thank you for your message! This contact form is currently a demo.");

            contactForm.reset();
        });
    }


    /* =========================================
       CURRENT YEAR IN FOOTER
    ========================================= */

    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
