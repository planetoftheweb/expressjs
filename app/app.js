// |======| To learn new technologies => spend your time on reading its documentation |======|
// testing CLI pull request


var info = require('./routes/funcs').info;
var express = require('express');
var app = express();
var mydate = require('./data/data.json');
var fs = require('fs');



var pageData;
fs.readFile('test.html', function(err,data){
    pageData = data.toString();
});
console.log(info.lover1);

// set our environent variable

app.set('port', process.env.PORT || 3000);
app.set('appData', pageData);

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/page'));
app.use(require('./routes/speaker'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port '+ app.get('port'));
  console.log('testing Push / pull command line');
});













// var http = require('http');
//
// var myServer = http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type" : "text/html"});
//   response.write('<h1>Roux Meetups</h1>');
//   response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');
