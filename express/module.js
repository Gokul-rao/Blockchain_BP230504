var fs = require('fs');

fs.readFile('Demo.txt','utf8', function(err, data){
    console.log(data);
});
console.log('readfile called');