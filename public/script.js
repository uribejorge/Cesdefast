import { iniciarSesion } from "../controller/ControllerUsuario.js";
import { enviar} from "../controller/ControllerReserva.js";

document.querySelector("#iniciarSesion").addEventListener("click", () => {iniciarSesion()
    console.log("Ingreso Exitoso")
});

document.getElementById("btnenviar").addEventListener("click", enviar)


 // Capturar los datos del formulario

 function registrar() {
          
            


  const fechaReserva = document.getElementById('fechaReserva').value;
   const horaInicio = document.getElementById('horaInicio').value;
   const horaSalida = document.getElementById('horaSalida').value;
   const programa = document.getElementById('programa').value;
   const equipo = document.getElementById('equipo').value;
   const aula = document.getElementById('aula').value;
   const email = document.getElementById('email').value;

   // Guardar los datos en localStorage
   localStorage.setItem('fechaReserva', fechaReserva);
   localStorage.setItem('horaInicio', horaInicio);
   localStorage.setItem('horaSalida', horaSalida);
   localStorage.setItem('programa', programa);
   localStorage.setItem('equipo', equipo);
   localStorage.setItem('aula', aula);
   localStorage.setItem('email', email);

   // Redirigir a la página de éxito
   window.location.href = 'success.html';
 }



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
