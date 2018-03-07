// define the server variables
var express = require('express');
var app = express();
var http = require('http').Server(app);

// create route to node modules folder for easy referncing
app.use(express.static(__dirname + '/node_modules'));

// define an assets folder location for the app to locate
app.use('/static', express.static(__dirname + '/static'));

// handle routing for the main view
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

http.listen(3000, function() {
  console.log('listening on *:3000...');
});
