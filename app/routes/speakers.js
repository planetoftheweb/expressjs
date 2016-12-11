let express = require('express');
let router  = express.Router();
var mydate = require('./../data/data.json');
router.get('/speakers', function(req, res) {
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


module.exports = router;