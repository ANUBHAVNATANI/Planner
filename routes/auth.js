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


// // Login
router.get("/login", function(req, res){
	res.render("index/login");
});

router.get("/auth/google", passport.authenticate("google",{
	scope: ["profile"]
}));

router.get("/auth/google/redirect", passport.authenticate("google"), (req, res) => {
	res.render("user/profile");
});


// Logout
router.get("/logout", function(req, res){
	req.logout();
	res.redirect("/");
});

module.exports = router;