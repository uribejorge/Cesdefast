// Función para botón enviar del formulario de reserva
export function enviar() {
  let fecha = document.getElementById("fecha-reserva").value;
  let horaInicio = document.getElementById("hora-inicio").value;
  let horaSalida = document.getElementById("hora-salida").value;
  let programa = document.getElementById("programa").value;
  let equipo = document.getElementById("equipo").value;
  let aula = document.getElementById("aula").value;
  let correoElectronico = document.getElementById("email").value;

  if (fecha && horaInicio && horaSalida && programa && equipo && aula && correoElectronico) {




  //Crear mensaje con la información de la reserva
  const mensajeReserva = `
  <h3>Reserva Generada</h3>
  <p><strong>Fecha de reserva:</strong>${fecha}</p>
  <p><strong>Hora de inicio:</strong>${horaInicio}</p>
  <p><strong>Hora de salida:</strong>${horaSalida}</p>
  <p><strong>Programa:</strong>${programa}</p>
  <p><strong>Equipo:</strong>${equipo}</p>
  <p><strong>Aula:</strong>${aula}</p>
  <p><strong>Email:</strong>${correoElectronico}</p>`;

  //Mostrar el mensaje en el DOM
  document.getElementById("reservaInfo").innerHTML = mensajeReserva;  }
  else {
    document.getElementById("reservaInfo").innerHTML = "Todos los campos son obligatorios"
  }
}
