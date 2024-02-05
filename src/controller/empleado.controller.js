//ruta para referenciar al modelo
const {empleado} = require('../models/empleado.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo empleado' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}