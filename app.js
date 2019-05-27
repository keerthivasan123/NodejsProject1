
var express = require('express');
var todoControler = require(__dirname + '/controllers/todoController');
var app = express();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/asserts'));

todoControler(app);


app.listen(3000);