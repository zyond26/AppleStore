// index //
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length - 1; // Trừ bản sao cuối

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');

    slides.style.transition = 'transform 0.5s ease';
    slides.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex]?.classList.add('active');

    if (index === totalSlides) {
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0%)';
            currentIndex = 0;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex]?.classList.add('active');
        }, 500);
    }
}

function nextSlide() {
showSlide(currentIndex + 1);
}

function prevSlide() {
if (currentIndex === 0) {
        currentIndex = totalSlides;
        document.querySelector('.slides').style.transition = 'none';
        document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
        showSlide(currentIndex - 1);
    }, 50);
    } else {
showSlide(currentIndex - 1);
    }
}

// Tự động chuyển slide
setInterval(nextSlide, 3000);

function currentSlide(index) {
    showSlide(index);
}