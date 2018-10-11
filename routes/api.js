const express = require("express");
const router  = new express.Router();
const User = require("../models/user");
const Mess = require("../models/mess");
const Bus = require("../models/bus");

// Mess.create({ name: "A", breakfast: [["egg", "idli"], ["csscsc", "ysycs"]], lunch: [["dal", "rice"], ["scaajajs", "csuuchu"]], snacks: [["samosa", "sandwich"], ["scaajajs", "csuuchu"]], dinner: [["axhxhaj", "cscsc"], ["scaajajs", "csuuchu"]] }, (err, mess) => {
//     if (err) {
//         console.log(err);
//     }
// });

router.get("/mess", (req, res) => {
    User.findById({ id: req.user.id }, (err, user) => {
        if (user.year === "17" || user.year === "16") {
            Mess.findOne({ name: "A" }, (err, mess) => {
                res.send(mess);
            });
        } else {
            Mess.findOne({ name: "B" }, (err, mess) => {
                res.send(mess);
            });
        }
    });
});

router.get("/bus", (req, res) => {
    Bus.find({}, (err, bus)=>{
        res.send(bus);
    });
});

module.exports = router;