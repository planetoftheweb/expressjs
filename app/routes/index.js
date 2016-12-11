let express = require('express');
let router = express.Router();

router.get('/', function(request, response) {

	response.send(`
		<h2>NodeJs HomePage</h2>
		<p>nodejs is poweful tool for javascript to run on serverside</p>
    <a href="/speakers">show speakers</a>
		`);
});

module.exports = router;
