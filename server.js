var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var exphbs = require('express-handlebars');
var connection = require('./config/connection.js');
var path = require('path');



app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public/assets'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js')(app);

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

var port = 3000;

app.listen(port, function() {
    console.log("Listening on PORT " + port);
});