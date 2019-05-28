var bodyParser = require('body-parser')
var data = [{ item : 'get milk'},{item :'walk dog'},{item : 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req,res){
        res.render('todo',{data: data});
    });

    app.post('/todo',urlencodedParser, function(req,res){    
        data.push(req.body);
        res.json(data);
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