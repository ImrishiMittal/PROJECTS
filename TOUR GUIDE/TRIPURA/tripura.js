document.getElementById("history").addEventListener("click",()=>{
     window.location = "/TRIPURA/Things/HISTORY/history.html"
})
document.getElementById("culture").addEventListener("click",()=>{
    window.location = "/TRIPURA/Things/CULTURE/culture.html"
})
document.getElementById("tradion").addEventListener("click",()=>{
    window.location = "/TRIPURA/Things/TRADITON/tradition.html"
})
document.getElementById("tourism").addEventListener("click",()=>{
    window.location = "/TRIPURA/Things/TOURISM/tourism.html"
})
document.getElementById("food").addEventListener("click",()=>{
    window.location = "/TRIPURA/Things/FOOD/food.html"
})
document.getElementById("festival").addEventListener("click",()=>{
    window.location = "/TRIPURA/Things/FESTIVALS/festival.html"
})
document.getElementById("dress").addEventListener("click",()=>{
   window.location = "/TRIPURA/Things/DRESS/dress.html"
})
document.getElementById("languages").addEventListener("click",()=>{
    window.location = "/TRIPURA/Things/LANGUAGES/languages.html"
})
document.getElementById("travel").addEventListener("click",()=>{
   window.location = "/TRIPURA/Things/TRAVEL/travel.html"
})
document.getElementById("location").addEventListener("click",()=>{
   window.location = "/TRIPURA/Things/GEOGRAPHICAL/geographical.html"
});

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

    // setInterval(showNextImage, 3000);
});