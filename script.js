

// Manejar envío del formulario de contacto


document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    alert('Enviado exitosamente');

    event.target.reset();
});

function mostrarFormulario() {
    document.getElementById('login-Form__container').style.display = 'flex';
}
function enviar(event) {
    event.preventDefault();
    alert('Enviado exitosamente');
    event.target.reset();
}
function mostrarFormulario() {
    document.getElementById('login-Form__container').style.display = 'flex';
}


















