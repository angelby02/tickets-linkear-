const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/empleado.controller')

router.get('/empleado', holaMundo);



module.exports = router;
