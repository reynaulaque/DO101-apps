var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/marsn', function (req, res) {
  res.send('Hello Marsj!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

