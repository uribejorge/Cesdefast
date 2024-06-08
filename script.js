// Manejar envío del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Aquí puedes añadir código para enviar los datos a un servidor si es necesario

    // Muestra una ventana emergente
    alert('Enviado exitosamente');

    // Limpia el formulario después de enviar
    event.target.reset();
});

// Mostrar formulario de inicio de sesión al hacer clic en el botón de reservas
function mostrarFormulario() {
    document.getElementById('login-Form__container').style.display = 'flex';
}

// Manejar envío del formulario de registro
function enviar(event) {
    event.preventDefault();
    // Aquí puedes añadir código para enviar los datos a un servidor si es necesario
    alert('Enviado exitosamente');
    // Limpia el formulario después de enviar
    event.target.reset();
}

// Mostrar formulario de inicio de sesión al hacer clic en el botón de reservas
function mostrarFormulario() {
    document.getElementById('login-Form__container').style.display = 'flex';
}

// Manejar inicio de sesión
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Usuario" && password === "1234") {
        openReservaWindow();
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

// Abrir nueva ventana con contenido de reserva
function openReservaWindow() {
    const reservaContent = document.getElementById('reservaContent').innerHTML;
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow.document.write(`
        <html>
            <head>
                <title>Reserva</title>
                <link rel="stylesheet" href="style.css">
            </head>
            <body>
                ${reservaContent}
                <script>
                    function enviar(event) {
                        event.preventDefault();
                        alert('Formulario de reserva enviado exitosamente');
                        event.target.reset();
                    }
                </script>
            </body>
        </html>
    `);
    newWindow.document.close();  // Necesario para algunas versiones de IE
}

// Manejar envío del formulario de contacto
function enviar(event) {
    event.preventDefault();
    alert('Enviado exitosamente');
    event.target.reset();
}



// Abrir nueva ventana con contenido de reserva y centrarla en la pantalla


function openReservaWindow() {
    const width = 800;
    const height = 600;
    const left = (screen.width / 2) - (width / 2);
    const top = (screen.height / 2) - (height / 2);

    const newWindow = window.open("", "_blank", `width=${width},height=${height},left=${left},top=${top}`);
    newWindow.document.write(`
                    <html>
                    <head>
                        <title>Solicitud préstamo de equipo</title>
                        <link rel="stylesheet" href="styles.css">
                    </head>
                    <body>
                        <div class="form-registro-container">
                            <form class="form-registro" action="">
                                <h2 class="form-registro__h2">Solicitud préstamo de equipo</h2>
                                <label class="form-registro__label" for="programas">
                                    Elija su programa:
                                    <input class="form-registro_input" list="programas" id="programa" />
                                    <datalist id="programas">
                                        <option value="Asistente Administrativo"></option>
                                        <option value="Asistente Contable"></option>
                                        <option value="Asesoría Comercial y de Servicios"></option>
                                        <option value="Desarrollo de Software"></option>
                                        <option value="Diseño Gráfico"></option>
                                        <option value="Mercadeo"></option>
                                        <option value="Primera Infancia"></option>
                                        <option value="Seguridad Laboral"></option>
                                        <option value="Talento Humano"></option>
                                    </datalist>
                                </label>
                                <label class="form-registro__label" for="fecha-reserva">
                                    Fecha Reserva:
                                    <input class="form-registro_input" type="date" id="fecha-reserva" required />
                                </label>
                                <label class="form-registro__label" for="hora-inicio">
                                    Hora Inicio:
                                    <input class="form-registro_input" type="time" id="hora-inicio" required />
                                </label>
                                <label class="form-registro__label" for="hora-salida">
                                    Hora Salida:
                                    <input class="form-registro_input" type="time" id="hora-salida" required />
                                </label>
                                <label class="form-registro__label" for="email">
                                    Email:
                                    <input class="form-registro_input" type="email" id="email" placeholder="ejemplo@correo.com" required />
                                </label>
                                <button type="submit" class="btn btn-primary">Enviar</button>
                            </form>
                        </div>
                    </body>
                    </html>
                `);
    newWindow.document.close();
}

// Manejar envío del formulario de contacto
function enviar(event) {
    event.preventDefault();
    alert('Enviado exitosamente');
    event.target.reset();
}
