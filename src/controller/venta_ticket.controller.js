//ruta para referenciar al modelo
const {venta_ticket} = require('../models/venta_ticket.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo venta_ticket' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}