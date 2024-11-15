document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();  // Previene la recarga de la página
      const sectionUrl = this.getAttribute('href');  // Obtiene la URL de la sección

      // Cargar contenido con fetch
      fetch(sectionUrl)
          .then(response => response.text())
          .then(data => {
              document.getElementById('main-content').innerHTML = data;
          })
          .catch(error => console.error('Error al cargar la sección:', error));
  });
});
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}


