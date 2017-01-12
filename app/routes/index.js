let express = require('express');
let router = express.Router();
let speakersData = require('../data/data.json');

router.get('/', function(request, response) {

response.render('index', {
	title : "Node Home Page",
	description: "NodeJs is great javascript server side language",
	pageId : 'home',
	speakers : speakersData.speakers
});

/*	response.send(`
		<img	src="/images/misc/background.jpg" alt="bg" height="300">
		<h2>NodeJs HomePage</h2>
		<p>nodejs is poweful tool for javascript to run on serverside</p>
    <a href="/speakers">show speakers</a>
		`);

	*/
});

module.exports = router;
