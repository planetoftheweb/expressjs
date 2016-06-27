var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var myArtwork = [];
  var mySpeakers = [];

  mySpeakers = data.speakers;
  data.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });

  res.render('index', {
    title: 'Home',
    artwork: myArtwork,
    speakers: mySpeakers,
    page: 'home'
  });
});

module.exports = router;
