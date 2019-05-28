
var express = require('express');
var todoControler = require(__dirname + '/controllers/todoController');
var app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://keerthi:<password>@cluster0-lsaj1.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.set('view engine','ejs');
app.use(express.static(__dirname + '/asserts'));

todoControler(app);


app.listen(3000);