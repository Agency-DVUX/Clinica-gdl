document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const images = document.querySelectorAll('#carousel img');
  
  let currentIndex = 2;
  
  prevButton.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    updateCarousel();
  });
  
  nextButton.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    updateCarousel();
  });
  
  function updateCarousel() {
    images.forEach((image, index) => {
      if (index === currentIndex) {
        image.classList.add('scale-100');
        image.classList.remove('scale-50');
      } else {
        image.classList.remove('scale-100');
        image.classList.add('scale-50');
      }
    });
  }  
});