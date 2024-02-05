const express = require('express');
const router = express.Router();
const holaMundo = require('../controller/holamundo')

router.get('/holamundo', holaMundo);



module.exports = router;
