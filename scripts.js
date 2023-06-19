var carousel = document.querySelector('.carousel');
var banners = document.querySelectorAll('.banner');
var currentIndex = 0;
var interval = setInterval(nextBanner, 3000);

function nextBanner() {
    currentIndex++;
    if (currentIndex >= banners.length) {
        currentIndex = 0;
    }
    carousel.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
}

// Detener el carrusel al pasar el mouse sobre él
carousel.addEventListener('mouseover', function() {
    clearInterval(interval);
});

// Reanudar el carrusel al quitar el mouse del mismo
carousel.addEventListener('mouseout', function() {
    interval = setInterval(nextBanner, 3000);
});