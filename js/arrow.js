console.log('arrow.js');

// 함수 선언식 => var 선언자
function hello(name) {
    console.log(name);
}

function hello(msg) {
    console.log('출력 :' + msg);
}

// 함수 표현식 => const 선언자
const hello2 = function (name) {
    console.log('hello' + name);
}

const hello3 = (name) => console.log('hello, ' + name);

hello3('Javascript');

// 화살표 함수 문법
let msg = msg => console.log('result, ' + msg);
msg = () => console.log('Hello, World');
msg = (x, y) => console.log(x + y);

msg = (x, y) => {
    let result = x + y;
    console.log(result);
}
console.clear();

// 화살표 함수와 this의 연관성
let array = [1, 3, 5, 7];

array.forEach(function (value, idx) {
    console.log(value, this);
});

array.forEach((value, idx) => {
    console.log(value, this);
})