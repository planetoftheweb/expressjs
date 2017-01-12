//  To learn new technologies => spend your time on reading its documentation
// Import events module

let info = require('./routes/funcs').info;
let express = require('express');
let bodyParser = require('body-parser');
let reload = require('reload');
let mydata = require('./data/data.json');
let fs = require("fs");

let app = express();

// read & use file system

fs.readFile(__dirname+"/test.html",'utf-8', function(data) {
	console.log(data);
});

// log test text
console.log("["+info.lover1+"] | undefined destiny | ["+ info.lover2+"]\n"+__dirname);

// set our environment variable
app.set('port', process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set('views', __dirname+"/public/templates");

// set local variables to be accessed in whole th project
app.locals.jsonData = mydata;

// serve static files and dependencies
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

// let express use templates and routers
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/page'));
app.use(require('./routes/speaker'));
app.use(require('./routes/about'));
app.use(require('./routes/chat'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

// listen to server and log the error if founded
let server = app.listen(app.get('port'), function(err) {
    if(err) throw  err;
    console.log('Listening on port: '+app.get('port'));

});

// handle errors while developing


// reload the page while developing

reload(server, app);
