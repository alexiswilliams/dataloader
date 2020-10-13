const testFolder = './uploadFiles/';
const fs = require('fs');
var os = require('os');
var path = require("path")


fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
});

console.log('platform : ' + os.platform());

// Resolve
console.log('resolve : ' + path.resolve('main.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));
// Function to get current filenames 
// in directory 
filenames = fs.readdirSync('uploadFiles');

console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
    console.log(file);
});

// Function to get current filenames 
// in directory with "withFileTypes" 
// set to "true"  

fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });

console.log("\nCurrent directory files:");
fileObjs.forEach(file => {
    console.log(file);
});
console.log("Going to get file info!");

fs.stat('uploadFiles', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});