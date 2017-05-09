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

});

module.exports = router;
