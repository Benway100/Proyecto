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
function mostrarSubmenu() {
  const carrera = document.getElementById('carrera').value;
  const submenu = document.getElementById('submenu-ingenieria');

  if (carrera === 'ingenieria') {
      submenu.style.display = 'block';
  } else {
      submenu.style.display = 'none';
  }
}



