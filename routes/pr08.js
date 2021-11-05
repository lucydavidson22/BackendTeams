const express = require('express');

const router = express.Router();

var jsonEngine = require('../controller/pr08.js');

router.get('/', jsonEngine.processJson).post('/', jsonEngine.getIndex);
module.exports = router;