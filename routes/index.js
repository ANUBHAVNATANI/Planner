const express = require("express");
const router = new express.Router();

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

router.post("/login", function(req, res){
	res.send("login post route");
});

// Logout
router.get("/logout", function(req, res){
	res.send("Logout route");
});

module.exports = router;