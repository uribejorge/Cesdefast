
/*


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model('User', userSchema);

// Ejemplo de cómo crear un nuevo usuario
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
});

newUser.save()
    .then(user => {
        console.log('Usuario guardado:', user);
    })
    .catch(err => {
        console.error('Error al guardar el usuario:', err);
    });


    app.get('/users', async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).send(err);
        }
    });
    
    app.post('/users', async (req, res) => {
        const newUser = new User(req.body);
        try {
            const savedUser = await newUser.save();
            res.json(savedUser);
        } catch (err) {
            res.status(500).send(err);
        }
    });
    
    */

   /* login javascript cesdefast */

   
   
   function login() {
    let username = document.getElementById("username").value; // Obtener el valor de username
    let password = document.getElementById("password").value; // Obtener el valor de password

    // Verificar credenciales de login
    if(username === "Aleja" && password === "1234") {
        console.log("Inicio de sesión exitoso como " + username);
        window.location.href = "formulario.html"; // Redirigir a la página formulario
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

// Agregar evento de escucha para el formulario de inicio de sesión
document.getElementById("login-Form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    login(); // Llamar función de inicio de sesión
});

// Función para botón enviar del formulario de reserva
function enviar() {
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




   