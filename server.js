var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/blogModel'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
// Connect to the database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/BlogBackend'); //It creates a database called Tododb


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/blogRoutes.js'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);