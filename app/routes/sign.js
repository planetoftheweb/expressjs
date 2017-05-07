let express = require('express');
let router  = express.Router();

router.route('/signup')
		.get((req,res)=> {
			res.render('sign', {
				title       : "Signup a new user",
				description : "in order to have a great experience with live chat",
				pageId      : 'signup'
			});
		});


module.exports = router;