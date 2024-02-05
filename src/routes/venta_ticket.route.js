const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/venta_ticket.controller')

router.get('/venta_ticker', holaMundo);


module.exports = router;