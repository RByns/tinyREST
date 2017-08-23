

var express = require('express')
var router = express.Router();

var Drawing = require('../models/drawing');


Drawing.methods(['get', 'put', 'post' ,'delete']);
Drawing.register(router, '/drawings');


module.exports = router;
