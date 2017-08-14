var orm = require("./config/orm.js");

var eatenBurgers = orm.selectAll('burgers', 'devoured', true);

var createdBurgers = orm.selectAll('burgers', 'devoured', false);

var makeBurger =  orm.insertOne('burgers', 'burger_name', 'devoured', 'date', res.body.burger);

var eatDaBurger = orm.updateOne('burgers', 'devoured', 'id', res.body.id);

module.exports = burger.js;