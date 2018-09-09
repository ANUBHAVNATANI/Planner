const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/clubs", function(req, res){
    res.render("index");
});

app.get("/clubs/new", function(req, res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("Application has started!!");
});