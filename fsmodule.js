
//1.Writes data to a file.

/*const fs = require('fs');
fs.writeFile('file.txt', 'Hello, File!', (err) => {
    if (err) throw err;
    console.log('File written!');
});*/

//2.Reads the contents of a file asynchronously.

/*const fs = require('fs');
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});*/


//3.Removes a file from the system.

/*const fs = require('fs');
fs.unlink('file.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});*/

//4.Adds data to an existing file.

/*const fs = require('fs');
fs.appendFile('file.txt', '\ncontent added', (err) => {
    if (err) throw err;
    console.log('Content appended!');
});*/

//5.Creates a new folder.

/*const fs = require('fs');
fs.mkdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory created!');
});*/

//6.Deletes an empty folder.

/*const fs = require('fs');
fs.rmdir('newDir', (err) => {
    if (err) throw err;
    console.log('Directory removed!');
});*/

//7.Verifies the presence of a file.

/*const fs = require('fs');
fs.access('file.txt', fs.constants.F_OK, (err) => {
    console.log(err ? 'File does not exist' : 'File exists');
});*/

//8.Copies the content of one file to another.

/*const fs = require('fs');
fs.copyFile('file.txt', 'copy.txt', (err) => {
    if (err) throw err;
    console.log('File copied!');
});*/







