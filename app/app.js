//  To learn new technologies => spend your time on reading its documentation
// Import events module


let info = require('./routes/funcs').info;
let express = require('express');
let app = express();
let mydata = require('./data/data.json');
let fs = require('fs');




console.log("["+info.lover1+"] don't love ["+ info.lover2+"] anymore!");
app.use(express.static('./public'));
// set our environment variable
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set('views', "./app/public/templates");


app.locals.jsonData = mydata;


app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/page'));
app.use(require('./routes/speaker'));


app.listen(app.get('port'), function(err) {
    if(err) throw  err;
    console.log('Listening on port: '+app.get('port'));

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
