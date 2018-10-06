const mongoose = require("mongoose");

userSchema = new mongoose.Schema({
	username : String,
	googleId : String
});

module.exports = mongoose.model("User", userSchema);