var express = require("express");

var app = express();

var burger = require("../models/burger.js");

// Creating Routes
module.exports = function(app) {


	app.get('/', function(req,res) {
		orm.selectAll('burgers').then(function(data){
			//console.log(data);
			res.render('index', {burgers: data, 
				helpers: {isEaten: function(burger){
				//console.log(burger);
					if (burger.devoured === 1) {
						return "#"+burger.id+' '+burger.burger_name;
					}else{
						return ;
					}
				}},
    		});
		})
	});

	app.post('/create', function(req, res) {
		//console.log(req.body.burger);
    	orm.insertOne('burgers', {burger_name: req.body.burger, devoured: false}).then(function(data){});
    });

	app.get("/newBurger", function(req, res) {
		orm.selectAll('burgers').then(function(data){
			//console.log(data);
			res.send(data);
		})
	});

	app.get('/eatBurger', function(req,res) {
		orm.updateOne('burgers', 'devoured', 'id', req.body.id).then(function(data){});
	});
};