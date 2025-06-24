function add(a, b) {
    return a + b;
}

const add2 = function (a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

const sub2 = function (a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

const mul2 = function (a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const div2 = function (a, b) {
    return a / b;
}

function rem(a, b) {
    return a % b;
}

const rem2 = function (a, b) {
    return a % b;
}

//사용자 입력 받기

const num1 = Number(prompt("첫번째 숫자를 입력"));
const op = prompt("연산자를 입력");
const num2 = Number(prompt("두번째 숫자를 입력"));

//연산자에 따라 합수 호출
let result = 0;

if (op === "+") {
    result = add(num1, num2);
    console.log(`결과: ${result}`);
    alert(`결과: ${result}`);
}
else if (op === "-") {
    result = sub(num1, num2);
    console.log(`결과: ${result}`);
    alert(`결과: ${result}`);
}
else if (op === "*") {
    result = mul(num1, num2);
    console.log(`결과: ${result}`);
    alert(`결과: ${result}`);
}
else if (op === "/") {
    result = div(num1, num2);
    console.log(`결과: ${result}`);
    alert(`결과: ${result}`);
}
else if (op === "%") {
    result = rem(num1, num2);
    console.log(`결과: ${result}`);
    alert(`결과: ${result}`);
}
else{
    console.log("올바른 연산자를 입력하세요.")
}