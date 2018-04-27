var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send('<iframe src="https://giphy.com/embed/11RwocOdukxqN2" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>');
});

app.post('/log', function(req, res) {
   var body = req.body;
   console.log('POST - ', body);
   res.send('Log saved!');
});

var server = app.listen(8080, function () {
    console.log('Server is running on http://localhost:8080..');
});