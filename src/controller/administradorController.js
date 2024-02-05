//ruta para referenciar al modelo
const {administrador} = require('../models/administrador.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo administrador' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}