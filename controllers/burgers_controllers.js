// contains routes for application
const router = require("express").Router();

var burger = require ("../models/burger.js")

router.get("/", function(req, res) {
    res.render("index");
})


router.get("/api/burger", function(req, res) {

})

module.exports = router;