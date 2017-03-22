var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded());
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// tell the express app to listen on port 8000
var server = app.listen(3000, function() {
  console.log("Hello Angelo Jusay!");
  console.log("listening on port 3000");
})

// load the routes file, pass app and server into it (for handling url visits and events)
var route = require('./routes/index.js')(app, server);
