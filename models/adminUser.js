var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var adminSchema = mongoose.Schema({
  username : { type: String, required: true, unique: true },
  password : { type: String, required: true },
  name : String,
  
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
  }
  created : String
});

adminSchema.pre('save', function(next) {
  // get the current date
  var currentTime = new Date().toString();
  this.created = currentTime;
  next();
});

// generating a hash
adminSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
adminSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Admin', adminSchema);
