var connection = require("./connection.js");

// Object Relational Mapper (OLM)
// ?? signs are for swapping out table or column
// ? signs are for swapping other values
// Skeleton from Exercise 12, folder 13

// object for all SQL statement functions
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (burger_name) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(queryString, [burger_name], function (err, result) {
            if (err) throw err;
        })
    },
    updateOne: function (id) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = ?"
        connection.query(queryString, [id], function (err, result) {
            if (err) throw err;
        })
    }

};

// set up ORM for export
module.exports = orm;
