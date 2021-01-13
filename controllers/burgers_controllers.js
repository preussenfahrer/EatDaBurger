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
        res.render("index", hbsObject);
    });
});

// insert new burger
router.post("/api/burger", function (req, res) {
    console.log(req.body);
    burger.create(req.body.burger_name, function (result) {
        res.json({ id: result.insertId });
    });
})

// update burgers 
router.put("/api/burger/:id", function (req, res) {
    burger.update(req.params.id, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;