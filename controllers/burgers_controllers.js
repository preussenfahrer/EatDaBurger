// contains routes for application
const router = require("express").Router();

var burger = require ("../models/burger.js")

// homepage
router.get("/", function(req, res) {
    burger.call(function(data) {
        var hbsObject = {
            burgers: data
        }
    });
    console.log(hbsObject)
    res.render("index");
});

// insert new burger
router.post("/api/burger", function(req, res) {
    burger.create([
        "burger", "devour"
    ], [
        req.body.burger, req.body.devour
    ], function(result) {
        res.json({ id: result.insertId});
    });
})

// update burgers 


// all burgers 

module.exports = router;