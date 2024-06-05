import usuarios from "../model/ModelUsuario.js";

export function iniciarSesion() {
  if (buscarUsuario("usuario")) {
    window.location.href = "../formulario.html";
  } else {
    console.log("Usuario y/o contraseña incorrecto");
  }
}

function buscarUsuario(id) {
  let usuario = document.getElementById(id).value.toUpperCase();
  console.log(usuario);
  let estado = usuarios.some((element) => element.usuario === usuario);
  return estado;
}
