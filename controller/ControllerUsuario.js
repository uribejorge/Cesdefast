import usuarios from "../model/ModelUsuario.js";

export function iniciarSesion() {
  if (buscarUsuario("usuario")) {
    window.location.href = "../reserva.html";
  } else {
    console.log("Usuario y/o contraseña incorrectos");
  }
}

function buscarUsuario(id) {
  let usuario = document.getElementById(id).value.toUpperCase();
  console.log(usuario);
  let estado = usuarios.some((element) => element.usuario === usuario);
  return estado;
}

/* login javascript cesdefast */

// Agregar evento de escucha para el formulario de inicio de sesión
document.getElementById("login-Form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  iniciarSesion(); // Llamar función de inicio de sesión
});

