var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.all(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burger_data: burgerData });
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  burger.create(req.body.burger_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  burger.update(req.body.burger_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;

// Creating Routes
// module.exports = function(app) {


// 	app.get('/', function(req,res) {
// 		orm.selectAll('burgers').then(function(data){
// 			//console.log(data);
// 			res.render('index', {burgers: data, 
// 				helpers: {isEaten: function(burger){
// 				//console.log(burger);
// 					if (burger.devoured === 1) {
// 						return "#"+burger.id+' '+burger.burger_name;
// 					}else{
// 						return ;
// 					}
// 				}},
//     		});
// 		})
// 	});

// 	app.post('/create', function(req, res) {
// 		//console.log(req.body.burger);
//     	orm.insertOne('burgers', {burger_name: req.body.burger, devoured: false}).then(function(data){});
//     });

// 	app.get("/newBurger", function(req, res) {
// 		orm.selectAll('burgers').then(function(data){
// 			//console.log(data);
// 			res.send(data);
// 		})
// 	});

// 	app.get('/eatBurger', function(req,res) {
// 		orm.updateOne('burgers', 'devoured', 'id', req.body.id).then(function(data){});
// 	});
// };