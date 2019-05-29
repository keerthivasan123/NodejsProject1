var bodyParser = require('body-parser');
var User = require('../models/todo');
var data = [{ item : 'get milk'},{item :'walk dog'},{item : 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req,res){
        res.render('todo',{data: data});
    });

    app.post('/todo',urlencodedParser, function(req,res){    
        const item = req.body;
        const newItem = new User({
            item 
          });
          newItem.save()
            .then(user => {res.json(data);
            })
            .catch(err => console.log(err));
    });

    app.delete('/todo/:item', function(req,res){
        console.log('came to delete');
        data = data.filter(function(todo){
            console.log(todo.item.replace(/ /g, '-' ));
            console.log(req.params.item);
            return todo.item.replace(/ /g, '-' ) !== req.params.item;
        });
        res.json(data);
    });
};