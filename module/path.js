const path = require('path');

console.log('==절대경로');
console.log(__filename);
console.log(__dirname);
console.log('실제 파일명 : ', path.basename(__filename));
console.log('확장자 ', path.extname(__filename));

let pathList = process.env.PATH.split(path.delimiter);

console.log(path.delimiter);
console.table(pathList);
console.log(path.sep);
console.table(pathList[2].split(path.sep));