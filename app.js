const express = require("express");
const app = express();
const clubRoutes = require("./routes/club");

app.set("view engine", "ejs");


app.use(clubRoutes);




app.listen(3000, function(){
    console.log("Application has started!!");
});