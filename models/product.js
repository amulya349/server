var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = mongoose.Schema({
    name : String, 
    ordid: String,
    lat: String,
    long: String,
    created : String
});


productSchema.pre('save', function(next) {

  var currentTime = new Date().toString();
  this.created = currentTime;
  next();
});

module.exports = mongoose.model('Product', productSchema);
