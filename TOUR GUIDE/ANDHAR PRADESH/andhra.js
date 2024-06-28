document.getElementById("history").addEventListener("click",()=>{
        window.open("/ANDHAR PRADESH/Things/HISTORY/history.html")
})
document.getElementById("culture",()=>{
    open.window("/ANDHAR PRADESH/Things/CULTURE/culture.html")
})
document.getElementById("tradion",()=>{
    open.window("/ANDHAR PRADESH/Things/TRADITON/tradition.html")
})
document.getElementById("tourism",()=>{
    open.window("/ANDHAR PRADESH/Things/TOURISM/tourism.html")
})
document.getElementById("food",()=>{
    open.window("/ANDHAR PRADESH/Things/FOOD/food.html")
})
document.getElementById("dress",()=>{
    open.window("/ANDHAR PRADESH/Things/DRESS/dress.html")
})
document.getElementById("languages",()=>{
    open.window("/ANDHAR PRADESH/Things/LANGUAGES/languages.html")
})
document.getElementById("travel",()=>{
    open.window("/ANDHAR PRADESH/Things/TRAVEL/travel.html")
})
document.getElementById("location",()=>{
    open.window("/ANDHAR PRADESH/Things/GEOGRAPHICAL/geographical.html")
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

    // setInterval(showNextImage, 3000);
});