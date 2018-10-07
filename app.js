const express = require("express"),
	  app = express(),
	  mongoose = require("mongoose"),
      url = process.env.DATABASEURL || "mongodb://localhost/planner",
      authRoutes = require("./routes/auth"),
      passport = require("passport"),
      cookieSession = require("cookie-session");

mongoose.connect(url, {useNewUrlParser : true});

// App Config
app.set("view engine", "ejs");

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["gotisthebest", "friendsisthebest"]
}));


// initialise passport
app.use(passport.initialize());
app.use(passport.session());


app.use(authRoutes);

app.listen(3000, function(){
    console.log("Application has started!!");
});