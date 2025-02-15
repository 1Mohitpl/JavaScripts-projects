const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotNavs = document.querySelector('.carouel_nav'); // Corrected variable name
const dots = Array.from(dotNavs.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Move to a specific slide
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_carousel_slid');
    targetSlide.classList.add('current_carousel_slid');
};

// Update the active dot
const updateDots = (currentDot, targetDot) => {
    if (currentDot) {
        currentDot.classList.remove('current_slid');
    }
    if (targetDot) {
        targetDot.classList.add('current_slid');
    }
};

// Hide or show buttons based on slide position
const updateButtons = (targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is_hidden');
        nextButton.classList.remove('is_hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is_hidden');
        nextButton.classList.add('is_hidden');
    } else {
        prevButton.classList.remove('is_hidden');
        nextButton.classList.remove('is_hidden');
    }
};

// Move to the previous slide
prevButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current_carousel_slid');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNavs.querySelector('.current_slid');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    updateButtons(slides.indexOf(prevSlide));
});

// Move to the next slide
nextButton.addEventListener('click', (e) => {
    const currentSlide = track.querySelector('.current_carousel_slid');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNavs.querySelector('.current_slid');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    updateButtons(slides.indexOf(nextSlide));
});

// Move to a specific slide when a dot is clicked
dotNavs.addEventListener('click', (e) => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentSlide = track.querySelector('.current_carousel_slid');
    const currentDot = dotNavs.querySelector('.current_slid');
    const targetIndex = dots.findIndex((dot) => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    updateButtons(targetIndex);
});
