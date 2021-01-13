// Import orm.js and burger.js to interact with database
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function(burger_name, cb) {
        orm.insertOne(burger_name, function(res) {
            cb(res)
        });
    },
    update: function(id, cb) {
        orm.updateOne(id, function(res) {
            cb(res);
        })
    }
};
// Export file for use by controller (burgers_controller.js)
module.exports = burger;