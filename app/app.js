var express = require('express');
var path = require('path');
var reload = require('reload');
var http = require('http');
var dataFile = require(path.join(__dirname, 'data/data.json'));

// Set up server
var app = express();
var server = http.createServer(app);
var io = require('socket.io')(server);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.set('appData', dataFile);

// Set up globals
app.locals.connectedUsers = 0;
app.locals.allSpeakers = dataFile.speakers;

// Use static directory
app.use(express.static('./app/public'));

// Use routes
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

// Set up connections
io.on('connection', function (socket) {

  app.locals.connectedUsers += 1;
  io.emit('updateLabel', {
    count : app.locals.connectedUsers,
    type : "Original Connection"
  });

  socket.on('disconnect', function () {
    app.locals.connectedUsers -= 1;
    io.emit('updateLabel', {
      count : app.locals.connectedUsers,
      type : "disconnect"
    });
  });

  socket.on('updateCounts', function() {
    io.emit('updateLabel', {
      count : app.locals.connectedUsers,
      type : "Update Counts"
    });
  });

  socket.on('message', function (data) {
    io.emit('updateMessages', data);
  });
});

// Handle realods
reload(server, app);

// run server
server.listen(app.get('port'), function(){
  console.log("Web server listening on port " + app.get('port') + ' ENV: ' + process.env.NODE_ENV);
});

module.exports = app;
