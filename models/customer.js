var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var customerSchema = mongoose.Schema({
    customerId : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    name : String,
    dob : String,
    email : { type: String},
    mobile: String,
    town : String, 
    state : String,
    district: String,
    pin : String,
    
    created : String
});

customerSchema.pre('save', function(next) {
  // get the current date
  var currentTime = new Date().toString();
  this.created = currentTime;
  next();
});

// generating a hash
customerSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
customerSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
module.exports = mongoose.model('Customer', customerSchema);
