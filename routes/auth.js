const express = require("express");
const router = new express.Router();
const passport = require("passport");
const passportSetup = require("../config/passport-setup");

// Landing
router.get("/", function(req, res){
    res.render("index/landing");
});

// // Register
router.get("/register", function(req, res){
	res.render("index/register");
});

router.post("/register", function(req, res){
	res.send("register post route");
});

// // Login
router.get("/login", function(req, res){
	res.render("index/login");
});

router.get("/auth/google", passport.authenticate("google",{
	scope: ["profile"]
}));

router.get("/auth/google/redirect", passport.authenticate("google"), (req, res) => {
	console.log("you have reached the redirect");
});

router.post("/login", function(req, res){
	res.send("login post route");
});

// Logout
router.get("/logout", function(req, res){
	res.send("Logout route");
});

module.exports = router;