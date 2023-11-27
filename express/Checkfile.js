var fs=require('fs');

fs.exists('express/index.js',(exists) => {
    console.log(exists ? 'Found':'Not Found!');

});
