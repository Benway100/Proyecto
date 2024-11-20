// Al cargar la página, verificamos si el usuario está logueado
window.onload = function() {
    const loggedInUser = localStorage.getItem("loggedInUser"); // Obtener el usuario logueado
  
    if (loggedInUser) {
        // Obtener los datos del usuario logueado
        const storedUserData = localStorage.getItem(loggedInUser); // Usamos el email como clave
        if (storedUserData) {
            const userData = JSON.parse(storedUserData);
            
            generarQR(userData); // Llamamos a la función para generar el QR
        } else {
           
            alert("Error: No se encontraron datos de usuario.");
        }
    } else {
        alert("No has iniciado sesión.");
        window.location.href = "login.html";  // Redirige al login si no hay usuario logueado
    }
  };
  
  // Función para generar el QR
  function generarQR(data) {
    const qrCanvas = document.getElementById("qrCanvas");
    const qrData = `Nombre: ${data.Fullname}\nCarrera: Ingeniería de Sistemas\nID: ${data.id}`;
  
    // Generar el QR usando la librería QRCode
    QRCode.toCanvas(qrCanvas, qrData, {
      errorCorrectionLevel: 'L',
      margin: 4,
      scale: 10
    }, function (error) {
      if (error) {

        return;  
      }
  
      // Hacer visible el canvas y el botón de descarga
      qrCanvas.style.display = "block";
      const downloadButton = document.getElementById("downloadQR");
      downloadButton.style.display = "block";
  
      const info=document.getElementById("info");
      info.innerText=qrData
  
  
      // Función para descargar el QR
      downloadButton.onclick = () => {
        const link = document.createElement("a");
        link.download = `${data.Fullname}_QR.png`;
        link.href = qrCanvas.toDataURL();
        link.click();
      };
    });
  }