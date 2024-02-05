const express = require('express');
const router = express.Router();
const { holaMundo } = require('../controller/contacto_terminal.controller');

router.get('/contacto_terminal', holaMundo);



module.exports = router;
