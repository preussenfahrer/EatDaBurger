var connection = require("./connection.js");

// Object Relational Mapper (OLM)
// ?? signs are for swapping out table or column
// ? signs are for swapping other values
// Skeleton from Exercise 12, folder 13

var orm = {
    selectAll: function (tableInput, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    },
    updateOne: function() {
        
    }

};

// set up ORM for export
module.exports = orm;
