var express = require("express"),
	router = express.Router();

// Landing
router.get("/", function(req, res){
	res.send("Landing Page");
});

// // Register
// router.get("/register", function(req, res){
// 	res.send("register form");
// });

// router.post("/register", function(req, res){
// 	res.send("register post route");
// });

// // Login
// router.get("/login", function(req, res){
// 	res.send("login form");
// });

// router.post("/login", function(req, res){
// 	res.send("login post route");
// });

// // Logout