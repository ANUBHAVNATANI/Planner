const express = require("express"),
	app = express(),
	mongoose = require("mongoose"),
  url = process.env.DATABASEURL || "mongodb://localhost/planner";

mongoose.connect(url, {useNewUrlParser : true});

// App Config
app.set("view engine", "ejs");


app.listen(3000, function(){
    console.log("Application has started!!");
});