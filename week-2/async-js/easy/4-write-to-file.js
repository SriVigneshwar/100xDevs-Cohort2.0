/* Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

const fs = require('fs');

let content = '';

function readWritetoaFile(filepath){
    fs.readFile(filepath, function(err, data){
        writeto(data, filepath);
        console.log('File reading asynchronously...');
    });
}

function writeto(data, filepath){
    content = data.toString();
    data = content + ' Viki file written...!' ;
    fs.writeFile(filepath, data, function(err){
        if(err){
            console.error(err);
        }
        console.log('File writing asynchronously...');
    });
}

readWritetoaFile('sample-text-file.txt');

console.log('file has been read and written........');

