var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var PORT = process.env.PORT || 8080;

var app = express();
var burger_controller = require("./controllers/burgers_controllers.js");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// controller connected to entry point
app.use("/", burger_controller);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });