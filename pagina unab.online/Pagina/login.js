// Función para registrar usuario
function sign_up() {
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const nombre = document.getElementById("Nombre").value;
  const id = document.getElementById("identificacion").value;

  // Verificar si ya existe un usuario con ese email
  if (localStorage.getItem(email)) {
      alert("El usuario ya existe. Intente con otro nombre de usuario.");
  } else {
      // Guardar la información del usuario en localStorage
      const data = {
          Fullname: nombre,
          id: id,
          password: password
      };
      localStorage.setItem(email, JSON.stringify(data));
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
  }
}

// Función para iniciar sesión
function sign_in() {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  // Verificar las credenciales del usuario
  const storedUserData = localStorage.getItem(username);
  if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.password === password) {
          alert("Inicio de sesión exitoso.");
          // Guardamos el email como "loggedInUser" para poder acceder a él después
          localStorage.setItem("loggedInUser", username);
          window.location.href = "index.html"; // Redirige a la página principal
      } else {
          alert("Contraseña incorrecta.");
      }
  } else {
      alert("Usuario no encontrado.");
  }
}
