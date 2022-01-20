const path = require('path');

console.log(__dirname);
console.log(__filename);

const myPath = "H:\\前端\\Nodejs\\1Nodejs\\path模块\\The1.js";
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));

console.log(path.join('a', 'bd', 'The.js'));
console.log(path.resolve('a', 'b', 'The.js'));
console.log(path.parse(myPath));