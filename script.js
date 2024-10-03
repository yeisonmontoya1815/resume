// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, runTransaction } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5RQUyerRud39Ignko51E7IxGIIUIA2V4",
    authDomain: "resume-b2442.firebaseapp.com",
    databaseURL: "https://resume-b2442-default-rtdb.firebaseio.com",
    projectId: "resume-b2442",
    storageBucket: "resume-b2442.appspot.com",
    messagingSenderId: "153178117532",
    appId: "1:153178117532:web:11d7b348df919debbbe459",
    measurementId: "G-1QN60G8R1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Function to increment the visit counter
function incrementVisitCount() {
    const visitCountRef = ref(database, 'visitCount');
    runTransaction(visitCountRef, (currentCount) => {
        return (currentCount || 0) + 1;
    });
}

// Function to display the visit count
function displayVisitCount() {
    const visitCountRef = ref(database, 'visitCount');
    onValue(visitCountRef, (snapshot) => {
        const count = snapshot.val();
        document.getElementById('visit-count').textContent = count || 0;
    });
}

// Call functions on page load
window.onload = function () {
    incrementVisitCount();
    displayVisitCount();
};

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
