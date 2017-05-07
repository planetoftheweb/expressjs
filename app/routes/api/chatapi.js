let express = require('express');
let router = express.Router();
let chats = require('../../controller/chat-schema').chatSchema;
let bodyParser = require('body-parser');

router.get('/', (req, res)=> {
	chats.find({}, (err, data)=> {
		if(err) throw new Error(err);
		console.log(err);
		console.log(data);
		res.json(data)
	})

});

module.exports = router;