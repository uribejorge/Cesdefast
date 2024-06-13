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




