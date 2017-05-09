let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let feedbacks = require('../../controller/mongo-schema').feedbacksSchema;
let chats = require('../../controller/mongo-schema').chatSchema;


express().use(bodyParser.json());
router
	.get('/chats', (req, res) => {
		chats.find({}, (err, data) => {
			res.json(data);
		});
	})
	.post('/chats', (req, res) => {

		let newChatMsg = new chats(req.body);

		newChatMsg.save((err, data) => {
			res.json(data);
		});
	})
	.delete('/chats/:id', (req, res) => {
		chats.findByIdAndRemove(req.params.id, (err, data) => {
			res.send('one item deleted <br>' + data);
		})
	

	});


router.get('/feedbacks', (req, res)=> {
		feedbacks.find({}, { name: 1, message: 1, date: 1 }, (err, data) => {
			if (err) throw new Error(err);
			res.json(data);
		});
	})
	.post('/feedbacks', (req, res) => {
	console.log(new feedbacks(req.body));
	if (req.body.name && req.body.message) {
		new feedbacks(req.body).save(function(err, data) {
			//fs.write('app/data/feedback.json', data.toJSON());
			console.log(JSON.stringify(data));
			res.json(data);
		});
	}

});

router.delete('/feedbacks/:id', (req,res)=>{
	feedbacks.findByIdAndRemove(req.params.id, (err, data) =>{
		res.json(data);
	});
});

module.exports = router;