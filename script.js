// 1. Typewriter Effect
const words = ["Student.", "Developer.", "Innovator.", "Orator."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');

function type() {
    if (!typewriterElement) return;
    
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
        typeSpeed = 2000; // Pause longer when word is fully typed
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500; 
    }

    setTimeout(type, typeSpeed);
}

// 2. Scroll Reveal Animations & Navbar Glass Effect
document.addEventListener('DOMContentLoaded', () => {
    // Start Typewriter
    type();

    // Setup elements for scroll animation
    const cardsAndImages = document.querySelectorAll('.achievement-card, .gallery-item, .about-text');
    cardsAndImages.forEach(el => el.classList.add('fade-up'));

    const observerOptions = {
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cardsAndImages.forEach(el => observer.observe(el));

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Burger Menu (Basic Toggle)
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if(burger) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            // Optional: style .nav-active in CSS to show mobile menu
        });
    }
});
