const express = require("express"),
	  app = express(),
	  clubRoutes = require("./routes/club"),
	  indexRoutes = require("./routes/index"),
	  mongoose = require("mongoose"),
	  passport = require("passport"),
	  LocalStrategy = require("passport-local"),
	  passportLocalMongoose = require("passport-local-mongoose"),
	  url = process.env.DATABASEURL || "mongodb://localhost/planner",
	  User = require("./models/user"),
	  GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

mongoose.connect(url, {useNewUrlParser : true});

// App Config
app.set("view engine", "ejs");

app.use(clubRoutes);
app.use(indexRoutes);
// app.use(require("express-session")({
// 	secret : "Alohomora",
// 	saveUninitialized : false,
// 	resave : false
// }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Config
passport.use(new GoogleStrategy({
    clientID:     "350015037767-9ak4r2o8n7cp1aajs2fvmr0mlc50tkg6.apps.googleusercontent.com",
    clientSecret: "n44LVzPItN6dIq_rtvVHNfU_",
    callbackURL: "localhost:3000/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


app.listen(3000, function(){
    console.log("Application has started!!");
});