// contains routes for application
const router = require("express").Router();

var burger = require ("../models/burger.js")

router.get("/", function(req, res) {
    burger.call(function(data) {
        var hbsObject = {
            burgers: data
        }
    });
    console.log(hbsObject)
    res.render("index");
});

router.post("/api/burger", function(req, res) {
    burger.create([
        "burger", "devour"
    ], [
        req.body.burger, req.body.devour
    ], function(result) {
        res.json({ id: result.insertId});
    });
})

module.exports = router;