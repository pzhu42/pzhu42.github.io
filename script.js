var currentTheme = 'red';
var chipElement;

var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    currentTheme = savedTheme;
}

document.addEventListener('DOMContentLoaded', function() {
    chipElement = document.getElementById('poker-chip');
    document.body.className = currentTheme;
    chipElement.addEventListener('click', switchTheme);
});

function switchTheme() {
    if (currentTheme === 'red') {
        currentTheme = 'black';
    } else {
        currentTheme = 'red';
    }
    localStorage.setItem('theme', currentTheme);
    document.body.className = currentTheme;
}

function flipCard(cardWrapper) {
    cardWrapper.classList.toggle('flipped');
}
