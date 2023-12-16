/* File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       Viki
```

After the program runs, the output should be

```
hello world my name is raman
```  */

const fs =  require('fs');

function readfromFile(filepath){
    fs.readFile(filepath, function(err, data){
        removeSpaces(data, filepath);
        console.log('File read and sent to remove space.')
    });
}

function removeSpaces(data, filepath){
    let splitted = data.toString().split(' ');
    let unspacedArray = [];
    let i = 0;
    splitted.forEach(element => {
        if(element != ''){
            unspacedArray[i++] = element.trim();
        }
    });
    let unspace = unspacedArray.join(' ');
    data = unspace;
    fs.writeFile(filepath, data, function(err){
        if(err){
            console.log(err);
        }
    });
    console.log('Clean in progress...');
}

readfromFile('spaced-file.txt');

console.log('Removing spaces.....');