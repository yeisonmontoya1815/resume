// Typing effect for professional title
const typingElement = document.getElementById('typing-effect');
const titles = ["Data Analytics Specialist", "IT and Data Systems Expert", "Database and Technology Solutions", "Electronics Engineer"];
let titleIndex = 0;
let charIndex = 0;
let currentTitle = "";
let isDeleting = false;

function typeEffect() {
    if (isDeleting) {
        if (charIndex > 0) {
            charIndex--;
            typingElement.textContent = currentTitle.substring(0, charIndex);
            setTimeout(typeEffect, 100);
        } else {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            setTimeout(typeEffect, 500);
        }
    } else {
        if (charIndex < titles[titleIndex].length) {
            currentTitle = titles[titleIndex];
            typingElement.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeEffect, 150);
        } else {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        }
    }
}

typeEffect();