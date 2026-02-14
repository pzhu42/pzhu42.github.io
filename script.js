var currentTheme = 'day';
var celestialElement;
var starsContainer;

var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    currentTheme = savedTheme;
}

document.addEventListener('DOMContentLoaded', function() {
    celestialElement = document.getElementById('celestial');
    starsContainer = document.getElementById('stars');
    document.body.className = currentTheme;
    setupTheme();
    celestialElement.addEventListener('click', switchTheme);
});

function switchTheme() {
    if (currentTheme === 'day') {
        currentTheme = 'night';
    } else {
        currentTheme = 'day';
    }
    localStorage.setItem('theme', currentTheme);
    document.body.className = currentTheme;
    setupTheme();
}

function setupTheme() {
    if (currentTheme === 'night') {
        addStars();
    } else {
        removeStars();
    }
}

function addStars() {
    starsContainer.innerHTML = '';
    for (var i = 0; i < 100; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        var randomLeft = Math.random() * 100;
        var randomTop = Math.random() * 100;
        star.style.left = randomLeft + '%';
        star.style.top = randomTop + '%';
        starsContainer.appendChild(star);
    }
}

function removeStars() {
    starsContainer.innerHTML = '';
}
