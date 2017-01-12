/**
 * Created by Hossam Elnabawy on 12/01/2017.
 */
let express = require('express');
let router  = express.Router();

router.get('/feedback', function(req, res) {

	res.render('feedback', {
		title : "feedback Page",
		description: "NodeJs is great javascript server side language",
		pageId : 'feedback'

	})

});

module.exports = router;