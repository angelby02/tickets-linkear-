const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/ruta.controller')

router.get('/ruta', holaMundo);



module.exports = router;
