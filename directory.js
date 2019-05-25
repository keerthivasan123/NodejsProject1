
var fs = require('fs');

var file = fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('writeMe.txt',data,(error) => { /* handle error */ });
    console.log(data);
});

console.log('This is an instruction outside the sync file system.');