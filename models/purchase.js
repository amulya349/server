var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var purchaseSchema = mongoose.Schema({
    customerId: String,
    customerName: String,
    totalAmount: Number,
    bv: Number,
    description : {
  		wheatgrass : Number,
  		foimune : Number,
  		shampoo : Number,
  		gel : Number,
  		premiumTea : Number,
  		spclTea : Number,
  		bodyWash : Number,
  		bodyLotion : Number,
  		redivit : Number
    },
    date : { type: Date, default: Date.now }, 
    created : String
});


purchaseSchema.pre('save', function(next) {

  var currentTime = new Date().toString();
  this.created = currentTime;
  next();
});

module.exports = mongoose.model('Purchase', purchaseSchema);
