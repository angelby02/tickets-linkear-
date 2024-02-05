//ruta para referenciar al modelo
const {roles} = require('../models/roles.models')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo roles' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}