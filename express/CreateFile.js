var fs = require("fs");

var writeStream = fs.createWriteStream("JournalDEV.txt");
writeStream.write("Hi, JournalDEV Users. ");
writeStream.write("Thank You.");
writeStream.end();