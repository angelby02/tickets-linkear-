//ruta para referenciar al modelo
const {chofer} = require('../models/chofer.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo chofer' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}