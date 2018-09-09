const express = require("express");
const app = express();
const clubRoutes = require("./routes/club");
const indexRoutes = require("./routes/index");

app.set("view engine", "ejs");


app.use(clubRoutes);
app.use(indexRoutes);

app.listen(3000, function(){
    console.log("Application has started!!");
});