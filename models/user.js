const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
	username : String,
	googleId : String,
	thumbnail: String
});

module.exports = mongoose.model("User", userSchema);