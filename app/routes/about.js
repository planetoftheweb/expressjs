let express = require('express');
let router  = express.Router();
let path = require('path');

router.get('/about', function(req, res) {
    res.render('about', {
        title       : "About us Page",
        description : "all you need to get in touch with us",
        pageId      : 'about'
    });

});

module.exports = router;
