import usuarios from "../model/ModelUsuario.js";

export function iniciarSesion() {
  if (buscarUsuario("usuario")) {
    console.log("Inicio de sesión exitoso")
    window.location.href = "../views/reserva.html";
  } else {
    console.log("Usuario y/o contraseña incorrectos");
  }
}

function buscarUsuario(id) {
  let usuario = document.getElementById(id).value.toUpperCase();
  let estado = usuarios.some((element) => element.usuario.toUpperCase() === usuario);
  return estado;
}

// Agregar evento de escucha para el formulario de inicio de sesión
document
  .getElementById("login-Form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    iniciarSesion(); // Llamar función de inicio de sesión
  });
