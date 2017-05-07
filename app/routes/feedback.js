/**
 * Created by Hossam Elnabawy on 12/01/2017.
 */
let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');
let fs = require('fs');

express().use(bodyParser.json());
express().use(bodyParser.urlencoded({extended: false}));



router.get('/feedback', function (req, res) {
	//fs.writeFile('app/data/feedback.json', feedback.toJSON());
	res.render('feedback', {
		title: "feedback Page",
		description: "NodeJs is great javascript server side language",
		pageId: 'feedback'
	});

});

router.post('/feedback', function(req,res){

	new feedBack(req.body).save(function(err, data) {
		//fs.write('app/data/feedback.json', data.toJSON());
		console.log(JSON.stringify(data));
		feedBack.find({}, function(err, data) {
			feedback = data;
		});
	});
	console.log("You are trying to submit and add new data");

});

router.get('/feedback/:num', function(req, res){
	res.send(`${parse(JSON.stringify(feedback), req.params.num)}

`)
});

function parse(obj, param) {
	var newObj = JSON.parse(obj);
	newObj = newObj[param];

	return JSON.stringify(newObj);
}

module.exports = router;