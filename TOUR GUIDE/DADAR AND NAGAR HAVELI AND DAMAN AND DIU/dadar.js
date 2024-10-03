document.getElementById("history").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/HISTORY/history.html")
})
document.getElementById("culture").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/CULTURE/culture.html")
})
document.getElementById("tradion").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/TRADITON/tradition.html")
})
document.getElementById("tourism").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/TOURISM/tourism.html")
})
document.getElementById("food").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/FOOD/food.html")
})
document.getElementById("food").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/FESTIVALS/festival.html")
})
document.getElementById("dress").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/DRESS/dress.html")
})
document.getElementById("languages").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/LANGUAGES/languages.html")
})
document.getElementById("travel").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/TRAVEL/travel.html")
})
document.getElementById("location").addEventListener("click",()=>{
    window.open("/DADAR AND NAGAR HAVELI AND DAMAN AND DIU/Things/GEOGRAPHICAL/geographical.html")
})


const sliders = document.querySelectorAll(".slider");

sliders.forEach(slider => {
    const images = slider.querySelectorAll("img");
    const prevButton = slider.querySelector(".prev");
    const nextButton = slider.querySelector(".next");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    function showPrevImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    }

    prevButton.addEventListener("click", showPrevImage);
    nextButton.addEventListener("click", showNextImage);
});