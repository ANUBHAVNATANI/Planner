const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require("../models/user");

passport.use(new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id}, (foundUser) => {
        if(foundUser){
            console.log(foundUser);
        } else {
            User.create({
                username: profile.displayName,
                googleId: profile.id
            }, (newUser) => {
                console.log(newUser);
            });
        }
    });
}));