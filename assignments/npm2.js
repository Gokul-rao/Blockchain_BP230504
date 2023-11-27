var validator = require('validator');
f=validator.isEmail('foo@bar.com'); //=> true
if(f==true)
{
    console.log("Email Validated successfully");
}