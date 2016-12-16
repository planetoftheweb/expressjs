let express = require('express');
let router = express.Router();
var mydate = require('./../data/data.json');

router.get('/speakers/:id',function(request, response) {
  var speaker = mydate.speakers[(request.params.id)-1];

  response.render('speaker', {
    title : speaker.name,
      description:speaker.summary,
    speaker: speaker
  })
});

module.exports = router;