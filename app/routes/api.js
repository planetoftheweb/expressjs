var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var router = express.Router();
var data = require('../data/feedback.json');

/* GET chat page. */

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/api', function(req, res) {
  res.json(data);
});

router.post("/api", function(req, res) {
    data.unshift(req.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(data), "utf8", function(err) {
      if (err) {
        console.log(err);
      }
    });
    res.json(data);
});

router.delete("/api/:item", function(req, res) {
  data.splice(req.params.item, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(data), "utf8", function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(data);
});

module.exports = router;
