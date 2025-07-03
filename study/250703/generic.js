//타입을 일반화 -> 코드 재사용성 및 타입 안정성
//함수 작성시 타입 fix 없음, 호출시점에 타입 지정
//T는 제네릭함수 선언시 Type을 뜻함
function identity(value) {
    return value;
}
var output1 = identity("hello");
console.log(output1);
var output2 = identity(10);
console.log(output2);
//구현시
var output;
//K = key, V = value, etc....
function getValue(obj, key) {
    return obj[key];
}
var object = { name: "john", age: 20 };
var nameresult = getValue(object, "name");
var ageresult = getValue(object, "age");
console.log(nameresult);
console.log(ageresult);
