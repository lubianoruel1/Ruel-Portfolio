// ===============================
// WAIT FOR PAGE TO LOAD
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Hamburger Menu Toggle
    // =========================
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // =========================
    // Typing Effect - About Me
    // =========================
    const aboutText = `A 2nd Year Computer Science Student. Studied at North Eastern Mindanao State University-Lianga Campus. 
I love watching horror movies. I love dancing and playing games.
I’m someone who finds joy in the quiet moments and the beauty of peaceful surroundings.
Nature, calm mornings, and serene spaces recharge me and inspire my creativity.
I value mindfulness, balance, and the little things that bring a sense of calm to everyday life.`;

    let index = 0;
    const speed = 40;
    const aboutElement = document.getElementById("about-text");

    function typeEffect() {
        if (aboutElement && index < aboutText.length) {
            aboutElement.innerHTML += aboutText.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();


    // =========================
    // Typing Effect - Name
    // =========================
    const nameText = "Hello, I'm Ruel";
    let nameIndex = 0;
    const nameSpeed = 80;
    const nameElement = document.getElementById("typing-name");

    function typeName() {
        if (nameElement && nameIndex < nameText.length) {
            nameElement.innerHTML += nameText.charAt(nameIndex);
            nameIndex++;
            setTimeout(typeName, nameSpeed);
        }
    }

    typeName();


    // =========================
    // Contact Toggle Button
    // =========================
    const contactBtn = document.getElementById("showContactsBtn");
const contactWrapper = document.querySelector(".contact-wrapper");

if (contactBtn && contactWrapper) {
    contactBtn.addEventListener("click", () => {
        contactWrapper.classList.toggle("hidden");
    });
}

});


let currentIndex = 0;
let currentMedia = [];

function openModal(...mediaItems) {
    const modal = document.getElementById("projectModal");
    modal.style.display = "flex";

    currentMedia = mediaItems;
    currentIndex = 0;

    showSlide(currentIndex);
}

function showSlide(index) {
    const modalContent = document.getElementById("modalContent");
    modalContent.innerHTML = "";

    const file = currentMedia[index];

    if (file.endsWith(".mp4")) {
        modalContent.innerHTML = `
            <video controls autoplay>
                <source src="${file}" type="video/mp4">
            </video>
        `;
    } else {
        modalContent.innerHTML = `<img src="${file}" alt="Project">`;
    }
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= currentMedia.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentMedia.length - 1;
    }
    showSlide(currentIndex);
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}