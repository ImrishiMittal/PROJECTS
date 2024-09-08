const menuToggle = document.querySelector('.fa-bars');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', () => {
    if (menuContainer.classList.contains('active')) {
        menuContainer.classList.remove('active');
    } else {
        menuContainer.classList.add('active');
    }
});

document.querySelector(".fa-linkedin").addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/rishi-mittal-a8a7b7275/");
});
document.querySelector(".fa-github").addEventListener("click", () => {
    window.open("https://github.com/ImrishiMittal");
});
var input = document.getElementById("input");

document.querySelector(".fa-envelope").addEventListener("click", () => {
    window.location.href = "mailto:rishimittalworks@gmail.com";
});

document.querySelector(".fa-location-dot").addEventListener("click", () => {
    input.innerHTML = "JAIPUR, INDIA"; 
});
const themeToggleSun = document.querySelector('.fa-sun');
const themeToggleMoon = document.querySelector('.fa-moon');
const body = document.body;

themeToggleSun.addEventListener('click', () => {
    body.classList.add('dark-mode'); // Apply dark mode to body
    themeToggleSun.style.display = 'none';
    themeToggleMoon.style.display = 'inline';
});

themeToggleMoon.addEventListener('click', () => {
    body.classList.remove('dark-mode'); // Remove dark mode from body
    themeToggleMoon.style.display = 'none';
    themeToggleSun.style.display = 'inline';
});
