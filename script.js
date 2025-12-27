// Typing Effect for "I am a..."
const text = ["Student", "Innovator", "Tech Enthusiast", "Writer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".typewriter").textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Pause at end of word
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();
