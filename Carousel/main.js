

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
    const currentDot = dotnaves.querySelectorAll('.current_slid');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updatesDots(currentDot, prevDot);
} )

const updatesDots = (currentDot, targetDot) =>{
    currentDot.classList.remove('current_slid');
    targetDot.classList.add('current_slid');
}


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_carousel_slid');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotnaves.querySelectorAll('.current_slid');
    const nextDot = currentDot.nextElementSibling;

    
    moveToSlide(track, currentSlide, nextSlide);
    // movbe to the next slide
    updatesDots(currentDot, nextDot);
    
    
})
// when i clike the nav indicator then also move to the slide

dotnaves.addEventListener('click', e =>{
     const targetDot = e.target.closest('button');

     if(!targetDot) return;

     const currentSlide = track.querySelector('.current_slid');
     const currentDot = dotnaves.querySelector('.current_slid');
     const targetIndex = dots.findIndex(dot => dot === targetDot);
     const targetSlide = slides[targetIndex] // to get each slide with each index

     moveToSlide(track, currentSlide, targetSlide);


     updatesDots(currentDot, targetDot);

     if(targetIndex === 0){
        prevButton.classList.add('is_hidden');
        nextButton.classList.remove('is_hidden');
    
     } else if(targetIndex === slides.length-1){
        prevButton.classList.remove('is_hidden');
        nextButton.classList.add('is_hidden');
     } else {
        prevButton.classList.remove('is_hidden');
        nextButton.classList.remove('is_hideen');
     }
     
})
