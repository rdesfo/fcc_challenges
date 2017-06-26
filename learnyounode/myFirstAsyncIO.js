// cat file | wc -l.

var fs = require('fs');

var myArg = process.argv;
var myfile = myArg[2];

function lineCount(file){
  var count = 0;
  file.split('\n').forEach(function(l){
    count = count + 1;
  })
  console.log(count - 1);
} 

function filecontent(err, data) {
  if (err) return console.error(err);
  lineCount(data); 
}

function getPath(path){
  fs.readFile(path, 'utf8', filecontent)
}

getPath(myfile)
