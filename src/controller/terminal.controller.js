const { terminal} = require('../models/terminal.model');

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: 'modulo terminal' }); // Asegúrate de tener una vista llamada 'hola-mundo.hbs'
};
module.exports = {
    holaMundo
};