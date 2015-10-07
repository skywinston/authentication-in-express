var fs = require('fs');

var str = '';

str = fs.readFileSync(process.argv[2]);
fs.writeFileSync(process.argv[2] + '.copy', str);

// This wouldn't work like ./reverse.js would.   
