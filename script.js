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

// Manejar inicio de sesión
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Aquí agregar lógica de validación de usuario (mocked para el ejemplo)
    if (username === "Usuario" && password === "") {
        document.getElementById('login-Form__container').style.display = 'none';
        document.getElementById('form-registro').style.display = 'block';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
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
