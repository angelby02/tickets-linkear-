const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/administradorController')

router.get('/administrador',holaMundo);


module.exports = router;