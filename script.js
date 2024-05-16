const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-large-line" : "ri-menu-3-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line")
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

// container

ScrollReveal().reveal(".nav-bar", {
    ...scrollRevealOption,
    origin: "left",
    // delay: 2500,
});

ScrollReveal().reveal(".container-image", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
});

ScrollReveal().reveal(".container-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".container-content h2", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".container-content p", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".container-content .action-btn", {
    ...scrollRevealOption,
    delay: 2500,
});

ScrollReveal().reveal(".socials a", {
    ...scrollRevealOption,
    origin: "left",
    interval: 300,
    delay: 3000,
});

ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin: "right",
    delay: 3500,
});


ScrollReveal().reveal(".nav-links li", {
    ...scrollRevealOption,
    origin: "top",
    interval: 300,
    delay: 4000,
});



