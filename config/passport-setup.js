const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require("../models/user");


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
    //console.log(profile);
    User.findOne({googleId: profile.id}, (foundUser) => {
        if(foundUser){
            console.log(foundUser);
            done(null, foundUser);
        } else {
            User.create({
                username: profile.displayName,
                googleId: profile.id,
                thumbnail: profile._json.image.url
            }, (newUser) => {
                console.log(newUser);
                done(null, newUser);
            });
        }
    });
}));