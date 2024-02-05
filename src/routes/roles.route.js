const express = require('express');
const router = express.Router();
const {holaMundo} = require('../controller/roles.controller')

router.get('/roles', holaMundo);



module.exports = router;
