var express = require('express');
var path = require('path')

var routes = require('./api/v1/entries')
// var index = require('./client/index')
var app = express();

// Define the port to run on
app.set('port', 9966)

// app.get('/', index)

app.use(express.static(path.join(__dirname, 'client')))

app.use('/v1/entries', routes)

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});console.log("welcome to WellbeingTracker server")

// app.post('/')
