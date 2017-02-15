var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var descSchema = mongoose.Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity : Number
});


descSchema.pre('save', function(next) {

  var currentTime = new Date().toString();
  this.created = currentTime;
  next();
});

module.exports = mongoose.model('Description', descSchema);
