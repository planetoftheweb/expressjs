<<<<<<< HEAD
let express = require('express');
let router = express.Router();
let speakersData = require('../data/data.json');

router.get('/', function (request, response) {

	response.render('index', {
		title: "Discover the places",
		description: "You have never been there before..",
		pageId: 'home',
		speakers: speakersData.speakers
	});
=======
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageSpeakers = data.speakers;

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    speakers: pageSpeakers,
    pageID: 'home'
  });
>>>>>>> master

});

module.exports = router;
