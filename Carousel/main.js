

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotnaves = document.querySelector('.carouel_nav');
const dots = Array.from(dotnaves.children);

const slideSize = slides[0]

// when i clike left move slides to the left
// when i clik right move slides to the right
// when i clike the nav indicator then also move to the slide
