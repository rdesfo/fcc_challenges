
var fs = require("fs");
var path = require('path')

var dirPath = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dirPath, test);

function test (err, files) {
  if (err){
    console.log(err);
  }

  extFilter(files);
}

function extFilter(fs){
  for (i=0; i < fs.length; i++){
    if (path.extname(fs[i]) == ext){
      console.log(fs[i]);
    }
  }
}

