<<<<<<< HEAD
let express = require('express');
let router  = express.Router();
let data    = require("../data/data.json");
let feedback    = require("../data/feedback.json");

router.get('/api/data', (request, response)=>{
	response.json(data);
});
router.get('/api/feedback', (request, response)=>{
	response.json(feedback);
});

=======
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var feedbackData = require('../data/feedback.json');

router.get('/api', function(req, res) {
  res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
  feedbackData.unshift(req.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});


router.delete('/api/:id', function(req, res) {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});



>>>>>>> master
module.exports = router;
