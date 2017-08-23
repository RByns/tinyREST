
var restful = require('node-restful');
var mongoose = restful.mongoose;

var drawingSchema = new mongoose.Schema({
  tiles: String
})

module.exports = restful.model('Drawings', drawingSchema);
