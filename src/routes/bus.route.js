const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/bus.controller')

router.get('/bus', holaMundo);


module.exports = router;