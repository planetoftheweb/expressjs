let express = require('express');
let router  = express.Router();
let data    = require("../data/data.json");
let feedback    = require("../data/feedback.json");

router.get('/api/data', (request, response)=>{
	response.json(data);
});
router.get('/api/feedback', (request, response)=>{
	response.json(feedback);
});

module.exports = router;
