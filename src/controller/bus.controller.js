//ruta para referenciar al modelo
const {bus} = require('../models/administrador.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo buses' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}