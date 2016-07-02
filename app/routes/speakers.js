var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('speakers', {
    pageTitle: 'Speakers',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'speakers'
  });

});

router.get('/speakers/:speakerid', function(req, res) {
  var dataFile = req.app.get('appData');
  var speaker = dataFile.speakers[req.params.speakerid];
  res.send(`
      <link rel="stylesheet" type="text/css" href="/css/style.css">
      <h1>${speaker.title}</h1>
      <h2>with ${speaker.name}</h2>
      <img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
      <p>${speaker.summary}</p>
      <script src="/reload/reload.js"></script>
  `);
});

module.exports = router;
