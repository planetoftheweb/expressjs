/**
 * Created by Hossam Elnabawy on 12/01/2017.
 */
let express = require('express');

let router = express.Router();
let data = require("../data/data.json");


router.get('/api', (request, response)=>{
	response.json(data);
});

module.exports = router;
