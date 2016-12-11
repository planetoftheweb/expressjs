let express = require('express');
let router = express.Router();
var mydate = require('./../data/data.json');

router.get('/speakers/:id',function(request, response) {
  var speaker = mydate.speakers[(request.params.id)-1];

  response.send(`<!DOCTYPE html>
<html>

    <head>
        <title>${speaker.name}</title>
        <style>
        *{box-sizing: border-box;font-family:sans-serif}
        body {padding: 0;margin: 0}
            section#title{
                width: 100%;
                height: auto;
                background-color: brown;
                text-align: center;
                color: #fff;
                padding: 20px
            }
            table {
              border-radius: 5px;
              bodrer: 2px solid #999
            }
            ul {
                padding: 0;
                margin:0;
                list-style: none
            }
            .container {
                width: 967px;
                margin: 0 auto
            }
            #title h1 span {
                font-size: 12px;
                color: #eee;
                margin-left: 12px
            }
            #work .container >ul >li {
                width: 50%;
                padding: 15px;
                background-color: #eee;
                border: 1px solid #ccc;
                border-radius: 5px;
                float: left
            }
        </style>
    </head>
    <body>
        <section id="title">
            <h1>${speaker.name}<span>- ${speaker.shortname}/span></h1>
            <h4>${speaker.title}</h4>
        </section><br>
        <div class="container">
        <a href="/speakers">back to speakers page</a> 
        ${speaker.summary}<hr><br><div>
        <section id="work">
            <div class="container">

            
            <ul>
                <li>
                    ${speaker.description}
                </li>
                <li class="work">
                    <ul>
                        <li><img src="${speaker.artwork[0]}"></li>
                        <li><img src="${speaker.artwork[1]}"></li>
                        <li><img src="${speaker.artwork[2]}"></li>
                        <li><img src="${speaker.artwork[3]}"></li>
                    </ul>
                </li>
            </ul>
            </div>
        </section>
    </body>

</html>

`);
});

module.exports = router;