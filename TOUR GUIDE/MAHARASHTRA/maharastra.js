document.getElementById("history").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/HISTORY/history.html")
})
document.getElementById("culture").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/CULTURE/culture.html")
})
document.getElementById("tradion").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/TRADITON/tradition.html")
})
document.getElementById("tourism").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/TOURISM/tourism.html")
})
document.getElementById("food").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/FOOD/food.html")
})
document.getElementById("festival").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/FESTIVALS/festival.html")
})
document.getElementById("dress").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/DRESS/dress.html")
})
document.getElementById("languages").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/LANGUAGES/languages.html")
})
document.getElementById("travel").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/TRAVEL/travel.html")
})
document.getElementById("location").addEventListener("click",()=>{
    window.open("/MAHARASHTRA/Things/GEOGRAPHICAL/geographical.html")
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