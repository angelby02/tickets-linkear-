const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/terminal.controller')

router.get('/terminal', holaMundo);



module.exports = router;
