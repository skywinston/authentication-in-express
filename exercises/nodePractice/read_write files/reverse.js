var fs = require('fs');

var filename = process.argv[2];
var reverseFile = [];
var reverseComplete = '';

fs.readFile(filename, function(err, data){
  if (err) throw err;
  reverseFile = data.toString().split('\n').reverse();
  reverseFile.shift();
  reverseComplete = reverseFile.join('\n');
  fs.writeFile(filename + '.reverse', reverseComplete);
})
