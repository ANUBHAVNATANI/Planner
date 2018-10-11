const mongoose = require("mongoose");

const messSchema = new mongoose.Schema({
    name: String,
    breakfast: [[String]],
    lunch: [[String]],
    snacks: [[String]],
    dinner: [[String]],
});

var Mess = mongoose.model("Mess", messSchema);

module.exports = Mess;