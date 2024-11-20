document.getElementById('form-discusion').addEventListener('submit', function (event) {
    event.preventDefault(); // Previene la recarga de la página

    // Obtiene los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;

    // Crea un nuevo elemento para la discusión
    const nuevaDiscusion = document.createElement('div');
    nuevaDiscusion.classList.add('discusion');
    nuevaDiscusion.innerHTML = `
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <a href="#" class="ver-discusion">Ver Discusión</a>
    `;

    // Agrega la nueva discusión al contenedor de discusiones
    document.querySelector('.discusiones').insertBefore(nuevaDiscusion, document.querySelector('.nueva-discusion'));

    // Limpia el formulario
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
});