const menuIcon = document.querySelector('.mobile-menu-icon');
const headerMenu = document.querySelector('.site-headermenu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    headerMenu.classList.toggle('active');
});


//banner typing effect

const phrases = [
    "Save Time | Bid More Jobs | Design More Jobs"
];

let phraseIndex = 0;
let letterIndex = 0;
const typingSpeed = 100; // Speed for typing each letter
const deletingSpeed = 50; // Speed for deleting each letter
const delayBetweenPhrases = 2000; // Delay before starting to delete
const delayBeforeStartTyping = 500; // Delay before starting to type after deleting
const typingElement = document.querySelector('.typing-effect');

function typePhrase() {
    if (letterIndex < phrases[phraseIndex].length) {
        typingElement.textContent += phrases[phraseIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typePhrase, typingSpeed);
    } else {
        setTimeout(deletePhrase, delayBetweenPhrases);
    }
}

function deletePhrase() {
    if (letterIndex > 0) {
        typingElement.textContent = phrases[phraseIndex].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(deletePhrase, deletingSpeed);
    } else {
        setTimeout(typePhrase, delayBeforeStartTyping);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typePhrase();
});

