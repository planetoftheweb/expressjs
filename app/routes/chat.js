/**
 * Created by Hossam Elnabawy on 12/01/2017.
 */
let express = require('express');

let router = express.Router();

router.get('/chat', (request, response)=>{
	response.render('chat', {
		title: 'chat page',
		description: "NodeJs is great javascript server side language",
		pageId : 'chat',
	});
});

module.exports = router;
