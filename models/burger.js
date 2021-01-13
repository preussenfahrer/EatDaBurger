// Import orm.js and burger.js to interact with database
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res)
        });
    },
    update: function(objColVals, devoured, cb) {
        orm.update("burgers", objColVals, devoured, function(res) {
            cb(res);
        })
    }
};
// Export file for use by controller (burgers_controller.js)
module.exports = burger;