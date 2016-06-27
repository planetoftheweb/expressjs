var express = require('express');
var router = express.Router();

/* GET feedback page. */
router.get('/feedback', function(req, res) {
  var data = req.app.get('appData');

  res.render('feedback', {
    title: 'Feedback',
    page: 'feedback'
  });
});

module.exports = router;
