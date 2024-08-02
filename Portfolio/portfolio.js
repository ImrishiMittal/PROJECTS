document.getElementById("home").addEventListener("click",()=>{
    location.href="portfolio.html";
})
document.getElementById("about").addEventListener("click",()=>{
    location.href="about.html";
})
document.getElementById("skills").addEventListener("click",()=>{
    location.href="skill.html";
})
document.getElementById("project").addEventListener("click",()=>{
    location.href="project.html";
})





document.addEventListener('DOMContentLoaded', () => {
    const lightModeRadio = document.getElementById('lightMode');
    const darkModeRadio = document.getElementById('darkMode');
    const body = document.body;
    const header = document.querySelector('header');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        header.classList.add(savedTheme);

        if (savedTheme === 'light-mode') {
            lightModeRadio.checked = true;
        } else {
            darkModeRadio.checked = true;
        }
    }

    lightModeRadio.addEventListener('change', () => {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        header.classList.remove('dark-mode');
        header.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    });

    darkModeRadio.addEventListener('change', () => {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        header.classList.remove('light-mode');
        header.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    });
});
