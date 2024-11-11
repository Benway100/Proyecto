

// Selección de todos los enlaces en el menú
document.querySelectorAll('.menu a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();  // Evita el salto instantáneo
      const targetSection = document.querySelector(this.getAttribute('href'));  // Busca la sección destino
      if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });  // Desplazamiento suave
      }
  });
});

