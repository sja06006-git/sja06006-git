function greet(name) {
    return "Hello, ".concat(name);
}
console.log(greet("john"));
//타입 지정
var n = 1;
var b = true;
var s = "hello";
var o = {};
//타입 추론
var n1 = 1;
var b1 = true;
var s1 = "hello1";
var o1 = {};
//any
var a = 0;
a = "hello";
a = true;
a = {};
//undefined
var u = undefined;
// u = 1; //undefined에 지정 불가
var count = 10, message = "your count";
var result = "".concat(message, " is ").concat(count);
console.log(result);
