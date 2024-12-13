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

    // Update progress bar based on scroll position
    const progressBar = document.getElementById('progress-bar');
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / totalHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
});

// CSS for fade-in effect and progress bar
document.styleSheets[0].insertRule(`
    .fade-in {
        opacity: 1;
        transition: opacity 0.5s ease-in;
    }
`, document.styleSheets[0].cssRules.length);

document.styleSheets[0].insertRule(`
    #progress-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background-color: #3498db;
        transition: width 0.25s ease-out;
    }
`, document.styleSheets[0].cssRules.length);

// Background Color Transition (example)
let colors = ["#FF5733", "#33FF57", "#3357FF", "#F0F0F0"];
let colorIndex = 0;

setInterval(() => {
    document.body.style.transition = "background-color 2s ease";
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 5000);

// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
