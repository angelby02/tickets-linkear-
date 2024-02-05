const { holaMundo} = require('../models/holamundo');

const holaMundo = (req, res) => {
    res.render('holamundo', { mensaje: '¡Hola mundo!' }); // Asegúrate de tener una vista llamada 'hola-mundo.hbs'
};
module.exports = {
    holaMundo
};