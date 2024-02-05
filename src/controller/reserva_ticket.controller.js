//ruta para referenciar al modelo
const {reserva_ticket} = require('../models/reserva_ticket.model')

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo reserva_ticket' }); // Asegúrate de tener una vista llamada 'administrador.hbs'
};

module.exports={
    holaMundo
}