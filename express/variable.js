//include os module and create its object
const os=require('os');

//return the cpu architecture
console.log("CPU architecture: "+ os.arch())

//It returns the amount of free system memory in bytes
console.log("Free memory: "+ os.freemem());

//It returns total amount of system memory in bytes
console.log("Total memory "+ os.totalmem());