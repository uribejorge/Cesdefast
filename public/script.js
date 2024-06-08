import { iniciarSesion } from "../controller/ControllerUsuario.js";
import { enviar} from "../controller/ControllerReserva.js";

document.querySelector("#iniciarSesion").addEventListener("click", () => {iniciarSesion()
    console.log("Ingreso Exitoso")
});

document.getElementById("btnenviar").addEventListener("click", enviar)



/*let inputs = document.querySelectorAll("input");
let user = /^(?=.*\d)[a-zA-Z0-9]{4,15}$/;
let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,10}$/;

const validarCampos = (e) => {
  switch (e.target.name) {
    case "usuario":
      if (user.test(e.target.value)) {
        console.log("Ingreso Exitoso");
        document.getElementById("usuario").style.borderColor = "green";
        document.getElementById("usuario").nextSibling.textContent = "";
      } else {
        document.getElementById("usuario").style.borderColor = "red";
        document.getElementById("usuario").nextSibling.textContent =
          "Campo Incorrecto";
      }
      break;
    case "contrasena":
      if (password.test(e.target.value)) {
        document.getElementById("contrasena").style.borderColor = "green";
        document.getElementById("contrasena").nextSibling.textContent = "";
      } else {
        document.getElementById("contrasena").style.borderColor = "red";
        document.getElementById("contrasena").nextSibling.textContent =
          "Campo Incorrecto";
      }
      break;
  }
};
inputs.forEach((input) => {
  input.addEventListener("keyup", validarCampos);
});
console.log(inputs);*/
