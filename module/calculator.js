const defaultNum = 1;

function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

module.exports = {
//export default {
    defNum : defaultNum,
    add, // add : add
    minus, // "minus" : minus
    mul,
    divide
} // 더이상 코드 작성하면 안됨 <- exports는 젤 마지막에 작성해야 함