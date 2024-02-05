const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/reserva_ticket.controller')

router.get('/reserva_ticket', holaMundo);



module.exports = router;
