var express = require('express');
var router = express.Router();

/* GET chat page. */
router.get('/chat', function(req, res) {
  res.render('chat', {
    title: 'Chat',
    page: 'chat'
  });
});

module.exports = router;
