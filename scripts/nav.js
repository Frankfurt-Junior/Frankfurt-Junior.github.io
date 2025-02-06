document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const links = navLinks.querySelectorAll("a");

    // Toggle menu visibility
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Hide menu after clicking a link
    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});