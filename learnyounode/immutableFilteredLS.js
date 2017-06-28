// filteredLS <path> <ext>

const fs = require('fs');
const path = require('path');

const myArg = process.argv;
const myPath = Object.freeze(myArg[2]);
const myExt = Object.freeze(myArg[3]);

// getFiles :: string -> [string]
function getFiles(path){
  fs.readdir(path, (err, files) => {
    if (err) throw err;
      filterFiles(files);
  })
}

// filterfiles :: [string] -> [string]
function filterFiles(files){
  matchingFiles = files.filter(f => path.extname(f) === "." + myExt);
  matchingFiles.map(f => console.log(f));
}

getFiles(myPath);
