

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotnaves = document.querySelector('.carouel_nav');
const dots = Array.from(dotnaves.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slides next to another slides


// we can manage all  the slides by using foreach loop

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
}


slides.forEach(setSlidePosition);

// when i clike left move slides to the left
// when i clik right move slides to the right

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left + ')';

    currentSlide.classList.remove('current_carousel_slid');
    targetSlide.classList.add('current_carousel_slid');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_carousel_slid');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
} )



nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_carousel_slid');
    const nextSlide = currentSlide.nextElementSibling;
    
    moveToSlide(track, currentSlide, nextSlide);
    // movbe to the next slide

    
})
// when i clike the nav indicator then also move to the slide
