let data = 'https://user:pass@sub.examlpe.com:8080/p/a/t/h?query=string#hash';

// 레거시 API
const url = require('url');
let legercy = url.parse(data);
console.log(legercy);

// WHATWG(웹표준) API
const whatwg = new URL(data);
console.log(whatwg);
console.log(whatwg.searchParams instanceof URLSearchParams);
console.log(whatwg.searchParams.get('query'));