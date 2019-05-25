var express = require('express');
var app = express();

app.set('view engine','ejs');
app.use('/asserts',express.static('asserts'));

app.get('/',function(req,res){
    res.send('This is Home Page');
});

app.get('/contact',function(req,res){
    res.send('This is contact Page');
});

app.get('/profile/:name',function(req,res){
    res.render('profile',{person : req.params.name});
});


app.listen(3000);