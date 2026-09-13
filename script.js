// Wait for the DOM layout to load fully
document.addEventListener("DOMContentLoaded", () => {
    
    // --- RESPONSIVE MOBILE MENU TOGGLE ---
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle between hamburger icon and close icon
            menuBtn.classList.toggle('fa-bars');
            menuBtn.classList.toggle('fa-xmark');
        });

        // Close dropdown menu when a nav item link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.classList.add('fa-bars');
                menuBtn.classList.remove('fa-xmark');
            });
        });
    }

    // --- TYPING / SUBHEADING TEXT ROTATION EFFECT ---
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
        }, 3000); // Transitions every 3 seconds
    }

    // --- PREVENT SUBMIT PAGE RELOAD (FOR TESTING) ---
    const contactForm = document.getElementById('portfolioContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert("Message sent successfully! (Demo execution)");
            contactForm.reset();
        });
    }
});
