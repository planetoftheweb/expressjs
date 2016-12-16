let express = require('express');
let router = express.Router();


router.get('/page', function(req,res) {
    let pageData = req.app.get('appData');
    res.send(pageData);
});

module.exports = router;