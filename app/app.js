// |======| To learn new technologies => spend your time on reading its documentation |======|
// testing CLI pull request


var info = require('./modules/funcs').info;
var express = require('express');
var app = express();
var mydate = require('./data/data.json');

console.log(info.lover1);

// set our environent variable

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {

	response.send(`

		<h2>NodeJs HomePage</h2>
		<p>nodejs is poweful tool for javascript to run on serverside</p>
    <a href="/speakers">show speakers</a>
		`);

});

app.get('/speakers', function(req, res) {
  var speaker = "";
  mydate.speakers.forEach(function(info) {
      speaker += `
        <tr>
          <td>${info.title}</td>
          <td><a href="/speakers/${mydate.speakers.indexOf(info)+1}">${info.name}</a></td>
          <td>${info.summary}</td>
        </tr>
      `
  });

  res.send(`
  <head>
  <title>Speakers page</title>
    <style>
    *{
      font-family: sans-serif, tahoma;
      box-sizing: border-box;
    }
      table td {
        padding: 10px;

      }
      table thead td {
        font-weight:bold;
        border-bottom: 1px solid #999
      }

      table tbody td:hover {
            padding: 10px;
      }

    </style>
  </head>
  
  <body>
  <h1>Hosam Elnabawy</h1>
    <table>
      <thead>
        <td>TITLE</td>
        <td>NAME</td>
        <td>SUMMARY</td>
      </thead>
    
    ${speaker}
    </table>
    </body>
  `);
});

app.get('/speakers/:id',function(request, response) {
  var speaker = mydate.speakers[(request.params.id)-1];

  response.send(`<!DOCTYPE html>
<html>

    <head>
        <title>${speaker.name}</title>
        <style>
        *{box-sizing: border-box;font-family:sans-serif}
        body {padding: 0;margin: 0}
            section#title{
                width: 100%;
                height: auto;
                background-color: brown;
                text-align: center;
                color: #fff;
                padding: 20px
            }
            table {
              border-radius: 5px;
              bodrer: 2px solid #999
            }
            ul {
                padding: 0;
                margin:0;
                list-style: none
            }
            .container {
                width: 967px;
                margin: 0 auto
            }
            #title h1 span {
                font-size: 12px;
                color: #eee;
                margin-left: 12px
            }
            #work .container >ul >li {
                width: 50%;
                padding: 15px;
                background-color: #eee;
                border: 1px solid #ccc;
                border-radius: 5px;
                float: left
            }
        </style>
    </head>
    <body>
        <section id="title">
            <h1>${speaker.name}<span>- ${speaker.shortname}/span></h1>
            <h4>${speaker.title}</h4>
        </section><br>
        <div class="container">
        <a href="/speakers">back to speakers page</a> 
        ${speaker.summary}<hr><br><div>
        <section id="work">
            <div class="container">

            
            <ul>
                <li>
                    ${speaker.description}
                </li>
                <li class="work">
                    <ul>
                        <li><img src="${speaker.artwork[0]}"></li>
                        <li><img src="${speaker.artwork[1]}"></li>
                        <li><img src="${speaker.artwork[2]}"></li>
                        <li><img src="${speaker.artwork[3]}"></li>
                    </ul>
                </li>
            </ul>
            </div>
        </section>
    </body>

</html>

`);
});


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
