// contains routes for application
var express = require("express");
var router = express.Router();

// Import model (burger.js) to use database function
var burger = require("../models/burger.js")

// create all routes and logic set ups
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index");
    });
});

// insert new burger
router.post("/api/burger", function (req, res) {
    burger.create([
        "burger", "devour"
    ], [
        req.body.burger_name, req.body.devour
    ], function (result) {
        res.json({ id: result.insertId });
    });
})

// update burgers 
router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("devoured", devoured);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;