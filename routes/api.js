const express = require("express");
const router  = new express.Router();
const User = require("../models/user");
const Mess = require("../models/mess");

// Mess.create({ name: "A", breakfast: [["egg", "idli"], ["csscsc", "ysycs"]], lunch: [["dal", "rice"], ["scaajajs", "csuuchu"]], snacks: [["samosa", "sandwich"], ["scaajajs", "csuuchu"]], dinner: [["axhxhaj", "cscsc"], ["scaajajs", "csuuchu"]] }, (err, mess) => {
//     if (err) {
//         console.log(err);
//     }
// });

router.get("/mess", (req, res) => {
    User.findById({ id: req.user.id }, (err, user) => {
        if (user.year === 2017 || user.year === 2018) {
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

module.exports = router;