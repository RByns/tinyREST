var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//mongoose.connect('mongodb://localhost/rest_test')
mongoose.connect('mongodb://admin:admin@ds155473.mlab.com:55473/dotpictalt');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use('/api', require('./routes/api'));

//app.listen(3000);
//console.log('API is running on 3000');
