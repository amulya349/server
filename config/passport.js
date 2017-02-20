var LocalStrategy    = require('passport-local').Strategy;

// var Puc       = require('../models/puc');

module.exports = function(passport) {

    // passport session setup 
   
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        // Puc.findById(id, function(err, user) {
        //     done(err, user);
        // });
    });

    
    // LOCAL LOGIN 
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    },
    function(req, email, password, done) {
        process.nextTick(function() {
            // Puc.findOne( {$or:[{'local.email' :  email},{'local.username' : email}] }, function(err, user) {
            //     if (err)
            //         return done(err);

            //     // if no user is found, return the message
            //     if (!user)
            //         return done(null, false, {message: "No user found"});

            //     if (!user.validPassword(password))
            //         return done(null, false, {message: 'Oops! Wrong password.'});

            //     // all is well, return user
            //     else
            //         return done(null, user);
            // });
        });

    }));
};