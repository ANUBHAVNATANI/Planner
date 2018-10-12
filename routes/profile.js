const router = require('express').Router();
const Mess = require("../models/mess");
const Bus = require("../models/bus");
const User = require("../models/user");

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

// console.log(User);

router.get("/mess", authCheck,(req, res) => {
    User.findById({ _id: req.user.id }, (err, user) => {
        if (user.year === "17" || user.year === "16") {
            Mess.findOne({ name: "A" }, (err, mess) => {
                res.render("mess", {mess : mess});
            });
        } else {
            Mess.findOne({ name: "B" }, (err, mess) => {
                res.render("mess", {mess : mess});
            });
        }
    });
});

router.get("/bus", authCheck ,(req, res) => {
    Bus.find({}, (err, bus)=>{
        res.render("bus", {bus : bus});
    });
});

router.get('/', authCheck, (req, res) => {
    res.render('profile');
});

module.exports = router;
