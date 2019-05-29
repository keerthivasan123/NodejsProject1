const mongoose = require('mongoose');
var express = require('express');
var todoControler = require(__dirname + '/controllers/todoController');
var app = express();
const db = 'mongodb+srv://keerthi:keerthi@cluster0-lsaj1.mongodb.net/test?retryWrites=true';
app.set('view engine','ejs');
app.use(express.static(__dirname + '/asserts'));

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

todoControler(app);
app.listen(3000);