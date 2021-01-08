const track = document.querySelector('.image')
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right');
const prevButton = document.querySelector('.left');
const dotsNav = document.querySelector('.circle-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}


slides.forEach(setSlidePosition);

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

}

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.nextElementSibling;
  
    
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, targetDot)
  
})



prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = currentDot.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, targetDot)
})


dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
   

    
    });
