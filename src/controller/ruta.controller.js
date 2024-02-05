//ruta para referenciar al modelo
const {ruta} = require('../models/administrador.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo ruta' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}