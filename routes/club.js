const express = require("express");
const router = new express.Router();

router.get("/clubs", function (req, res) {
    res.render("clubs/index");
});

router.get("/clubs/new", function (req, res) {
    res.render("clubs/new");
});

module.exports = router;