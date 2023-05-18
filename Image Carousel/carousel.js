const slides = document.querySelectorAll(".slide");
const prevArrow = document.querySelector(".prev");
const nextArrow = document.querySelector(".next");
const navDots = document.querySelectorAll(".dot");
const navContainer = document.querySelector(".nav-dots");

let currentSlide = 0;
let carLen = slides.length;


const adaptSlides = () => {
    for (let i = 0; i < carLen; i++) {
        slides[i].style.transform = `translateX(${i*100}%`;
    }
}

const changeSlide = (clicked) =>{
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100*(index - clicked)}%)`;
    });
    navDots.forEach(dot => dot.classList.remove("active"));
    currentSlide = clicked;
    navDots[clicked].classList.add("active");

}

adaptSlides();

prevArrow.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide >= 0){
        changeSlide(currentSlide);
    }
})
nextArrow.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= carLen){
        currentSlide = 0;  
    }
    changeSlide(currentSlide);
    
})

navContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains("dot")){
        const clicked = e.target.dataset.slide;
        changeSlide(clicked);
    }
})

