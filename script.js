// 1. Typewriter Effect
const words = ["Student.", "Developer.", "Innovator.", "Orator."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 1500; // Pause at end of word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; // Pause before typing new word
    }

    setTimeout(type, typeSpeed);
}

// Start typewriter when page loads
document.addEventListener('DOMContentLoaded', () => {
    if(typewriterElement) type();
});

// 2. Scroll Reveal Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, observerOptions);

// Select all cards and gallery items to animate
const animatedElements = document.querySelectorAll('.achievement-card, .gallery-item');
animatedElements.forEach(el => observer.observe(el));

// 3. Mobile Navigation Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    // Optional: Add a simple CSS class to style the mobile menu pop-out
});
