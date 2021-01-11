// Set up to connect Node to mySQL
var mysql = require("mysql");

var connection = mysql.createConnection({host: "localhost",

port: 8080,

user: root,

password: "bruceyboy143",
database: "burgers_db"

});

connection.connect(function(err) {
    if (err) throw err;
    start();
})
