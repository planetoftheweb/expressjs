var express = require('express');
var router = express.Router();

/* GET speakers page. */
router.get('/speakers', function(req, res) {
  var myArtwork = [];
  var mySpeakers = [];
  var data = req.app.get('appData');

  mySpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    myArtwork = myArtwork.concat(item.artwork);
  });

  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    speakers: mySpeakers,
    appdata: data,
    page: 'speakerList'
  });
});

/* GET speakers detail page */
router.get('/speakers/:speakerid', function(req, res) {
  var myArtwork = [];
  var mySpeakers = [];
  var data = req.app.get('appData');

  data.speakers.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      mySpeakers.push(item);
      myArtwork = myArtwork.concat(item.artwork);
    }
  });

  res.render('speakers', {
    title: 'Speakers',
    artwork: myArtwork,
    speakers: mySpeakers,
    appdata: data,
    page: 'speakerDetail'
  });
});

module.exports = router;
