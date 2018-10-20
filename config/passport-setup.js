const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        //console.log(profile);
        // check if user already exists in our own db
        if(profile.emails[0].value.indexOf("@lnmiit.ac.in") !== -1){
            User.findOne({googleId: profile.id}).then((currentUser) => {
                if(currentUser){
                    // already have this user
                    //console.log('user is: ', currentUser);
                    done(null, currentUser);
                } else {
                    // if not, create user in our db
                    new User({
                        googleId: profile.id,
                        username: profile.displayName,
                        thumbnail: profile._json.image.url,
                        email: profile.emails[0].value
                    }).save().then((newUser) => {
                        //console.log('created new user: ', newUser);
                        done(null, newUser);
                    });
                }
            });
        }else{
            console.log("use college id");
            done(null);
        }
    })
);

// passport.use(new googleStr({}, callbackURL))