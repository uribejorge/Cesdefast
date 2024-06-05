
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

   




   