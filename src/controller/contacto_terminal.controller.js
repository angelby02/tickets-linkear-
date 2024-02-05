//ruta para referenciar al modelo
const {contacto_terminal} = require('../models/administrador.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo contacto_terminal' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}