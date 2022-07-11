var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.listen(process.env.PORT || 5001);
