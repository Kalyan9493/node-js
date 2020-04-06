const fs=require('fs');

fs.writeFileSync('node.txt','This is a Node File.');

fs.appendFileSync('node.txt','Generatd by node js');

var content= fs.readFileSync('node.txt','utf8');

console.log(content);