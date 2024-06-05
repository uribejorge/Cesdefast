// Función para botón enviar del formulario de reserva
export function enviar() {
  let programa = document.getElementById("programa").value;
  let fecha = document.getElementById("fecha-reserva").value;
  let horaInicio = document.getElementById("hora-inicio").value;
  let horaSalida = document.getElementById("hora-salida").value;
  let correoElectronico = document.getElementById("email").value;

  console.log("Reserva generada: ");
  console.log("Programa: " + programa);
  console.log("Fecha Reservada: " + fecha);
  console.log("Hora Inicio: " + horaInicio);
  console.log("Hora Salida: " + horaSalida);
  console.log("Email: " + correoElectronico);
}


