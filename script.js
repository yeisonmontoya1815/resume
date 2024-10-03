// Typing Effect for Professional Title
const textArray = ["IT Specialist", "Data Analytics Expert", "Electronics Engineer"];
let textIndex = 0;
let charIndex = 0;

function type() {
    const typingEffect = document.getElementById("typing-effect");
    if (charIndex < textArray[textIndex].length) {
        typingEffect.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(deleteText, 1000);
    }
}

function deleteText() {
    const typingEffect = document.getElementById("typing-effect");
    if (charIndex > 0) {
        typingEffect.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    type();
});

// Scroll Animation Effect
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.75) {
            section.classList.add('fade-in');
        }
    });
});

// CSS for fade-in effect
document.styleSheets[0].insertRule(`
    .fade-in {
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }
`, document.styleSheets[0].cssRules.length);
