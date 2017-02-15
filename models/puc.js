var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var pucSchema = mongoose.Schema({
    pucId : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    name : String,
    mobile: String,
    town : String, 
    state : String,
    district: String,
    pin : String,
    stock : {
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
    created : String
});

pucSchema.pre('save', function(next) {
  // get the current date
  var currentTime = new Date().toString();
  this.created = currentTime;
  next();
});

// generating a hash
pucSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
pucSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Puc', pucSchema);
