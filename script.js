let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.getElementById('carousel-inner');
    const totalSlides = carouselInner.children.length;
    currentIndex = (index + totalSlides) % totalSlides; // Loop around
    carouselInner.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
const slider1= document.getElementById("slider-container");
const slider2= document.getElementById("slider-container1");
const slider3= document.getElementById("slider-container2");

setInterval(()=>{
    slider1.style.display = " block";
    slider2.style.display = "none";
    slider3.style.display = "none";

},3000);
setInterval(()=>{
    slider2.style.display = " block";

    slider1.style.display = "none";
    slider3.style.display = "none";

},6000);
setInterval(()=>{
    slider3.style.display = " block";

    slider2.style.display = "none";
    slider1.style.display = "none";

},9000);
