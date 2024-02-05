const express = require('express');
const router = express.Router();
const { holaMundo } = require('../controller/chofer.controller');

router.get('/chofer', holaMundo);


module.exports = router;